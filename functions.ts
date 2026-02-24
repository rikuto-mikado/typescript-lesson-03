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

const logMsg = (msg: string) => {
    console.log(msg);
};

// The parameter cb is itself a function: it takes a string and returns nothing (void).
// This pattern is called a "callback" — you pass in a function to be called later.
// The ): void at the end is performJob's own return type (it returns nothing).
function performJob(cb: (msg: string) => void): void {
    cb("Job performed");
}

performJob(logMsg);

type Users = {
    name: string;
    age: number;
    greet: () => string;
}

let user: Users = {
    name: "Rikuto",
    age: 19,
    // Must use function() here, not an arrow function.
    // Arrow functions don't have their own `this`, so this.name / this.age would not work.
    greet: function() {
        console.log(`Hello, my name is ${this.name} and ${this.age} years old.`);
        return `Hello, my name is ${this.name} and ${this.age} years old.`;
    }
}

user.greet();