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

  	// Row 4 
    $("#C4").text(C4Result);
    C4Result = "$ " + ($("#projectAmount").val() * 0.0033).toFixed(0);
    
   	// Row 5   
    $("#B5").text(B5Result);
    B5Result = "$ " + ($("#projectAmount").val() * 0.01666667).toFixed(0);    

    $("#C5").text(C5Result);
    C5Result = "$ " + ($("#projectAmount").val() * 0.0097).toFixed(0);

    $("#D5").text(D5Result);
    D5Result = "$ " + ($("#projectAmount").val() * 0.01077).toFixed(0);     

    $("#E5").text(E5Result);
    E5Result = "$ " + ($("#projectAmount").val() * 0.0157).toFixed(0);

    // Row 6   
    $("#B6").text(B6Result);
    B6Result = "$ " + ($("#monthlySavings").val() * (Math.pow(1 + ($("#rateIncrease").val() / 100), 5) )).toFixed(0);    

    $("#C6").text(C6Result);
    C6Result = "$ " + ($("#monthlySavings").val() * (Math.pow(1 + ($("#rateIncrease").val() / 100), 12) )).toFixed(0);

    $("#D6").text(D6Result);
    D6Result = "$ " + ($("#monthlySavings").val() * (Math.pow(1 + ($("#rateIncrease").val() / 100), 12) )).toFixed(0);     

    $("#E6").text(E6Result);
    E6Result = "$ " + ($("#monthlySavings").val() * (Math.pow(1 + ($("#rateIncrease").val() / 100), 7.58333333333) )).toFixed(0); 

    // Row 7   
    $("#B7").text(B7Result);
    B7Result = "$ " + ((($("#projectAmount").val() * 0.01666667).toFixed(0)) - (($("#monthlySavings").val() * (Math.pow(1 + ($("#rateIncrease").val() / 100), 5) )).toFixed(0))).toFixed(0); 

    $("#C7").text(C7Result);
    C7Result = "$ " + ((($("#projectAmount").val() * 0.0097).toFixed(0)) - (($("#monthlySavings").val() * (Math.pow(1 + ($("#rateIncrease").val() / 100), 12) )).toFixed(0))).toFixed(0); 

    $("#D7").text(D7Result);
    D7Result = "$ " + ((($("#projectAmount").val() * 0.01077).toFixed(0)) - (($("#monthlySavings").val() * (Math.pow(1 + ($("#rateIncrease").val() / 100), 12) )).toFixed(0))).toFixed(0);     

    $("#E7").text(E7Result);
    E7Result = "$ " + ((($("#projectAmount").val() * 0.0157).toFixed(0)) - (($("#monthlySavings").val() * (Math.pow(1 + ($("#rateIncrease").val() / 100), 7.58333333333) )).toFixed(0))).toFixed(0);

    // Row 8   
    $("#B8").text(B8Result);
    B8Result = "$ " + ((($("#projectAmount").val() * 0.01666667).toFixed(0)) * 60);    

    // $("#C8").text(C8Result);
    // C8Result = "$ " + (() * 60);

    $("#D8").text(D8Result);
    D8Result = "$ " + ((($("#projectAmount").val() * 0.01077).toFixed(0)) * 144);    

    $("#E8").text(E8Result);
    E8Result = "$ " + ((($("#projectAmount").val() * 0.0157).toFixed(0)) * 96);

    // Row 9   
    $("#B9").text(B9Result);
    B9Result = "$ " + ((($("#monthlySavings").val() * (Math.pow(1 + ($("#rateIncrease").val() / 100), 5) )).toFixed(0)) * 60);    

    $("#C9").text(C9Result);
    C9Result = "$ " + ((($("#monthlySavings").val() * (Math.pow(1 + ($("#rateIncrease").val() / 100), 12) )).toFixed(0)) * 144); 

    $("#D9").text(D9Result);
    D9Result = "$ " + ((($("#monthlySavings").val() * (Math.pow(1 + ($("#rateIncrease").val() / 100), 12) )).toFixed(0)) * 144);     

    $("#E9").text(E9Result);
    E9Result = "$ " + ((($("#monthlySavings").val() * (Math.pow(1 + ($("#rateIncrease").val() / 100), 7.58333333333) )).toFixed(0)) * 96); 

    // Row 10   
    // $("#B5").text(B5Result);
    // B5Result = "$ " + ($("#projectAmount").val() * 0.01666667).toFixed(2);    

    // $("#C5").text(C5Result);
    // C5Result = "$ " + ($("#projectAmount").val() * 0.0097).toFixed(2);

    // $("#D5").text(D5Result);
    // D5Result = "$ " + ($("#projectAmount").val() * 0.01077).toFixed(2);     

    // $("#E5").text(E5Result);
    // E5Result = "$ " + ($("#projectAmount").val() * 0.0157).toFixed(2);      


   event.preventDefault();

   $('#clear').click(function() {
    location.reload();
   });
  });