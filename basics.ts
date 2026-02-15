// Type annotations: restrict what values a variable can hold
let userName: string;
let userAge: number;

userName = "Rikuto";
userAge = 19;

// Parameter types + return type
// function add(a: number, b: number): number {
//     return a + b;
// }

function add(a: number, b = 2): number {
    return a + b;
}

add(5);

add(5, 10);