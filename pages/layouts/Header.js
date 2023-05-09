import { useState } from "react";
import Home from "./Home.js";
import BookCourt from "./BookCourt";
import ViewBooking from "./ViewBooking";

function App() {
  const [nav, setNav] = useState(0);

  function changeNav(event) {
    setNav(parseInt(event.target.value));
  }

  function getNav() {
    switch (nav) {
      case 0:
        return <Home />;
        break;
      case 1:
        return <BookCourt />;
        break;
      case 2:
        return <ViewBooking />;
        break;

      default:
        <Home />;
    }
    return "Error";
  }

  return (
    <div>
      <nav className="bg-gray-900">
        <div className="container mx-auto py-4 px-6 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <a href="/">
              <img
                src="https://i.ibb.co/QFzB0W7/badminton-250-100-px-3.png"
                width="250"
                height="90"
                className="d-inline-block align-top"
                alt=""
              ></img>
            </a>
       
          </div>

          <div className="hidden md:block">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex flex-col md:flex-row md:mx-6">
                <button
                  className={`text-white md:mx-4 my-2 md:my-0 md:text-base font-bold ${
                    nav === 0 && "bg-gray-800"
                  } hover:bg-gray-800 p-2 rounded-lg transition-colors duration-300`}
                  value="0"
                  onClick={changeNav}
                >
                  Home
                </button>
                <button
                  className={`text-white md:mx-4 my-2 md:my-0 md:text-base font-bold ${
                    nav === 1 && "bg-gray-800"
                  } hover:bg-gray-800 p-2 rounded-lg transition-colors duration-300`}
                  value="1"
                  onClick={changeNav}
                >
                  Book Court
                </button>
                <button
                  className={`text-white md:mx-4 my-2 md:my-0 md:text-base font-bold ${
                    nav === 2 && "bg-gray-800"
                  } hover:bg-gray-800 p-2 rounded-lg transition-colors duration-300`}
                  value="2"
                  onClick={changeNav}
                >
                  View Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="LayoutArea">{getNav()}</div>
    </div>
  );
}

export default App;
