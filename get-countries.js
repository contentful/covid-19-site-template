#!/usr/bin/env node
const https = require('https');
const fs = require('fs');
require('dotenv').config()

const options = {
  'method': 'GET',
  'hostname': 'cdn.contentful.com',
  'path': `/spaces/${process.env.CF_COVID_SPACE_ID}/environments/master/entries?content_type=siteMetadata&select=fields.covidCountries`,
  'headers': { 'Authorization': `Bearer ${process.env.CF_COVID_ACCESS_TOKEN}` }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      data = JSON.parse(data);
      const countries = data.items[0].fields.covidCountries;
      fs.writeFileSync('country-codes.json', JSON.stringify(countries));
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  });

});

req.on('error', error => {
  console.error(error);
  process.exit(1);
})

req.end();
