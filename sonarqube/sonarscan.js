const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "5ac4f7a81511547097b17a731ee5cf2fdcc0fd73",
    options: {
      "sonar.projectName": "FrontOffice-citoyen",
      "sonar.projectDescription": "premier incrément",
      "sonar.projectKey": "FrontOffice-citoyen",
      "sonar.projectVersion": "0.0.1",
      "sonar.exclusions": "",
      "sonar.sourceEncoding": "UTF-8",
    },
  },
  () => process.exit()
);
