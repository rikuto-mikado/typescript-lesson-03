// `?` makes the parameter optional — it can be omitted, in which case it becomes `undefined`
function generateError(msg?: string) {
    throw new Error(msg);
}

generateError("An error occurred");

type User = {
    name: string;
    age: number;
    role?: 'admin' | 'guest'; // optional property — can be omitted, in which case it becomes `undefined`
}

// `||` returns the left side if truthy, otherwise returns the right side
let input = '';
const didProvideInput = input || false;

// `??` returns the left side unless it is null or undefined ('' and 0 are kept as-is)
const didProvideInput2 = input ?? false;

// Difference between `||` and `??`:
// `||` treats '', 0, false, null, undefined as "no value" → returns right side
// `??` only treats null and undefined as "no value" → returns right side
//
// '' || 'default'  → 'default'  ('' is falsy)
// '' ?? 'default'  → ''         ('' is not null/undefined, so keep it)