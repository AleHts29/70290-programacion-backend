import { fileURLToPath } from 'url';
import { dirname } from 'path';

/**
*
* fileURLToPath: Esta función garantiza la decodificación correcta de los caracteres codificados en porcentaje, así como una cadena de ruta absoluta válida multiplataforma.
*
*/

/**
*
* dirname: Devuelve el nombre de directorio de una ruta. Similar al comando dirname de Unix.
*
*/

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default __dirname;

// __dirname='/Users/ale-hts/Coffee_Coder/CoderHouse/BackEnd/70290_Comision/Clase_09/src'+"/views"