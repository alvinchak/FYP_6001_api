import * as db from '../helpers/database';

export const getTopProducts = async ()=> {
  const query = `SELECT B.productbarcode, B.productName, B.manufacturer, B.score, B.grade, B.foodType, B.energy, B.sugars, B.satuFat, B.sodium, B.fruitVeget, B.fibre, B.protein FROM
(SELECT productbarcode,MAX(id) as id,COUNT(*) AS total FROM products GROUP BY productbarcode) AS A
LEFT JOIN
(SELECT * FROM products) AS B
ON A.id=B.id ORDER BY A.total DESC, B.id DESC`;
  const data = await db.run_query(query, null);
  return data;
}

export const add = async (product: any)=> {
  const keys = Object.keys(product);
  const values = Object.values(product);
  console.log(keys);
  console.log(values);
  const key = keys.join(',');
  let parm = '';
  for (let i = 0; i<values.length; i++) {parm += '?,'}
  parm = parm.slice(0,-1);
  const sql = `INSERT INTO products (${key}) VALUES (${parm})`;
  try {
    await db.run_insert(sql, values);
    return {status: 201};
  } catch (err: any) {
    return err;
  }
}