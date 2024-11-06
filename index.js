const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const { comprobarNomberSO, comprobarVersionSO, comprobarProcesador } = require("./comprobaciones");

const rl = readline.createInterface({ input, output });

function preguntar (pregunta) {
  return new Promise((resolve, reject) => {
    rl.question(pregunta, (respuesta) => resolve(respuesta));
  });
}

async function realizarPreguntas () {
  try {
    const so = await preguntar(
      "Ingrese el nombre del sistema operativo requerido[Windows, Linux, etc]:"
    );
    const version = await preguntar(
      "Ingrese version del sistema operativo requerido[numero]: "
    );
    const cpu = await preguntar(
      "Ingrese el procesador requerido[Inter Core, AMD ryzen]:"
    );
    console.log(comprobarNomberSO(so));
    console.log(comprobarVersionSO(version));
    comprobarProcesador(cpu);
  } catch (err) {
    console.log(err);
  } finally {
    rl.close();
  }
}

realizarPreguntas();
