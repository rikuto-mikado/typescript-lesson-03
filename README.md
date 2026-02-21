# TypeScript Lesson 03

## What I Learned

<!-- TODO -->

## What Was Difficult

<!-- TODO -->

## Notes

### `void` vs `never` — Return Type Annotations

Both `void` and `never` are used as return types for functions that don't return a useful value, but they mean very different things.

**`void`** — the function finishes and returns to the caller, but has no return value:

```ts
function log(message: string): void {
    console.log(message);
    // execution ends here, then goes back to the caller ✅
}
```

**`never`** — the function never returns to the caller at all:

```ts
function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
    // throws an error, so execution NEVER comes back to the caller ❌
}
```

Think of it like this:
- `void` = "I finished my job, but I have nothing to give back."
- `never` = "I never finished. I either crashed (throw) or ran forever (infinite loop)."

If you write `: never` but the function could possibly finish normally, TypeScript will give you an error:

```ts
function broken(msg: string): never {
    console.log(msg);
    // Error! This function can finish normally — it should be void, not never
}
```

| | `void` | `never` |
|---|---|---|
| Returns to caller? | Yes | No |
| Has a return value? | No | No |
| Typical use case | Functions that just do something (e.g. logging) | Functions that always throw or loop forever |
| Can be omitted? | Yes (TypeScript infers it) | No (must be explicit) |

### Union of Literal Types vs Enum

Both can restrict a variable to a fixed set of values, but they differ in syntax and behavior.

**Union of Literal Types** — simple, inline, uses actual string values:

```ts
let role: 'admin' | 'edit' | 'guest' = 'admin';
role = 'edit';    // OK
role = 'banana';  // Error
```

**Enum** — requires a separate declaration, uses numeric values by default:

```ts
enum Role {
    Admin,   // 0
    Edit,    // 1
    Guest    // 2
}
let role: Role = Role.Admin;
role = Role.Edit;
```

| | Union of Literal Types | Enum |
|---|---|---|
| Syntax | `'admin' \| 'edit' \| 'guest'` | `enum Role { Admin, Edit, Guest }` |
| Values | Actual strings | Numbers by default (0, 1, 2) |
| Simplicity | Inline, no extra declaration | Requires separate definition |
| Best for | Small, simple sets of values | Larger sets or when you need numeric mapping |

### `type` vs `let`

`type` and `let` live in completely different worlds.

- **`type`** — defines a name for a type. Exists only at compile time and is erased from the output JavaScript.
- **`let`** — declares a variable that holds an actual value. Exists at runtime.

```ts
type Role = 'admin' | 'edit' | 'guest' | 'reader'; // blueprint (compile-time only)
let userRole: Role = 'admin';                        // actual data (runtime)
```

Think of it like a blueprint vs a building:
- `type` is the blueprint — it only exists on paper and describes the shape.
- `let` is the actual building — it exists in reality and takes up space.

| | `type` | `let` |
|---|---|---|
| Purpose | Give a name to a type | Declare a variable to hold a value |
| Exists at runtime | No (erased after compilation) | Yes |
| Can be reassigned | No | Yes |
| Uses memory | No | Yes |
