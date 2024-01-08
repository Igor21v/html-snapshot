const htmlSnapshots = require("html-snapshots");
htmlSnapshots
  .run({
    source: "./sitemap.xml",
    outputDir: "./snapshots",
    selector: "body",
    outputDirClean: true,
    timeout: 5000,
    input: "sitemap",
  })
  .then((completed) => {
    console.log("Успешно завершено: " + completed);
  })
  .catch((error) => {
    console.log("Ошибка: " + error);
  });
