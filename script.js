const data = {
    Mexico: {
        estados: {
            Guadalajara: {
                municipios: {
                    Zapopan: ['Arboleda', 'San Isidro Ejal', 'Los Frailes'],
                    Tlaquepaque: ['Alamo', 'Cantera Colorada', 'Guayabitos'],
                    Tonala: ['Tulipanes', 'Loma Dorada', 'Arroyo Seco']
                }
            },
            Hidalgo: {
                municipios: {
                    Pachuca: ['El paraiso', 'Los Pinos', 'El Puerto'],
                    Actopan: ['Chapultepec', 'Niños Heroes', 'Los Olivos'],
                    Iximiquilpan: ['El bojay', 'El Nogal', 'Cañada Chica']
                }
            }
        }
    },
    Brazil: {
        estados: {
            matoGrosso: {
                municipios: {
                    Cuiaba: ['Agricola do CPA III', 'Nova Alianca', 'Sao Joao'],
                    VarzeaGrande: ['Nova Canaa', 'Agricola 24 de Dezembro', 'Sao Jose'],
                    Rondonopolis: ['Bom Jesus', 'Gleba Rio Vermelho', 'Nova Estrela']
                }
            },
            bahia: {
                municipios: {
                    Salvador: ['Pescadores Z1', 'Pescadores Z2', 'Pescadores Z3'],
                    FeiraDeSantana: ['Nova esperanca', 'Santa Rita', 'Boa Vista'],
                    VitoriaDaConquista: ['Lagoa das Flores', 'Guarani', 'Patagonia']
                }
            }
        }
    }
   
};

function acEstados() {
    const paisSelect = document.getElementById('pais');
    const estadoSelect = document.getElementById('estado');
    estadoSelect.disabled = false;
    estadoSelect.innerHTML = '<option value="" selected disabled>Selecciona un estado</option>'; // Limpiar las opciones anteriores

    const paisSeleccionado = paisSelect.value;

    if (paisSeleccionado in data) {
        for (const estado in data[paisSeleccionado].estados) {
            const option = document.createElement('option');
            option.value = estado;
            option.textContent = estado;
            estadoSelect.appendChild(option);
        }
    }
}

function acMunicipios() {
    const estadoSelect = document.getElementById('estado');
    const municipioSelect = document.getElementById('municipio');
    municipioSelect.disabled = false;
    municipioSelect.innerHTML = '<option value="" selected disabled>Selecciona un municipio</option>';

    const paisSeleccionado = document.getElementById('pais').value;
    const estadoSeleccionado = estadoSelect.value;

    if (paisSeleccionado in data && estadoSeleccionado in data[paisSeleccionado].estados) {
        for (const municipio in data[paisSeleccionado].estados[estadoSeleccionado].municipios) {
            const option = document.createElement('option');
            option.value = municipio;
            option.textContent = municipio;
            municipioSelect.appendChild(option);
        }
    }
}

function acLocalidades() {
    const municipioSelect = document.getElementById('municipio');
    const localidadSelect = document.getElementById('localidad');
    localidadSelect.disabled = false;
    localidadSelect.innerHTML = '<option value="" selected disabled>Selecciona una localidad</option>';

    const paisSeleccionado = document.getElementById('pais').value;
    const estadoSeleccionado = document.getElementById('estado').value;
    const municipioSeleccionado = municipioSelect.value;

    if (paisSeleccionado in data && estadoSeleccionado in data[paisSeleccionado].estados && municipioSeleccionado in data[paisSeleccionado].estados[estadoSeleccionado].municipios) {
        const localidades = data[paisSeleccionado].estados[estadoSeleccionado].municipios[municipioSeleccionado];
        for (const localidad of localidades) {
            const option = document.createElement('option');
            option.value = localidad;
            option.textContent = localidad;
            localidadSelect.appendChild(option);
        }
    }
}

function mostrarDatos() {
    const pais = document.getElementById('pais').value;
    const estado = document.getElementById('estado').value;
    const municipio = document.getElementById('municipio').value;
    const localidad = document.getElementById('localidad').value;

    const datosSeleccionados = `País: ${pais}, Estado: ${estado}, Municipio: ${municipio}, Localidad: ${localidad}`;
    document.getElementById('selectedData').innerText = datosSeleccionados;
    
    document.getElementById('DataCard').style.display = 'block';
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
  }
  