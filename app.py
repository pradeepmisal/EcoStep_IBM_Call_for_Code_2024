import streamlit as st
import json
import numpy as np
import pandas as pd


def monte_carlo_simulation(portfolio_data, scenario_data, num_simulations=10000):
    """
    Performs a Monte Carlo simulation on a portfolio based on market scenarios.
    """
    portfolio = portfolio_data
    scenarios = scenario_data["market_scenarios"]

    results = {}

    for scenario_key, scenario_details in scenarios.items():
        scenario_name = scenario_details["name"]
        sector_impacts = scenario_details.get("sector_impact", {})
        results[scenario_name] = {
            "portfolio_values": [],
            "average_return": 0,
            "std_dev_return": 0,
            "percentiles": {},
        }

        for _ in range(num_simulations):
            portfolio_value = 0
            for asset_name, asset_details in portfolio["assets"].items():
                sector = asset_details["sector"]
                quantity = asset_details["quantity"]
                initial_price = asset_details["initial_price"]

                price_change_percentage = 0
                if sector in sector_impacts:
                    price_change_percentage = np.random.normal(
                        loc=sector_impacts[sector] / 100, scale=0.1
                    )

                # Calculate the new price
                new_price = initial_price * (1 + price_change_percentage)
                portfolio_value += new_price * quantity
            results[scenario_name]["portfolio_values"].append(portfolio_value)

        # Calculate Results
        portfolio_values = results[scenario_name]["portfolio_values"]
        initial_portfolio_value = sum(
            asset["quantity"] * asset["initial_price"]
            for asset in portfolio["assets"].values()
        )
        returns = [
            (value - initial_portfolio_value) / initial_portfolio_value
            for value in portfolio_values
        ]

        results[scenario_name]["average_return"] = np.mean(returns)
        results[scenario_name]["std_dev_return"] = np.std(returns)
        results[scenario_name]["percentiles"] = {
            5: np.percentile(returns, 5),
            25: np.percentile(returns, 25),
            50: np.percentile(returns, 50),
            75: np.percentile(returns, 75),
            95: np.percentile(returns, 95),
        }

    return results


# Streamlit App
st.title("Monte Carlo Portfolio Simulation")

# File Uploads for Portfolio and Scenario JSON
portfolio_file = st.file_uploader("Upload Portfolio JSON", type="json")
scenario_file = st.file_uploader("Upload Scenario JSON", type="json")

if portfolio_file and scenario_file:
    # Load JSON files
    portfolio_data = json.load(portfolio_file)
    scenario_data = json.load(scenario_file)

    # Input for number of simulations
    num_simulations = st.number_input(
        "Number of Simulations", min_value=1000, max_value=50000, value=10000
    )

    # Run Simulation
    st.write("Running simulation... Please wait.")
    simulation_results = monte_carlo_simulation(
        portfolio_data, scenario_data, num_simulations
    )

    # Display Results
    for scenario_name, results in simulation_results.items():
        st.subheader(f"Scenario: {scenario_name}")
        st.write(f"**Average Return:** {results['average_return']:.4f}")
        st.write(f"**Standard Deviation of Returns:** {results['std_dev_return']:.4f}")
        st.write("**Return Percentiles:**")
        st.write(pd.DataFrame(results["percentiles"], index=[0]).T)

        # Optional: Display Portfolio Value Distribution
        st.write("Portfolio Value Distribution:")
        st.line_chart(results["portfolio_values"])
