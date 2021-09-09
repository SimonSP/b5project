#!/usr/bin/env node

/**
 * Module dependencies.
 */"use strict";

var _http = _interopRequireDefault(require("http"));
var _io = require("./config/io");
var _app = _interopRequireDefault(require("./app"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || "4000");
_app["default"].set("port", port);

/**
 * Create HTTP server.
 */

var server = _http["default"].createServer(_app["default"]);

/**
 * Create socket connection.
 */

var io = _io.ioWrapper.initialize(server);

io.on("connection", function (socket) {
  socket.on("socketConnection", function (room) {
    socket.join(room);
  });
  _io.ioWrapper.sockets.connection = socket;
});

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
server.timeout = 3600 * 1000;
server.keepAliveTimeout = 3600 * 1000;
server.headersTimeout = 3600 * 1000;
server.requestTimeout = 3600 * 1000;

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe ".concat(port) : "Port ".concat(port);

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error("".concat(bind, " requires elevated privileges"));
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error("".concat(bind, " is already in use"));
      process.exit(1);
      break;
    default:
      throw error;}

}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe ".concat(addr) : "port ".concat(addr.port);
  //debug(`Listening on ${bind}`)
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbInBvcnQiLCJub3JtYWxpemVQb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJhcHAiLCJzZXQiLCJzZXJ2ZXIiLCJodHRwIiwiY3JlYXRlU2VydmVyIiwiaW8iLCJpb1dyYXBwZXIiLCJpbml0aWFsaXplIiwib24iLCJzb2NrZXQiLCJyb29tIiwiam9pbiIsInNvY2tldHMiLCJjb25uZWN0aW9uIiwibGlzdGVuIiwib25FcnJvciIsIm9uTGlzdGVuaW5nIiwidGltZW91dCIsImtlZXBBbGl2ZVRpbWVvdXQiLCJoZWFkZXJzVGltZW91dCIsInJlcXVlc3RUaW1lb3V0IiwidmFsIiwicGFyc2VJbnQiLCJpc05hTiIsImVycm9yIiwic3lzY2FsbCIsImJpbmQiLCJjb2RlIiwiY29uc29sZSIsImV4aXQiLCJhZGRyIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBLEc7O0FBRUE7QUFDQTtBQUNBLG9EOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVosVUFBRCxDQUExQjtBQUNBQyxnQkFBSUMsR0FBSixTQUFnQk4sSUFBaEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1PLE1BQU0sR0FBR0MsaUJBQUtDLFlBQUwsQ0FBa0JKLGVBQWxCLENBQWY7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1LLEVBQUUsR0FBR0MsY0FBVUMsVUFBVixDQUFxQkwsTUFBckIsQ0FBWDs7QUFFQUcsRUFBRSxDQUFDRyxFQUFILGVBQW9CLFVBQUNDLE1BQUQsRUFBWTtBQUM1QkEsRUFBQUEsTUFBTSxDQUFDRCxFQUFQLHFCQUE4QixVQUFDRSxJQUFELEVBQVU7QUFDcENELElBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZRCxJQUFaO0FBQ0gsR0FGRDtBQUdBSixnQkFBVU0sT0FBVixDQUFrQkMsVUFBbEIsR0FBK0JKLE1BQS9CO0FBQ0gsQ0FMRDs7QUFPQTtBQUNBO0FBQ0E7O0FBRUFQLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjbkIsSUFBZDtBQUNBTyxNQUFNLENBQUNNLEVBQVAsVUFBbUJPLE9BQW5CO0FBQ0FiLE1BQU0sQ0FBQ00sRUFBUCxjQUF1QlEsV0FBdkI7QUFDQWQsTUFBTSxDQUFDZSxPQUFQLEdBQWlCLE9BQU8sSUFBeEI7QUFDQWYsTUFBTSxDQUFDZ0IsZ0JBQVAsR0FBMEIsT0FBTyxJQUFqQztBQUNBaEIsTUFBTSxDQUFDaUIsY0FBUCxHQUF3QixPQUFPLElBQS9CO0FBQ0FqQixNQUFNLENBQUNrQixjQUFQLEdBQXdCLE9BQU8sSUFBL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVN4QixhQUFULENBQXVCeUIsR0FBdkIsRUFBNEI7QUFDeEIsTUFBTTFCLElBQUksR0FBRzJCLFFBQVEsQ0FBQ0QsR0FBRCxFQUFNLEVBQU4sQ0FBckI7O0FBRUEsTUFBSUUsS0FBSyxDQUFDNUIsSUFBRCxDQUFULEVBQWlCO0FBQ2I7QUFDQSxXQUFPMEIsR0FBUDtBQUNIOztBQUVELE1BQUkxQixJQUFJLElBQUksQ0FBWixFQUFlO0FBQ1g7QUFDQSxXQUFPQSxJQUFQO0FBQ0g7O0FBRUQsU0FBTyxLQUFQO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLFNBQVNvQixPQUFULENBQWlCUyxLQUFqQixFQUF3QjtBQUNwQixNQUFJQSxLQUFLLENBQUNDLE9BQU4sYUFBSixFQUFnQztBQUM1QixVQUFNRCxLQUFOO0FBQ0g7O0FBRUQsTUFBTUUsSUFBSSxHQUFHLE9BQU8vQixJQUFQLCtCQUFtQ0EsSUFBbkMsbUJBQW9EQSxJQUFwRCxDQUFiOztBQUVBO0FBQ0EsVUFBUTZCLEtBQUssQ0FBQ0csSUFBZDtBQUNJO0FBQ0lDLE1BQUFBLE9BQU8sQ0FBQ0osS0FBUixXQUFpQkUsSUFBakI7QUFDQTdCLE1BQUFBLE9BQU8sQ0FBQ2dDLElBQVIsQ0FBYSxDQUFiO0FBQ0E7QUFDSjtBQUNJRCxNQUFBQSxPQUFPLENBQUNKLEtBQVIsV0FBaUJFLElBQWpCO0FBQ0E3QixNQUFBQSxPQUFPLENBQUNnQyxJQUFSLENBQWEsQ0FBYjtBQUNBO0FBQ0o7QUFDSSxZQUFNTCxLQUFOLENBVlI7O0FBWUg7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLFNBQVNSLFdBQVQsR0FBdUI7QUFDbkIsTUFBTWMsSUFBSSxHQUFHNUIsTUFBTSxDQUFDNkIsT0FBUCxFQUFiO0FBQ0EsTUFBTUwsSUFBSSxHQUFHLE9BQU9JLElBQVAsK0JBQW1DQSxJQUFuQyxtQkFBb0RBLElBQUksQ0FBQ25DLElBQXpELENBQWI7QUFDQTtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcbmltcG9ydCB7IGlvV3JhcHBlciB9IGZyb20gJ2NvbmZpZy9pbydcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnXG5cbi8qKlxuICogR2V0IHBvcnQgZnJvbSBlbnZpcm9ubWVudCBhbmQgc3RvcmUgaW4gRXhwcmVzcy5cbiAqL1xuXG5jb25zdCBwb3J0ID0gbm9ybWFsaXplUG9ydChwcm9jZXNzLmVudi5QT1JUIHx8IGA0MDAwYClcbmFwcC5zZXQoYHBvcnRgLCBwb3J0KVxuXG4vKipcbiAqIENyZWF0ZSBIVFRQIHNlcnZlci5cbiAqL1xuXG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApXG5cbi8qKlxuICogQ3JlYXRlIHNvY2tldCBjb25uZWN0aW9uLlxuICovXG5cbmNvbnN0IGlvID0gaW9XcmFwcGVyLmluaXRpYWxpemUoc2VydmVyKVxuXG5pby5vbihgY29ubmVjdGlvbmAsIChzb2NrZXQpID0+IHtcbiAgICBzb2NrZXQub24oYHNvY2tldENvbm5lY3Rpb25gLCAocm9vbSkgPT4ge1xuICAgICAgICBzb2NrZXQuam9pbihyb29tKVxuICAgIH0pXG4gICAgaW9XcmFwcGVyLnNvY2tldHMuY29ubmVjdGlvbiA9IHNvY2tldFxufSlcblxuLyoqXG4gKiBMaXN0ZW4gb24gcHJvdmlkZWQgcG9ydCwgb24gYWxsIG5ldHdvcmsgaW50ZXJmYWNlcy5cbiAqL1xuXG5zZXJ2ZXIubGlzdGVuKHBvcnQpXG5zZXJ2ZXIub24oYGVycm9yYCwgb25FcnJvcilcbnNlcnZlci5vbihgbGlzdGVuaW5nYCwgb25MaXN0ZW5pbmcpXG5zZXJ2ZXIudGltZW91dCA9IDM2MDAgKiAxMDAwXG5zZXJ2ZXIua2VlcEFsaXZlVGltZW91dCA9IDM2MDAgKiAxMDAwXG5zZXJ2ZXIuaGVhZGVyc1RpbWVvdXQgPSAzNjAwICogMTAwMFxuc2VydmVyLnJlcXVlc3RUaW1lb3V0ID0gMzYwMCAqIDEwMDBcblxuLyoqXG4gKiBOb3JtYWxpemUgYSBwb3J0IGludG8gYSBudW1iZXIsIHN0cmluZywgb3IgZmFsc2UuXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplUG9ydCh2YWwpIHtcbiAgICBjb25zdCBwb3J0ID0gcGFyc2VJbnQodmFsLCAxMClcblxuICAgIGlmIChpc05hTihwb3J0KSkge1xuICAgICAgICAvLyBuYW1lZCBwaXBlXG4gICAgICAgIHJldHVybiB2YWxcbiAgICB9XG5cbiAgICBpZiAocG9ydCA+PSAwKSB7XG4gICAgICAgIC8vIHBvcnQgbnVtYmVyXG4gICAgICAgIHJldHVybiBwb3J0XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogRXZlbnQgbGlzdGVuZXIgZm9yIEhUVFAgc2VydmVyIFwiZXJyb3JcIiBldmVudC5cbiAqL1xuXG5mdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLnN5c2NhbGwgIT09IGBsaXN0ZW5gKSB7XG4gICAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgY29uc3QgYmluZCA9IHR5cGVvZiBwb3J0ID09PSBgc3RyaW5nYCA/IGBQaXBlICR7cG9ydH1gIDogYFBvcnQgJHtwb3J0fWBcblxuICAgIC8vIGhhbmRsZSBzcGVjaWZpYyBsaXN0ZW4gZXJyb3JzIHdpdGggZnJpZW5kbHkgbWVzc2FnZXNcbiAgICBzd2l0Y2ggKGVycm9yLmNvZGUpIHtcbiAgICAgICAgY2FzZSBgRUFDQ0VTYDpcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gcmVxdWlyZXMgZWxldmF0ZWQgcHJpdmlsZWdlc2ApXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgYEVBRERSSU5VU0VgOlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtiaW5kfSBpcyBhbHJlYWR5IGluIHVzZWApXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgIH1cbn1cblxuLyoqXG4gKiBFdmVudCBsaXN0ZW5lciBmb3IgSFRUUCBzZXJ2ZXIgXCJsaXN0ZW5pbmdcIiBldmVudC5cbiAqL1xuXG5mdW5jdGlvbiBvbkxpc3RlbmluZygpIHtcbiAgICBjb25zdCBhZGRyID0gc2VydmVyLmFkZHJlc3MoKVxuICAgIGNvbnN0IGJpbmQgPSB0eXBlb2YgYWRkciA9PT0gYHN0cmluZ2AgPyBgcGlwZSAke2FkZHJ9YCA6IGBwb3J0ICR7YWRkci5wb3J0fWBcbiAgICAvL2RlYnVnKGBMaXN0ZW5pbmcgb24gJHtiaW5kfWApXG59Il19