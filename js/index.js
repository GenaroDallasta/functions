let producto = prompt("¿Qué estabas buscando?");
let cantidad = prompt("¿Qué cantidad buscabas?");

function compra(a, b) {
  if (a != "hamburguesa") {
    alert("No tenemos eso, no te gustaria buscar otra cosa?");
  } else if (a === "hamburguesa" && b == 2) {
    alert("Solo por hoy 2 x 1! Te quedan a $250 cada una!");
  } else if (a === "hamburguesa" && b == 1) {
    alert("Serian $500");
  }
}

compra(producto, cantidad);
