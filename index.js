const fs = require("node:fs");
/* const https = require("https"); */

const htmlSnapshots = require("html-snapshots");
htmlSnapshots
  .run({
    source: "https://webitem.ru/robots.txt",
    outputDir: "./snapshots",
    outputDirClean: true,
    input: "array",
  })
  .then((completed) => {
    // completed is an array of full file paths to the completed snapshots.
  })
  .catch((error) => {
    console.log("Ошибка нах " + error);
  });
var https = require("https");

// Преобразуем данные
/* var url = "https://webitem.ru/static/sitemap.txt";
var request = https.get(url, function (res) {
  var data = "";
  res.on("data", function (chunk) {
    data += chunk;
  });
  res.on("end", function () {
    console.log(data.split(" "));
    // Обработка данных
  });
});
request.on("error", function (e) {
  console.log(e.message);
});
request.end(); */
