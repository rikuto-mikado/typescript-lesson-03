let userName: string;
let userAge: number;

userName = "Rikuto";
userAge = 19;

function add(a: number, b = 2): number {
    return a + b;
}

add(5);

add(5, 10);
