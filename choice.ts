type MyNumber = number;

// Type alias for reusable union of literal types.
type Role = 'admin' | 'edit' | 'guest' | 'reader';
type User = {
    name: string;
    age: number;
    role: Role;
    permissions: number[];
}

// Union of literal types: restricts the variable to only these specific values.
// Unlike "string", which allows any string, this only allows 'admin', 'edit', 'guest', or 'reader'.
// This is a simpler alternative to enum when you have a small set of fixed values.
let userRole: 'admin' | 'edit' | 'guest' | 'reader' = 'admin';

userRole = 'edit';

let possibleValues: [1 | -1, number];

possibleValues = [1, 100];

// function access(role: 'admin' | 'edit' | 'guest' | 'reader') {

// }

// By using the Role type alias, the repetitive union type can be replaced with just "Role".
function access(role: Role) {

}