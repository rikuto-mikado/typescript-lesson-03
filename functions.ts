// Parameter type annotations (a: number, b: number) restrict what values can be passed in.
// Return type annotation (: number) restricts what value the function can return.
// Both guard against mistakes, but at different points: parameters at the call site, return type at the implementation.
function add(a: number, b: number) : number {
    return a + b;
}