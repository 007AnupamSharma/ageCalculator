const express = require('express')

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/',(req, res)=>{
    res.sendFile( __dirname + '/index.html');
});

app.post('/submit', (req, res)=>{
    const {date , month , year }  = req.body;
    console.log( date +" " + month +" " +year);

    let dd = new Date();
    let d1 = dd.getDate();
    let m1 = 1 + dd.getMonth();
    let y1 = dd.getFullYear();
    let mn = [31 , 28, 31, 30, 31, 30,31,31,30 ,31,30,31];

    if(date > d1){
        d1 = d1 + mn[m1 - 1];
        m1 = m1 - 1;
    }

    if(month > m1){
        m1 = m1 + 12;
        y1 = y1 - 1;
    }
    var d = d1 - date;
    var m = m1 - month;
    var y = y1 - year;

    // document.getElementById('age').innerHTML = "Your Age is " + y + " Years " + m + " Months "+ d + " Days"; 


    res.send("Your Age is " + y + " Years " + m + " Months "+ d + " Days");
})

app.listen("8000",()=>{
    console.log("Server is running on the port .. ");
});