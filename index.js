//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed via GCP Cloud Build Triggers
// Copyleft (c) by Viacheslav Bruksha
//-----------------------------------------------------------------------------

exports.helloWorld = (req, res) => {
  const message="<font color='blue'>СloudFunction of Slavasly!</font><br><b>App Version 1</b>";
  res.status(200).send(message);
};
