export class DadosUsuario {
    constructor(
        public role?: string,
        public empresaId?:number,
        public id?: number,
        public exp?: number,
        public email?: string,
        public sub?: string,
        public created?: number
    ){}
}