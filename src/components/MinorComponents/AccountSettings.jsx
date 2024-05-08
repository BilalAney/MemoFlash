/** @format */

import FloatingWindow from "./FloatingWindow";
import styles from "../../styles/AccountSettings.module.css";
import logo from "../../assets/Logo512.png";
import { useState } from "react";
import avatar from "../../assets/interface_icons/Account_default_avater.svg";
import Avatar from "./Avatar";
import Input from "./Input";
import ToggleInput from "./ToggleInput";
const options = [
  {
    id: 0,
    label: "Profile Information",
    icon: "", //TODO: add icons in the second version
    element: <ProfileInfo />,
  },
  {
    id: 1,
    label: "Security Settings",
    icon: "",
    element: <SecuritySettings />,
  },
  {
    id: 2,
    label: "Privacy Settings",
    icon: "",
    element: <PrivacySettings />,
  },
  {
    id: 3,
    label: "Account Preferences",
    icon: "",
    element: <AccountPreferences />,
  },
  {
    id: 4,
    label: "Help and Support",
    icon: "",
    element: <HelpSupport />,
  },
];

export default function AccountSettings() {
  const [currentPage, setCurrentPage] = useState(options.at(0));
  const optionsElements = options.map((ele) => (
    <MenuItem
      icon={ele.icon}
      onClick={() => setCurrentPage(ele)}
      isSelected={currentPage.id === ele.id}
      key={ele.label}
    >
      {ele.label}
    </MenuItem>
  ));
  return (
    <FloatingWindow className={styles.window}>
      <div className={styles.leftSection}>
        <img src={logo} />
        <ul>{optionsElements}</ul>
      </div>
      <div className={styles.rightSection}>{currentPage.element}</div>
    </FloatingWindow>
  );
}

function MenuItem({ icon, children, onClick, isSelected }) {
  return (
    <li
      onClick={onClick}
      className={`${styles.menuItem} ${isSelected ? styles.selected : ""}`}
    >
      <img src={icon} />
      {children}
    </li>
  );
}

function ProfileInfo({ Account }) {
  const date = new Date();
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  return (
    <div className={styles.profile}>
      <p className={`${styles.profile_title} lvlOneText`}>MY PROFILE</p>
      <hr />
      <ProfileInfo_upperSection userName="User Name" userAvatar={avatar} />
      <ProfileInfo_lowerSection
        firstName="User"
        lastName="Name"
        email="memoflash024@hotmail.com"
        dob={`${year}-${month}-${day}`}
      />
    </div>
  );
}

function ProfileInfo_upperSection({ userName, userAvatar }) {
  return (
    <div className={styles.profile_upperSection}>
      <Avatar image={userAvatar} height="70px" width="70px" />
      <p className="lvlOneText">{userName}</p>
      <div className={styles.profile_upperSection_buttons}>
        {/* <button className={`${styles.changeNameBtn} btn`}>Change name</button> */}
        <button className={`${styles.changeAvatarBtn} btn`}>
          Change avatar
        </button>
      </div>
    </div>
  );
}

function ProfileInfo_lowerSection({ firstName, lastName, email, dob }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={styles.profile_lowerSection}
    >
      <Input
        type="text"
        placeholder=""
        value={firstName}
        width="90%"
        flexDirection="column"
      >
        First name:{" "}
      </Input>
      <Input
        type="text"
        placeholder=""
        value={lastName}
        width="90%"
        flexDirection="column"
      >
        Last name:{" "}
      </Input>
      <Input
        type="text"
        placeholder=""
        value={email}
        width="90%"
        flexDirection="column"
      >
        Email:{" "}
      </Input>
      <Input
        type="date"
        placeholder=""
        value={dob}
        width="90%"
        flexDirection="column"
      >
        Date of birth:{" "}
      </Input>
      <div className={styles.profile_lowerSection_buttons}>
        <button className={`${styles.saveChangesBtn} btn`}>Save changes</button>
        <button className={`${styles.discardChangesBtn} btn`}>Discard</button>
      </div>
    </form>
  );
}

function SecuritySettings() {
  const [is2fa, setIs2fa] = useState(false);
  return (
    <div className={styles.security}>
      <p className={`${styles.profile_title} lvlOneText`}>SECURITY</p>
      <hr />
      <ToggleInput externalState={is2fa} setExternalState={setIs2fa}>
        Two Factor Authentication(2FA)
      </ToggleInput>
      {is2fa && (
        <fieldset className={styles.phoneNumberBox}>
          <legend>Phone number</legend>
          <Input disabled={true} width="40%" justifyContent="space-around">
            The phone number:{" "}
          </Input>
          <button className={`${styles.saveChangesbtn} btn`}>Change</button>
        </fieldset>
      )}
      <fieldset className={styles.changePassBox}>
        <legend>Change the password</legend>
        <p>You can change it once in 15 days</p>
        <form>
          <Input
            type="password"
            width="70%"
            justifyContent="space-around"
            flexDirection="column"
          >
            Old password:{" "}
          </Input>
          <Input
            type="password"
            width="70%"
            justifyContent="space-around"
            flexDirection="column"
          >
            New password:{" "}
          </Input>
          <Input
            type="password"
            width="70%"
            justifyContent="space-around"
            flexDirection="column"
          >
            Confirm new password:{" "}
          </Input>
        </form>
      </fieldset>
    </div>
  );
}
function PrivacySettings() {}
function AccountPreferences() {}
function HelpSupport() {}
