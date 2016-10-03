
var dataa;
(function() {
  var url ="http://transportapi.com/v3/uk/bus/stop/01000053204/live.json?group=route&api_key=d9307fd91b0247c607e098d5effedc97&app_id=03bf8009";

  var url_to_bristol = "http://transportapi.com/v3/uk/bus/stop/3600SOB21001/live.json?group=route&api_key=d9307fd91b0247c607e098d5effedc97&app_id=03bf8009";

  $.getJSON( url, {
    format: "json"
  })
    .done(function( data ) {
     // console.log(data);
   // dataa = data;
    var current_day = new Date(data.request_time);
    $("#curr_time").text(current_day.getHours() + ":" + current_day.getMinutes());
     $("#output").append("Next bus To: " + data.departures[376][0].direction + "<br>");
     $.each( data.departures[376], function( i, item ) {
        $("#output").append(item.aimed_departure_time + "<br>");
      });
    });



  $.getJSON( url_to_bristol, {
    format: "json"
  })
    .done(function( data ) {
      console.log(data);
    dataa = data;
    var current_day = new Date(data.request_time);
    $("#curr_time_1").text(current_day.getHours() + ":" + current_day.getMinutes());
     $.each( data.departures[376], function( i, item ) {
       if(item.direction == "Bus Station (Bristol)") {
         $("#output_1").append("To: " + item.direction + "<br>");
         $("#output_1").append(item.aimed_departure_time + "<br>");
       }
      });
    });
})();