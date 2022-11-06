
export class ResponseMainDto {

    mensaje: string;
    response: any;

    constructor(mensaje: string, respuesta: any) {
        this.mensaje = mensaje;
        this.response = respuesta;
    }

}