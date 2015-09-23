  $(document).ready(function(){

  // create array for city photos
  var cityImages = ['images/nyc.jpg','images/sf.jpg','images/la.jpg','images/sydney.jpg','images/austin.jpg'];

  // create array for city names for use later in switch statement cases
  var cityName = ['NYC','SF','LA','SYD','ATX'];

  // populate the drop down incrementally
  for(var cityList = 0; cityList < cityName.length; cityList++) {
    $('#city-type').append($('<option> </option>').val(cityName[cityList]).html(cityName[cityList]));
  }

  // create seletedVal variable and set it to the current city option in the dropdown
  $('select').change(function () {
    var selectedVal = $('select').val();

      // for each drop down option show the appropriate index from the array
      switch (selectedVal) {
        case 'NYC':
          console.log ('nyc')
          $('body').css('background', 'url(' + cityImages[0] + ')');
          break;
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


  });

});
