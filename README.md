

# WEB PROJECT | Kike & Lali


## Endpoints

Id |	Method |	Path |	Description
---|---------|-------|-------------
1	 | get  |	/ |  	Página de Inicio
2	 | get	| /reviews |	muestra reviews
3  | get	| /reviews/countries |	reviews por paises. Muestra reseñas de todos los paises.
4	 | get	| /reviews/countries/:id |	muestra detalles de la review seleccionada. 
5	 | get	| /reviews/airports	| reviews por aeropuertos. Muestra reseñas de todos los aeropuertos.
6	 | get	| /reviews/airports/:id |	muestra detalles de la review seleccionada. 
7	 | get	| /login	| Iniciar sesión
8	 | get	| /signup	| Registrarse
9	 | post	| /login	| Guarda la sesión
10 | post	| /signup	| Guarda la sesión
11 | get	| /close	| Cerrar sesión
12 | get	| /profile |	Página inicio usuario
13 | get	| /reviews/new |	Renderiza nueva reseña
14 | post |	/reviews/new |	Crea reseña
15 | get  |	/reviews/edit?id=xxx |	Renderiza formulario 
16 | post |	/reviews/edit?id=xxx |	Edita su propia reseña 
17 | get	| /reviews/delete?id=xxx |	Eliminar reseña
18 | get	| /data |	visualización data por maps