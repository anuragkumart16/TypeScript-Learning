// this is a union type 
let subs : string | number = '1M' 

// we can also give a enum type of values in variables
let status : "pending" | "success" | "error" = "pending"


let val : any = 25
val = "Now I'm a string"
val = true

console.log({subs, status, val})