import axios from "axios";
import { server } from "../store";

export const getAllPortfolios = (keyword, category) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllPortfoliosRequest",
    });
    const { data } = await axios.get(
      `${server}/portfolio/all?keyword=${keyword}&category=${category}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "getAllPortfoliosSuccess",
      payload: data.portfolios,
    });
  } catch (error) {
    dispatch({
      type: "getAllPortfoliosFail",
      payload: error.response.data.message,
    });
  }
};

export const listAllPortfolios = () => async (dispatch) => {
  try {
    dispatch({
      type: "listAllPortfoliosRequest",
    });
    const { data } = await axios.get(`${server}/portfolio/allportfolios`, {
      withCredentials: true,
    });

    dispatch({
      type: "listAllPortfoliosSuccess",
      payload: data.portfolios,
    });
  } catch (error) {
    dispatch({
      type: "listAllPortfoliosFail",
      payload: error.response.data.message,
    });
  }
};

export const getAdminPortfolios = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAdminPortfoliosRequest",
    });
    const { data } = await axios.get(`${server}/portfolio/admin`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAdminPortfoliosSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAdminPortfoliosFail",
      payload: error.response.data.message,
    });
  }
};

export const getPortfolioDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getPortfolioDetailsRequest",
    });

    const { data } = await axios.get(`${server}/portfolio/single/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "getPortfolioDetailsSuccess",
      payload: data.portfolio,
    });
  } catch (error) {
    dispatch({
      type: "getPortfolioDetailsFail",
      payload: error.response.data.message,
    });
  }
};
