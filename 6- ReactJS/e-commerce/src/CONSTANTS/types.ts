export interface product{
    id:number,
    image:string,
    title:string,
    description:string,
    price:number,
    quantity?:number
}


export interface ActionProducrs{
    type:string,
    payload:product[]
}


export interface bodyData{
    title: string,
    price: number,
    description: string,
    image: string,
    category: string
}