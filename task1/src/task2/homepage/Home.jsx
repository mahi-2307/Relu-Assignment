import React, { useState } from "react";
import { signOut } from "firebase/auth";
import "./Home.scss";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WalletIcon from "@mui/icons-material/Wallet";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import Posts from "../posts/Posts";
import Right from "../right/Right";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
function Home() {
  const [Field, setField] = useState("home");
  const isSelected = (e) => {
    return e === Field ? "selected" : "";
  };
  const navigate = useNavigate()
  const handleSignout = () =>{
    signOut(auth).then(()=>{
      navigate("/")
    })
  }
  return (
    <section className="home">
      <div className="container">
        <div className="left">
          <div className="top">
            <p>SocialDev</p>
          </div>
          <div className="bottom">
            <div className="fields-container">
              <div className="box">
                <HomeIcon className="icon" />
                <button className={isSelected("home")} onClick={(e)=>{
                  setField("home")
                }}>Home</button>
              </div>
              <div className="box">
                <NotificationsNoneIcon className="icon" />
                <button className={isSelected("notification")} onClick={(e)=>{
                  setField("notification")
                }}>Notification</button>
              </div>
              <div className="box">
                <FavoriteBorderIcon className="icon" />
                <button className={isSelected("fav")} onClick={(e)=>{
                  setField("fav")
                }}>Favourite</button>
              </div>
              <div className="box">
                <WalletIcon className="icon" />
                <button className={isSelected("wallet")} onClick={(e)=>{
                  setField("wallet")
                }}>Wallets</button>
              </div>
              <div className="box">
                <QuestionAnswerIcon className="icon" />
                <button className={isSelected("support")} onClick={(e)=>{
                  setField("support")
                }}>Support</button>
              </div>
              <div className="box">
                <SubscriptionsIcon className="icon" />
                <button className={isSelected("premium")} onClick={(e)=>{
                  setField("premium")
                }}>Premium Membership</button>
              </div>
              <div className="box">
                <SettingsIcon className="icon" />
                <button className={isSelected("settings")} onClick={(e)=>{
                  setField("settings")
                }}>Settings</button>
              </div>
              <div className="box" >
                <ExitToAppIcon className="icon" />
                <button className={isSelected("signout")} onClick={handleSignout}>Signout</button>
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="top">
            <div className="search">
              <div className="left-icons">
                <SearchIcon className="icon" />
                <input type="text" placeholder="Search here.." />
              </div>
              <div className="filter">
                <TuneIcon />
                <p>Filters</p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <Posts />
          </div>
        </div>
        <div className="right">
          <Right />
        </div>
      </div>
    </section>
  );
}

export default Home;
