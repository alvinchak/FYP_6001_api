import Koa from "koa";
import Router, {RouterContext} from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import passport from "koa-passport";

import cors from '@koa/cors';

import {router as products} from "./routes/products";

const app: Koa = new Koa();

app.use(cors());
app.use(logger());
app.use(json());
app.use(passport.initialize());
app.use(products.routes());

app.listen(10888);