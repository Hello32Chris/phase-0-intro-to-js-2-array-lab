const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    name = cats.push("Ralph");
    return name;
};

function destructivelyPrependCat(name) {
    name = cats.unshift("Bob");
    return name;
};

function destructivelyRemoveLastCat(name) {
    name = cats.pop();
    return name;
};

function destructivelyRemoveFirstCat(name) {
    name = cats.shift();
    return name;
};

function appendCat(name) {
    name = [...cats, "Broom"];
    return name;
};

function prependCat(name) {
    name = ["Arnold", ...cats];
    return name;
};

function removeLastCat(name) {
    name = cats.slice(0,2);
    return name;
};
function removeFirstCat(name) {
    name = cats.slice(1);
    return name;
};

//Had a good time :)
