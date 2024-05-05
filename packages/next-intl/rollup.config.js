/* eslint-env node */
const preserveDirectives = require("rollup-plugin-preserve-directives").default;
const getBuildConfig = require("./scripts/getBuildConfig");

const config = {
  input: {
    "index.react-client": "src/index.react-client.tsx",
    "index.react-server": "src/index.react-server.tsx",

    "server.react-client": "src/server.react-client.tsx",
    "server.react-server": "src/server.react-server.tsx",
  },
  external: [],
  output: {
    preserveModules: true,
  },
  onwarn(warning, warn) {
    if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
    warn(warning);
  },
  plugins: [preserveDirectives()],
};

module.exports = [
  getBuildConfig({
    ...config,
    env: "development",
  }),
  getBuildConfig({
    ...config,
    output: {
      ...config.output,
      format: "es",
    },
    env: "esm",
  }),
  getBuildConfig({
    ...config,
    env: "production",
  }),
];
