"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const http_1 = __importDefault(require("http"));
const react_1 = __importDefault(require("react"));
const hostname = 'localhost';
const port = 3000;
const server = http_1.default.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(App);
});
const logo = './logo.svg';
server.listen(port, hostname, () => {
    console.log(`listening on http://${hostname}:${port}`);
});
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("header", { className: "App-header" },
            react_1.default.createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
            react_1.default.createElement("p", null,
                "Edit ",
                react_1.default.createElement("code", null, "src/App.js"),
                " and save to reload."),
            react_1.default.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
exports.default = App;
