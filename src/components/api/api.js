export const getData = ()=>{
    return fetch('https://dummyjson.com/products').then(res => res.json())
}