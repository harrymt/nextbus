
var dataa;
(function() {

  $("#show_more").click(function() {
    $("#output_debug").toggle();
  });

  $("#show_more_1").click(function() {
    $("#output_debug_1").toggle();
  });


  var url = "http://transportapi.com/v3/uk/bus/stop/01000053204/live.json?group=route&api_key=d9307fd91b0247c607e098d5effedc97&app_id=03bf8009";
  var url_to_bristol = "http://transportapi.com/v3/uk/bus/stop/3600SOB21001/live.json?group=route&api_key=d9307fd91b0247c607e098d5effedc97&app_id=03bf8009";

  $.getJSON( url, {
    format: "json"
  }).done(function( data ) {

    $("#output_debug").text(JSON.stringify(data));

    var current_day = new Date(data.request_time);
    $("#curr_time").text(formatTime(current_day));

     $("#output").append("Next bus To: " + data.departures[376][0].direction + "<br>");

     $.each( data.departures[376], function( i, item ) {
        $("#output").append(item.aimed_departure_time);
        if(item.expected_departure_time != null && item.expected_departure_time != item.aimed_departure_time) {
          $("#output").append(" (delayed: " + item.expected_departure_time + ")");
        }
        $("#output").append("<br>");
      });
    });

  $.getJSON( url_to_bristol, {
    format: "json"
  }).done(function( data ) {

  $("#output_debug_1").text(JSON.stringify(data));

    var current_day = new Date(data.request_time);
    $("#curr_time_1").text(formatTime(current_day));

    $.each( data.departures[376], function( i, item ) {
       if(item.direction == "Bus Station (Bristol)") {
         $("#output_1").append("To: " + item.direction + "<br>");

         $("#output_1").append(item.aimed_departure_time);
         if(item.expected_departure_time != null && item.expected_departure_time != item.aimed_departure_time) {
          $("#output_1").append(" (delayed: " + item.expected_departure_time + ")");
        }
        $("#output_1").append("<br>");
       }
      });
    });


})();


function formatTime(time) {
  var hour = formatLength(time.getHours());
  var minute = formatLength(time.getMinutes());

  return hour + ":" + minute;

}

function formatLength(str, length) {
  if ((str + "").length == 1) {
    return str = "0" + str;
  }
  return str;
}