const dotEnv = require('dotenv').config();
const { name, main } = require('./package.json');

module.exports = {
  apps: [
    {
      name,
      script: main,
      env: dotEnv.parsed,
    },
  ],
};
