const htmlSnapshots = require("html-snapshots");
htmlSnapshots
  .run({
    source: "./sitemap.xml",
    outputDir: "./snapshots",
    selector: "body",
    outputDirClean: true,
    timeout: 10000,
    input: "sitemap",
    browser: "phantomjs",
  })
  .then((completed) => {
    console.log("Успешно завершено: " + completed);
  })
  .catch((error) => {
    console.log("Ошибка: " + error);
  });
