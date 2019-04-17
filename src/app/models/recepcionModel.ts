export class RecepcionModel{
    constructor(
        public fecha?:string,
        public tipo_servicio?:string,
        public no_recepcion?:string,
        public solicitante?:string,
        public tercero?:string,
        public tag?:string,
        public serial?:string,
        public intervalo_medicion?:string,
        public tipo_medicion?:string,
        public tipo_indicacion?:string,
        public intervalo_calibracion?:string,
        public apto?: string,
        public estado?:string,
        public archivo?:string
    ){}
}