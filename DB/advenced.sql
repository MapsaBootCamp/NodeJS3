SELECT * FROM payment;
SELECT * FROM customer;


-- average payment
SELECT AVG(amount) FROM payment;


-- customer that payment more than avg
SELECT
	customer_id,
	SUM (amount) AS total_payment
FROM
	payment
GROUP BY
	customer_id
HAVING
	SUM(amount) > (
		SELECT AVG(amount) FROM payment
	)
ORDER BY total_payment ASC;

SELECT COUNT(*) FROM customer GROUP BY first_name, last_name ORDER BY count DESC;

--- payment join with customer and amount more than avg
SELECT
	c.first_name,
	c.last_name,
	SUM (amount) AS total_payment
FROM
	payment p
JOIN customer c ON p.customer_id = c.customer_id
GROUP BY
	c.first_name,
	c.last_name
HAVING
	SUM(amount) > (
		SELECT AVG(amount) FROM payment
	)
ORDER BY total_payment ASC;


SELECT customer_id, amount 
FROM payment 
WHERE amount > (
	SELECT AVG(amount) FROM payment			
);

SELECT
	c.first_name,
	c.last_name,
	p.total_payment
	FROM (
			SELECT customer_id , SUM(amount) AS total_payment
			FROM payment
			GROUP BY customer_id
		) p JOIN customer c ON p.customer_id = c.customer_id
ORDER BY p.total_payment DESC;


SELECT
	customer_id,
	SUM (amount) AS total_amount
FROM
	payment
GROUP BY
	customer_id
ORDER BY total_amount DESC;



SELECT
	customer_id,
	SUM (amount) AS total_payment
FROM
	payment
GROUP BY
	customer_id
HAVING
	SUM (amount) > 200;

EXPLAIN ANALYZE SELECT * FROM address WHERE address LIKE '%La%';

CREATE INDEX idx_address_address ON address(address);

CREATE INDEX idx_address_phone ON address(phone);

EXPLAIN ANALYZE SELECT *
FROM address
WHERE phone = '223664661973';


