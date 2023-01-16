import { userSelector } from "features/auth/authSlice";
import { useSelector } from "react-redux";
import AdminOrdersScreen from "./AdminOrdersScreen";
import UserOrdersScreen from "./UserOrdersScreen";

const Orders = () => {
  const { user } = useSelector(userSelector);
  const isAdmin = user && user.is_admin;

  return isAdmin ? <AdminOrdersScreen /> : <UserOrdersScreen />;
};

export default Orders;
