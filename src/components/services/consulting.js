import { http } from "./config";


export default {
  listar: (cnpj) =>{
    return http.get(cnpj);
  }
}