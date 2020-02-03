const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");

admin.initializeApp();

const database = admin.database().ref("/tokens");

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.updateStatus = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(401).json({
        message: "Not allowed"
      });
    }

    console.log(req.body);

    return res.status(200).json({
      received: req.body.alarmEngaged
    });
  });
});

exports.uploadToken = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(401).json({
        message: "Not allowed"
      });
    }
    console.log(req.body);
    const token = req.body.token;
    database.push({ token });
    return res.status(200).json({
      tokenSaved: true
    });
  });
});

function getTokens() {
  let items = [];
  return new Promise(resolve => {
    database.on("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        items.push(childData.token);
      });
      return resolve(items);
    });
  });
}
// getTokens()
//   .then(items => console.log("Items", items))
//   .catch(error => {
//     console.log(error);
//   });
