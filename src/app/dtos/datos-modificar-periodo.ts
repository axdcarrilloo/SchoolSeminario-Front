import { PeriodoRegistrar } from "./periodo-registrar";

export class DatosModificarPeriodo {
    tipoRegistro: String;
    periodo: PeriodoRegistrar;

    constructor(tipoRegistro: String, periodo: PeriodoRegistrar) {
        this.tipoRegistro = tipoRegistro;
        this.periodo = periodo;
    }
}