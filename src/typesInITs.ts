// if you hover above the variable, you will see that typescript has inferred its type as string
let drink = "chai"

// typescript can understand and assign basic types like string, number, boolean etc.
let num = Math.random() > 0.5 ? 10 : "hello"

// most of the times we define the types explicitly its called type annotation
let age: number = 25
let userName: string = "Anurag"
let isLoggedIn: boolean = false

// arrays
let fruits: string[] = ["apple", "banana", "mango"]
let numbers: number[] = [1, 2, 3, 4, 5]

// object type annotation
let person: { name: string; age: number } = {
    name: "Anurag",
    age: 25
}

// function type annotation
function add(a: number, b: number): number {
    return a + b
}

// union types
let mixed: (string | number)[] = ["hello", 10, "world", 20]

// any type (avoid using any as much as possible)
let randomValue: any = 10
randomValue = "hello"
randomValue = true

// type alias
type User = {
    id: number
    name: string
    isAdmin: boolean
}

let adminUser: User = {
    id: 1,
    name: "Admin",
    isAdmin: true
}

let regularUser: User = {
    id: 2,
    name: "John",
    isAdmin: false
}

// function with type alias
function getUserInfo(user: User): string {
    return `User ${user.name} has ID ${user.id} and admin status is ${user.isAdmin}`
}

console.log(getUserInfo(adminUser))
console.log(getUserInfo(regularUser))