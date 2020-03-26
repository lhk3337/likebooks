import express from "express";
import morgan from "morgan";
import helmet from "helmet"; //node.js의 express 보안에 도움을 주는 npm 어플리케이션
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localMiddleware } from "./middleware";
// --------------------------------------------
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";
import routes from "./router/routes";
// --------------------------------------------
const app = express();

app.use(helmet());
app.set("view engine", "pug"); //pug 초기화
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
export default app;
