export class UserModel{
    constructor(
        public nombre?:  string,
        public correo?:  string,
        public password?:string,
        public usuario_creador? : string,
        public usuario_modificador? : string,
        public image? : string,
        public role?:    string,
        public estado? : string, 
        public tercero? : string,
        public _id? : string
    ){}
}