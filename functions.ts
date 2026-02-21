// Parameter type annotations (a: number, b: number) restrict what values can be passed in.
// Return type annotation (: number) restricts what value the function can return.
// Both guard against mistakes, but at different points: parameters at the call site, return type at the implementation.
function add(a: number, b: number) : number {
    return a + b;
}

// Return type annotation (: void) means this function returns nothing.
// If omitted, TypeScript infers it automatically, but writing it explicitly
// prevents mistakes — e.g., accidentally returning a value will cause an error.
function log(message: string) : void {
    console.log(message);
}