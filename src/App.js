import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ReferEarn from "./Components/ReferEarn";
import Benefits from "./Components/Benefits";
import FAQ from "./Components/FAQ";
import Support from "./Components/Support";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <ReferEarn />
            <Benefits />
            <FAQ />
            <Support />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}





