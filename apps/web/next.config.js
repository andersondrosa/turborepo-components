const withTM = require("next-transpile-modules")(["components", "ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
