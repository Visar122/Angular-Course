import { Injectable } from "@angular/core";


export interface signup{
    name:string,
    password:string,
    email:string
}
export interface Login{
    email:string,
    password:string;

}
export interface Product{
    ProductName:string,
    Price:number,
    Category:string,
    Color:string,
    Description:string,
    Image:string,
    id:number,
    Quantity:undefined|number

}