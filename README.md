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
