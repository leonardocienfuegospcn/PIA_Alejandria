use "Biblioteca"

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

create proc filtrarLibro
	@titulo varchar(30)
	as
		select * from libros
		where titulo = @titulo
