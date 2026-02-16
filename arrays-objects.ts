let hobbies: string[] = ['Sports', 'Cooking'];

hobbies.push('Reading');

let users: { name: string | number; age?: number }[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie" }
];

let data: Array<{ data: string | number; description?: string | number }> = [
    { data: 1, description: 'Hello' },
    { data: 3, description: 'World' }
]

let info: { name: string; age: number; hobbies: string[]; role: { description: string; id: number }}[] = [
    { name: 'Max', age: 30, hobbies: ['Sports', 'Cooking'], role: { description: 'Admin', id: 1 } },
    { name: 'Alice', age: 25, hobbies: ['Reading', 'Gaming'], role: { description: 'User', id: 2 } }
];

let val: {} = "abc";
val = 123;
val = true;
val = [];
val = {};
