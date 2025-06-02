CREATE DATABASE IF NOT EXISTS signup;
USE signup;

CREATE TABLE IF NOT EXISTS signup (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

INSERT INTO signup (username, email, password)
VALUES
('Sami', 'sami12@gmail.com', 'sami12'),
('Haider', 'haider67@gmail.com', 'haider45');

SELECT * FROM signup;
