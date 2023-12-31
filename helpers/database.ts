import { Sequelize, QueryTypes } from 'sequelize';
import { config } from '../config';

export const run_query = async (query: string, values: any) => {
  try {
    const sequelize = new Sequelize(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);
    await sequelize.authenticate();
    const data = await sequelize.query(query, {
      replacements: values,
      type: QueryTypes.SELECT
    });
    await sequelize.close();
    return data
  } catch (err: any) {
    console.error(err, query, values);
    throw 'Database query error';
  } 
}

export const run_insert = async function run_insert(query: string, values: any) {
  try {
    const sequelize = new Sequelize(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);
    await sequelize.authenticate();
    const data = await sequelize.query(query, {
      replacements: values,
      type: QueryTypes.INSERT
    });
    await sequelize.close();
    return data;
  } catch (err: any) {
    console.error(err, query, values);
    throw 'Database query error';
  }
}

export const run_update = async function run_update(query: string, values: any) {
  try {
    const sequelize = new Sequelize(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);
    await sequelize.authenticate();
    const data = await sequelize.query(query, {
      replacements: values,
      type: QueryTypes.UPDATE
    });
    await sequelize.close();
    return data;
  } catch (err: any) {
    console.error(err, query, values);
    throw 'Database query error';
  }
}

export const run_del = async function run_delete(query: string, values: any) {
  try {
    const sequelize = new Sequelize(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);
    await sequelize.authenticate();
    const data = await sequelize.query(query, {
      replacements: values,
      type: QueryTypes.DELETE
    });
    await sequelize.close();
    return data;
  } catch (err: any) {
    console.error(err, query, values);
    throw 'Database query error';
  }
}