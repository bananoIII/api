create database node;

create table users(
    id serial primary key,
    nombre varchar(40),
    email text
);

insert into users (nombre, email) values
    ('juan','elnarco@gmial.com'),
    ('maria','electric@boogaloo');