import { useContext } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">kobisonadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN </p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span className="dashboard">Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS </p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span className="dashboard">Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span className="dashboard">Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span className="dashboard">Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span className="dashboard">Delivery</span>
          </li>
          <p className="title">USEFUL </p>
          <li>
            <InsertChartIcon className="icon" />
            <span className="dashboard">Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span className="dashboard">Notification</span>
          </li>
          <p className="title">SERVICE </p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span className="dashboard">System Heath</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span className="dashboard">Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span className="dashboard">Settings</span>
          </li>
          <p className="title">USER </p>
          <li>
            <AccountCircleIcon className="icon" />
            <span className="dashboard">Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span className="dashboard">Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
