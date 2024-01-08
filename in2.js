var fs = require("fs");
var path = require("path");
var util = require("util");
var assert = require("assert");
var htmlSnapshots = require("html-snapshots");
var minify = require("html-minifier").minify;

htmlSnapshots.run(
  {
    //#1 С использованием SITEMAP
    //input: "sitemap",
    //source: "sitemap_localhost.xml",

    //#2 Массив ссылок на страницы сайта
    input: "sitemap",
    source: "./sitemap.xml",
    //protocol: "https",

    // setup and manage the output
    outputDir: path.join(__dirname, "./tmp"),

    //Чистит директорию перед сохранением новых копий
    outputDirClean: false,
    // Селектор любого блока, который находится внутри <ng-view></ng-view> и отображается после инициализации приложения
    selector: "#product",
    //Ограничить время загрузки до 12 секунд, а можно и больше
    timeout: 120000,
    //Настройки помогающие отображать контент быстрее для CRAWL
    phantomjsOptions: [
      "--ssl-protocol=any",
      "--ignore-ssl-errors=true",
      "--load-images=false",
    ],
  },
  function (err, snapshotsCompleted) {
    var body;

    console.log("completed snapshots:");

    assert.ifError(err);

    snapshotsCompleted.forEach(function (snapshotFile) {
      body = fs.readFileSync(snapshotFile, { encoding: "utf8" });

      //Убираем стили и их содержание
      var regExp = /<style[^>]*?>.*?<\/style>/gi;
      var clearBody = body.replace(regExp, "");

      //Производим замену доменного имени
      var domain = /http:\/\/localhost\/domain.ru\/www/gi;
      clearBody = clearBody.replace(domain, "//domain.ru");

      //Производим оптимизацию html файла
      clearBody = minify(clearBody, {
        conservativeCollapse: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeEmptyElements: true,
        collapseWhitespace: true,
      });
      //Записываем в файл
      fs.open(snapshotFile, "w", function (e, fd) {
        if (e) return;
        fs.write(fd, clearBody);
      });
    });
  }
);

console.log("FINISH");
