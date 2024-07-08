import axios from "axios";
import mapicgcConfig from "../mapicgc-config.json";

const urlConfigICGC = "https://tilemaps.icgc.cat/cdn/configs/mapicgc-config.json";
const timeOut = 5000;

class Config {
  static async getConfigICGC() {
    try {
      const response = await axios.get(urlConfigICGC, { timeout: timeOut });
      if (response.data) {
      
        return response.data;
      } else {
        console.log("Resposta sense dades:", response);
        return mapicgcConfig;
      }
    } catch (error) {
      if (error.response) {
        console.error("Error de resposta:", error.response.data);
        console.error("Codi d'estat:", error.response.status);
      } else if (error.request) {
        console.error("No s'ha rebut resposta del servidor:", error.request);
      } else {
        console.error("Error:", error.message);
      }
      return mapicgcConfig; 
    }
  }
}

export default Config;