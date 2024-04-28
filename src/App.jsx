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
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
