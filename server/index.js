const express = require('express')
const app = express();
const mysql =require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password: "",
    database: "dbreservsystem"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/api/insertbooking", (req, res) => {

    const Name = req.body.clientName;
    const Phone = req.body.clientPhone;
    const Address = req.body.clientAddress;
    const Court = req.body.courtNo;
    const Dates = req.body.bookedDate;
    const Time = req.body.bookedTime;

    const sqlInsert = "INSERT INTO bookedcourt (name,phone,address,court,date,time) VALUES  (?, ?, ?,?, ?, ?);";

    db.query(sqlInsert, [Name, Phone, Address, Court, Dates, Time ], (err, result) => {
        res.send("Insert");
        console.log(err);
    })
});

app.get("/api/getbooking", (req, res) => {
    const sqlSelect = "SELECT * from bookedcourt;";

    db.query(sqlSelect, (err, result) => {
     
        res.send(result);
    })
});

app.delete('/api/deleteBooking/(:clientName)', (req, res) => {
    const name = req.params.clientName;
    const sqlDelete = "Delete FROM bookedcourt where name = ?";

    db.query(sqlDelete,name, (err, result) =>{
       if(err) console.log('hi');        
    } 
    )
});

app.get("/api/getClient/(:clientName)", (req, res) => {
  const name = req.params.clientName;
  const sqlGetClient = "SELECT * from bookedcourt where name=? ;";
  db.query(sqlGetClient, name, (err, result) => {
   
      res.send(result);
  })
});


app.post("/api/updateClient", (req, res) => {
  const name = req.body.clientName;
  const newName = req.body.updName;
  const phonenum = req.body.clientPhone;
  const addressnew = req.body.clientAddress;
  const courtnew = req.body.courtNo;
  const datenew = req.body.bookedDate;
  const timenew = req.body.bookedTime;
  const sqlUpdate = "UPDATE bookedcourt SET name=?, phone = ?, address =? ,court =?, date =?, time=? where name =?";

  db.query(sqlUpdate,[newName,phonenum,addressnew,courtnew,datenew,timenew,name], (err, result) =>{
     if(err) console.log(err);
    } 
    
    )
});


    // DELETE
// app.delete("/api/invt/delete/:id",(req,res)=>{
//     const id = req.params.id;
//     const delS = "delete from admin where id = ?";
//     db.query(delS,id,(err,result)=>{
//         if(err){
//             console.log(err);
//         }else{
//             res.send("success");
//         }
//     })
// })
app.get("/", (req, res) => {

        res.send("Hellasowssss");

});
app.listen(3001, () => {
    console.log("running on port 3001");
}); 
