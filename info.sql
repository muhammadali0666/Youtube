create database youtube;

CREATE TABLE users(
  id VARCHAR(50) UNIQUE NOT NULL DEFAULT gen_random_uuid(),
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL
);

INSERT INTO users(username, email, password) VALUES('Muhammadali', 'muhammadali@gmail.com', 'muhammadali1111');

ALTER TABLE users  
ADD COLUMN password VARCHAR(250);

ALTER TABLE users
add COLUMN profile_img VARCHAR(50);