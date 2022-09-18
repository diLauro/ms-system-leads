"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// import express from "express";
// import { router } from "./routes";
// import cors from "cors";
// import { db } from "./database/db";



var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

// const app = express();
// app.use(cors());
// app.use(json());
// app.use(router);

// app.listen(3000, async () => {
//   await db.sync();
//   console.log(`App running on 3000`);
// });

_app2.default.listen(8080);
