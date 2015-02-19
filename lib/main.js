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
  // XXX Zu großzügig matchende URL!
  include: "*.tvthek.orf.at",
  contentScriptFile: ["./jquery-2.1.3.min.js",
      "./stammgast-in-der-orf-tvthek.js"]
});

