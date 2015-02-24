// Content-Script für die "Arte+7"-Mediathek

/* Da wir warten müssen, bis das JSON von der `arte_vp_url` geladen 
   ist, bevor wir seine Inhalte verwenden können (no, na!), verwende 
   ich hier `$.ajax`. (Ohne Warten tät's `$.get` auch.)
*/

video_meta_url = {};

$.ajax({
  type: "GET",
  url: $(".video-container")[0].getAttribute("arte_vp_url"),
  async: false,
  success: function(response) {video_meta_url = response;}
  }
);

video_url_hq = video_meta_url["videoJsonPlayer"]["VSR"]["HTTP_MP4_SQ_1"]["url"];
video_url_mq = video_meta_url["videoJsonPlayer"]["VSR"]["HTTP_MP4_MQ_1"]["url"];

links = '<h5 class="text-muted"><a href="' + video_url_hq + '">Hoch</a> &mdash; <a href="' + video_url_mq + '">Mittel</a></h5>';

$("div.col-xs-12.reruns").prepend(links);

