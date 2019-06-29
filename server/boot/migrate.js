module.exports = function (app) {
   app.dataSources.Studentdb.autoupdate();
   console.log("Performed autoupdate.");
}
