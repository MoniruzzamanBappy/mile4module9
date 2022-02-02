const names = ['bappy', 'aman', 'badhon', 'biplob', 'utpol', 'sajib', 'bappy', 'aman', 'opu', 'himal', 'opu'];

function checkDuplicate(name) {
    const unique = [];
    for (const element of name) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const myArray = checkDuplicate(names);
console.log(myArray);