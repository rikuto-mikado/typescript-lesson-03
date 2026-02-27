// "!" here is the non-null assertion operator (placed after a value)
// getElementById returns HTMLElement | null, but "!" tells the compiler
// "trust me, this is never null" — forcing it to treat the type as HTMLElement
// Note: "!" placed before a value means logical negation (flips true/false), which is different
const inputEl = document.getElementById("user-name")!;

// if (!inputEl) {
//     throw new Error("There is no element!!");
// }

// ERROR: "!" only removes null, but the type is still HTMLElement which has no .value.
// To access .value, cast it as HTMLInputElement instead.
console.log(inputEl.value);

// --- Optional chaining example ---
// "as HTMLInputElement | null": type assertion — tells the compiler the type, does NOT check the DOM.
// HTMLInputElement (not HTMLElement) is used because only HTMLInputElement has .value.
// "| null" is kept because getElementById can return null if the element doesn't exist.
// "?." is used because null is possible — returns undefined instead of throwing an error.
const inputEl2 = document.getElementById("user-name") as HTMLInputElement | null;
console.log(inputEl2?.value);
