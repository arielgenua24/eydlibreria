export class user {
    private _name: string;
    pleasures: string[];
    constructor(
        name: string,
        pleasures: string[],
    ){
    this._name = name;
    this.pleasures = pleasures;
    }

    userPleasures(pleasures: string){
        this.pleasures.push(pleasures);
        console.log(`A el usuario: ${this._name}, le gusta ${pleasures} `)

    }
}