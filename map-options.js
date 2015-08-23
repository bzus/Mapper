(function(window, google, mapper){
  
  mapper.MAP_OPTIONS = {
     center: {
       lat: 38.3514638,
       lng: -110.9529167
     },
     zoom: 10,
     disableDefaultUI: false,
     scrollwheel: true,
     draggable: true,
     mapTypeId: google.maps.MapTypeId.HYBRID,
     maxZoom: 17,
     minZoom: 9,
     zoomControlOptions: {
       position: google.maps.ControlPosition.LEFT_BOTTOM,
       style: google.maps.ZoomControlStyle.DEFAULT
     },
     panControlOptions: {
       position: google.maps.ControlPosition.LEFT_BOTTOM
     } 
   };
  
}(window, google, window.Mapper || (window.Mapper={})))