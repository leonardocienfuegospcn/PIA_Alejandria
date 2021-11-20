create database Biblioteca

use "Biblioteca"

create table estados(
	idEstado int not null primary key,
	nombre varchar(30) not null
)

create table municipios(
	idMunicipio int not null primary key,
	nombre varchar(30) not null
)

create table editoriales(
	idEditorial int not null primary key,
	nombre varchar(30) not null,
	telefono varchar(15) not null,
	idEstado int not null foreign key references estados(idEstado),
	idMunicipio int not null foreign key references municipios(idMunicipio),
	colonia varchar(30) not null,
	calle varchar(30) not null,
	numero int not null,
)

create table autores(
	idAutor int not null primary key,
	idEditorial int not null foreign key references editoriales(idEditorial),
	nombre varchar(30) not null,
	apellido varchar (30) not null
)

create table libros(
	isbn int not null primary key,
	titulo varchar(30) not null,
	genero varchar(30) not null,
	stock int not null,
	idAutor int not null foreign key references autores(idAutor),
	idEditorial int not null foreign key references editoriales(idEditorial),
)

create table empleados(
	idEmpleado int not null primary key,
	nombre varchar(30) not null,
	apPaterno varchar(30) not null,
	apMaterno varchar(30) not null,
	telefono varchar(15) not null,
	idEstado int not null foreign key references estados(idEstado),
	idMunicipio int not null foreign key references municipios(idMunicipio),
	colonia varchar(30) not null,
	calle varchar(30) not null,
	numero int not null,
	puesto varchar(30) not null,
	salario money not null,
	faltas int not null,
)

create table clientes(
	idCliente int not null primary key,
	nombre varchar(30) not null,
	apPaterno varchar(30) not null,
	apMaterno varchar(30) not null,
	telefono varchar(15) not null,
	idEstado int not null foreign key references estados(idEstado),
	idMunicipio int not null foreign key references municipios(idMunicipio),
	colonia varchar(30) not null,
	calle varchar(30) not null,
	numero int not null,
)

create table renta(
	idRenta int not null primary key,
	idCliente int not null foreign key references clientes(idCliente),
	idEmpleado int not null foreign key references empleados(idEmpleado),
	entrega date not null,
	devolucion date,
	multa money, 
	pagoTotal money
)

create table detallesRenta(
	idRenta int not null foreign key references renta(idRenta),
	isbn int not null foreign key references libros(isbn),
	cantidad int not null,
	costo money not null
)

create table autorizacion(
	nivelAuth int not null primary key,
	permisos varchar(20) not null,
)

create table logIn(
	idEmpleado int not null foreign key references empleados(idEmpleado),
	usuario varchar(20) not null,
	clave varchar(20) not null,
	nivelAuth int not null foreign key references autorizacion(nivelAuth)
)
