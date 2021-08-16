let daystr = "Day empty"
let day = 0
function checkDay(day){

  if (day == 0){
    daystr = "Sunday"
  }
  else if(day == 1){
    daystr = "Monday"
  }else if(day == 2){
    daystr = "Tuesday"
  }else if(day == 3){
    daystr = "Wednesday"
  }else if(day == 4){
    daystr = "Thursday"
  }else if(day == 5){
    daystr = "Friday"
  }else if(day == 6){
    daystr = "Saturday"
  }
}

function startTime() {
    const today = new Date();
    let day = today.getDay();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    checkDay(day);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('day').innerHTML = daystr;
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }