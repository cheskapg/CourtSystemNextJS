import { useState } from "react";
import Axios from "axios";

function App() {
  const [nameVal, setName] = useState("");
  const [phoneVal, setPhone] = useState("");
  const [addressVal, setAddress] = useState("");
  const [courtVal, setCourt] = useState("1");
  const [dateVal, setDate] = useState("");
  const [timeVal, setTime] = useState("8am-9am");

  const submitBooking = () => {
    Axios.post("http://localhost:3001/api/insertBooking", {
      clientName: nameVal,
      clientPhone: phoneVal,
      clientAddress: addressVal,
      courtNo: courtVal,
      bookedDate: dateVal,
      bookedTime: timeVal,
    }).then(() => {
      alert("booking submitted");
      window.location.reload();
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Book Court</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form mb-4 flex flex-col">
          <label htmlFor="inputName" className="text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="nameVal"
            className="border rounded px-3 py-2"
            id="inputName"
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>{" "}
        <div className="form mb-4 flex flex-col">
          <label htmlFor="inputContact" className="text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneVal"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className="border rounded px-3 py-2"
            id="inputContact"
            placeholder="Enter Phone Number"
          ></input>
        </div>{" "}
        <div className="form mb-4 flex flex-col">
          <label htmlFor="inputAddress" className="text-gray-700 font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            name="addressVal"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="border rounded px-3 py-2"
            id="inputAddress"
            placeholder="Enter Address"
          ></input>
        </div>{" "}
        <div className="form mb-4 flex flex-col">
          <label htmlFor="courtVal" className="text-gray-700 font-bold mb-2">
            Court
          </label>
          <select
            className="border rounded text-black px-3 py-2"
            name="courtVal"
            onChange={(e) => {
              setCourt(e.target.value);
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className=" text-black form mb-4 flex flex-col">
          <label htmlFor="inputDate" className="text-black font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            className="border rounded px-3 py-2"
            id="inputDate"
            name="dateVal"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></input>
        </div>{" "}
        <div className="form mb-4 flex flex-col text-black">
          <label htmlFor="timeVal" className="text-black font-bold mb-2">
            Time
          </label>
          <select
            className="border rounded text-black px-3 py-2"
            name="timeVal"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          >
            <option>8am-9am</option>
            <option>9am-10am</option>
            <option>10am-11am</option>
            <option>11am-12pm</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        onClick={submitBooking}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
      >
        Book
      </button>
    </div>
  );
}

export default App;
