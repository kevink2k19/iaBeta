var price = $(".dataPrice");
var nameAndPhone = $(".dataNamePhone");
var dateEntry = $(".dataTime");
var paymentIdNo = $(".dataID");
var nameAndPhoneText = nameAndPhone.text();

$('.checkBox').click(blurAction);
$(".submitBtn").click(action);
$(".btnKPayIdRamdom").click(randomKpayID);
$(".btnKPayTimeRamdom").click(randomKpayTime);

function randomKpayTime(){
  var hours = Math.floor(Math.random()*24+1);
  var minutes = Math.floor(Math.random()*60);
  var second = Math.floor(Math.random()*60);
  var day = Math.floor(Math.random()*30+1);
  var month = Math.floor(Math.random()*12+1);
  if(second < 10){
    var timeValue = hours+ ":" +minutes + ":" +"0"+ second;
  }else if(minutes < 10){
    var timeValue = hours+ ":" +"0"+minutes + ":" + second;
  }else if(hours < 10){
    var timeValue = "0"+hours+ ":" + minutes + ":" + second;
  }
  else{
    var timeValue = hours+ ":" + minutes + ":" + second;
  }
  // $(".actionTime").val("00/00/0000 " + timeValue)
  if(day < 10 && month <10){
    var dateValue = "0"+day+"/"+"0"+month+"/"+2021;
  }else if(month < 10){
    var dateValue = day+"/"+"0"+month+"/"+2021;
  }else if(day < 10 ){
      var dateValue = "0"+day+"/"+month+"/"+2021;
  }
  else{
    var dateValue = day+"/"+month+"/"+2021;
  }
  $(".actionTime").val(dateValue+" "+timeValue);
}

function randomKpayID(){
    var idNum = "0100230"+Math.floor(Math.random()*1000000000000000);
    $(".paymentID").val(idNum);
}

function blurAction(){
  if($(this).is(':checked')){
      nameAndPhone.addClass("blurText");
      paymentIdNo.addClass("blurText");
  }else{
      paymentIdNo.removeClass("blurText")
      nameAndPhone.removeClass("blurText");

  }
}
function action(){
  var priceInput = $(".amount").val();
  var nameInput = $(".sendName").val();
  var phoneInput = $(".lastNumber").val();
  var dateInput = $(".actionTime").val();
  var firtThreeIdInput = $(".firstThreeidNum").val();
  var paymentIdInput = $(".paymentID").val();

  price.html(priceInput);
  nameAndPhone.text(nameInput+"(******"+phoneInput+")");
  dateEntry.text(dateInput);
  paymentIdNo.text(paymentIdInput);
}
