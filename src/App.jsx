/** @format */

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import "./App.css";
// import BurgerMenu from "./components/MajorComponents/BurgerMenu";
// import Header from "./components/MajorComponents/Header";
// import Logo from "./components/MinorComponents/Logo";
import Application from "./Pages/Application";
import PageNotFound from "./Pages/PageNotFound";
import Homepage from "./Pages/Homepage";
import NewCollectionForm from "./components/MajorComponents/NewCollectionForm";
import SignupForm from "./components/MajorComponents/SignupForm";
import LoginForm from "./components/MajorComponents/LoginForm";
import NewCardForm from "./components/MajorComponents/NewCardForm";
import EditCardForm from "./components/MajorComponents/EditCardForm";
import DialogBox from "./components/MinorComponents/DialogBox";
import DeleteDialog from "./components/MinorComponents/DeleteDialog";
import InfoBox from "./components/MinorComponents/InfoBox";
import AccountSettings from "./components/MinorComponents/AccountSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
        </Route>
        <Route path="App" element={<Application />}>
          <Route path="NewCollection" element={<NewCollectionForm />} />
          <Route path="NewCard/:name" element={<NewCardForm />} />
          <Route path="EditCard" element={<EditCardForm />} />
          <Route path="DeleteDialog" element={<DeleteDialog />} />
          <Route path="About" element={<InfoBox />} />
          <Route path="Account" element={<AccountSettings />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
