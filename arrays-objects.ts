let hobbies: string[] = ['Sports', 'Cooking'];

hobbies.push('Reading');
// it will be error because it's not string array
// hobbies.push(100);

// let users: (string | number)[];
// users = [1, 'Max'];
// users = [5, 1];
// users = ['Rikuto', 'Sam'];

// "?" means the property is optional.
// If omitted, no error occurs.
let users: { name: string | number; age?: number }[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie" }
];

// let data: Array<string | number>;
// data = [1, 'Hello'];
// data = [3, 'World'];

// Array<T> and T[] are the same thing, just different syntax.
let data: Array<{ data: string | number; description?: string | number }> = [
    { data: 1, description: 'Hello' },
    { data: 3, description: 'World' }
]

// let possibleResults: number[];
// possibleResults = [1, 3];
// possibleResults = [10, 22, 35];

// Tuple: fixes the exact number and type of elements.
// let possibleResults: [number, number];
// possibleResults = [1, 3];
// possibleResults = [10, 22, 35];

// [] makes it an array of objects.
// Without [], it would be a single object.
// You can nest arrays (string[]) and objects ({ ... }) inside properties.
let info: { name: string; age: number; hobbies: string[]; role: { description: string; id: number }}[] = [
    { name: 'Max', age: 30, hobbies: ['Sports', 'Cooking'], role: { description: 'Admin', id: 1 } },
    { name: 'Alice', age: 25, hobbies: ['Reading', 'Gaming'], role: { description: 'User', id: 2 } }
];

// {} type accepts all values except null and undefined.
// Primitives (string, number, boolean) also satisfy {} because they have no property constraints.
let val: {} = "abc";
val = 123;
val = true;
val = [];
val = {};