export default class TabModel {
    private _id:number;
    private _title:string;

    constructor(outside:any){
        TabModel.convert(this, outside, TabModel.PropertyNames);
    }

    static PropertyNames: Array<string> = [
        'id',
        'title'
    ];

    static convert(inside: TabModel, outside: any, propertyNames?: Array<string>): TabModel {
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

    get title():string {
        return this._title;
    }
    set title(value:string) {
        this._title = value;
    }
}