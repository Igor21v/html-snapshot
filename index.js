const fs = require("node:fs");
/* const https = require("https"); */

const htmlSnapshots = require("html-snapshots");
htmlSnapshots
  .run({
    source: "./sitemap.xml",
    outputDir: "./snapshots",
    outputDirClean: true,
    input: "sitemap",
  })
  .then((completed) => {
    console.log("Успешно завершено: " + completed);
  })
  .catch((error) => {
    console.log("Ошибка: " + error);
  });
var https = require("https");
