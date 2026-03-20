const API = "http://localhost:5000";

function register(){

const name = document.getElementById("name").value;
const city = document.getElementById("city").value;

fetch(API + "/register",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({name,city})
})
.then(res=>res.json())
.then(data=>{
alert(data.message);
});

}

function premium(){

const city = document.getElementById("city").value;

fetch(API + "/premium",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({city})
})
.then(res=>res.json())
.then(data=>{

document.getElementById("premiumResult").innerText=
`Risk Level: ${data.risk}
Weekly Premium: ₹${data.weeklyPremium}
Coverage: ₹${data.coverage}`;

});

}

function buyPolicy(){

fetch(API + "/buyPolicy",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({active:true})
})
.then(res=>res.json())
.then(data=>{
alert("Policy Activated");
});

}

function trigger(){

fetch(API + "/trigger")
.then(res=>res.json())
.then(data=>{

document.getElementById("claimResult").innerText=
`Event: ${data.event}
Claim Approved
Payout: ₹${data.payout}`;

});

}