export class OrdenModel{
    constructor(
        public oti? : number,
        public fecha_solicitud? : string,
        public fecha_requerida? : string,
        public fecha_ejecucion? : string,
        public oti_cliente? : string,
        public centro_costo? : string,
        public ubicacion? : string,
        public solicitante? : string,
        public tercero? : string,
        public usuario_creador? : string,
        public usuario_modificador?: string,
        public items? : Item,
        public estado?: string,
        public _id?: string
    ){}
}

export class Item{
    constructor(
        public tag? : string,
        public nombre? : string,
        public marca? : string,
        public modelo? : string,
        public serial? : string,
        public tipo_equipo?: string,
        public fabricante? : string,
        public ubicacion? : string,
        public tipo_indicacion?: string,
        public intervalo_indicacion?: string,
        public resolucion?: string,
        public anexos?: string,
        public img?: string,

    ){}
}