const so = require("node:os");

function comprobarNomberSO (respuesta) {
  try {
    if (respuesta.trim() === "") {
      return "Debe ingresar un sistema operativo";
    } else {
      const regex = /[$!#%-_=<>]/g;
      const respuestaTesteada = respuesta.replace(regex, "");
      if (so.version().toLowerCase().includes(respuestaTesteada)) {
        return "Tu Sistema operativo es compatible";
      } else {
        return "Tu sistema operativo no es compatible";
      }
    }
  } catch {
    return "Error";
  }
}

function comprobarVersionSO (respuesta) {
  const regex = /[A-B a-b $!#%-_=<>]/g;
  if (respuesta.trim() === "") {
    return "Ingresa una version correcta";
  } else {
    const version = so.version().replace(regex, "");
    return Number.isInteger(+respuesta) && version >= respuesta ? "La version de tu sistema operativo es compatible" : "La version de tu sistema operativo no es compatible";
  }
}

function comprobarProcesador (respuesta) {
  console.log(so.cpus()[0].model);
}

module.exports = { comprobarNomberSO, comprobarVersionSO, comprobarProcesador };
/* return so.type());
return so.platform());
 */
