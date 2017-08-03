import {IModel} from './interface';

export default class Modle implements IModel {
    private _id:number;
    private _name:string;
    private _age:number;

    constructor(outside:any){
        Modle.convert(this, outside, Modle.PropertyNames);
    }

    static PropertyNames: Array<string> = [
        'id',
        'name',
        'age'
    ];

    static convert(inside: Modle, outside: any, propertyNames?: Array<string>): Modle {
        if (!propertyNames || propertyNames.length === 0) {
            return inside;
        }
        propertyNames.forEach(propertyName => {
            inside[propertyName] = outside[propertyName]
        });
    }

    get id():number {
        return this._id;
    }
    set id(value:number) {
        this._id = value;
    }

    get name():string {
        return this._name;
    }
    set name(value:string) {
        this._name = value;
    }

    get age():number {
        return this._age;
    }
    set age(value:number) {
        this._age = value;
    }
}