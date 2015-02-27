// Content-Script für die SWR-Mediathek.

/* Redirect auf die HTTPS-Seite, sonst gibt's später ein 
 * Cross-Origin-Problem, wenn wir die Video-XML-Datei laden wollen.
 * (Schön gelöst ist das nicht, insbesondere nicht hinsichtlich des 
 * Doppeneintrags in `lib/main.js`).
 */

if (location.toString().toLowerCase().indexOf("http://") === 0) {
  location = "https" + location.toString().substr(4)
}


/* In folgendem `meta`-Tag findet sich die Player-URL mit der URL zur 
 * Datei `clips.xml` (die ihrerseits die Video-URL beinhaltet) als 
 * Query-Parmeter:
 * <meta property="og:video" content="https://www.swrmediathek.de/assets/facebookplayer/licensed_5.10.swf?file=https://www.swrmediathek.de/fbplayerparams/07e2bc10-bbfc-11e4-ae60-0026b975f2e6/clips.xml&logo.position=bottom-right&logo.margin=0&logo.file=https://www.swrmediathek.de/assets/facebookplayer/logo_transparenz.png&logo.hide=false&autostart=true&skin=https://www.swrmediathek.de/assets/facebookplayer/swrskin.zip"
 */

player_url_and_params = $("meta[property='og:video']").attr("content");

/* Wir wollen den Wert des "file"-Parameters der Query, d.h. zunächst 
 * die Query selbst, dann deren erstes Element, davon nur den Teil 
 * hinter dem "=".
 */
video_meta_url = player_url_and_params.split("?")[1].split("&")[0].split("=")[1];


// Warten auf das Laden der video_xml, vgl. Arte +7
video_xml = {};

$.ajax({
  type: "GET",
  url: video_meta_url,
  async: false,
  success: function(response) {video_xml = response;}
  }
);


// Weiter nach Lehrbuch: https://api.jquery.com/jQuery.parseXML/
xmlDoc = $.parseXML(video_xml);
$xml = $(xmlDoc);
video_url = $xml.find("item").children()[5]["children"][0].attributes["url"].value;


// Und rein mit dem Link!
$($("div.teaserTextCon > div.teasertext")[0]).append("&mdash; <a href='" + 
  video_url + "'>Video</a> &mdash;");

