export const createPortfolio = (formData) => async (dispatch) => {
    try {
      dispatch({
        type: "createPortfolioRequest",
      });
  
      const { data } = await axios.post(`${server}/portfolio/new`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
  
      dispatch({
        type: "createPortfolioSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "createPortfolioFail",
        payload: error.response.data.message,
      });
    }
  };