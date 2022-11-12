const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "sqp_deedcbb3eddc56c737f4edb946bd2280b0001248",
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
