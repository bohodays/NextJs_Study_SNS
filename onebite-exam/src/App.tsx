import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import IndexPage from "./pages/index-page";
import SingInPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sign-up-page";

const AuthLayout = () => {
  return (
    <div>
      <header>Auth !</header>
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SingInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
