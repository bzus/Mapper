
(function(window, google, mapper) {
   
   //map options
   var options = mapper.MAP_OPTIONS,
   element = document.getElementById('map-canvas'),
   //map
   map = new google.maps.Map(element, options);
   
}(window, google, window.Mapper || (window.Mapper={})));