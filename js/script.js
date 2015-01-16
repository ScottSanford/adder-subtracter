$(document).ready(function(){

  $('.alert').hide();

  // get input values
  function getInputValues(){


    $('.btn').click(function(event){
      event.preventDefault();

        var sign = $(this).attr('id');
        var xValue = $('#x-value').val();
        var yValue = $('#y-value').val();

        

        if (sign == 'add-btn') {
          addition(xValue, yValue);
          validateValues(xValue, yValue);
        } else if (sign == 'subtract-btn') {
          subtraction(xValue, yValue);
          validateValues(xValue, yValue);
        }      
    });

  };

  getInputValues();

  // add the two inputs
  function addition(xinput, yinput) {

    var xValue = $('#x-value').val();
    var yValue = $('#y-value').val();

    var zValue = parseFloat(xinput) + parseFloat(yinput);

    showAnswer("plus", zValue, xValue, yValue);

  };

  // subtract the two inputs
  function subtraction(xinput, yinput) {

    var xValue = $('#x-value').val();
    var yValue = $('#y-value').val();

    var zValue = parseFloat(xinput) - parseFloat(yinput);

    showAnswer("minus", zValue, xValue, yValue);
  };


  // validate inputs
  function validateValues(xValue, yValue) {

      if ((valid = !/^[0-9]*(\.[0-9]+)?$/.test(xValue)) || (valid = !/^[0-9]*(\.[0-9]+)?$/.test(yValue)) 
        || xValue == '' || yValue == '' ) { 

            $('.alert').html('That is not a number you fool! Try again :)'); 
            $('.alert').show();

      } else {

            $('.alert').hide();

      }
  };


  // show answer
  function showAnswer(sign, zValue, xValue, yValue) {

    $('#output').html(xValue+' '+sign+' '+yValue+' '+'is '+ Math.round(zValue));
    $('#output').show()
  };


}); // end of document ready :) 