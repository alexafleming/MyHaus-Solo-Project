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
    "image" TEXT NULL,
    "user_id" INTEGER REFERENCES users,
    "notes" VARCHAR (1000) NULL
);

-- paint_form table
CREATE TABLE "paint_form" (
    "id" SERIAL PRIMARY KEY,
    "brand_name" VARCHAR (80) NOT NULL,
    "paint_color_name" VARCHAR (100) NOT NULL,
    "paint_finish" VARCHAR (50) NULL,
    "addtional_comments" VARCHAR (1000) NULL,
    "room_id" INTEGER REFERENCES rooms
);

-- decor_form table
CREATE TABLE "decor_form" (
    "id" SERIAL PRIMARY KEY,
    "item" VARCHAR (100) NOT NULL,
    "purchased_from" VARCHAR (150) NULL,
    "website_link" TEXT NULL,
    "addtional_comments" VARCHAR (1000) NULL,
    "room_id" INTEGER REFERENCES rooms
);
