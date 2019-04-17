export class RecepcionModel{
    constructor(
        public fecha?:string,
        public tipo_servicio?:string,
        public no_recepcion?:string,
        public solicitante?:string,
        public direccion?:string,
        public telefono?:string,
        public email?:string,
        public tercero?:string,
        public tag?:string,
        public serial?:string,
        public intervalo_medicion?:string,
        public tipo_medicion?:string,
        public tipo_indicacion?:string,
        public intervalo_calibracion?:string,
        public estado_equipo?:string,
        public observaciones?:string,
        public estado_recepcion?:string,
        public apto?: string,
    ){}
}