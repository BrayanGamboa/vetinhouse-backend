-- Crear esquemas
CREATE SCHEMA IF NOT EXISTS auth;
CREATE SCHEMA IF NOT EXISTS pet;
CREATE SCHEMA IF NOT EXISTS services;
CREATE SCHEMA IF NOT EXISTS mix;

-- Crear secuencias
CREATE SEQUENCE IF NOT EXISTS mix.mix_role_seq;
CREATE SEQUENCE IF NOT EXISTS pet.pet_seq;
CREATE SEQUENCE IF NOT EXISTS mix.mix_document_type_seq;
CREATE SEQUENCE IF NOT EXISTS services.services_appointment_seq;
CREATE SEQUENCE IF NOT EXISTS mix.mix_product_seq;
-- Crear tablas
CREATE TABLE mix.mix_role(
  id INTEGER DEFAULT nextval('mix.mix_role_seq'),
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  info JSON NOT NULL,
  CONSTRAINT mix_role_pk PRIMARY KEY (id),
  CONSTRAINT mix_role_name_uq UNIQUE (name)
);
CREATE TABLE mix.mix_document_type(
  id INTEGER DEFAULT nextval('mix.mix_document_type_seq'),
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  info JSON NOT NULL,
  CONSTRAINT master_document_type_pk PRIMARY KEY (id),
  CONSTRAINT master_document_type_name_uq UNIQUE (name)
);
CREATE TABLE auth.auth_user(
  document VARCHAR(40),
  role_id INTEGER NOT NULL,
  document_type_id INTEGER NOT NULL,
  name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  info JSON NOT NULL,
  CONSTRAINT auth_user_pk PRIMARY KEY (document),
  CONSTRAINT auth_user_role_id_fk FOREIGN KEY (role_id) REFERENCES mix.mix_role (id),
  CONSTRAINT auth_user_document_type_id_fk FOREIGN KEY (document_type_id) REFERENCES mix.mix_document_type (id),
  CONSTRAINT auth_user_email_uq UNIQUE (email)
);

SELECT * FROM auth.auth_user;