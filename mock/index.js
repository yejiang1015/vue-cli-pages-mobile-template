/**
 * @file dev-server-data
 * @Last Modified time: 2018-07-29 15:05:00
 */
/* eslint-disable */
const glob = require('glob')

module.exports = function (app) {
  glob('./mock/!(index).js', (err, files) => {
    files.forEach((item) => {
      require('.' + item).apis.forEach((sub) => {
        app.all(sub.url, (req, res) => {
          res.setHeader('Access-Control-Allow-Origin', req.get('origin') || req.get('host'));
          res.setHeader('Access-Control-Allow-Credentials', 'true');
          res.setHeader('Access-Control-Allow-Methods', 'DELETE,GET,HEAD,POST,PUT,OPTIONS,TRACE');
          res.setHeader('Access-Control-Allow-Headers', 'X-Custom-Header,accept, Content-Type');
          res.setHeader('Content-Type', 'application/json;charset=UTF-8');
          res.status(200).send(sub.data);
        });
      });
    });
  });
};