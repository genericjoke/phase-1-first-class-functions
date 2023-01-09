function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function named() {
        return "ah";
    }
}
function returnsAnAnonymousFunction() {
    return function () {
        return "ahhh";
    }
}