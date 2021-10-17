// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NodemonPlugin = require('nodemon-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const DotenvPlugin = require('webpack-dotenv-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

module.exports = function (options) {
  const app = options.entry.replace('/src/main.ts', '');
  const env = path.join(app, '.env');
  const sampleEnv = path.join(app, '.env.example');
  dotenv.config({
    path: env
  });
  return {
    plugins: [
      new CleanTerminalPlugin({
        onlyInWatchMode: false,
        beforeCompile: true
      }),
      new DotenvPlugin({
        path: env,
        sample: sampleEnv,
        allowEmptyValues: true
      }),
      new NodemonPlugin({
        delay: 1000,
        events: {
          start: `kill-port ${process.env.PORT}`,
          restart: `kill-port ${process.env.PORT}`,
          crash: `kill-port ${process.env.PORT}`
        }
      })
    ]
  };
};
