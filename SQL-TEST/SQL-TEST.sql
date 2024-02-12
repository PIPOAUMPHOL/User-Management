-- สร้าง Table ตามโจทย์ --

CREATE TABLE STORE (
	Store_key INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	City VARCHAR ( 25 ) UNIQUE NOT NULL,
	Region VARCHAR ( 25 ) NOT NULL
);

CREATE TABLE PRODUCT (
	Product_key INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	Description VARCHAR ( 25 ) NOT NULL,
	Brand VARCHAR ( 25 ) NOT NULL
);

CREATE TABLE SALES_FACT (
	Store_key INT REFERENCES STORE(Store_key) ON DELETE CASCADE,
	Product_key INT REFERENCES PRODUCT(Product_key) ON DELETE CASCADE,
	Sales NUMERIC(10, 2),
	Cost NUMERIC(10, 2),
	Profit NUMERIC(10, 2)
);

-- ข้อ 4.1 SELECT ข้อมูล STORE ที่มี Region เป็น EAST --

SELECT * FROM STORE
WHERE Region = 'East';

-- ข้อ 4.2 SELECT ข้อมูล PRODUCT ที่มีขายใน STORE New York --

SELECT STORE.Store_key, City, Region, Description, Brand, Sales, Cost, Profit
FROM STORE
INNER JOIN SALES_FACT
ON STORE.Store_key = SALES_FACT.Store_key
INNER JOIN PRODUCT
ON PRODUCT.Product_key = SALES_FACT.Product_key
WHERE City = 'New York';

-- ข้อ 4.3 SELECT ยอดรวม Profit ของ Store New York --

SELECT SUM(Profit)
FROM STORE
INNER JOIN SALES_FACT 
ON STORE.Store_key = SALES_FACT.Store_key
INNER JOIN PRODUCT 
ON PRODUCT.Product_key = SALES_FACT.Product_key
WHERE STORE.City = 'New York'; 

-- ข้อ 4.4 DELETE ข้อมูล SALE_FACT ที่ PRODUCT มี Brand เป็น Wolf --

DELETE FROM SALES_FACT
USING STORE, PRODUCT
WHERE SALES_FACT.Store_key = STORE.Store_key
AND SALES_FACT.Product_key = PRODUCT.Product_key
AND PRODUCT.Brand = 'Wolf';

-- ข้อ 4.5 UPDATE Brand ของ PRODUCT ที่มี Description เป็น Toy Story ให้ Brand เป็น W --

UPDATE PRODUCT
SET brand='W'
WHERE Description = 'Toy Story';





