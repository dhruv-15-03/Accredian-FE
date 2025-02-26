import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import ReferEarn from "./Components/ReferEarn";
import Benefits from "./Components/Benefits"; 
import FAQ from "./Components/FAQ"; 
import Support from "./Components/Support"; 
import Login from "./Pages/Login"
import Signup from "./Pages/SignUp"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ReferEarn />
              <Benefits />
              <FAQ />
              <Support />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}



