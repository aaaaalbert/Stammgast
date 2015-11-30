// Content-Script für oe1.orf.at

// Finde die Stream-URL
konsole_url = window.location.href + "/konsole";

$.getJSON(konsole_url, function(data) {
  mp3_url = (data["item"]["url_stream"]);

  // Bastel einen schönen klickbaren Link
  link = '<a href="' + mp3_url + '">MP3-Download hier</a>';

  // Hänge die URL an .... ja woran eigentlich?
  $("div.gallery").prepend(link);
});


