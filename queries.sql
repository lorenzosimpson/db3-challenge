-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT * from Product;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.id
, o.orderDate
, s.companyName
from [order] as o
join shipper as s on o.shipvia = s.id
where o.orderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT o.orderId
,p.productName
, o.quantity
FROM [OrderDetail] as o
join product as p on o.productId = p.id
where o.orderId = 10251
order by p.productName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select [Order].id as orderId, Customer.CompanyName, Employee.LastName
from [Order]
join Customer, Employee
where [Order].customerid = Customer.id and [Order].EmployeeId = [Employee].id;