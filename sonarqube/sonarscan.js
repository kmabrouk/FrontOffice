const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "sqp_f586a875a1195d72bad19b27e184152a6db3d024",
    options: {
      "sonar.projectName": "FrontOffice-citoyenV1",
      "sonar.projectDescription": "premier incrément",
      "sonar.projectKey": "FrontOffice-citoyenV1",
      "sonar.projectVersion": "0.0.1",
      "sonar.exclusions": "",
      "sonar.sourceEncoding": "UTF-8",
    },
  },
  () => process.exit()
);
