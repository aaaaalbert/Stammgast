// Content-Script für www.3sat.de/mediathek

// Bastle die Video-URL, MP4 in verschiedenen Abstufungen.
// (Aktuelle URL ist http://www.3sat.de/mediathek/?obj=...... sowie etwaige 
// weitere Parameter, und/oder `index.php`.)
video_url_q4 = window.location.href + "&display=34";
video_url_q3 = window.location.href + "&display=33";
video_url_q2 = window.location.href + "&display=32";
video_url_q1 = window.location.href + "&display=31";

// Bastel einen schönen klickbaren Link
link = 'Download <a href="' + video_url_q1 + '">niedrige</a> &mdash; '
link += '<a href="' + video_url_q2 + '">mittlere</> &mdash; '
link += '<a href="' + video_url_q3 + '">hohe</> &mdash; '
link += '<a href="' + video_url_q4 + '">h&ouml;chste</> Qualit&auml;t'


// Hänge die URL an ein `div` am unteren Ende des Videoplayer-Kasterls
$("div.MainBoxText").append(link);

