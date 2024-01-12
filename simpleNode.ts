import * as http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/a") {
    res.write("a url has been invoked");
  } else {
    res.write("incorrect url has been invoked");
  }
  res.end();
});

server.listen(3005, () => {
  console.log("url has been invoked on port 3005");
});
