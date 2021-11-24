use "Biblioteca"

-- Procedimientos Libros
create proc getLibros as
	select * from libros

create proc agregarLibro 
	@isbn int,
	@titulo varchar(30),
	@genero varchar(30),
	@stock int,
	@idAutor int,
	@idEditorial int
	as
		insert into libros
		values(@isbn,@titulo,@genero,@stock,@idAutor,@idEditorial)

create proc editarLibro
	@isbn int,
	@titulo varchar(30),
	@genero varchar(30),
	@stock int,
	@idAutor int,
	@idEditorial int
	as
		update libros
		set titulo=@titulo, genero=@genero, stock=@stock, idAutor=@idAutor, idEditorial=@idEditorial
		where isbn = @isbn

create proc eliminarLibro
	@isbn int
	as
		delete from libros
		where isbn = @isbn

--Procedimientos Autores
create proc getAutores as
	select * from autores

create proc agregarAutor
	@idAutor int,
	@idEditorial int,
	@nombre varchar(30),
	@apellido varchar(30)
	as
		insert into autores
		values(@idAutor, @idEditorial, @nombre, @apellido)

create proc editarAutor
	@idAutor int,
	@idEditorial int,
	@nombre varchar(30),
	@apellido varchar(30)
	as
		update autores
		set idAutor = @idAutor, idEditorial = @idEditorial, nombre = @nombre, apellido = @apellido
		where idAutor = @idAutor

create proc eliminarAutor
	@idAutor int
	as 
		delete from autores
		where idAutor = @idAutor

--Procedimientos Editoriales
create proc getEditoriales as
	select * from editoriales

create proc agregarEditorial
	@idEditorial int,
	@nombre varchar(30),
	@telefono varchar(15),
	@idEstado int,
	@idMunicipio int,
	@colonia varchar(30),
	@calle varchar(30),
	@numero int
	as
		insert into editoriales
		values(@idEditorial, @nombre, @telefono, @idEstado, @idMunicipio, @colonia, @calle, @numero)


create proc editarEditorial
	@idEditorial int,
	@nombre varchar(30),
	@telefono varchar(15),
	@idEstado int,
	@idMunicipio int,
	@colonia varchar(30),
	@calle varchar(30),
	@numero int
	as
		update editoriales
		set idEditorial = @idEditorial, nombre = @nombre, telefono = @telefono, idEstado = @idEstado, 
		idMunicipio = @idMunicipio, colonia = @colonia, calle = @calle, numero = @numero
		where idEditorial = @idEditorial

create proc eliminarEditorial
	@idEditorial int
	as
		delete from editoriales
		where idEditorial = @idEditorial

--Procedimientos Clientes
create proc getClientes as
	select * from clientes

create proc agregarCliente
	@idCliente int,
	@nombre varchar(30),
	@apPaterno varchar(30),
	@apMaterno varchar(30),
	@telefono varchar(15),
	@idEstado int,
	@idMunicipio int,
	@colonia varchar(30),
	@calle varchar(30),
	@numero int
	as
		insert into clientes
		values(@idCliente, @nombre, @apPaterno, @apMaterno, @telefono, @idEstado, @idMunicipio, @colonia, @calle, @numero)


create proc editarCliente
	@idCliente int,
	@nombre varchar(30),
	@apPaterno varchar(30),
	@apMaterno varchar(30),
	@telefono varchar(15),
	@idEstado int,
	@idMunicipio int,
	@colonia varchar(30),
	@calle varchar(30),
	@numero int
	as
		update clientes
		set idCliente = @idCliente, nombre = @nombre, apPaterno = @apPaterno, apMaterno = @apMaterno, telefono = @telefono, 
		idEstado = @idEstado, idMunicipio = @idMunicipio, colonia = @colonia, calle = @calle, numero = @numero
		where idCliente = @idCliente

create proc eliminarCliente
	@idCliente int
	as
		delete from clientes
		where idCliente = @idCliente

--Procedimientos renta
create proc getRentas as
	select * from renta

create proc agregarRenta
	@idRenta int,
	@idCliente int,
	@idEmpleado int,
	@entrega date,
	@devolucion date,
	@multa money,
	@pagoTotal money
	as
		insert into renta
		values(@idRenta, @idCliente, @idEmpleado, @entrega, @devolucion, @multa, @pagoTotal)

create proc editarRenta
	@idRenta int,
	@idCliente int,
	@idEmpleado int,
	@entrega date,
	@devolucion date,
	@multa money,
	@pagoTotal money
	as
		update renta
		set idRenta = @idRenta, idCliente = @idCliente, idEmpleado = @idEmpleado, 
		entrega = @entrega, devolucion = @devolucion, multa = @multa, pagoTotal = @pagoTotal
		where idRenta = @idRenta

create proc eliminarRenta
	@idRenta int
	as
		delete from renta
		where idRenta = @idRenta

--Procedimiento Detalles Renta
create proc getDetalles as
	select * from detallesRenta

create proc agregarDetalle
	@idRenta int,
	@isbn int,
	@cantidad int,
	@costo int
	as
		insert into detallesRenta
		values(@idRenta, @isbn, @cantidad, @costo)

create proc editarDetalle
	@idRenta int,
	@isbn int,
	@cantidad int,
	@costo int
	as
		update detallesRenta
		set idRenta = @idRenta, isbn = @isbn, cantidad = @cantidad, costo = @costo
		where idRenta = @idRenta and isbn = @isbn

create proc eliminarDetalle
	@idRenta int
	as
		delete from detallesRenta
		where idRenta = @idRenta

--Procedimientos Empleados
create proc getEmpleados as
	select * from empleados

create proc agregarEmpleado
	@idEmpleado int,
	@nombre varchar(30),
	@apPaterno varchar(30),
	@apMaterno varchar(30),
	@telefono varchar(15),
	@idEstado int,
	@idMunicipio int,
	@colonia varchar(30),
	@calle varchar(30),
	@numero int,
	@puesto varchar(30),
	@salario money,
	@faltas int
	as
		insert into empleados
		values(@idEmpleado, @nombre, @apPaterno, @apMaterno, @telefono, @idEstado, 
		@idMunicipio, @colonia, @calle, @numero, @puesto, @salario, @faltas)


create proc editarEmpleado
	@idEmpleado int,
	@nombre varchar(30),
	@apPaterno varchar(30),
	@apMaterno varchar(30),
	@telefono varchar(15),
	@idEstado int,
	@idMunicipio int,
	@colonia varchar(30),
	@calle varchar(30),
	@numero int,
	@puesto varchar(30),
	@salario money,
	@faltas int
	as
		update empleados
		set idEmpleado = @idEmpleado, nombre = @nombre, apPaterno = @apPaterno, apMaterno = @apMaterno, telefono = @telefono, idEstado = @idEstado,
		idMunicipio = @idMunicipio, colonia = @colonia, calle = @calle, numero = @numero, puesto = @puesto, salario = @salario, faltas = @faltas
		where idEmpleado = @idEmpleado

create proc eliminarEmpleado
	@idEmpleado int
	as
		delete from empleados
		where idEmpleado = @idEmpleado

--Procedimientos Estados
create proc getEstados as
	select * from estados

create proc agregarEstado
	@idEstado int,
	@nombre varchar(30)
	as
		insert into estados
		values(@idEstado, @nombre)

create proc editarEstado
	@idEstado int,
	@nombre varchar(30)
	as
		update estados
		set idEstado = @idEstado, nombre = @nombre
		where idEstado = @idEstado

create proc eliminarEstado
	@idEstado int
	as
		delete from estados
		where idEstado = @idEstado

--Procedimientos Municipios
create proc getMunicipios as
	select * from municipios

create proc agregarMunicipio
	@idMunicipio int,
	@nombre varchar(30)
	as
		insert into municipios
		values(@idMunicipio, @nombre)

create proc editarMunicipio
	@idMunicipio int,
	@nombre varchar(30)
	as
		update municipios
		set idMunicipio = @idMunicipio, nombre = @nombre
		where idMunicipio = @idMunicipio

create proc eliminarMunicipio
	@idMunicipio int
	as
		delete from municipios
		where idMunicipio = @idMunicipio