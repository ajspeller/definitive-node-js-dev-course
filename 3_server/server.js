const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // res.writeHead(200, {
  // "Content-Type": "text/plain",
  // 'Content-Type': 'text/html',
  // 'Content-Type': 'application/json',
  // });
  // res.write(`
  // <html>
  // <body>
  // <h1 style="color:red">hey aj</h1>
  // </body>
  // </html>
  // `);
  // res.end("milky way galaxy!");
  // const names = ['aj', 'alfred', 'speller'];
  // const cars = {
  //   name: 'toyota',
  //   model: 'prius',
  // };
  // const json = JSON.stringify({
  //   names,
  //   cars,
  // });
  // let html = fs.readFileSync(`${__dirname}/index.html`);
  // res.end(html);
  // res.end(json);
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const html = fs.readFileSync(`${__dirname}/index.html`);
    res.end(html);
  } else if (req.url === '/api/user') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const user = JSON.stringify({
      name: 'aj',
      lastname: 'jones',
    });
    res.end(user);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8181, 'localhost', () => {
  console.log('Server started on port 8181');
  console.log(__dirname);
});
