// Content-Script für tvthek.orf.at

// XXX Fehlerbehandlung? Fehlanzeige :-(
video_list = JSON.parse($(".mod_player > div.player_viewport").children()[3].getAttribute("data-jsb"))["playlist"]["videos"];

links = "<h4>";

$.each(video_list, function(index, video_dict) {
  sources_list = video_dict["sources"];

  links += (index+1) + " &mdash; " + video_dict["title"]

  $.each(sources_list, function(index, source_dict) {
    video_url = source_dict["src"];
    if ((/^http:/).test(video_url) && (/mp4$/).test(video_url)) {
      quality_string = source_dict["quality_string"];
      links += " &mdash; <a class='service_link' href='" + 
          video_url + "'>" + quality_string + "</a>";
    }
  } );

  links += "<br>";

} );

$("div.service_footer").prepend(links);

