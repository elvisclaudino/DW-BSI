import cors from "cors";
import express from "express";

import { router } from "../../http/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3033, () => {
    console.log("server is running!");
});
