/*
    model的接口定义
*/
export interface IModel{
    id:number;
    name:string;
    age:number;
}

export interface IHomeModel {
    list:Array<IModel>;
}