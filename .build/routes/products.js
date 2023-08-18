"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var products_exports = {};
__export(products_exports, {
  router: () => router
});
module.exports = __toCommonJS(products_exports);
var import_koa_router = __toESM(require("koa-router"));
var import_koa_bodyparser = __toESM(require("koa-bodyparser"));
var model = __toESM(require("../models/products"));
var import_nutri_score = require("../tools/nutri-score");
const router = new import_koa_router.default({ prefix: "/api/v1/products" });
const topProducts = async (ctx, next) => {
  const top = await model.getTopProducts();
  if (top.length) {
    ctx.body = top;
  } else {
    ctx.status = 404;
  }
  await next();
};
const checkNutrition = async (ctx, next) => {
  const body = ctx.request.body;
  const foodtype = body.foodType;
  const energy = parseFloat(body.energy.trim());
  const sugars = parseFloat(body.sugars.trim()) * 1e3;
  const satuFat = parseFloat(body.satuFat.trim()) * 1e3;
  const sodium = parseFloat(body.sodium.trim());
  const fruitVeget = parseFloat(body.fruitVeget.trim());
  const fibre = parseFloat(body.fibre.trim()) * 1e3;
  const protein = parseFloat(body.protein.trim()) * 1e3;
  console.log("foodtype: " + foodtype);
  console.log("energy: " + energy);
  console.log("sugars: " + sugars);
  console.log("saturatedFat: " + satuFat);
  console.log("sodium: " + sodium);
  console.log("fruitVeget: " + fruitVeget);
  console.log("fibre: " + fibre);
  console.log("protein: " + protein);
  const grading_result = (0, import_nutri_score.nutriPoint)(foodtype, energy, sugars, satuFat, sodium, fruitVeget, fibre, protein);
  const p_Score = parseFloat(grading_result[0]);
  const p_Grade = grading_result[1];
  const output = [{ "score": p_Score.toString(), "grade": p_Grade }];
  console.log(output);
  ctx.status = 201;
  ctx.body = output;
  await next();
};
const shareProduct = async (ctx, next) => {
  const body = ctx.request.body;
  const tempBody = {
    "platformId": body.platformId,
    "productBarcode": body.productBarcode,
    "productName": body.productName,
    "manufacturer": body.manufacturer,
    "score": parseFloat(body.score.trim()),
    "grade": body.grade,
    "foodType": body.foodType,
    "energy": parseFloat(body.energy.trim()),
    "sugars": parseFloat(body.sugars.trim()),
    "satuFat": parseFloat(body.satuFat.trim()),
    "sodium": parseFloat(body.sodium.trim()),
    "fruitVeget": parseFloat(body.fruitVeget.trim()),
    "fibre": parseFloat(body.fibre.trim()),
    "protein": parseFloat(body.protein.trim())
  };
  console.log(tempBody);
  const result = await model.add(tempBody);
  if (result.status == 201) {
    console.log("Product shared successfully.");
    ctx.status = 201;
  } else {
    console.log("Product shared failed.");
    ctx.status = 500;
  }
  await next();
};
router.get("/recommend", topProducts);
router.post("/check", (0, import_koa_bodyparser.default)(), checkNutrition);
router.post("/share", (0, import_koa_bodyparser.default)(), shareProduct);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  router
});
//# sourceMappingURL=products.js.map
