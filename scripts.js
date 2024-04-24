const newyears ="1 jan 2025";

const dayel = document.getElementById("days")   /* use queryselec if u want to get a nodelist or number of obj tgt
                                                    , else use geteleid or class to get specific item */ 
const hrsel = document.getElementById("hours");
const minel = document.getElementById("mins");
const secel = document.getElementById("secs");

function countdown()
{
    const newyeardate = new Date(newyears);
    const currentdate = new Date;

    const totalsec = (newyeardate-currentdate)/1000;

    const days = Math.floor(totalsec/3600/24);
    const hrs = Math.floor(totalsec/3600) %24;
    const mins = Math.floor(totalsec/60)%60;
    const secs = Math.floor(totalsec)%60;

    dayel.innerHTML=days;
    hrsel.innerHTML=hrs;
    minel.innerHTML=mins;
    secel.innerHTML=secs;
}
countdown();
setInterval(countdown,1000);