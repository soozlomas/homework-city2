  $(document).ready(function(){

  var cityImages = ['images/nyc.jpg','images/sf.jpg','images/la.jpg','images/sydney.jpg','images/austin.jpg'];

  var cityName = ['NYC','SF','LA','SYD','ATX'];

  for(var cityList = 0; cityList < cityName.length; cityList++) {
    $('#city-type').append($('<option> </option>').val(cityName[cityList+1]).html(cityName[cityList]));
  }
  console.log('1');

  //$('select option:selected').change(function() {
    //$( "select option:selected" ).each(function() {
      //$('body').css('background', 'url(' + cityImages[0] + ')');

    switch (cityName) {
    case 'NYC':
    $('body').css('background', 'url(' + cityImages[0] + ')');
    break;
      console.log('2');
    case 'SF':
    $('body').css('background', 'url(' + cityImages[1] + ')');
    break;
    case 'LA':
    $('body').css('background', 'url(' + cityImages[2] + ')');
    break;
    case 'SYD':
    $('body').css('background', 'url(' + cityImages[3] + ')');
    break;
    case 'ATX':
    $('body').css('background', 'url(' + cityImages[4] + ')');
    break;
    }


    //});



  //});



/*
    //var selected = $(this).val();
    //$('.'+selected +'').css('background', 'url(' + cityImages[0] + ')');
  //});





  // declare a function to change the image depending on the user's input
  function changeImage(){

    /* collect city name that user inputs and store in city
    changes the user's input to lowercase so the case actually entered doesn't matter
    trims extra spaces that the user inputs
    var city = $('#city-type').val().toLowerCase().trim();

    if(city === 'new york' || city === 'new york city' || city === 'nyc'){
      //need the plus signs to concatenate the url, the array index, and the brackets
      $('body').css('background', 'url(' + cityImages[0] + ')');
    }
    else if (city === 'san francisco' || city === 'sf' || city === 'bay area'){
      $('body').css('background', 'url(' + cityImages[1] + ')');
    }
    else if (city === 'los angeles' || city === 'la' || city === 'lax'){
      $('body').css('background', 'url(' + cityImages[2] + ')');
    }
    else if (city === 'austin' || city === 'atx'){
      $('body').css('background', 'url(' + cityImages[3] + ')');
    }
    else if (city === 'sydney' || city === 'syd'){
      $('body').css('background', 'url(' + cityImages[4] + ')');
    }

    // returns the input field to blank
    $('#city-type').val('');

    // it doesn't work without this but i don't know why
    return false;

  }

  // create click handler for button
  $('#submit-btn').click(changeImage);

*/

});
