const inputEl = document.getElementById("user-name")

if (!inputEl) {
    throw new Error("There is no element!!");
}

console.log(inputEl.value);