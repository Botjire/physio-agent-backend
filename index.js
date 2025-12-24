const http = require("http");

const PORT = Number(process.env.PORT);

if (!PORT) {
  console.error("❌ PORT is not defined");
  process.exit(1);
}

const server = http.createServer((req, res) => {
  console.log("➡️", req.method, req.url);

  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "ok" }));
  }

  res.writeHead(200);
  res.end("OK");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
