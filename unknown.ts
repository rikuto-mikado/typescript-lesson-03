// Avoid using `any` as it disables type checking
function process(val: any) {
    val.log();
}

function process2(val: unknown) {
    if (
        typeof val === "object" &&    // Must be an object (required for `in` operator)
        !!val &&                      // Exclude null (typeof null === "object" in JS)
        "log" in val &&               // Check if `log` property exists
        typeof val.log === "function" // Check if `log` is callable
    ) {
        val.log();
    }
}