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
    // $("#B5").text(B5Result);
    // B5Result = "$ " + ($("#projectAmount").val() * 0.01666667).toFixed(2);    

    // $("#C5").text(C5Result);
    // C5Result = "$ " + ($("#projectAmount").val() * 0.0097).toFixed(2);

    // $("#D5").text(D5Result);
    // D5Result = "$ " + ($("#projectAmount").val() * 0.01077).toFixed(2);     

    // $("#E5").text(E5Result);
    // E5Result = "$ " + ($("#projectAmount").val() * 0.0157).toFixed(2); 

    // Row 8   
    // $("#B5").text(B5Result);
    // B5Result = "$ " + ($("#projectAmount").val() * 0.01666667).toFixed(2);    

    // $("#C5").text(C5Result);
    // C5Result = "$ " + ($("#projectAmount").val() * 0.0097).toFixed(2);

    // $("#D5").text(D5Result);
    // D5Result = "$ " + ($("#projectAmount").val() * 0.01077).toFixed(2);     

    // $("#E5").text(E5Result);
    // E5Result = "$ " + ($("#projectAmount").val() * 0.0157).toFixed(2); 

    // Row 9   
    // $("#B5").text(B5Result);
    // B5Result = "$ " + ($("#projectAmount").val() * 0.01666667).toFixed(2);    

    // $("#C5").text(C5Result);
    // C5Result = "$ " + ($("#projectAmount").val() * 0.0097).toFixed(2);

    // $("#D5").text(D5Result);
    // D5Result = "$ " + ($("#projectAmount").val() * 0.01077).toFixed(2);     

    // $("#E5").text(E5Result);
    // E5Result = "$ " + ($("#projectAmount").val() * 0.0157).toFixed(2); 

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