# TypeScript Lesson 03

## What I Learned

<!-- TODO -->

## What Was Difficult

<!-- TODO -->

## Notes

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
