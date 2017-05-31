var myDate = new Date();
var year=myDate.getFullYear();
var month=myDate.getMonth()+1;
var date=myDate.getDate();

//var currentTime = new Date().toLocaleDateString();
if (month<10){
    month = "0" + month;
}
var currentTime = year+"-"+month+"-"+date;
var startTime = currentTime;
var endTime = currentTime;

function getEndTime(obj){
    endTime = $(obj).prev().val();
	//alert("结束："+endTime);
}


function getStartTime(obj) {
    startTime = $(obj).prev().val();
   // alert("开始："+startTime);
}

function compareToStart(obj) {
    getEndTime(obj);
    if(startTime != "" && endTime != ""){
        if(endTime<startTime){
            alert(startTime+","+endTime);
            $(obj).prev().val(currentTime);
        }
    }
}
