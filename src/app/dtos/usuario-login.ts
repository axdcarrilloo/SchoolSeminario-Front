export class UsuarioLogin {
    tipoUsuario: string;
    usuario: string;
    contrasenna: string;

    constructor(tipoUsuario: string, usuario: string, contrasenna: string) {
        this.tipoUsuario = tipoUsuario;
        this.usuario = usuario;
        this.contrasenna = contrasenna;
    }
}