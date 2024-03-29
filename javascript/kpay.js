var price = $(".dataPrice");
var nameAndPhone = $(".dataNamePhone");
var dateEntry = $(".dataTime");
var paymentIdNo = $(".dataID");
var nameAndPhoneText = nameAndPhone.text();
// popUP text
$(function() {
  var moveLeft = 20;
  var moveDown = 10;

  $('button.trigger').hover(function(e) {
    $('div#pop-upTime').show();
    //.css('top', e.pageY + moveDown)
    //.css('left', e.pageX + moveLeft)
    //.appendTo('body');
  }, function() {
    $('div#pop-upTime').hide();
  });

  $('button.trigger').mousemove(function(e) {
    $("div#pop-upTime").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });

});

$(function(){
  $('button.triggerRandom').hover(function(e){
    $('div#pop-upId').show();
  },function(){
    $('div#pop-upId').hide();
  });
  $('button.triggerRandom').mousemove(function(e){
    $('div#pop-upId').css('top',e.pageY+20).css('left',e.pageX+20);
  });
});
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
$(".time").text(" "+formatAMPM(new Date));

$('.checkBox').click(blurAction);
$(".submitBtn").click(action);
$(".btnKPayIdRamdom").click(randomKpayID);
$(".btnKPayTimeRamdom").click(randomKpayTime);

function randomKpayTime(){

  $(".actionTime").val(formatKpayDate(new Date)+ " "+formatKpayTime(new Date));
}

function formatKpayDate(date){
   var day =date.getUTCDate();
   var month = date.getUTCMonth();
   var year = date.getUTCFullYear();
   date = date < 10 ? "0"+date : date;
   month = month < 10 ? "0"+month :month;
   var shrDate = day +"/" + month + "/" + year;
   return shrDate;
}

function formatKpayTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  hours = hours < 10 ? "0"+ hours : hours;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  seconds = seconds < 10 ? '0'+hours : hours;
  var strTime = hours + ':' + minutes + ':' + seconds;
  return strTime;
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
  if(priceInput.length === 0 ){

    price.text("ပမာဏထည့်ပါ");
    $(".dataPrice").addClass("color-warning");
    $(".amount").addClass("boder-warning");
  }else{
      price.text(numberWithCommas(priceInput));
      $(".dataPrice").removeClass("color-warning");
      $(".amount").removeClass("boder-warning");
  }
  if(dateInput.length === 0){
    dateEntry.text("နေ့စွဲထည့်ပါ");
    $(".dataTime").addClass("color-warning");
    $(".actionTime").addClass("boder-warning");
  }else{
    dateEntry.text(dateInput);
    $(".dataTime").removeClass("color-warning");
    $(".actionTime").removeClass("boder-warning");
  }

  if(nameInput.length === 0 || phoneInput.length === 0){
      nameAndPhone.text("နာမည်နှင့်နံပါတ်နှစ်လုံးထည့်ပါ");
      $('.dataNamePhone').addClass("color-warning");
      $(".sendName").addClass("boder-warning");
      $(".lastNumber").addClass("boder-warning");
  } else{
    nameAndPhone.text(nameInput+"(******"+phoneInput+")");
    $('.dataNamePhone').removeClass("color-warning");
    $(".sendName").removeClass("boder-warning");
    $(".lastNumber").removeClass("boder-warning");
  }

if(paymentIdInput.length === 0){
  paymentIdNo.text("လုပ်ငန်းစဉ်နံပါတ်ဖြည့်ပါ");
  $(".dataID").addClass("color-warning");
  $(".paymentID").addClass("boder-warning");
}else{
    paymentIdNo.text(paymentIdInput);
    $(".dataID").removeClass("color-warning");
    $(".paymentID").removeClass("boder-warning");
}


}

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
};
