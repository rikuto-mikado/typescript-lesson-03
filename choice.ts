// Union of literal types: restricts the variable to only these specific values.
// Unlike "string", which allows any string, this only allows 'admin', 'edit', or 'guest'.
// This is a simpler alternative to enum when you have a small set of fixed values.
let userRole: 'admin' | 'edit' | 'guest' = 'admin';

userRole = 'edit';

let possibleValues: [1 | -1, number];

possibleValues = [1, 100];