-- store scheemas here

create table users(
    id int primary key auto incment,
    userName varchar(20),
    emailAddress varchar(50),
    password varchar(20)
);