// // ENDPONIT o URL de la API
// const endpoint = "https://fedskillstest.coalitiontechnologies.workers.dev";

// // Credenciales de acceso
// const username = "coalition";
// const password = "skills-test";
// const credentials = btoa(`${username}:${password}`);

// // Se crea el objeto Headers y se agrega el encabezado de autorización
// const myAccess = new Headers();
// myAccess.append("Authorization", `Basic ${credentials}`);

// // Configurar opciones de solicitud
// let requestOptions = {
//   method: "GET",
//   headers: myAccess,
//   redirect: "follow",
// };

// // Función tipo Async para llamar a la URL de la API
// const obtenerDatos = async () => {
//   try {
//     // Respuesta a la solicitud de la API
//     const respuesta = await fetch(endpoint, requestOptions);
//     if (!respuesta.ok) {
//       throw new Error(
//         `Respuesta de red incorrecta: ${respuesta.status} ${respuesta.statusText}`
//       );
//     }

//     // Convertir respuesta en formato JSON
//     const datos = await respuesta.json();
//     console.log("(LISTA DE PACIENTES) - INFO de la API", datos);

//     // Se define un contador global para el ID de los pacientes.
//     let pacienteID = 0;

//     function crearPacienteHTML(paciente) {

//       // Se incrementa el contador para cada ID de los paciente.
//       pacienteID++;

//       return `
//     <div class="pb-2 paciente" data-id="${pacienteID}">
//       <div class="d-flex justify-content-between align-items-center paciantesCustom">
//         <div class="my-1 d-flex">
//           <img src="${paciente.profile_picture}" alt="${paciente.nombre}" class="me-3" style="width: 60px">
//           <div class="d-flex flex-column justify-content-center">
//             <span class="fw-medium">${paciente.name}</span>
//             <span class="">${paciente.gender}, <span>${paciente.age}</span></span>
//           </div>
//         </div>
//         <a href="#"><i class="bi bi-three-dots fs-5 text-dark"></i></a>
//       </div>    
//     </div>
//   `;
//     }

//     // Se itera y se genera el HTML para cada paciente
//     const htmlPacientes = datos.map(crearPacienteHTML);

//     // Se unen los elementos HTML en una sola cadena
//     const htmlTotalPacientes = htmlPacientes.join("");

//     // Se inserta el HTML en el DOM
//     const contenedorPacientes = document.getElementById("contenedorPacientes");
//     contenedorPacientes.innerHTML = htmlTotalPacientes;

//     // Se agrega addEventListener a cada paciente
//     document.querySelectorAll(".paciente").forEach((element) => {
//       element.addEventListener("click", function () {
//         const pacienteId = this.getAttribute("data-id");

//         // Check if the patient has ID 4
//         if (pacienteId === "4") {
//           // Mostrar el gráfico y otros elementos al hacer clic en el paciente
//           const bloodPressureChart = document.getElementById("bloodPressureChart");
//           const seleccionMeses = document.getElementById("seleccionMeses");
//           const promedioSistolica = document.getElementById("promedioSistolica");
//           const comparacionSistolica = document.getElementById("comparacionSistolica");
//           const promedioDiastolica = document.getElementById("promedioDiastolica");
//           const comparacionDiastolica = document.getElementById("comparacionDiastolica");
//           const promedioRespiratoria = document.getElementById("promedioRespiratoria");
//           const comparacionRespiratoria = document.getElementById("comparacionRespiratoria");
//           const promedioTemperatura = document.getElementById("promedioTemperatura");
//           const comparacionTemperatura = document.getElementById("comparacionTemperatura");
//           const promedioHeardRate = document.getElementById("promedioHeardRate");
//           const comparacionHeardRate = document.getElementById("comparacionHeardRate");
//           const diagnosticTable = document.getElementById("diagnosticTable");
//           const photo = document.getElementById("photo");
//           const nombrePersona = document.getElementById("nombrePersona");

//           if (bloodPressureChart) {
//             bloodPressureChart.style.visibility = "visible"; // Show the canvas
//             seleccionMeses.style.visibility = "visible"; // Show the chart selection menu
//           }
//           if (promedioSistolica) {
//             promedioSistolica.style.visibility = "visible"; // Show item
//           }
//           if (comparacionSistolica) {
//             comparacionSistolica.style.visibility = "visible"; // Show item
//           }
//           if (promedioDiastolica) {
//             promedioDiastolica.style.visibility = "visible"; // Show item
//           }
//           if (comparacionDiastolica) {
//             comparacionDiastolica.style.visibility = "visible"; // Show item
//           }
//           if (promedioRespiratoria) {
//             promedioRespiratoria.style.visibility = "visible"; // Show item
//           }
//           if (comparacionRespiratoria) {
//             comparacionRespiratoria.style.visibility = "visible"; // Show item
//           }
//           if (promedioTemperatura) {
//             promedioTemperatura.style.visibility = "visible"; // Show item
//           }
//           if (comparacionTemperatura) {
//             comparacionTemperatura.style.visibility = "visible"; // Show item
//           }
//           if (promedioHeardRate) {
//             promedioHeardRate.style.visibility = "visible"; // Show item
//           }
//           if (comparacionHeardRate) {
//             comparacionHeardRate.style.visibility = "visible"; // Show item
//           }
//           if (diagnosticTable) {
//             diagnosticTable.style.visibility = "visible"; // Show item
//           }
//           if (photo) {
//             photo.style.visibility = "visible"; // Show item
//           }
//           if (nombrePersona) {
//             nombrePersona.style.visibility = "visible"; // Show item
//           }
//         }
//         console.log(`Paciente ID: ${pacienteId}`);
//       });
//     });

//     document.getElementById("ShowAllInformatios").addEventListener("click", function () {
//         const dateBirtd = document.getElementById("dateBirtd");
//         const gender = document.getElementById("gender");
//         const personlaPhone = document.getElementById("personlaPhone");
//         const emergencyPhone = document.getElementById("emergencyPhone");
//         const InsuranceProvider = document.getElementById("InsuranceProvider");
//         const labsResuts = document.getElementById("labsResuts");

//         if (dateBirtd) {
//           dateBirtd.style.visibility = "visible"; // Show item
//         }
//         if (gender) {
//           gender.style.visibility = "visible"; // Show item
//         }
//         if (personlaPhone) {
//           personlaPhone.style.visibility = "visible"; // Show item
//         }
//         if (emergencyPhone) {
//           emergencyPhone.style.visibility = "visible"; // Show item
//         }
//         if (InsuranceProvider) {
//           InsuranceProvider.style.visibility = "visible"; // Show item
//         }
//         if (labsResuts) {
//           labsResuts.style.visibility = "visible"; // Show item
//         }
//       });

//     // Filter data to find Jessica Taylor
//     const jessicaTaylorData = datos.find((person) => person.name === "Jessica Taylor");

//     if (jessicaTaylorData) {
//       // Get img element by its ID
//       const imgElement = document.getElementById("photo");

//       // Set the source (src) of the image with the URL obtained from the API
//       imgElement.src = jessicaTaylorData.profile_picture;

//       // Function to update Jessica Taylor content in the DOM
//       const updateElement = (id, content) => {
//         const element = document.getElementById(id);
//         if (element) {
//           element.innerHTML = content;
//         }
//       };

//       // Format Jessica Taylor's date of birth
//       const dateOfBirth = new Date(jessicaTaylorData.date_of_birth);
//       const formattedDateOfBirth = dateOfBirth.toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       });

//       // Update DOM content with patient data
//       updateElement("nombrePersona", `<p>${jessicaTaylorData.name}</p>`);
//       updateElement("dateBirtd", `<span>${formattedDateOfBirth}</span>`);
//       updateElement("gender", `<span>${jessicaTaylorData.gender}</span>`);
//       updateElement(
//         "personlaPhone",
//         `<span>${jessicaTaylorData.phone_number}</span>`
//       );
//       updateElement(
//         "emergencyPhone",
//         `<span>${jessicaTaylorData.emergency_contact}</span>`
//       );
//       updateElement(
//         "InsuranceProvider",
//         `<span>${jessicaTaylorData.insurance_type}</span>`
//       );

//       // update Jessica Taylor's lab results table
//       function labsResults(laboratorio) {
//         return `
//           <div class="pb-2">
//             <div class="d-flex justify-content-center align-items-center justify-content-between">
//               <div class="d-flex justify-content-center align-items-center cursor">
//                 <div class="d-flex flex-column">
//                   <span>${laboratorio}</span>
//                 </div>
//               </div>
//               <a href="#" class="bi bi-file-earmark-arrow-down-fill fs-4 text-dark"></a>
//             </div>
//           </div>
//         `;
//       }

//       // Iterate over the data and generate the HTML for each Jessica Taylor lab
//       const htmlLaboratorios = jessicaTaylorData.lab_results.map(labsResults);

//       // Join HTML elements into a single string
//       const htmlTotalLaboratorio = htmlLaboratorios.join("");

//       // Insert the HTML into the DOM
//       const contenedorLaboratorios = document.getElementById("labsResuts");
//       contenedorLaboratorios.innerHTML = htmlTotalLaboratorio;

//       // Update diagnostic table
//       const diagnosticTableBody = document
//         .getElementById("diagnosticTable")
//         .querySelector("tbody");
//       diagnosticTableBody.innerHTML = ""; // Clean table before adding rows

//       jessicaTaylorData.diagnostic_list.forEach((diagnostic) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//               <td>${diagnostic.name}</td>
//               <td>${diagnostic.description}</td>
//               <td>${diagnostic.status}</td>
//           `;
//         diagnosticTableBody.appendChild(row);
//       });

//       const procesarDatos = function (historialDiagnostico, limite) {
//         const labels = [];
//         const meses = [
//           "Jan",
//           "Feb",
//           "Mar",
//           "Apr",
//           "May",
//           "Jun",
//           "Jul",
//           "Aug",
//           "Sep",
//           "Oct",
//           "Nov",
//           "Dec",
//         ];

//         let datosFiltrados;

//         if (limite) {
//           // If limit is a "true" value
//           datosFiltrados = historialDiagnostico
//             .sort()
//             .reverse()
//             .slice(0, limite)
//             .reverse(); /* Reverse is set again so that it inverts the values ​​of the new range, that is, the 6 meses */
//         } else {
//           // If limit is a "false" value
//           datosFiltrados = historialDiagnostico.sort().reverse();
//         }

//         datosFiltrados.forEach((datosDeEntrada) => {
//           const mesIndice = meses.indexOf(datosDeEntrada.month.slice(0, 3)); // Get the abbreviated month index
//           const label = `${meses[mesIndice]}, ${datosDeEntrada.year}`; // Build the label in the desired format
//           labels.push(label);
//         });

//         return labels;
//       };

//       // Function to get all data for the chart
//       const obtenerDatosParaGrafico = (historialDiagnostico, limite) => {
//         const etiquetas = procesarDatos(historialDiagnostico, limite);
//         const datosSistolica = historialDiagnostico
//           .slice(limite ? -limite : undefined)
//           .map((entrada) => entrada.blood_pressure.systolic.value);
//         const datosDiastolica = historialDiagnostico
//           .slice(limite ? -limite : undefined)
//           .map((entrada) => entrada.blood_pressure.diastolic.value);

//         return { etiquetas, datosSistolica, datosDiastolica };
//       };

//       // Initial data (all data)
//       const datosIniciales = obtenerDatosParaGrafico(
//         jessicaTaylorData.diagnosis_history
//       );

//       const canvas = document
//         .getElementById("bloodPressureChart")
//         .getContext("2d");

//       const grafico = new Chart(canvas, {
//         type: "line",
//         data: {
//           labels: datosIniciales.etiquetas,
//           datasets: [
//             {
//               label: "Sistólica",
//               data: datosIniciales.datosSistolica,
//               backgroundColor: "rgba(54, 162, 235, 0.2)",
//               borderColor: "rgba(54, 162, 235, 1)",
//               tension: 0.4,
//             },
//             {
//               label: "Diastólica",
//               data: datosIniciales.datosDiastolica,
//               backgroundColor: "rgba(255, 99, 132, 0.2)",
//               borderColor: "rgba(255, 99, 132, 1)",
//               tension: 0.4,
//             },
//           ],
//         },
//         options: {
//           responsive: true, // Maintain chart aspect ratio when resizing
//           scales: {
//             y: {
//               suggestedMin: 60, // Set a suggested minimum value for the y-axis
//               suggestedMax: 180, // Set a suggested maximum value for the y-axis
//             },
//           },
//         },
//       });

//       // Function to calculate the average systolic and disatolic of jessyca taylor data
//       const calcularPromedios = (historialDiagnostico) => {
//         const totalSistolica = historialDiagnostico.reduce((sum, entrada) => sum + entrada.blood_pressure.systolic.value, 0);
//         const totalDiastolica = historialDiagnostico.reduce((sum, entrada) => sum + entrada.blood_pressure.diastolic.value, 0);

//         const totalRespiratoria = historialDiagnostico.reduce((sum, entrada) => sum + entrada.respiratory_rate.value, 0);
//         const totalTemperatura = historialDiagnostico.reduce((sum, entrada) => sum + entrada.temperature.value, 0);
//         const totalHeardRate = historialDiagnostico.reduce((sum, entrada) => sum + entrada.heart_rate.value, 0);

//         const cantidad = historialDiagnostico.length;

//         const promedioSistolica = Math.round(totalSistolica / cantidad);
//         const promedioDiastolica = Math.round(totalDiastolica / cantidad);

//         const promedioRespiratoria = Math.round(totalRespiratoria / cantidad);
//         const promedioTemperatura = Math.round(totalTemperatura / cantidad);
//         const promedioHeardRate = Math.round(totalHeardRate / cantidad);

//         return {
//           promedioSistolica,
//           promedioDiastolica,
//           promedioRespiratoria,
//           promedioTemperatura,
//           promedioHeardRate,
//         };
//       };

//       const actualizarPromedios = (datosFiltrados) => {
//         const promedios = calcularPromedios(datosFiltrados);
//         document.getElementById("promedioSistolica").textContent =
//           promedios.promedioSistolica;
//         document.getElementById("promedioDiastolica").textContent =
//           promedios.promedioDiastolica;

//         document.getElementById("promedioRespiratoria").textContent =
//           promedios.promedioRespiratoria;
//         document.getElementById("promedioTemperatura").textContent =
//           promedios.promedioTemperatura;
//         document.getElementById("promedioHeardRate").textContent =
//           promedios.promedioHeardRate;

//         const comparacionSistolica =
//           promedios.promedioSistolica > 129
//             ? "▲ Más alto que el promedio"
//             : "Normal";
//         const comparacionDiastolica =
//           promedios.promedioDiastolica > 84 ? "▼ Más bajo que el promedio" : "Normal";

//         const comparacionRespiratoria =
//           promedios.promedioRespiratoria > 20
//             ? "▲ Más alto que el promedio"
//             : "Normal";
//         const comparacionTemperatura =
//           promedios.promedioTemperatura > 37
//             ? "▲ Más alto que el promedio"
//             : "Normal";
//         const comparacionHeardRate =
//           promedios.promedioHeardRate > 100 ? "Normal" : "▼ Más bajo que el promedio";

//         document.getElementById("comparacionSistolica").textContent =
//           comparacionSistolica;
//         document.getElementById("comparacionDiastolica").textContent =
//           comparacionDiastolica;

//         document.getElementById("comparacionRespiratoria").textContent =
//           comparacionRespiratoria;
//         document.getElementById("comparacionTemperatura").textContent =
//           comparacionTemperatura;
//         document.getElementById("comparacionHeardRate").textContent =
//           comparacionHeardRate;
//       };

//       actualizarPromedios(jessicaTaylorData.diagnosis_history);

//       // Function to update the graph with the last 6 meses
//       const actualizarGrafico = (limite) => {
//         const datosActualizados = obtenerDatosParaGrafico(
//           jessicaTaylorData.diagnosis_history,
//           limite
//         );

//         grafico.data.labels = datosActualizados.etiquetas;
//         grafico.data.datasets[0].data = datosActualizados.datosSistolica;
//         grafico.data.datasets[1].data = datosActualizados.datosDiastolica;
//         grafico.update();

//         // Get filtered data to calculate updated averages
//         const datosFiltrados = limite ? jessicaTaylorData.diagnosis_history.slice(-limite) : jessicaTaylorData.diagnosis_history;
//         actualizarPromedios(datosFiltrados);
//       };

//       // Handle selection change in the <select>
//       document
//         .getElementById("seleccionMeses")
//         .addEventListener("change", (event) => {
//           const selectedValue = event.target.value;
//           if (selectedValue === "ultimosMeses") {
//             actualizarGrafico(6);
//           } else {
//             actualizarGrafico(null);
//           }
//         });
//     } else {
//       // Show message if Jessica Taylor is missing
//       document.getElementById("output").textContent =
//         "Jessica Taylor no encontrada.";
//     }
//   } catch (error) {
//     // Handle errors in API request
//     console.error("Hubo un problema con la operación de búsqueda:", error);
//     document.getElementById("nombrePersona").textContent =
//       "Error al obtener los datos.";
//   }
// };

// // Invoke the async function
// obtenerDatos();



/////////// CONEXIÓN A LA API /////////////////////

// Enpoint o URL de la API
const url = "https://fedskillstest.coalitiontechnologies.workers.dev";

// Credenciales de acceso (si se llega a ameritar, ya que hay APIs que se acceden directamente)
const usuarioApi = "coalition";
const passwordApi = "skills-test";
const acceso = btoa(`${usuarioApi}:${passwordApi}`);

// Se crea el objeto Headers (encabezado HTTP que se envía junto con la solicitud al servidor para la comunicación web).
const miAccesso = new Headers();
miAccesso.append("Authorization", `Basic ${acceso}`);

// Se configura la opción de solicitud a la API
const opcionRespuesta = {
  method: "GET",
  headers: miAccesso,
  redirect: "follow",
};

// Se crea una variable global datosPacientes para poder accederla desde cualquier lugar del Script
let datosPacientes = [];
// Variable global pacienteSeleccionado para almacenar los datos del paciente seleccionado
let pacienteSeleccionado = null; 


// Función tipo Async para llamar a la URL de la API
const informacionApi = async () => {
  try{
    const respuestaApi = await fetch(url, opcionRespuesta);
    const informacionApi = await respuestaApi.json();
    
    console.log(informacionApi);

    // Se almacenan los datos en la variable global
    datosPacientes = informacionApi;

    // se llama a la función para mostrar los datos en el HTML
    mostrarEnHtml(informacionApi);
  }
  catch(error){
    console.log('Error:', error.message);
  }
  finally{
    console.log('Proceso finalizado');
  }
};
// Se llama a la función informaciónApi
informacionApi();


////////////// MOSTRAR LISTA DE PACIENTES ////////////////////

const mostrarEnHtml = (datosApi) => {
  const contenedorPacientes = document.getElementById('contenedorPacientes');

  datosApi.forEach(elementoApi => {
    // Clonación del template
    const template = document.getElementById('templatePacientes');
    const clonacion = document.importNode(template.content, true);

    // Modificar el contenido clonado con los datos del API
    const imgPaciente = clonacion.getElementById('imgPaciente');
    imgPaciente.src = elementoApi.profile_picture;

    const nombrePaciente = clonacion.querySelector('.nombrePaciente');
    nombrePaciente.textContent = elementoApi.name;

    const generoEdadPaciente = clonacion.querySelector('.generoPaciente');
    generoEdadPaciente.textContent = `${elementoApi.gender}, ${elementoApi.age}`;

    // Agregar el evento de clic al elemento con ID 'eventoClickPaciente' dentro de cada clonación
    const eventoClickPaciente = clonacion.getElementById('eventoClickPaciente');
    eventoClickPaciente.addEventListener('click', () => {
        console.log(`Clic en paciente: ${elementoApi.name}`);

        // Al hacer clic sobre cada paciente se almacenan los datos del paciente en la variable global pacienteSeleccionado
        pacienteSeleccionado = elementoApi;
        
        // Al hacer clic sobre cada paciente se muestran estos datos
        let fotoPersona = document.getElementById("fotoPersona");
        fotoPersona.src = elementoApi.profile_picture;
        
        let nombrePersona = document.getElementById("nombrePersona");
        nombrePersona.textContent = elementoApi.name;

        // Se formatea la fecha de nacimiento del paciente
        let fechaNacimiento = new Date(elementoApi.date_of_birth);
        const fechaNacimientoFormateada = fechaNacimiento.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
        let fechaNacimientoPaciente = document.getElementById("fechaNacimientoPersona");
        fechaNacimientoPaciente.textContent = fechaNacimientoFormateada;

        let generoPersona = document.getElementById("generoPersona");
        generoPersona.textContent = elementoApi.gender;
        
        let numPersonal = document.getElementById("numPersonal");
        numPersonal.textContent = elementoApi.phone_number;
        
        let numEmergency = document.getElementById("numEmergency");
        numEmergency.textContent = elementoApi.emergency_contact;
       
        let provedorSeguMedico = document.getElementById("provedorSeguMedico");
        provedorSeguMedico.textContent = elementoApi.insurance_type;

        // Muestra gráfico de presión arterial
        mostrarGrafico(elementoApi.diagnosis_history);

        // Actualiza los promedios de los valores médicos
        actualizarPromedios(elementoApi.diagnosis_history);

        // Actualiza la tabla de diagnósticos
        actualizarTablaDiagnosticos();

        // Actualiza la lista de laboratorios
        actualizarListaLaboratorios();
    });
    
    // Añadir el elemento clonado al contenedor
    contenedorPacientes.appendChild(clonacion); 
  });
};


////////////// MOSTRAR GRAFICO  ////////////////////

// Función para procesar los datos para el gráfico
const procesarDatos = (historialDiagnostico, limite) => {
  const labels = [];
  const meses = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  let datosFiltrados;

  // Si limite es un valor verdadero
  if (limite) {
    datosFiltrados = historialDiagnostico
      .sort()
      .reverse()
      .slice(0, limite)
      .reverse(); /* Se vuelve a usar Reverse para que invierta los valores del nuevo rango, es decir los 6 meses. */
  } 
  // Si limite es un valor falso
  else {
    datosFiltrados = historialDiagnostico.sort().reverse();
  }

  datosFiltrados.forEach((datosDeEntrada) => {
    const mesIndice = meses.indexOf(datosDeEntrada.month.slice(0, 3)); // Obtiene el índice de meses abreviado
    const label = `${meses[mesIndice]}, ${datosDeEntrada.year}`; // Construye la etiqueta en el formato deseado.
    labels.push(label);
  });

  return labels;
};

// Función para obtener todos los datos del gráfico.
const obtenerDatosParaGrafico = (historialDiagnostico, limite) => {
  const etiquetas = procesarDatos(historialDiagnostico, limite);
  const datosSistolica = historialDiagnostico
    .slice(limite ? -limite : undefined)
    .map((entrada) => entrada.blood_pressure.systolic.value);
  const datosDiastolica = historialDiagnostico
    .slice(limite ? -limite : undefined)
    .map((entrada) => entrada.blood_pressure.diastolic.value);

  return { etiquetas, datosSistolica, datosDiastolica };
};

// Función para mostrar el grafico de presión arterial.
let graficoInicial = null; /* se almacena el grafico en un avaribale vacía */

const mostrarGrafico = (historialDiagnostico) => {
  // Si llega a exixir un grafico se debe destruir para mostrar otro
  if (graficoInicial) {
    graficoInicial.destroy();
  }

  const datosParaGrafico = obtenerDatosParaGrafico(historialDiagnostico);

  const canvas = document.getElementById("bloodPressureChart").getContext("2d");

  graficoInicial = new Chart(canvas, {
    type: "line",
    data: {
      labels: datosParaGrafico.etiquetas,
      datasets: [
        {
          label: "Sistólica",
          data: datosParaGrafico.datosSistolica,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          tension: 0.4,
        },
        {
          label: "Diastólica",
          data: datosParaGrafico.datosDiastolica,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true, // Mantiene la relación de aspecto del gráfico al cambiar el tamaño
      scales: {
        y: {
          suggestedMin: 60, // Establece un valor mínimo sugerido para el eje y
          suggestedMax: 180, // Establece un valor máximo sugerido para el eje y
        },
      },
    },
  });
};

// Función para actualizar el gráfico con los últimos 6 meses.
const actualizarGrafico = (historialDiagnostico) => {
const datosActualizados = obtenerDatosParaGrafico(historialDiagnostico);

  if (graficoInicial){
    graficoInicial.data.labels = datosActualizados.etiquetas;
    graficoInicial.data.datasets[0].data = datosActualizados.datosSistolica;
    graficoInicial.data.datasets[1].data = datosActualizados.datosDiastolica;
    graficoInicial.update();
  }
};

// Maneja el cambio de selección con la etiqueta <select>
document.getElementById("seleccionMeses").addEventListener("change", (event) => {
  const valorSeleccionado = event.target.value;

  if (pacienteSeleccionado) {
    if (valorSeleccionado === "ultimosMeses") {
      // actualizarGrafico(pacienteSeleccionado.diagnosis_history, 6);
      const datosUltimosMeses = pacienteSeleccionado.diagnosis_history.slice(-6);
      actualizarGrafico(datosUltimosMeses);
      actualizarPromedios(datosUltimosMeses);
  } else {
    // actualizarGrafico(pacienteSeleccionado.diagnosis_history, null);
    actualizarGrafico(pacienteSeleccionado.diagnosis_history);
    actualizarPromedios(pacienteSeleccionado.diagnosis_history);
  }
} else {
  console.log("No hay paciente seleccionado.");
}
});


///////// CALCULAR PROMEDIO DE LOS VALORES MÉDICOS //////////////

// Función para calcular el promedio del sistólico y disatólico de los pacientes
const calcularPromedios = (historialDiagnostico) => {
  const totalSistolica = historialDiagnostico.reduce((sum, entrada) => sum + entrada.blood_pressure.systolic.value, 0);
  const totalDiastolica = historialDiagnostico.reduce((sum, entrada) => sum + entrada.blood_pressure.diastolic.value, 0);

  const totalRespiratoria = historialDiagnostico.reduce((sum, entrada) => sum + entrada.respiratory_rate.value, 0);
  const totalTemperatura = historialDiagnostico.reduce((sum, entrada) => sum + entrada.temperature.value, 0);
  const totalHeardRate = historialDiagnostico.reduce((sum, entrada) => sum + entrada.heart_rate.value, 0);

  const cantidad = historialDiagnostico.length;

  const promedioSistolica = Math.round(totalSistolica / cantidad);
  const promedioDiastolica = Math.round(totalDiastolica / cantidad);

  const promedioRespiratoria = Math.round(totalRespiratoria / cantidad);
  const promedioTemperatura = Math.round(totalTemperatura / cantidad);
  const promedioHeardRate = Math.round(totalHeardRate / cantidad);

  return {
    promedioSistolica,
    promedioDiastolica,
    promedioRespiratoria,
    promedioTemperatura,
    promedioHeardRate,
  };
};

const actualizarPromedios = (datosFiltrados) => {
  const promedios = calcularPromedios(datosFiltrados);

  document.getElementById("promedioSistolica").textContent = promedios.promedioSistolica;
  document.getElementById("promedioDiastolica").textContent = promedios.promedioDiastolica;

  document.getElementById("promedioRespiratoria").textContent = promedios.promedioRespiratoria;
  document.getElementById("promedioTemperatura").textContent = promedios.promedioTemperatura;
  document.getElementById("promedioHeardRate").textContent = promedios.promedioHeardRate;
  
  const comparacionSistolica = promedios.promedioSistolica > 129 ? "▲ Más alto que el promedio" : "Normal";
  const comparacionDiastolica = promedios.promedioDiastolica > 84 ? "▼ Más bajo que el promedio" : "Normal";

  const comparacionRespiratoria = promedios.promedioRespiratoria > 20 ? "▲ Más alto que el promedio" : "Normal";
  const comparacionTemperatura = promedios.promedioTemperatura > 37 ? "▲ Más alto que el promedio" : "Normal";
  const comparacionHeardRate = promedios.promedioHeardRate > 100 ? "Normal" : "▼ Más bajo que el promedio";

  document.getElementById("comparacionSistolica").textContent = comparacionSistolica;
  document.getElementById("comparacionDiastolica").textContent = comparacionDiastolica;

  document.getElementById("comparacionRespiratoria").textContent = comparacionRespiratoria;
  document.getElementById("comparacionTemperatura").textContent = comparacionTemperatura;
  document.getElementById("comparacionHeardRate").textContent = comparacionHeardRate;
};

if (pacienteSeleccionado) {
  actualizarPromedios(pacienteSeleccionado.diagnosis_history);
} else {
  console.log("No hay paciente seleccionado.");
};


///////// ACTIALIZAR LISTA DE DIAGNOSTICOS ///////////////

// Actualizar tabla de diagnósticos
const actualizarTablaDiagnosticos = () => {
  const tablaDeDiagnosticos = document.getElementById("tablaDiagnosticos").querySelector("tbody");
  tablaDeDiagnosticos.innerHTML = ""; // Limpia la tabla antes de agregar filas

  if (pacienteSeleccionado && pacienteSeleccionado.diagnostic_list) {
    pacienteSeleccionado.diagnostic_list.forEach((diagnostico) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
                  <td>${diagnostico.name}</td>
                  <td>${diagnostico.description}</td>
                  <td>${diagnostico.status}</td>
              `;
      tablaDeDiagnosticos.appendChild(fila);
    });
  } else {
    console.log("No hay paciente seleccionado o no hay lista de diagnósticos disponible.");
  }
};


////////// ACTUALIZAR LISTA DE LABORATORIOS ////////////////

// Actualizar lista de resultados de laboratorios
const actualizarListaLaboratorios = () => {
  const listaLaboratorios = document.getElementById("listaLaboratorios");
  listaLaboratorios.innerHTML = ""; // Limpia la lista antes de agregar elementos
  
  if (pacienteSeleccionado && pacienteSeleccionado.lab_results) {
    pacienteSeleccionado.lab_results.forEach((laboratorio) => {
      const div = document.createElement("div");
      div.className = "pb-2";
      div.innerHTML = `
        <div class="d-flex justify-content-center align-items-center justify-content-between laboratorioCustom">
          <div class="d-flex justify-content-center align-items-center cursor">
            <div class="d-flex flex-column">
              <span>${laboratorio}</span>
            </div>
          </div>
          <a href="#" class="bi bi-file-earmark-arrow-down-fill fs-4 text-dark"></a>
        </div>
      `;
      listaLaboratorios.appendChild(div);
    });
  } else {
    console.log("No hay paciente seleccionado o no hay resultados de laboratorios disponibles.");
  }
};
