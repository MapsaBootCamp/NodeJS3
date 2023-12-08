DROP TABLE IF EXISTS employees;
CREATE TABLE IF NOT EXISTS employees (
	id SERIAL PRIMARY KEY ,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50),
	birth_date DATE CHECK (birth_date > '1900-01-01'),
	joined_date DATE CHECK (joined_date > birth_date),
	salary numeric CHECK(salary > 0)
);

INSERT INTO employees
			(first_name, birth_date, joined_date, salary) 
VALUES ('Gholam', '1950-01-01', '2000-01-01', 2000);

SELECT * FROM employees;

DELETE FROM employees WHERE first_name='Gholam';

UPDATE employees SET first_name='Hassan' WHERE first_name='Heshmat';

TRUNCATE TABLE employees;