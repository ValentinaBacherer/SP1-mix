# CSS

## Boxes
To know where everything goes
* {
  border: 1px solid black;
}
then i can comment this first line, when i'm finished

## Alignment
img {
    margin: auto; /* horizontalmente siempre al medio respecto a su contenedor*/
    height: 90% /*respecto a su contenedor, que puede tener una altura fija 75px ej*/   
}
h1 {
  margin: auto;
}

# Grids
#grid-container {
  display: grid;
  grid-gap: 5px 5px;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  margin-top: 10px;
} /*Para que solo arme las filas y columnas, definiendo tamaño fijo de las cajas, indicandole solo que es 3 y 2 */

.grid-item {
  width: 200px;
  height: 200px;
  margin: 10px;
  text-align: center;
  vertical-align: middle;
  display: flex;
  border: 0.5px solid grey;
  box-shadow: 5px 5px 4px #888888;
}  el text align y el vertical align ordenan todo

# CSS vs JS
Cuando accedemos las propiedades desde javascript estan en camellCase (recicen cadena de texto), en css estan separadas por un guion:
dogImage.style.objectFit = 'cover'

img{
  object-fit = cover;
}

# Atajos teclado
shft +comm +arrleft = selecciona todo hasta la izquierda y luego con flechita hacia arriba puedo seguir seleccionando
op + arrup = Puedo subir lo seleccionado hacia arriba/abajo
cmd / = comentar
shf opt arrdow = duplicar hacia abajo
shf opt arrup = duplicar hacia arriba
ctrl w = switch window
Rename refactoring = seleccionar y presionar F2
Multi cursor editing = seleccionar y opt comannd 

# Optimizar tiempo de carga pagina
No usar las funciones que cambiana nivel de layout, si a nivel de estilo. clase CSS Gabo


# Git Actualizar rama
git checkout main
git pull 
git checkout yourBranch
git merge main