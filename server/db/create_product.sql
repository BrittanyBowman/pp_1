INSERT INTO parts 
(name TEXT,
part_num INT,
id SERIAL PRIMARY KEY,
price INT,
img TEXT
);
VALUES
($1, $2, $3, $4, $5);