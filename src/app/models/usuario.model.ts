export class Usuario{

    constructor(
        public DOC_USUARIO:string,
        public NOMBRE_USUARIO:string,
        public EMAIL_USUARIO:string,
        public PASSWORD_USUARIO?:string,
        public TEL_USUARIO?:string
    ){

    }

}