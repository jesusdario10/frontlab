export class EquipoModel{
    constructor(
        public tag? : string,
        public nombre? : string,
        public marca? : string,
        public modelo? : string,
        public serial? : string,
        public tipo_equipo?: string,
        public fabricante? : string,
        public ubicacion? : string,
        public dimenciones? : string,
        public estado?: string,
        public tipo_indicacion?: string,
        public intervalo_indicacion?: string,
        public resolucion?: string,
        public anexos?: string,
        public tercero?: string,
        public usuario_creador?:string,
        public usuario_modificador?: string,
        public image?: string,
        public _id?: string
    ){}
}