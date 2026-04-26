-- Creating Tables

CREATE TABLE products (
    id serial primary key not null,
    product_name varchar(50),
    unit_price integer
);

CREATE TABLE customers (
    id serial primary key not null,
    customer_name varchar(50),
    address varchar(250),
    phone varchar(50),
    email varchar(50) unique
);

CREATE TABLE orders (
    id serial primary key not null,
    customer_id integer REFERENCES customers(id),
    order_date date NOT NULL,
    total_amount decimal,
    order_status varchar(20)
);

