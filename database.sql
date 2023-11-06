-- DATABASE - myhaus
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- users table
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80)  NOT NULL,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "profile_image" TEXT NULL
);

-- rooms table 
CREATE TABLE "rooms" (
    "id" SERIAL PRIMARY KEY,
    "room_name" VARCHAR (80) NOT NULL,
    "image" VARCHAR(2048) NULL,
    "user_id" INTEGER REFERENCES users,
    "notes" VARCHAR (1000) NULL
);

-- paint_form table
CREATE TABLE "paint_form" (
    "id" SERIAL PRIMARY KEY,
    "brand_name" VARCHAR (80) NOT NULL,
    "paint_color_name" VARCHAR (100) NOT NULL,
    "paint_finish" VARCHAR (50) NULL,
    "additional_comments" VARCHAR (1000) NULL,
    "room_id" INTEGER REFERENCES rooms
);

-- decor_form table
CREATE TABLE "decor_form" (
    "id" SERIAL PRIMARY KEY,
    "item" VARCHAR (100) NOT NULL,
    "purchased_from" VARCHAR (150) NULL,
    "website_link" TEXT NULL,
    "additional_comments" VARCHAR (1000) NULL,
    "room_id" INTEGER REFERENCES rooms
);


-- appliances_electronics_form table 
CREATE TABLE "appliances_electronics_form" (
    "id" SERIAL PRIMARY KEY,
    "item" VARCHAR (100) NOT NULL,
    "brand_name" VARCHAR (150) NOT NULL,
    "price_of_item" numeric(10, 2) NOT NULL,
    "model_number" VARCHAR NULL,
    "warranty_info" VARCHAR NULL,
    "additional_comments" VARCHAR (1000) NULL,
    "room_id" INTEGER REFERENCES rooms
);

-- miscellaneous_form table
CREATE TABLE "miscellaneous_form" (
    "id" SERIAL PRIMARY KEY,
    "item" VARCHAR (100) NOT NULL,
    "brand_name" VARCHAR (150) NOT NULL,
    "additional_comments" VARCHAR (1000) NULL,
    "room_id" INTEGER REFERENCES rooms
);

