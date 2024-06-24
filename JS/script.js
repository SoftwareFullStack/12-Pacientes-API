// ENDPONIT o URL de la API
const endpoint = "https://fedskillstest.coalitiontechnologies.workers.dev";

// Credenciales de acceso
const username = "coalition";
const password = "skills-test";
const credentials = btoa(`${username}:${password}`);

// Se crea el objeto Headers y se agrega el encabezado de autorización
const myAccess = new Headers();
myAccess.append("Authorization", `Basic ${credentials}`);

// Configurar opciones de solicitud
let requestOptions = {
  method: "GET",
  headers: myAccess,
  redirect: "follow",
};

// Función tipo Async para llamar a la URL de la API
const obtenerDatos = async () => {
  try {
    // Respuesta a la solicitud de la API
    const respuesta = await fetch(endpoint, requestOptions);
    if (!respuesta.ok) {
      throw new Error(
        `Respuesta de red incorrecta: ${respuesta.status} ${respuesta.statusText}`
      );
    }

    // Convertir respuesta en formato JSON
    const datos = await respuesta.json();
    console.log("(LISTA DE PACIENTES) - INFO de la API", datos);

    // Se define un contador global para el ID de los pacientes.
    let pacienteID = 0;

    function crearPacienteHTML(paciente) {

      // Se incrementa el contador para cada ID de los paciente.
      pacienteID++;

      return `
    <div class="pb-2 paciente" data-id="${pacienteID}">
      <div class="d-flex justify-content-between align-items-center paciantesCustom">
        <div class="my-1 d-flex">
          <img src="${paciente.profile_picture}" alt="${paciente.nombre}" class="me-3" style="width: 60px">
          <div class="d-flex flex-column justify-content-center">
            <span class="fw-medium">${paciente.name}</span>
            <span class="">${paciente.gender}, <span>${paciente.age}</span></span>
          </div>
        </div>
        <a href="#"><i class="bi bi-three-dots fs-5 text-dark"></i></a>
      </div>    
    </div>
  `;
    }

    // Se itera y se genera el HTML para cada paciente
    const htmlPacientes = datos.map(crearPacienteHTML);

    // Se enen los elementos HTML en una sola cadena
    const htmlTotalPacientes = htmlPacientes.join("");

    // Se inserta el HTML en el DOM
    const contenedorPacientes = document.getElementById("contenedorPacientes");
    contenedorPacientes.innerHTML = htmlTotalPacientes;

    // Se agrega addEventListener a cada paciente
    document.querySelectorAll(".paciente").forEach((element) => {
      element.addEventListener("click", function () {
        const pacienteId = this.getAttribute("data-id");

        // Check if the patient has ID 4
        if (pacienteId === "4") {
          // Mostrar el gráfico y otros elementos al hacer clic en el paciente
          const bloodPressureChart =
            document.getElementById("bloodPressureChart");
          const seleccionMeses = document.getElementById("seleccionMeses");
          const promedioSistolica =
            document.getElementById("promedioSistolica");
          const comparacionSistolica = document.getElementById(
            "comparacionSistolica"
          );
          const promedioDiastolica =
            document.getElementById("promedioDiastolica");
          const comparacionDiastolica = document.getElementById(
            "comparacionDiastolica"
          );
          const promedioRespiratoria = document.getElementById(
            "promedioRespiratoria"
          );
          const comparacionRespiratoria = document.getElementById(
            "comparacionRespiratoria"
          );
          const promedioTemperatura = document.getElementById(
            "promedioTemperatura"
          );
          const comparacionTemperatura = document.getElementById(
            "comparacionTemperatura"
          );
          const promedioHeardRate =
            document.getElementById("promedioHeardRate");
          const comparacionHeardRate = document.getElementById(
            "comparacionHeardRate"
          );
          const diagnosticTable = document.getElementById("diagnosticTable");
          const photo = document.getElementById("photo");
          const nombrePersona = document.getElementById("nombrePersona");

          if (bloodPressureChart) {
            bloodPressureChart.style.visibility = "visible"; // Show the canvas
            seleccionMeses.style.visibility = "visible"; // Show the chart selection menu
          }
          if (promedioSistolica) {
            promedioSistolica.style.visibility = "visible"; // Show item
          }
          if (comparacionSistolica) {
            comparacionSistolica.style.visibility = "visible"; // Show item
          }
          if (promedioDiastolica) {
            promedioDiastolica.style.visibility = "visible"; // Show item
          }
          if (comparacionDiastolica) {
            comparacionDiastolica.style.visibility = "visible"; // Show item
          }
          if (promedioRespiratoria) {
            promedioRespiratoria.style.visibility = "visible"; // Show item
          }
          if (comparacionRespiratoria) {
            comparacionRespiratoria.style.visibility = "visible"; // Show item
          }
          if (promedioTemperatura) {
            promedioTemperatura.style.visibility = "visible"; // Show item
          }
          if (comparacionTemperatura) {
            comparacionTemperatura.style.visibility = "visible"; // Show item
          }
          if (promedioHeardRate) {
            promedioHeardRate.style.visibility = "visible"; // Show item
          }
          if (comparacionHeardRate) {
            comparacionHeardRate.style.visibility = "visible"; // Show item
          }
          if (diagnosticTable) {
            diagnosticTable.style.visibility = "visible"; // Show item
          }
          if (photo) {
            photo.style.visibility = "visible"; // Show item
          }
          if (nombrePersona) {
            nombrePersona.style.visibility = "visible"; // Show item
          }
        }
        console.log(`Paciente ID: ${pacienteId}`);
      });
    });

    document
      .getElementById("ShowAllInformatios")
      .addEventListener("click", function () {
        const dateBirtd = document.getElementById("dateBirtd");
        const gender = document.getElementById("gender");
        const personlaPhone = document.getElementById("personlaPhone");
        const emergencyPhone = document.getElementById("emergencyPhone");
        const InsuranceProvider = document.getElementById("InsuranceProvider");
        const labsResuts = document.getElementById("labsResuts");

        if (dateBirtd) {
          dateBirtd.style.visibility = "visible"; // Show item
        }
        if (gender) {
          gender.style.visibility = "visible"; // Show item
        }
        if (personlaPhone) {
          personlaPhone.style.visibility = "visible"; // Show item
        }
        if (emergencyPhone) {
          emergencyPhone.style.visibility = "visible"; // Show item
        }
        if (InsuranceProvider) {
          InsuranceProvider.style.visibility = "visible"; // Show item
        }
        if (labsResuts) {
          labsResuts.style.visibility = "visible"; // Show item
        }
      });

    // Filter data to find Jessica Taylor
    const jessicaTaylorData = datos.find(
      (person) => person.name === "Jessica Taylor"
    );

    if (jessicaTaylorData) {
      // Get img element by its ID
      const imgElement = document.getElementById("photo");

      // Set the source (src) of the image with the URL obtained from the API
      imgElement.src = jessicaTaylorData.profile_picture;

      // Function to update Jessica Taylor content in the DOM
      const updateElement = (id, content) => {
        const element = document.getElementById(id);
        if (element) {
          element.innerHTML = content;
        }
      };

      // Format Jessica Taylor's date of birth
      const dateOfBirth = new Date(jessicaTaylorData.date_of_birth);
      const formattedDateOfBirth = dateOfBirth.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      // Update DOM content with patient data
      updateElement("nombrePersona", `<p>${jessicaTaylorData.name}</p>`);
      updateElement("dateBirtd", `<span>${formattedDateOfBirth}</span>`);
      updateElement("gender", `<span>${jessicaTaylorData.gender}</span>`);
      updateElement(
        "personlaPhone",
        `<span>${jessicaTaylorData.phone_number}</span>`
      );
      updateElement(
        "emergencyPhone",
        `<span>${jessicaTaylorData.emergency_contact}</span>`
      );
      updateElement(
        "InsuranceProvider",
        `<span>${jessicaTaylorData.insurance_type}</span>`
      );

      // update Jessica Taylor's lab results table
      function labsResults(laboratorio) {
        return `
          <div class="pb-2">
            <div class="d-flex justify-content-center align-items-center justify-content-between">
              <div class="d-flex justify-content-center align-items-center cursor">
                <div class="d-flex flex-column">
                  <span>${laboratorio}</span>
                </div>
              </div>
              <a href="#" class="bi bi-file-earmark-arrow-down-fill fs-4 text-dark"></a>
            </div>
          </div>
        `;
      }

      // Iterate over the data and generate the HTML for each Jessica Taylor lab
      const htmlLaboratorios = jessicaTaylorData.lab_results.map(labsResults);

      // Join HTML elements into a single string
      const htmlTotalLaboratorio = htmlLaboratorios.join("");

      // Insert the HTML into the DOM
      const contenedorLaboratorios = document.getElementById("labsResuts");
      contenedorLaboratorios.innerHTML = htmlTotalLaboratorio;

      // Update diagnostic table
      const diagnosticTableBody = document
        .getElementById("diagnosticTable")
        .querySelector("tbody");
      diagnosticTableBody.innerHTML = ""; // Clean table before adding rows

      jessicaTaylorData.diagnostic_list.forEach((diagnostic) => {
        const row = document.createElement("tr");
        row.innerHTML = `
              <td>${diagnostic.name}</td>
              <td>${diagnostic.description}</td>
              <td>${diagnostic.status}</td>
          `;
        diagnosticTableBody.appendChild(row);
      });

      const processData = function (historialDiagnostico, limite) {
        const labels = [];
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        let filteredData;

        if (limite) {
          // If limit is a "true" value
          filteredData = historialDiagnostico
            .sort()
            .reverse()
            .slice(0, limite)
            .reverse(); /* Reverse is set again so that it inverts the values ​​of the new range, that is, the 6 months */
        } else {
          // If limit is a "false" value
          filteredData = historialDiagnostico.sort().reverse();
        }

        filteredData.forEach((entry) => {
          const monthIndex = months.indexOf(entry.month.slice(0, 3)); // Get the abbreviated month index
          const label = `${months[monthIndex]}, ${entry.year}`; // Build the label in the desired format
          labels.push(label);
        });

        return labels;
      };

      // Function to get all data for the chart
      const obtenerDatosParaGrafico = (historialDiagnostico, limite) => {
        const etiquetas = processData(historialDiagnostico, limite);
        const datosSistolica = historialDiagnostico
          .slice(limite ? -limite : undefined)
          .map((entrada) => entrada.blood_pressure.systolic.value);
        const datosDiastolica = historialDiagnostico
          .slice(limite ? -limite : undefined)
          .map((entrada) => entrada.blood_pressure.diastolic.value);

        return { etiquetas, datosSistolica, datosDiastolica };
      };

      // Initial data (all data)
      const datosIniciales = obtenerDatosParaGrafico(
        jessicaTaylorData.diagnosis_history
      );

      const ctx = document
        .getElementById("bloodPressureChart")
        .getContext("2d");

      const grafico = new Chart(ctx, {
        type: "line",
        data: {
          labels: datosIniciales.etiquetas,
          datasets: [
            {
              label: "Sistólica",
              data: datosIniciales.datosSistolica,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              tension: 0.4,
            },
            {
              label: "Diastólica",
              data: datosIniciales.datosDiastolica,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true, // Maintain chart aspect ratio when resizing
          scales: {
            y: {
              suggestedMin: 60, // Set a suggested minimum value for the y-axis
              suggestedMax: 180, // Set a suggested maximum value for the y-axis
            },
          },
        },
      });

      // Function to calculate the average systolic and disatolic of jessyca taylor data
      const calcularPromedios = (historialDiagnostico) => {
        const totalSistolica = historialDiagnostico.reduce(
          (sum, entrada) => sum + entrada.blood_pressure.systolic.value,
          0
        );
        const totalDiastolica = historialDiagnostico.reduce(
          (sum, entrada) => sum + entrada.blood_pressure.diastolic.value,
          0
        );

        const totalRespiratoria = historialDiagnostico.reduce(
          (sum, entrada) => sum + entrada.respiratory_rate.value,
          0
        );
        const totalTemperatura = historialDiagnostico.reduce(
          (sum, entrada) => sum + entrada.temperature.value,
          0
        );
        const totalHeardRate = historialDiagnostico.reduce(
          (sum, entrada) => sum + entrada.heart_rate.value,
          0
        );

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
        document.getElementById("promedioSistolica").textContent =
          promedios.promedioSistolica;
        document.getElementById("promedioDiastolica").textContent =
          promedios.promedioDiastolica;

        document.getElementById("promedioRespiratoria").textContent =
          promedios.promedioRespiratoria;
        document.getElementById("promedioTemperatura").textContent =
          promedios.promedioTemperatura;
        document.getElementById("promedioHeardRate").textContent =
          promedios.promedioHeardRate;

        const comparacionSistolica =
          promedios.promedioSistolica > 129
            ? "▲ Más alto que el promedio"
            : "Normal";
        const comparacionDiastolica =
          promedios.promedioDiastolica > 84 ? "▼ Más bajo que el promedio" : "Normal";

        const comparacionRespiratoria =
          promedios.promedioRespiratoria > 20
            ? "▲ Más alto que el promedio"
            : "Normal";
        const comparacionTemperatura =
          promedios.promedioTemperatura > 37
            ? "▲ Más alto que el promedio"
            : "Normal";
        const comparacionHeardRate =
          promedios.promedioHeardRate > 100 ? "Normal" : "▼ Más bajo que el promedio";

        document.getElementById("comparacionSistolica").textContent =
          comparacionSistolica;
        document.getElementById("comparacionDiastolica").textContent =
          comparacionDiastolica;

        document.getElementById("comparacionRespiratoria").textContent =
          comparacionRespiratoria;
        document.getElementById("comparacionTemperatura").textContent =
          comparacionTemperatura;
        document.getElementById("comparacionHeardRate").textContent =
          comparacionHeardRate;
      };

      actualizarPromedios(jessicaTaylorData.diagnosis_history);

      // Function to update the graph with the last 6 months
      const actualizarGrafico = (limite) => {
        const datosActualizados = obtenerDatosParaGrafico(
          jessicaTaylorData.diagnosis_history,
          limite
        );

        grafico.data.labels = datosActualizados.etiquetas;
        grafico.data.datasets[0].data = datosActualizados.datosSistolica;
        grafico.data.datasets[1].data = datosActualizados.datosDiastolica;
        grafico.update();

        // Get filtered data to calculate updated averages
        const datosFiltrados = limite
          ? jessicaTaylorData.diagnosis_history.slice(-limite)
          : jessicaTaylorData.diagnosis_history;
        actualizarPromedios(datosFiltrados);
      };

      // Handle selection change in the <select>
      document
        .getElementById("seleccionMeses")
        .addEventListener("change", (event) => {
          const selectedValue = event.target.value;
          if (selectedValue === "ultimosMeses") {
            actualizarGrafico(6);
          } else {
            actualizarGrafico(null);
          }
        });
    } else {
      // Show message if Jessica Taylor is missing
      document.getElementById("output").textContent =
        "Jessica Taylor no encontrada.";
    }
  } catch (error) {
    // Handle errors in API request
    console.error("Hubo un problema con la operación de búsqueda:", error);
    document.getElementById("nombrePersona").textContent =
      "Error al obtener los datos.";
  }
};

// Invoke the async function
obtenerDatos();