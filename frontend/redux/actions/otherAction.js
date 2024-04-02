import axios from "axios";
import { server } from "../store";

export const updatePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({
        type: "updatePasswordRequest",
      });

      const { data } = await axios.put(
        `${server}/user/changepassword`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "updatePasswordSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updatePasswordFail",
        payload: error.response.data.message,
      });
    }
  };

export const updateProfile = (name, email) => async (dispatch) => {
  try {
    dispatch({
      type: "updateProfileRequest",
    });

    const { data } = await axios.put(
      `${server}/user/updateprofile`,
      {
        name,
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "updateProfileSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "updateProfileFail",
      payload: error.response.data.message,
    });
  }
};

export const updatePic = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "updatePicRequest",
    });

    const { data } = await axios.put(`${server}/user/updatepic`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    dispatch({
      type: "updatePicSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "updatePicFail",
      payload: error.response.data.message,
    });
  }
};

export const placeOrder =
  (
    orderItems,
    eventInfo,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "placeOrderRequest",
      });

      const { data } = await axios.post(
        `${server}/order/new`,
        {
          eventInfo,
          orderItems,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingCharges,
          totalAmount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({
        type: "placeOrderSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "placeOrderFail",
        payload: error.response.data.message,
      });
    }
  };

export const processOrder = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "processOrderRequest",
    });

    const { data } = await axios.put(
      `${server}/order/single/${id}`,

      {},
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "processOrderSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "processOrderFail",
      payload: error.response.data.message,
    });
  }
};

export const addCategory = (category) => async (dispatch) => {
  try {
    dispatch({
      type: "addCategoryRequest",
    });

    const { data } = await axios.post(
      `${server}/service/category`,

      {
        category,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: "addCategorySuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "addCategoryFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteCategoryRequest",
    });

    const { data } = await axios.delete(
      `${server}/service/category/${id}`,

      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "deleteCategorySuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteCategoryFail",
      payload: error.response.data.message,
    });
  }
};

export const createService = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "addServiceRequest",
    });

    const { data } = await axios.post(`${server}/service/new`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    dispatch({
      type: "addServiceSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "addServiceFail",
      payload: error.response.data.message,
    });
  }
};

export const updateService =
  (id, name, description, price, category) => async (dispatch) => {
    try {
      dispatch({
        type: "updateServiceRequest",
      });
      const { data } = await axios.put(
        `${server}/service/single/${id}`,
        {
          name,
          description,
          price,
          category,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "updateServiceSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updateServiceFail",
        payload: error.response.data.message,
      });
    }
  };

export const updateServiceImage = (serviceId, formData) => async (dispatch) => {
  try {
    dispatch({
      type: "updateServiceImageRequest",
    });

    const { data } = await axios.post(
      `${server}/service/images/${serviceId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "updateServiceImageSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "updateServiceImageFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteServiceImage = (serviceId, imageId) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteServiceImageRequest",
    });

    const { data } = await axios.delete(
      `${server}/service/images/${serviceId}?id=${imageId}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteServiceImageSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteServiceImageFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteService = (serviceId) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteServiceRequest",
    });

    const { data } = await axios.delete(
      `${server}/service/single/${serviceId}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteServiceSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteServiceFail",
      payload: error.response.data.message,
    });
  }
};

export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: "forgetPasswordRequest",
    });
    const { data } = await axios.post(
      `${server}/user/forgetpassword`,
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "forgetPasswordSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "forgetPasswordFail",
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (otp, password) => async (dispatch) => {
  try {
    dispatch({
      type: "resetPasswordRequest",
    });
    const { data } = await axios.put(
      `${server}/user/forgetpassword`,
      {
        otp,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "resetPasswordSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "resetPasswordFail",
      payload: error.response.data.message,
    });
  }
};
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