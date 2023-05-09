
import register from "./register.js";


function App() {
    const Link = require("react-router-dom").Link;
  return (
    <div className="Home">
    <h1 className="my-3 py-4">Register</h1>
      <div className="page-wrapper">
        <div className="form">
          <label>User Name</label>
          <input
            type="text"
            name="nameVal"
            className="form-control-sm mx-2 my-2"
            id="inputName"
            placeholder="Enter username"
           
           
          ></input>
        </div>{" "}
        <div className="form">
          <label>Password</label>
          <input
            type="password"
            name="passVal"
            
            className="form-control-sm mx-2 my-2"
            id="inputPass"
            placeholder="Enter Password"
          ></input>
        </div>
      
        <button
          type="submit"
        
          className="btn btn-primary my-2"
        >
          Login
        </button>
        <div>
        <Link to="./register" > Contact us </Link> 
        <a href="./register"> Not yet registered? Sign up here</a>
        </div>
      </div>
    </div>

  );
}

export default App;
