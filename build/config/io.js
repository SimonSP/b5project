"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.ioWrapper = void 0;var _socket = _interopRequireDefault(require("socket.io"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}
var ioWrapper = {
  io: null,
  sockets: {},
  initialize: function initialize(server) {
    this.io = (0, _socket["default"])(server);
    return this.io;
  } };exports.ioWrapper = ioWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbmZpZy9pby5qcyJdLCJuYW1lcyI6WyJpb1dyYXBwZXIiLCJpbyIsInNvY2tldHMiLCJpbml0aWFsaXplIiwic2VydmVyIl0sIm1hcHBpbmdzIjoic0dBQUEsMkQ7QUFDTyxJQUFNQSxTQUFTLEdBQUc7QUFDckJDLEVBQUFBLEVBQUUsRUFBRSxJQURpQjtBQUVyQkMsRUFBQUEsT0FBTyxFQUFFLEVBRlk7QUFHckJDLEVBQUFBLFVBQVUsRUFBRSxTQUFTQSxVQUFULENBQW9CQyxNQUFwQixFQUE0QjtBQUNwQyxTQUFLSCxFQUFMLEdBQVUsd0JBQVNHLE1BQVQsQ0FBVjtBQUNBLFdBQU8sS0FBS0gsRUFBWjtBQUNILEdBTm9CLEVBQWxCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29ja2V0SU8gZnJvbSAnc29ja2V0LmlvJ1xuZXhwb3J0IGNvbnN0IGlvV3JhcHBlciA9IHtcbiAgICBpbzogbnVsbCxcbiAgICBzb2NrZXRzOiB7fSxcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBpbml0aWFsaXplKHNlcnZlcikge1xuICAgICAgICB0aGlzLmlvID0gc29ja2V0SU8oc2VydmVyKVxuICAgICAgICByZXR1cm4gdGhpcy5pb1xuICAgIH0sXG59XG4iXX0=