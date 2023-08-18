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
  add: () => add,
  getTopProducts: () => getTopProducts
});
module.exports = __toCommonJS(products_exports);
var db = __toESM(require("../helpers/database"));
const getTopProducts = async () => {
  const query = `SELECT B.productbarcode, B.productName, B.manufacturer, B.score, B.grade, B.foodType, B.energy, B.sugars, B.satuFat, B.sodium, B.fruitVeget, B.fibre, B.protein FROM
(SELECT productbarcode,MAX(id) as id,COUNT(*) AS total FROM products GROUP BY productbarcode) AS A
LEFT JOIN
(SELECT * FROM products) AS B
ON A.id=B.id ORDER BY A.total DESC, B.id DESC`;
  const data = await db.run_query(query, null);
  return data;
};
const add = async (product) => {
  const keys = Object.keys(product);
  const values = Object.values(product);
  console.log(keys);
  console.log(values);
  const key = keys.join(",");
  let parm = "";
  for (let i = 0; i < values.length; i++) {
    parm += "?,";
  }
  parm = parm.slice(0, -1);
  const sql = `INSERT INTO products (${key}) VALUES (${parm})`;
  try {
    await db.run_insert(sql, values);
    return { status: 201 };
  } catch (err) {
    return err;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  add,
  getTopProducts
});
//# sourceMappingURL=products.js.map
