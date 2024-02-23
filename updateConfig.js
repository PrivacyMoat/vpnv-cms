const fs = require('fs');

const contents = fs.readFileSync('config.production.json');
const config = JSON.parse(contents);

// Render.com fails to set the environment variable, so we need to hardcode it
// const externalURL = process.env.url || process.env.RENDER_EXTERNAL_URL;
const externalURL = 'https://cms.vpnvision.com';
if (externalURL) {
  config.url = externalURL;
  fs.writeFileSync('config.production.json', JSON.stringify(config, null, 2));
}
