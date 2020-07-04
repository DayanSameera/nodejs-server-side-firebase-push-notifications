var admin = require("firebase-admin");

var serviceAccount = require("./nodejs-pushnotificationservice-firebase-adminsdk-zwgb5-985e7ea4d3.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodejs-pushnotificationservice.firebaseio.com"
})

module.exports.admin = admin