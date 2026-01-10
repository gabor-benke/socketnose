const PORT = process.env.PORT || 9090;
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Creating the PostgreSQL pool:

const password = process.env.DB_PASSWORD;

const { Pool } = require('pg');

const pool = new Pool ({
  user: 'postgres',
  host: 'localhost',
  database: 'socketnose',
  password: password,
  port: 5432,
})

// Getting all products from the Products table (SQL):

app.get('/products', async (req, res) => {

  try {
    const queryResult = await pool.query('SELECT * FROM products');
    console.log(queryResult.rows);
    res.json(queryResult.rows);
  }
  catch (error) {
    console.error(error);
    res.status(500).send('Error by database query');
  }
  
});

// Submitting the order to the Orders table (SQL):

app.post('/my-orders', async (req, res) => {
  const client = await pool.connect();
  const items = req.body.items;

  try {
    await client.query('BEGIN');

    const insertQuery = `INSERT INTO orders (product_id, product_name, quantity, price, date) VALUES ($1, $2, $3, $4, $5)`;
    
    for (const item of items) {
      await client.query(insertQuery, [
        item.product_id,
        item.product_name,
        item.quantity,
        item.price,
        item.date,
      ]);
    }

    await client.query('COMMIT');
    console.log('Order submitted successfully:', items);
    res.status(201).json({ message: 'Order submitted successfully' });

  } 
  catch (error) {
    await client.query('ROLLBACK');
    console.error('Order insert failed:', error);
    res.status(500).json({ error: 'Order submission failed' });
  } 
  finally {
    client.release();
  }

});

// Getting all orders from the Orders table (SQL):

app.get('/my-orders', async (req, res) => {

  try {
    const queryResult = await pool.query('SELECT * FROM orders');
    
    const myOrders = queryResult.rows.map(order => ({
      id: order.id,
      product_id: order.product_id,
      product_name: order.product_name,
      quantity: order.quantity,
      price: order.price,
      date: order.date ? order.date.toLocaleString('en-GB', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'Europe/Budapest' 
      }) : '',
    }));
    
    console.log(myOrders);
    res.json(myOrders);
  }
  catch (err) {
    console.error(err);
    res.status(500).send('Error by database query');
  }

});

// Listening to port 9090:

app.listen(PORT, () => {console.log(`Server is listening on port ${PORT}`)});

module.exports = app;