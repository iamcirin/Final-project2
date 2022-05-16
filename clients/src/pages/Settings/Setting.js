// import React from "react";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import "./setting.css";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// const Setting = () => {
//   const [showInfo, setShowInfo] = useState(false);
//   const { user } = useContext(AuthContext);
//   const [fullname, setFullname] = useState(user.username);

//   const [email, setEmail] = useState(user.email);

//   const [password, setPassword] = useState("");
//   const PF = "http://localhost:8800/images/profile/";
//   const params = useParams();
//   const handleSetting = () => {
//     setShowInfo(true);
//   };
//   const updateProfile = async () => {
//     try {
//       await axios.put("http://localhost:8800/api/users/" + params.id, {
//         userId: user._id,
//         password: password,
//         email: email,
//         username: fullname,
//       });

//       localStorage.removeItem("user");
//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="settingWrapper">
//       <div className="settingBar">
//         <Link style={{ textDecoration: "none" }} to="/main">
//           <div className="settingBarTitle">UniVault</div>
//         </Link>
//       </div>
//       <div className="settingContainer">
//         <div className="settingSidebar">
//           <div className="settingSidebarInfo">
//             <img
//               className="settingImg"
//               src={
//                 user.profilePicture
//                   ? PF + user.profilePicture
//                   : "/assets/person/no-image.jpg"
//               }
//               alt=""
//             />
//             <h1 className="settingUsername">{user.username}</h1>
//           </div>
//           <ul
//             onClick={handleSetting}
//             className={showInfo ? "settingList borderLeft" : "settingList"}
//           >
//             <li className="settingItem">Update personal info</li>
//           </ul>
//         </div>

//         {showInfo && (
//           <div className="settingMain">
//             <div className="settingMainContainer">
//               <div className="settingMainOption">
//                 <div>Fullname</div>
//                 <input
//                   type="text"
//                   value={fullname}
//                   onChange={(e) => {
//                     setFullname(e.target.value);
//                   }}
//                 />
//               </div>

//               <div className="settingMainOption">
//                 <div>Email</div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => {
//                     setEmail(e.target.value);
//                   }}
//                 />
//               </div>

//               <div className="settingMainOption">
//                 <div>New Password</div>
//                 <input
//                   type="text"
//                   placeholder="*******"
//                   onChange={(e) => {
//                     setPassword(e.target.value);
//                   }}
//                 />
//               </div>
//             </div>
//             <button className="changes" onClick={updateProfile}>
//               save changes
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Setting;
