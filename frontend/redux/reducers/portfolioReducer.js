import { createReducer } from "@reduxjs/toolkit";

export const portfolioReducer = createReducer(
  {
    portfolios: [],
    portfolio: {},
  },
  (builder) => {
    builder
      .addCase("getAllPortfoliosRequest", (state) => {
        state.loading = true;
      })
      .addCase("listAllPortfoliosRequest", (state) => {
        state.loading = true;
      })
      .addCase("getAdminPortfoliosRequest", (state) => {
        state.loading = true;
      })
      .addCase("getPortfolioDetailsRequest", (state) => {
        state.loading = true;
      })
      .addCase("getAllPortfoliosSuccess", (state, action) => {
        state.loading = false;
        state.portfolios = action.payload;
      })
      .addCase("listAllPortfoliosSuccess", (state, action) => {
        state.loading = false;
        state.portfolios = action.payload;
      })
      .addCase("getAdminPortfoliosSuccess", (state, action) => {
        state.loading = false;
        state.portfolios = action.payload.portfolios;
      })
      .addCase("getPortfolioDetailsSuccess", (state, action) => {
        state.loading = false;
        state.portfolio = action.payload;
      })

      .addCase("getAllPortfoliosFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("listAllPortfoliosFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("getAdminPortfoliosFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("getPortfolioDetailsFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder.addCase("clearError", (state) => {
      state.error = null;
    });
    builder.addCase("clearMessage", (state) => {
      state.message = null;
    });
  }
);
