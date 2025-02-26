import { Link } from "react-scroll";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4">
      <nav className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-blue-600 tracking-wide">
          Refer & Earn
        </h1>

        {/* Centered Navigation Links */}
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <Link
              to="referEarn"
              smooth={true}
              duration={500}
              offset={-80} // Adjusts for fixed header height
              className="cursor-pointer hover:text-blue-500 transition-all"
            >
              Refer Now
            </Link>
          </li>
          <li>
            <Link
              to="benefits"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-blue-500 transition-all"
            >
              Benefits
            </Link>
          </li>
          <li>
            <Link
              to="faq"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-blue-500 transition-all"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="support"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-blue-500 transition-all"
            >
              Support
            </Link>
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex space-x-4">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/login")}
            className="px-4 py-2 font-medium border-blue-600 text-blue-600 hover:bg-blue-100 transition-all"
          >
            Log In
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/signup")}
            className="px-4 py-2 font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all"
          >
            Try for Free
          </Button>
        </div>
      </nav>
    </header>
  );
}






