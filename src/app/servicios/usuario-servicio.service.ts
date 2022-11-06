
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UsuarioModificar } from '../dtos/usuario-modificar';
import { ResponseMainDto } from '../dtos/response-main';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {

  constructor(private http: HttpClient) { }

  validarTipoDocumento(tipoDocumento: string): string {
    switch (tipoDocumento) {
      case "Cedula Ciudadania":
        return "01";
      case "Tarjeta Identidad":
        return "02";
      default:
        return "";
    }
  }

  validarTipoUsuario(tipoUsuario: string): string {
    switch (tipoUsuario) {
      case "Estudiante":
        return "01";
      case "Profesor":
        return "02";
      default:
        return "";
    }
  }

  registrar(usuario: UsuarioModificar): Observable<ResponseMainDto> {
    const header = new HttpHeaders();
    // header.append('Content-Type', 'multipart/form-data');
    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<ResponseMainDto>(environment.REGISTRAR_USUARIO, usuario, options);
  }

}
