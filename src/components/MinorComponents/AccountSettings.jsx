/** @format */

import FloatingWindow from "./FloatingWindow";
import styles from "../../styles/AccountSettings.module.css";
import logo from "../../assets/Logo512.png";
import { useEffect, useRef, useState } from "react";
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
  const [toggles, setToggles] = useState({ is2fa: false, isAlert: false });
  return (
    <div className={styles.security}>
      <p className={`${styles.profile_title} lvlOneText`}>SECURITY</p>
      <hr />
      <ToggleInput
        externalState={toggles.is2fa}
        setExternalState={() =>
          setToggles((pre) => ({ ...pre, is2fa: !pre.is2fa }))
        }
        className={styles.toggleComp}
      >
        Two Factor Authentication(2FA)
      </ToggleInput>
      {toggles.is2fa && (
        <fieldset className={styles.phoneNumberBox}>
          <legend>Phone number</legend>
          <Input disabled={true} width="40%" justifyContent="space-around">
            The phone number:{" "}
          </Input>
          <button className={`${styles.saveChangesbtn} btn`}>Change</button>
        </fieldset>
      )}
      <ToggleInput
        externalState={toggles.isAlert}
        setExternalState={() =>
          setToggles((pre) => ({ ...pre, isAlert: !pre.isAlert }))
        }
        className={styles.toggleComp}
      >
        Login alert
      </ToggleInput>
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
          <div className={styles.changePassbuttons}>
            <button className={`${styles.changePassBtn} btn`}>
              Change password
            </button>
            <button className={`${styles.forgotPassBtn} btn`}>
              Forgot password?
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}
function PrivacySettings() {
  return (
    <div className={styles.privacy}>
      <p className={`${styles.profile_title} lvlOneText`}>PRIVACY</p>
      <hr />
      <p>Read the privacy policy here</p>
      <ToggleInput
        className={styles.toggleComp}
        externalState={true}
        setExternalState={() => {}}
      >
        Collect my data for general improvements
        <p className="noteText">
          *We're collecting all data from all users currently. Unfortunately you
          can not prevent this now for urgent needs to improve our service
        </p>
      </ToggleInput>
      <ToggleInput
        className={styles.toggleComp}
        externalState={true}
        setExternalState={() => {}}
      >
        Share my data with 3rd party entities
        <p className="noteText">
          *Currently, all back-end services are provided by 3rd party entity,
          Unfortunately you're not allowed to prevent this, your data is shared
          among YOU, US(Bilal Al-aney) and FIREBASE SERVICES
        </p>
      </ToggleInput>
      <div className={styles.privacyButtons}>
        <button className={`${styles.downloadDataBtn} btn`}>
          Download your data
        </button>
        <button
          className={`${styles.deleteAccountBtn} btn`}
          title="🔴⚠️EXTREMELY DANGEROUS!! THE ACCOUNT WILL BE DELETED PERMENANTLY AFTER 7-DAYS, YOU CAN NOT RESTORE IT FOREVER! BE CAUTIOUS! "
        >
          DELETE ACCOUNT
        </button>
      </div>
    </div>
  );
}
function AccountPreferences() {
  return (
    <div className={styles.preferences}>
      <p className={`${styles.profile_title} lvlOneText`}>
        ACCOUNT PREFERENCES
      </p>
      <hr />
      <label className={styles.languageSelectionBox}>
        Language
        <select>
          <option>English</option>
          <option>العربية</option>
          <option>كوردى</option>
        </select>
      </label>
      <ToggleInput
        className={styles.toggleComp}
        externalState={true}
        setExternalState={() => {}}
      >
        Dark mode
      </ToggleInput>
      <div className={styles.preferencesButtons}>
        <button className={`${styles.connectBtn} btn`}>Connect account</button>
        <button className={`${styles.syncBtn} btn`}>
          Sync to Google Drive
        </button>
      </div>
    </div>
  );
}
function HelpSupport() {
  return (
    <div className={styles.helpSupport}>
      <p className={`${styles.profile_title} lvlOneText`}>HELP CENTER</p>
      <hr />
      <fieldset className={styles.changePassBox}>
        <legend>FEEDBACK</legend>
        <p>Your feedback matters. We evaluate your support...</p>
        <textarea cols={35} rows={10} />
        <button className={`${styles.sendFeedbackBtn} btn`}>SEND!!</button>
      </fieldset>
      <div className={styles.helpSupportButtons}>
        <button className={`${styles.faqBtn} btn`}>FAQ</button>
        <button className={`${styles.syncBtn} btn`}>Contact us!</button>
      </div>
      <footer>All rights reserved MemoFlash 2024</footer>
    </div>
  );
}
