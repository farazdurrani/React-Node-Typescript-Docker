const path = require("path");

module.exports = {
  process(filename: string) {
    return "module.exports = " + JSON.stringify(path.basename(filename)) + ";";
  },
};