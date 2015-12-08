// Das "Drumherum" des Add-Ons.
//
// Von hier aus wird bei passender Seiten-URL das eigentliche 
// Content-Script aufgerufen, das dann die Seite verändert.
//
// Der Code folgt jenem Beispiel hier:
// https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod
// Danke, Ihr Mozilla-Leute!

var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "http://tvthek.orf.at/program/*",
  contentScriptFile: ["./jquery-2.1.3.min.js",
      "./stammgast-in-der-orf-tvthek.js"]
});

pageMod.PageMod({
  include: "http://oe1.orf.at/programm/*",
  contentScriptFile: ["./jquery-2.1.3.min.js",
      "./stammgast-beim-oe1-programm.js"]
});

pageMod.PageMod({
  include: "http://www.arte.tv/guide/de/*",
  contentScriptFile: ["./jquery-2.1.3.min.js",
      "./stammgast-bei-arte-plus-7.js"],
});

pageMod.PageMod({
  include: "http://www.3sat.de/mediathek/*",
  contentScriptFile: ["./jquery-2.1.3.min.js",
      "./stammgast-bei-der-3sat-mediathek.js"],
});

/* Aaaaachtung, da gibt's zwei Einträge für den SWR!
 * Sie existieren mangels besserer Ideen, den Redirect auf die 
 * HTTPS-Seite und das Ausführen des Content-Scripts durchzuführen.
 * (Siehe Content-Script, warum überhaupt redirectet wird.)
 */
pageMod.PageMod({
  include: "http://www.swrmediathek.de/player.htm?*",
  contentScriptFile: ["./jquery-2.1.3.min.js",
      "./stammgast-in-der-swr-mediathek.js"],
});

pageMod.PageMod({
  include: "https://www.swrmediathek.de/player.htm?*",
  contentScriptFile: ["./jquery-2.1.3.min.js",
      "./stammgast-in-der-swr-mediathek.js"],
});

