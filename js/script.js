  $(document).ready(function(){

  var cityImages = ['images/nyc.jpg','images/sf.jpg','images/la.jpg','images/sydney.jpg','images/austin.jpg'];

  var cityName = ['NYC','SF','LA','SYD','ATX'];

  for(var cityList = 0; cityList < cityName.length; cityList++) {
    $('#city-type').append($('<option> </option>').val(cityName[cityList]).html(cityName[cityList]));
  }

  $('select').change(function () {
    var selectedVal = $('select').val();
    console.log(selectedVal);
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
