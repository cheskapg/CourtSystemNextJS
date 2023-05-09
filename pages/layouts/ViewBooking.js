import { useState, useEffect } from "react";
import Axios from "axios";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

function App() {
  const [clientList, setClientList] = useState([]);
  const [nameVal, setName] = useState("");
  const [phoneVal, setPhone] = useState("");
  const [addressVal, setAddress] = useState("");
  const [courtVal, setCourt] = useState("1");
  const [dateVal, setDate] = useState("");
  const [timeVal, setTime] = useState("8am-9am");
  const [client, setClient] = useState([]);
  const [newPhone, setNewPhone] = useState(phoneVal);
  const [open, setOpen] = useState(false);

  const handleOpen = (client) => {
    setOpen(true);
    getClient(client);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getbooking").then((response) => {
      console.log(response);
      setClientList(response.data);
    });
  }, []);

  const deleteBooking = (nameDel) => {
    Axios.delete(`http://localhost:3001/api/deleteBooking/${nameDel}`).then(
      (res) => {
        console.log(res);
      }
    );
    alert("booking deleted");
    window.location.reload();
  };

  const updateClient = (clientNew) => {
    setAddress(addressVal);

    Axios.post("http://localhost:3001/api/updateClient", {
      clientName: clientNew,
      updName: nameVal,
      clientPhone: phoneVal,
      clientAddress: addressVal,
      courtNo: courtVal,
      bookedDate: dateVal,
      bookedTime: timeVal,
    }).then(() => {
      alert("booking updated");
      window.location.reload();
    });
  };

  const getClient = (client) => {
    Axios.get(`http://localhost:3001/api/getClient/${client}`).then((res) => {
      console.log(res.data);
      setClient(res.data);

      setName(res.data[0].name);
      setAddress(res.data[0].address);
      setPhone(res.data[0].phone);
      setCourt(res.data[0].court);
      setDate(res.data[0].date);
      setTime(res.data[0].time);
    });
  };

  const saveChanges = () => {
    setOpen(false);
    window.location.reload();
  };

  return (
    <div className="ViewBooking mx-auto">
      <h1 className="my-5 text-lg font-bold text-center">Client Booking List</h1>
      <div className="grid grid-cols-1 gap-4 text-black lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {clientList.map((val) => (
          <div
            key={val.name}
            className="bg-white rounded-md shadow-lg overflow-hidden"
          >
            <div className="p-4">
              <h5 className="text-xl font-medium mb-2">{val.name}</h5>
              <p className="mb-2">
                <span className="font-medium">Phone:</span> {val.phone}
              </p>
              <p className="mb-2">
                <span className="font-medium">Address:</span> {val.address}
              </p>
              <p className="mb-2">
                <span className="font-medium">Court:</span> {val.court}
              </p>
              <p className="mb-2">
                <span className="font-medium">Dates:</span> {val.date}
              </p>
              <p className="mb-2">
                <span className="font-medium">Time:</span> {val.time}
              </p>
            </div>
            <div className="p-4 flex justify-end">
              <button
                onClick={() => deleteBooking(val.name)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
              <button
                onClick={() => handleOpen(val.name)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
      {client.map((val) => (
        <Dialog key={val.name} open={open} onClose    ={handleClose}>
        <DialogTitle>Update Client: {val.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="form mb-2">
              <label className="font-medium">Name</label>
              <input
                type="text"
                name="nameVal"
                defaultValue={val.name}
                onChange={(e) => setName(e.target.value)}
                className="form-input w-full mt-1 rounded-md border-gray-300"
              />
            </div>
            <div className="form mb-2">
              <label className="font-medium">Phone Number</label>
              <input
                type="text"
                name="phoneVal"
                defaultValue={val.phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-input w-full mt-1 rounded-md border-gray-300"
              />
            </div>
            <div className="form mb-2">
              <label className="font-medium">Address</label>
              <input
                type="text"
                name="addressVal"
                defaultValue={val.address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-input w-full mt-1 rounded-md border-gray-300"
              />
            </div>
            <div className="form mb-2">
              <label className="font-medium">Court Number</label>
              <select
                name="courtVal"
                defaultValue={val.court}
                onChange={(e) => setCourt(e.target.value)}
                className="form-select w-full mt-1 rounded-md border-gray-300"
              >
                <option value="1">Court 1</option>
                <option value="2">Court 2</option>
                <option value="3">Court 3</option>
              </select>
            </div>
            <div className="form mb-2">
              <label className="font-medium">Booking Date</label>
              <input
                type="date"
                name="dateVal"
                defaultValue={val.date}
                onChange={(e) => setDate(e.target.value)}
                className="form-input w-full mt-1 rounded-md border-gray-300"
              />
            </div>
            <div className="form mb-2">
              <label className="font-medium">Booking Time</label>
              <select
                name="timeVal"
                defaultValue={val.time}
                onChange={(e) => setTime(e.target.value)}
                className="form-select w-full mt-1 rounded-md border-gray-300"
              >
                <option value="8am-9am">8am-9am</option>
                <option value="10am-11am">10am-11am</option>
                <option value="2pm-3pm">2pm-3pm</option>
              </select>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="my-2">
          <Button
            onClick={saveChanges}
            variant="contained"
            color="primary"
            className="px-4 py-2"
          >
            Save Changes
          </Button>
          <Button
            onClick={handleClose}
            variant="outlined"
            color="secondary"
            className="px-4 py-2 ml-2"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    ))}
  </div>
  );
  }
  
  export default App;
  
  