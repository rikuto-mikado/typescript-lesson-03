// Define a set of named constants for user roles.
// By default, enum members are assigned numeric values starting from 0:
// Admin = 0, User = 1, Guest = 2
// enum Role {
//     Admin,
//     User,
//     Guest
// }

// let userRole: UserRole = Role.Admin;

// userRole = Role.Guest;

let userRole: 'admin' | 'user' | 'guest' = 'admin';
userRole = 'user';