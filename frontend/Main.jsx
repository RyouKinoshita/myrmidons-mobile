import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import ServiceDetails from "./screens/ServiceDetails";
import Cart from "./screens/Cart";
import Toast from "react-native-toast-message";
import ConfirmOrder from "./screens/ConfirmOrder";
import Payment from "./screens/Payment";
import Login from "./screens/Login";
import ForgetPassword from "./screens/ForgetPassword";
import Verify from "./screens/Verify";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";
import UpdateProfile from "./screens/UpdateProfile";
import ChangePassword from "./screens/ChangePassword";
import Order from "./screens/Order";
import AdminPanel from "./screens/Admin/AdminPanel";
import Categories from "./screens/Admin/Categories";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/userActions";
import Camera from "./screens/Camera";
import AdminOrders from "./screens/Admin/AdminOrders";
import UpdateService from "./screens/Admin/UpdateService";
import NewService from "./screens/Admin/NewService";
import ServiceImages from "./screens/Admin/ServiceImages";
import NewPortfolio from "./screens/Admin/NewPortfolio";

const Stack = createNativeStackNavigator();

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="servicedetails" component={ServiceDetails} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="confirmorder" component={ConfirmOrder} />
          <Stack.Screen name="payment" component={Payment} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="updateprofile" component={UpdateProfile} />
          <Stack.Screen name="changepassword" component={ChangePassword} />
          <Stack.Screen name="orders" component={Order} />
          <Stack.Screen name="camera" component={Camera} />

          {/* Password Resetting Routes */}
          <Stack.Screen name="forgetpassword" component={ForgetPassword} />
          <Stack.Screen name="verify" component={Verify} />

          {/* Admin Routes */}
          <Stack.Screen name="adminpanel" component={AdminPanel} />
          <Stack.Screen name="categories" component={Categories} />
          <Stack.Screen name="adminorders" component={AdminOrders} />
          <Stack.Screen name="updateservice" component={UpdateService} />
          <Stack.Screen name="newservice" component={NewService} />
          <Stack.Screen name="serviceimages" component={ServiceImages} />
          <Stack.Screen name="newportfolio" component={NewPortfolio} />
        </Stack.Group>
      </Stack.Navigator>

      <Toast position="bottom" bottomOffset={20} />
    </NavigationContainer>
  );
};

export default Main;
