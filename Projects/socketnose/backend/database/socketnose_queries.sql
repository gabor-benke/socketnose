-- Adding Data to Tables

-- Customers

INSERT INTO customers (customer_name, address, phone, email) 
VALUES ('Kiss Pista', 'Ács, Bartók Béla u. 9.', '06301112222', 'kpista@freemail.com');

INSERT INTO customers (customer_name, address, phone, email)
VALUES ('Nagy Jolán', 'Komárom, Klapka György u. 10.', '06702223333', 'njoli@gmail.com');

select * from customers;

alter table customers 
add column password varchar(20);

update customers
set password='pista11'
where id=1;

insert into customers (password) values ('jolan1') where 'id'='2';

-- Products

INSERT INTO products (product_name, unit_price) 
VALUES 
('Apróhús', 1750),
('Comb', 1900),
('Darált hús', 1700),
('Első csánk', 1300),
('Első csánk (füstölve)', 1400),
('Hátsó csánk', 1500),
('Hátsó csánk (füstölve)', 1650);

-- Items

-- Orders

