export class UsuarioLogin {
    tipoUsuario: String;
    usuario: String;
    contrasenna: String;

    constructor(tipoUsuario: String, usuario: String, contrasenna: String) {
        this.tipoUsuario = tipoUsuario;
        this.usuario = usuario;
        this.contrasenna = contrasenna;
    }
}