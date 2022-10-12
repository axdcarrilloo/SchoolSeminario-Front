import { UsuarioModificar } from "./usuario-modificar";

export class DatosModificar {
    tipoRegistro: String;
    usuario: UsuarioModificar;

    constructor(tipoRegistro: String, usuario: UsuarioModificar) {
        this.tipoRegistro = tipoRegistro;
        this.usuario = usuario;
    }
}