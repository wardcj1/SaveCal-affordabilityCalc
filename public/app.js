// #projectAmount
// #monthlySavings
// #rateIncrease
var C4Result;
var B5Result;
var C5Result;
var D5Result;
var E5Result;
var B6Result;
var C6Result;
var D6Result;
var E6Result;
var B7Result;
var C7Result;
var D7Result;
var E7Result;
var B8Result;
var C8Result;
var D8Result;
var E8Result;
var B9Result;
var C9Result;
var D9Result;
var E9Result;
var B10Result;
var C10Result;
var D10Result;
var E10Result;
 
  $("#target").submit(function() {

    $("#C4").text(C4Result);
    C4Result = "$ " + ($("#projectAmount").val() * 0.0033).toFixed(2);
    
    $("#B5").text(B5Result);
    B5Result = "$ " + ($("#projectAmount").val() * 0.01666667).toFixed(2);    

   event.preventDefault();
  });