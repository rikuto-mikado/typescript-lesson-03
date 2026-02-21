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

// Return type annotation (: never) means this function NEVER returns to the caller.
// Unlike void (which returns, just with no value), never means execution stops here —
// either by throwing an error or running an infinite loop.
// TypeScript will give an error if the function could possibly finish without throwing.
function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

function performJob(cb: () => void) {
    
}