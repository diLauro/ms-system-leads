// import express from "express";
// import { router } from "./routes";
// import cors from "cors";
// import { db } from "./database/db";



import app from "./app";

// const app = express();
// app.use(cors());
// app.use(json());
// app.use(router);

// app.listen(3000, async () => {
//   await db.sync();
//   console.log(`App running on 3000`);
// });

app.listen(8080);
