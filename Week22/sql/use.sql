create table
if
  not exists studios.country(
    id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT
    , name VARCHAR(70) NOT NULL
    , code VARCHAR(70) NOT NULL
  );
  insert into
    studios.country(name, code)
  values
    ('France', 33)
    , ('Russia', 7);

    select * from studios.country;