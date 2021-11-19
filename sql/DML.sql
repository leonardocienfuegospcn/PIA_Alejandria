use "Biblioteca"

insert into estados
values(1, 'Nuevo Leon'),
	  (2, 'CDMX'), (3,'Morelos')

insert into municipios
values(1,'Monterrey'), (2, 'Apodaca'), (3,'Escobedo'),
	  (4, 'Garcia'), (5, 'San Nicolas'), (6, 'San Pedro'),
	  (7, 'Cadereyta'), (8, 'Naucalpan de Juarez'), (9, 'Toluca'),
	  (10, 'Cuernavaca'), (11, 'Miguel Hidalgo')

insert into empleados
values(10, 'Jose Luis', 'Aranda', 'Maldonado', '8135435', 1, 4, 'Moderna', 'Los Rosales', 106, 'bibliotecario', 2500, 0),
	  (20, 'Leonardo', 'Cienfuegos', 'Pecina', '8111553751', 1, 1, 'Cumbres', 'Andes sur', 027, 'administrador', 5000, 0)

insert into editoriales 
values(200, 'Salamandra Editorial', '5530006200', 2, 11, 'Polaco V section', 'Pdte. Masaryk', 111),
	  (201,'Advance Marketing','8154354',2,8,'San Francisco Cuautlalpan ','San Francisco Cuautlalpan', 102),
	  (202,'Quinto Sol','5555663',2,9,'El Rosario','Ignacio María Barrera', 149),
	  (203,'Grupo Ibalpe','5464464',2,10,'Palos Prietos','Río Baluarte', 1032)

insert into autores
values(100,200,'J.K.', 'Rowling' ),
	  (101,200,'Miguel','de Servantes Saavedra'),
	  (102,201,'Homero','Ὅμηρος'),
	  (103,202,'William','Shakespeare'),	
	  (104,203,'Durante','di Alighiero'),	
	  (105,200,'Lev','Nikoláievich Tolstói'),	
	  (106,201,'Gustave','Flaubert'),	
	  (107,202,'Jorge','Luis Borges'),	
	  (108,203,'Franz','Kafka'),	
	  (109,200,'Marcel','Proust'),	
	  (110,201,'Fiodor','Dostoievsky')

insert into libros
values(300,'Harry Potter','Fantasia',1,100,200),
	  (301,'Don Quijote de la Mancha','Novela',1,101,200),
	  (302,'La Ilíada','Poesia',1,102,201),
	  (303,'Hamlet','Teatro',1,103,202),
	  (304,'La divina comedia','Poema',1,104,203),
	  (305,'La guerra y la paz','No Ficcion',1,105,200),
	  (306,'Madame Bovary','Narrativa',1,106,201),
	  (307,'El Aleph','Cuento',1,107,202),
	  (308,'El proceso','Novela',1,108,203),
	  (309,'En busca del tiempo perdido','Novela',1,109,200),
	  (310,'Los hermanos Karamazov','Novela',1,110,201)
	  
insert into clientes
values(500,'Maria','Ramirez','Solis','8434734',1,3,'Jardines del Cañada','Rio S.Juan',104)
