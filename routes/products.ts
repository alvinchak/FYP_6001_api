import Router, { RouterContext } from "koa-router";
import bodyParser from "koa-bodyparser";
import * as model from "../models/products";
import { basicAuth } from "../controllers/auth";
import { nutriPoint } from '../tools/nutri-score';

//set the base endpoint
const router = new Router({ prefix: '/api/v1/products' });

///////////////////////////////////////////
//async functions

/*
[GET] Get Top 5 products
- Endpoint: /recommend
*/
const topProducts = async(ctx: RouterContext, next: any)=> {
  const top = await model.getTopProducts();
  if (top.length) {
    // If it exists then return the cat as JSON
    ctx.body = top;
  } else {
    // Otherwise return a 404 Not Found status code
    ctx.status = 404
  }
  await next();
};

/*
[POST] Check nutri-score for a product
- Endpoint: /products/check
*/
const checkNutrition = async (ctx: RouterContext, next: any) => {
  const body: any = ctx.request.body;

  const foodtype = body.foodType;
  const energy = parseFloat(body.energy.trim());
  const sugars = parseFloat(body.sugars.trim())*1000;
  const satuFat = parseFloat(body.satuFat.trim())*1000;
  const sodium = parseFloat(body.sodium.trim());
  const fruitVeget = parseFloat(body.fruitVeget.trim());
  const fibre = parseFloat(body.fibre.trim())*1000;
  const protein = parseFloat(body.protein.trim())*1000;

  console.log("foodtype: " + foodtype)
  console.log("energy: " + energy)
  console.log("sugars: " + sugars)
  console.log("saturatedFat: " + satuFat)
  console.log("sodium: " + sodium)
  console.log("fruitVeget: " + fruitVeget)
  console.log("fibre: " + fibre)
  console.log("protein: " + protein)

  const grading_result: any = nutriPoint(foodtype,energy,sugars,satuFat,sodium,fruitVeget,fibre,protein)

  const p_Score = parseFloat(grading_result[0])
  const p_Grade = grading_result[1]
  const output = [{"score": p_Score.toString(), "grade": p_Grade}]

  console.log(output)

  ctx.status = 201;
  ctx.body = output
  await next();
};


/*
[POST] Share the nutri-score result for a product
- Endpoint: /products/share
*/
const shareProduct = async (ctx: RouterContext, next: any) => {
  
  const body: any = ctx.request.body;

  const tempBody = {
    "platformId" : body.platformId,
    "productBarcode" : body.productBarcode,
    "productName" : body.productName,
    "manufacturer" : body.manufacturer,
    "score" : parseFloat(body.score.trim()),
    "grade" : body.grade,
    "foodType" : body.foodType,
    "energy" : parseFloat(body.energy.trim()),
    "sugars" : parseFloat(body.sugars.trim()),
    "satuFat" : parseFloat(body.satuFat.trim()),
    "sodium" : parseFloat(body.sodium.trim()),
    "fruitVeget" : parseFloat(body.fruitVeget.trim()),
    "fibre" : parseFloat(body.fibre.trim()),
    "protein" : parseFloat(body.protein.trim())
  }

  console.log(tempBody)

  const result = await model.add(tempBody);
  //if the product is added to DB -> 201, else -> 500
  if (result.status == 201) {
    console.log("Product shared successfully.")
    ctx.status = 201;
  } else {
    console.log("Product shared failed.")
    ctx.status = 500;
  }
  await next();
};


//define different endpoints
router.get('/recommend', topProducts);
router.post('/check', bodyParser(), checkNutrition);
router.post('/share', bodyParser(), shareProduct);

export { router };