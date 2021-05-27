var price = $(".price");
var subPrice = $(".subPrice");
var phoneNO = $(".phoneNohead");
var dateEntry = $(".dateEntry");
var firtIdNo = $(".firstThreepaymentID");
var paymentIdNo = $(".paymentID");

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

// Current Time Calling
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
$(".btnWpayDateRandom").click(randomWpayDate);
$(".btnWavePhoneRandom").click(randomWpayPhone);

function randomWpayPhone() {
  var codeNum = ["2", "4", "6", "7", "8", "9"];
  var codeRandom = Math.floor(Math.random() * 6);
  var randomEightNumber = Math.floor(Math.random() * 20000000 + 1);

  $(".phoneNo").val(codeNum[codeRandom] + randomEightNumber);
}

function randomWpayDate() {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var monthPick = Math.floor(Math.random() * 12);
  var month = months[monthPick];
  if (month === "Jan") {
    var day = Math.floor((Math.random() * 28 + 1));
  } else if (month === "Sep" || month === "Apr" || month === "Jun" || month === "Nov") {
    var day = Math.floor((Math.random() * 30 + 1));
  } else {
    var day = Math.floor((Math.random() * 30 + 1));
  }
  if (day < 10) {
    var dateValue = "0" + day + " " + month + " 2021";
  } else {
    var dateValue = day + " " + month + " 2021";
  }
  $(".date").val(dateValue);
}

function blurAction() {
  if ($(this).is(':checked')) {
    phoneNO.addClass("blurText");
    paymentIdNo.addClass("blurText");
  } else {
    paymentIdNo.removeClass("blurText")
    phoneNO.removeClass("blurText");

  }
}


function action() {
  var priceInput = $(".amount").val();
  var phoneInput = $(".phoneNo").val();
  var dateInput = $(".date").val();
  var firtThreeIdInput = $(".firstThreeidNum").val();
  var paymentIdInput = $(".idNum").val();

  if (priceInput.length === 0) {
    price.text("ပမာဏဖြည့်ပါ").css("color", "red");
    subPrice.text("ပမာဏဖြည့်ပါ").css("color", "red");
    $(".amount").addClass("boder-warning");
  }
   else {
    price.text(numberWithCommas(priceInput)).css("color", "#4CBEF0");
    subPrice.text(numberWithCommas(priceInput)).css("color", "#000");
    $(".amount").removeClass("boder-warning");
  }


  if (phoneInput.length === 0) {
    $(".phoneNohead").addClass("color-warning");
    $(".phoneNo").addClass("boder-warning");
    phoneNO.text(" ဖုန်းနံပါတ်ထည့်ပါ");

  } else {
    $(".phoneNohead").removeClass("color-warning");
    $(".phoneNo").removeClass("boder-warning");
    phoneNO.text(phoneInput);
  }

  if (dateInput.length === 0) {
    $(".dateEntry").addClass("color-warning")
    $(".date").addClass("boder-warning");
    dateEntry.text("နေ့စွဲထည့်ပါ");
  } else {
    $(".dateEntry").removeClass("color-warning")
    $(".date").removeClass("boder-warning");
    dateEntry.text(dateInput);
  }

  if(firtThreeIdInput.length === 0 || paymentIdInput.length === 0){
    $(".firstThreepaymentID").addClass("color-warning");
    $(".paymentID").addClass("color-warning");
    $(".firstThreeidNum").addClass("boder-warning");
    $(".idNum").addClass("boder-warning");
    firtIdNo.text("နံပါတ်၂ခု")
    paymentIdNo.text("ဖြည့်ပါ");
  }else{
    $(".firstThreepaymentID").removeClass("color-warning");
    $(".paymentID").removeClass("color-warning");
    $(".firstThreeidNum").removeClass("boder-warning");
    $(".idNum").removeClass("boder-warning");
    firtIdNo.text(firtThreeIdInput.slice(0,3));
    paymentIdNo.text(paymentIdInput.slice(0,7));
  }


}
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
};

$(".language").on("change",function(){
  if(this.value === "mym-uni"){
   $(".currency").text("ကျပ်");
   $(".formPrice").text("ကျပ်");
   $(".successText").text("အောင်မြင်ပါတယ်");
   $(".successText").removeClass("texToEnglish");
   $(".toText").text("သို့");
   $(".toText").removeClass("texToEnglish");
   $(".dataFeeForm").text("ဝန်ဆောင်ခ");
   $(".dataPriceForm").text("ငွေပမာဏ");
   $(".dataDateForm").text("နေ့စွဲ");
   $(".wrong-btn").text("မှားနေပါတယ်");
   $(".ok-btn").text("အိုကေ")
   $(".dataIdForm").text("လုပ်ငန်းစဉ်အမှတ်");
   $(".dataList").removeClass("dataTextToEnglish");
  }else{
    $(".currency").text("Kyat");
    $(".formPrice").text("Kyat");
    $(".successText").text("Successful");
    $(".successText").addClass("texToEnglish");
    $(".toText").text("to");
    $(".toText").addClass("texToEnglish");
    $(".dataFeeForm").text("Transaction Fee");
    $(".dataPriceForm").text("Amount");
    $(".dataDateForm").text("Date");
    $(".wrong-btn").text("I made a mistake");
    $(".ok-btn").text("Ok")
    $(".dataIdForm").text("Transaction ID");
    $(".dataList").addClass("dataTextToEnglish");

  }
})
