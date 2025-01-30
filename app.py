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

               
