import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import NotificationDrawer from "./notificationDrawer";
import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [notifyOpen, setNotifyOpen] = useState(false);

  const toggleNotification = () => {
    setNotifyOpen(!notifyOpen);
  };

  const Logout = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <header>
      <div className="flex justify-between items-center w-full">
        <div className="menuToggler">
          <FontAwesomeIcon icon={faBars} size="lg" color="green" />
        </div>

        <Link to="/">
          <div className="logo flex gap-2 items-center justify-center">
            <img src="../assets/logo.png" /> Edupora
          </div>
        </Link>

        <div className="flex gap-5 items-center ">
          <div
            className={
              notifyOpen
                ? "notification open rounded-full w-5 h-5 p-1 border-cyan-400"
                : "notification rounded-full w-5 h-5 p-1 border-cyan-400"
            }
            onClick={toggleNotification}
          >
            <FontAwesomeIcon icon={faBell} className="" />
            <span>3</span>

            <NotificationDrawer
              toggleNotification={toggleNotification}
              notifyOpen={notifyOpen}
            />
          </div>

          <div className="btn" onClick={Logout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
