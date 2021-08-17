var currrentDate = new Date();
var currenttime = new Date();
    //currenttime.setHours(12,30,00)
var thisclass = 0;
var nextbreak = 0;
var thisdayset = new Date();
var thisday = thisdayset.getDay();


var c01 = new Date();
c01.setHours(07,50,00);
var c02 = new Date();
c02.setHours(08,40,00);
var c25 = new Date();
c25.setHours(09,30,00);
var c03 = new Date();
c03.setHours(09,40,20);
var c04 = new Date();
c04.setHours(10,30,00);
var c45 = new Date();
c45.setHours(11,20,00);
var c05 = new Date();
c05.setHours(12,20,00);
var c06 = new Date();
c06.setHours(13,10,00);
var c65 = new Date();
c65.setHours(14,00,00);
var c07 = new Date();
c07.setHours(14,10,00);
var c08 = new Date();
c08.setHours(15,00,00);
var c09 = new Date();
c09.setHours(15,50,00);


var thisdayrecheck
var notfloor
var alreadyfloor
var theclassrecheck
var theclassnamerecheck
var theclasslinkrecheck
var theclasstimerecheck
var thehrefrecheck
var realfloor


function checkclass(){
    thisday = thisdayset.getDay()
    currenttime = new Date();

    if(thisday == 6 || thisday == 0){
        thisday = 1;
        currenttime.setHours(19,00)
        thisclass = 95;
        return thisclass
    }else if (currenttime < c01){
        thisclass = 10; //beforeclass
        return thisclass
    } else if (currenttime < c02){
        thisclass = 10; //class1
        return thisclass
    } else if (currenttime < c25){
        thisclass = 20;
        return thisclass
    } else if (currenttime < c03){
        thisclass = 25;
        return thisclass
    } else if (currenttime < c04){
        thisclass = 30;
        return thisclass
    } else if (currenttime < c45){
        thisclass = 40;
        return thisclass
    } else if (currenttime < c05){
        thisclass = 45;
        return thisclass
    } else if (currenttime < c06){
        thisclass = 50;
        return thisclass
    } else if (currenttime < c65){
        thisclass = 60;
        return thisclass
    } else if (currenttime < c07){
        thisclass = 65;
        return thisclass
    } else if (currenttime < c08){
        thisclass = 70;
        return thisclass
    } else if (currenttime < c09){
        thisclass = 80;
        return thisclass
    }else {
        thisclass = 90;
        return thisclass
    }

}


checkclass()
console.log("thisclass")
console.log(thisclass)




let MondayClass = [
    ["ประวัติศาสตร์", "การอ่าน", "ภาษาอังกฤษ", "เลขง่าย", "แนะแนว", "ฟิสิกส์", "ฟิสิกส์", "กิจกรรม"],
    ["เลขยาก", "เคมี", "ภาษาไทย", "เลขง่าย", "ชีววิทยา", "พละศึกษา", "-","-"],
    ["เคมี", "เลขยาก", "สุขศึกษา", "ฟิสิกส์", "ภาษาอังกฤษ", "ประวัติศาสตร์", "เลขง่าย","-"],
    ["ภาษาไทย", "พระพุทธศาสนา", "วิทยาศาสตร์", "เลขยาก", "HR", "ชีววิทยา","เคมี", "-"],
    ["การอ่าน", "ฟิสิกส์", "ชีววิทยา", "-", "-", "-", "-","-"]
]

let MondayClassLink = [
    ["#","#","#","#","#","#","#","#"],
    ["#","#","#","#","#","#","#","#"],
    ["#","#","#","#","#","#","#","#"],
    ["#","#","#","#","#","#","#","#"],
    ["#","#","#","#","#","#","#","#"]
]

let MondayClassWord = [
    ["ประวัติศาสตร์", "การอ่าน", "ภาษาอังกฤษ", "เลขง่าย", "แนะแนว", "ฟิสิกส์", "ฟิสิกส์", "กิจกรรม"],
    ["เลขยาก", "เคมี", "ภาษาไทย", "เลขง่าย", "ชีวะวิทยา", "พละศึกษา", "-","-"],
    ["เคมี", "เลขยาก", "สุขศึกษา", "ฟิสิกส์", "ภาษาอังกฤษ", "ประวัติศาสตร์", "เลขง่าย","-"],
    ["ภาษาไทย", "พระพุทธศาสนา", "วิทยาศาสตร์", "เลขยาก", "HR", "ชีวะวิทยา","เคมี", "-"],
    ["การอ่าน", "ฟิสิกส์", "ชีวะวิทยา", "-", "-", "-", "-","-"]
]

let ClassTime = ["07.50 - 08.40", "08.40 - 09.30", "09.40 - 10.30", "10.30 - 11.20", "12.20 - 13.10", "13.10 - 14.00", "14.10 - 15.00", "15.00 - 15.50"]


/*
function myFunction() {
    var x = document.getElementById("thebox1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  */



function variabledifined() {
    thisdayrecheck = thisday - 1;
    notfloor = checkclass()
    alreadyfloor = Math.ceil(checkclass()/10);
    theclassrecheck 
    theclassnamerecheck 
    theclasslinkrecheck 
    theclasstimerecheck 
    thehrefrecheck 
    realfloor = Math.floor(checkclass()/10);
}
/*
function myFunction(){
    var x = document.getElementById("theclasslink");

}
*/

function classroomCheck(i){
    checkclass()
    variabledifined()

    theclassrecheck = "คาบ " + String(alreadyfloor - 1 +i ) ;
    theclassnamerecheck = String(MondayClass[thisdayrecheck][alreadyfloor -2 +i ]);
    theclasslinkrecheck = String(MondayClassWord[thisdayrecheck][alreadyfloor -2+i ]) ;
    theclasstimerecheck = String(ClassTime[alreadyfloor -2+i ])
    thehrefrecheck = MondayClassLink[thisdayrecheck][alreadyfloor-2+i ]

    /*if( alreadyfloor > 8){
        document.getElementById("thebox").style.display = "none";
    }else{
        document.getElementById("thebox").style.display = "block";

    }*/

    document.getElementById("classbox"+(1)).style.backgroundColor = "#e8fdff" ;


    document.getElementById("theclass"+i).innerHTML = theclassrecheck;
    document.getElementById("theclassname"+i).innerHTML = theclassnamerecheck;
    document.getElementById("theclasslink"+i).innerHTML = theclasslinkrecheck;
    document.getElementById("theclasstime"+i).innerHTML = theclasstimerecheck;
    document.getElementById("theclasslink"+i).href = thehrefrecheck;

    if(alreadyfloor - 1 + i  > 9 ){
        document.getElementById("thebox"+i).style.display = "none";
    }
    
    if(notfloor % 10 == 0){
        document.getElementById("breakbox").style.display = "none";
    }

    if(thisclass % 10 != 0){
        document.getElementById("breakbox").style.display = "block";
    }

    if(thisclass == 45){
        document.getElementById("thebreakname").innerHTML = "พักเที่ยง"
        document.getElementById("thebreaktime").innerHTML = "(11.20 - 12.20)"
    }else if(thisclass == 25){
        document.getElementById("thebreakname").innerHTML = "พัก 10 นาทีช่วงเช้า"
        document.getElementById("thebreaktime").innerHTML = "(9.30 - 9.40)"
    }else if(thisclass == 65){
        document.getElementById("thebreakname").innerHTML = "พัก 10 นาทีช่วงบ่าย"
        document.getElementById("thebreaktime").innerHTML = "(14.00 - 14.10)"
    }else if(thisclass == 95){
        document.getElementById("thebreakname").innerHTML = "วันนี้ไม่มีเรียน"
        document.getElementById("thebreaktime").innerHTML = ""
    }


    if(thisclass == 95){
        document.getElementById("theclass"+i).innerHTML = "";
        document.getElementById("theclassname"+i).innerHTML = "วันนี้ไม่มีเรียน";
        document.getElementById("theclasslink"+i).style.display = "none";
        document.getElementById("theclasstime"+i).innerHTML = "";
        document.getElementById("theclasslink"+i).href = "";
    }
    else if(alreadyfloor -1+i == 9){
        document.getElementById("theclass"+i).innerHTML = "";
        document.getElementById("theclassname"+i).innerHTML = "ไม่มีเรียน";
        document.getElementById("theclasslink"+i).style.display = "none";
        document.getElementById("theclasstime"+i).innerHTML = "";
        document.getElementById("theclasslink"+i).href = "";
    }



    

}

function omnifunction(){
    classroomCheck(1);
    classroomCheck(2);
    classroomCheck(3);
    classroomCheck(4);
    classroomCheck(5);
    classroomCheck(6);
    classroomCheck(7);
    classroomCheck(8);
    startTime()
    setTimeout(omnifunction,1000)
    console.log(thisclass)

}

