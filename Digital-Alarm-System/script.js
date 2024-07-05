function realtime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(hours, minutes, seconds);
    if (hours > 12) {
        hours = hours - 12;
    }
    const hour=document.getElementById("hrs")
    hour.textContent = hours;
    const minute= document.getElementById("mins")
    minute.textContent = minutes;
    const second=document.getElementById("secs")
    second.textContent = seconds;
}
setInterval(()=>{
realtime()
},1000)
let date = new Date();
let hours = date.getHours();
if (hours >= 12) {
    const pm=document.getElementById("ampm")
    pm.textContent = "PM";
} else {
   const am= document.getElementById("ampm")
    am.textContent = "AM";
}
let button = document.getElementById("button");
button.addEventListener("mouseover", function () {
    this.textContent = "Party Time";
});
button.addEventListener("mouseout", function () {
    this.textContent = "Set Alarm";
});
let greeting = document.getElementById("greeting");
if (hours >= 12 && hours < 16) {
    greeting.textContent = "Good Afternoon";
} else if (hours >= 16 && hours <= 20) {
    greeting.textContent = "Good Evening";
} else if (hours >= 20 && hours <= 24) {
    greeting.textContent = "Good Night";
}
button.addEventListener("click", function () {
    let date = new Date();
    let hours = date.getHours();
    let wakeUp = document.getElementById("wakeUp");
    let lunch = document.getElementById("lunch");
    let nap = document.getElementById("nap");
    let night = document.getElementById("night");
    if (parseInt(wakeUp.value) === hours) {
        const breakfast = document.getElementById("settime");
        breakfast.textContent = "Grab some Breakfast!";
        const imageone=document.getElementById("clockimage")
        imageone.src="BCA+\javascript\alarmclock\Component 30 – 1.svg";
    }
    else if (parseInt(lunch.value) === hours) {
        const lunch = document.getElementById("settime")
        lunch.textContent = "Let's have some Lunch!";
       const imagetwo= document.getElementById("clockimage")
        imagetwo.src= "BCA+\javascript\alarmclock\Component 31 GÇô 1.jpg";
    }
    else if (parseInt(nap.value) === hours) {
        const nap = document.getElementById("settime");
        nap.textContent = "Get some Tea!";
        const imagethree=document.getElementById("clockimage")
        imagethree.src = "javascript\alarmclock\lunch_time.svg";
    }
    else if (parseInt(night.value) === hours) {
        const night = document.getElementById("settime");
        night.textContent = "Go to Sleep";
       const imagefour= document.getElementById("clockimage")
        imagefour.src = "javascript\alarmclock\goodnight_image.svg";
    }
    let timing = document.getElementsByClassName("timing");
    timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;
    timing[1].innerText = lunch.options[lunch.selectedIndex].text;
    timing[2].innerText = nap.options[nap.selectedIndex].text;
    timing[3].innerText = night.options[night.selectedIndex].text;
});

































// function clock(){
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     if(hours>=12){
//     hours = hours-12;
// }


// let hrs =document.getElementById("hrs");
// hrs.innerText=hours;
// let mins = document.getElementById("mins");
// mins.innerText = minutes;
// let secs = document.getElementById("secs");
// secs.innerText = seconds;

// }


// setInterval(()=>{
//     clock();
// },1000);


// let date = new Date();
// let hours = date.getHours();

// if (hours >= 12) {
//     const pm = document.getElementById("ampm");
//     pm.textContent = "PM";    
// }
// else {
//     const am = document.getElementById("ampm");
//     am.textContent = "AM";
// }

// let button = document.getElementById("button")
// button.addEventListener("mouseover",function (){
//     button.textContent="Hit Me";
// })
// button.addEventListener("mouseout" , function(){
//     button.textContent="Set Alarm";
// })


// let greeting=document.getElementById("greeting")

// if(hours>=12&&hours<17){
//     greeting.innerText="GOOD AFTERNOON! !"
// }
// if(hours>=17&&hours<20){
//     greeting.innerText="GOOD EVENING! !"
// }
// if(hours>=20&&hours<24){
//     greeting.innerText="GOOD NIGHT! !"