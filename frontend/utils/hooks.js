import axios from "axios";
import { useEffect, useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useSelector } from "react-redux";
import { loadUser } from "../redux/actions/userActions";
import { server } from "../redux/store";
import { getAdminServices } from "../redux/actions/serviceAction";

export const useMessageAndErrorUser = (
  navigation,
  dispatch,
  navigateTo = "login"
) => {
  const { loading, message, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch({
        type: "clearError",
      });
    }

    if (message) {
      navigation.reset({
        index: 0,
        routes: [{ name: navigateTo }],
      });
      Toast.show({
        type: "success",
        text1: message,
      });
      dispatch({
        type: "clearMessage",
      });
      dispatch(loadUser());
    }
  }, [error, message, dispatch]);

  return loading;
};

export const useMessageAndErrorOther = (
  dispatch,
  navigation,
  navigateTo,
  func
) => {
  const { loading, message, error } = useSelector((state) => state.other);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch({
        type: "clearError",
      });
    }

    if (message) {
      Toast.show({
        type: "success",
        text1: message,
      });
      dispatch({
        type: "clearMessage",
      });

      navigateTo && navigation.navigate(navigateTo);

      func && dispatch(func());
    }
  }, [error, message, dispatch]);

  return loading;
};

export const useSetCategories = (setCategories, isFocused) => {
  useEffect(() => {
    axios
      .get(`${server}/service/categories`)
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((e) => {
        Toast.show({
          type: "error",
          text1: e.response.data.message,
        });
      });
  }, [isFocused]);
};

export const useGetOrders = (isFocused, isAdmin = false) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/order/${isAdmin ? "admin" : "my"}`)
      .then((res) => {
        setOrders(res.data.orders);
        setLoading(false);
      })
      .catch((e) => {
        Toast.show({
          type: "error",
          text1: e.response.data.message,
        });
        setLoading(false);
      });
  }, [isFocused]);

  return {
    loading,
    orders,
  };
};

export const useAdminServices = (dispatch, isFocused) => {
  const { services, error, loading } = useSelector((state) => state.service);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch({
        type: "clearError",
      });
    }

    dispatch(getAdminServices());
  }, [dispatch, isFocused, error]);

  return {
    services,
    loading,
  };
};
