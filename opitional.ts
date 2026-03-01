// `?` makes the parameter optional — it can be omitted, in which case it becomes `undefined`
function generateError(msg?: string) {
    throw new Error(msg);
}

generateError("An error occurred");

type User = {
    name: string;
    age: number;
    role?: 'admin' | 'guest'; // optional property — can be omitted, in which case it becomes `undefined`
}