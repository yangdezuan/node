const http = require('http');
const c = require('child_process');
const portIsOccupied = require('./portIsOccupied');
const hostname = '127.0.0.1';
 const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World\n');
 });
 async function startApp() {
   try {
     const port = await portIsOccupied(3000);
     server.listen(port, () => {
       console.log(`start http://${hostname}:${port}/`);
       c.exec(`start http://localhost:${port}`);
     });
   } catch (err) {
     console.error(err);
   }
 }
startApp();

