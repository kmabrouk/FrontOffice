const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "sqp_70e7b9b3049a0173e6bf0154ecb57103bce29ee3",
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
