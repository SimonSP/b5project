"use strict";var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

var PORT = process.env.PORT || 8080;
var app = (0, _express["default"])();

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use((0, _cookieParser["default"])());
app.use(_express["default"].urlencoded({ extended: false }));

app.get('/', function (req, res) {return res.send('Hello World!');});

//GET EXAMPLE
/* app.get('/users', async (req, res) => {
    const users = await db.select().from('users')
    res.json(users)
}) */

//POST EXAMPLE
/* app.post('/users', async (req, res) => {
    const user = await db('users').insert({ name: req.body.name }).returning('*')
    res.json(user)
}) */

app.listen(PORT, function () {return console.log("Server up at http://localhost:".concat(PORT));});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJQT1JUIiwicHJvY2VzcyIsImVudiIsImFwcCIsInVzZSIsImV4cHJlc3MiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJhQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUU7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixJQUFvQixJQUFqQztBQUNBLElBQU1HLEdBQUcsR0FBRywwQkFBWjs7QUFFQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsd0JBQU8sS0FBUCxDQUFSO0FBQ0FELEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxvQkFBUUMsSUFBUixFQUFSO0FBQ0FILEdBQUcsQ0FBQ0MsR0FBSixDQUFRLHVCQUFSO0FBQ0FELEdBQUcsQ0FBQ0MsR0FBSixDQUFRLHlCQUFSO0FBQ0FELEdBQUcsQ0FBQ0MsR0FBSixDQUFRLCtCQUFSO0FBQ0FELEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxvQkFBUUUsVUFBUixDQUFtQixFQUFFQyxRQUFRLEVBQUUsS0FBWixFQUFuQixDQUFSOztBQUVBTCxHQUFHLENBQUNNLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLFVBQWNBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTLGNBQVQsQ0FBZCxFQUFiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQVQsR0FBRyxDQUFDVSxNQUFKLENBQVdiLElBQVgsRUFBaUIsb0JBQU1jLE9BQU8sQ0FBQ0MsR0FBUix5Q0FBNkNmLElBQTdDLEVBQU4sRUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0IGhlbG1ldCBmcm9tICdoZWxtZXQnXG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInXG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODBcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG5hcHAudXNlKG1vcmdhbignZGV2JykpXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnVzZShjb3JzKCkpXG5hcHAudXNlKGhlbG1ldCgpKVxuYXBwLnVzZShjb29raWVQYXJzZXIoKSlcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKVxuXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiByZXMuc2VuZCgnSGVsbG8gV29ybGQhJykpXG5cbi8vR0VUIEVYQU1QTEVcbi8qIGFwcC5nZXQoJy91c2VycycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZGIuc2VsZWN0KCkuZnJvbSgndXNlcnMnKVxuICAgIHJlcy5qc29uKHVzZXJzKVxufSkgKi9cblxuLy9QT1NUIEVYQU1QTEVcbi8qIGFwcC5wb3N0KCcvdXNlcnMnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIoJ3VzZXJzJykuaW5zZXJ0KHsgbmFtZTogcmVxLmJvZHkubmFtZSB9KS5yZXR1cm5pbmcoJyonKVxuICAgIHJlcy5qc29uKHVzZXIpXG59KSAqL1xuXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IGNvbnNvbGUubG9nKGBTZXJ2ZXIgdXAgYXQgaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9YCkpIl19