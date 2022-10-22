
export class Constantes {
    // Tipos de Usuarios
    static TIPOUSUARIO_ADMIN = "000";
    static TIPOUSUARIO_ESTUDIANTE = "01";
    static TIPOUSUARIO_PROFESOR = "02";
    static TIPOUSUARIO_COORDINADOR = "03";
    static TIPOUSUARIO_RECTOR = "04";

    // Nombres de listas desplegables
    static TIPOS_ASIGNACIONES: string[] = ["Seleccionar","Estudiante","Asignatura","Curso"];
    static TIPOS_USUARIO: string[] = ["Seleccionar","Estudiante","Profesor","Coordinador","Rector","Admin"];
    static TIPOS_DOCUMENTOS: string[] = ["Seleccionar","Cedula Ciudadania","Tarjeta Identidad", "Cedula Extranjera"];
    
    static NOMBRES_PERIODO: string[] = ["Seleccionar","1er","2do","3er","4to"];
    
    static FILTROS_PERIODO: string[] = ["Seleccionar","Codigo","Periodo"];
    static FILTROS_CURSO: string[] = ["Seleccionar","Codigo","Curso"];
    static FILTROS_USUARIO: string[] = ["Seleccionar","Codigo","Documento","Nombres","Apellidos","Celular"];

    // Mensajes de alertas
    static ELIMINACION_EXITOSA: string[] = ["modal-content divPrincipalExitoso", "Eliminacion Exitosa", "exito", "Eliminacion realizada con exito...!"];
    static MODIFICACION_EXITOSA: string[] = ["modal-content divPrincipalExitoso", "Modificacion Exitosa", "exito", "Modificacion realizada con exito...!"];
    static REGISTRO_EXITOSO: string[] = ["modal-content divPrincipalExitoso", "Registro Exitoso", "exito", "Registro realizado con exito...!"];

}