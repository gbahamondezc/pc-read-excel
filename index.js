// Importamos la libreria xlsx
const xlsx = require('xlsx');

// Leemos el archivo que queremos subir
// var workbook = xlsx.readFile('./demo_vendedores.xlsx');
var workbook = xlsx.readFile('./demo_vendedores_v2.xlsx');


// Pasamos la hoja que queremos convertir a arreglo de objetos y llamamos a la funcion 
// sheet_to_json para
var result = xlsx.utils.sheet_to_json(workbook.Sheets.Sheet1);


function getLatLong(visit) {
    return {
        lat: visit.Latitud,
        long: visit.Longitud
    };
};

function filterByLoad2(visit) {
    // cuando no sea undefined el valor 
    return visit['Carga 2'] != undefined;
}


// filtramos solo los elementos que tengan carga 2
var withLoad2 = result.filter(filterByLoad2);
var latLongs = result.map(getLatLong);



var latLongsWithLoad2 = result
    .filter(filterByLoad2)
    .map(getLatLong);

console.log('lat longs with loads => ', latLongsWithLoad2);


