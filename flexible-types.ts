// any: disables type checking, accepts any value (avoid when possible)
// let age: any = 19;

// "|" is a union type operator: allows the variable to hold either type
let age: string | number = 19;

age = '20';
// it cant be assigned to other types except string or number
// age = true;
// age = {};
// age = [];
