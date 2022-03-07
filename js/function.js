function checkAge(age) {
  if (age > 17) {
    return true;
  } else {
    return confirm("¿Tenés permiso de tus padres?");
  }
}

let age = prompt("¿Qué edad tenés?");

if (checkAge(age)) {
  alert("Acceso otorgado");
} else {
  alert("Acceso denegado");
}
