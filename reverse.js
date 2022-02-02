const greetings = 'Hello!, How are you?';
function getReverse(letter) {
    let revers = '';
    for (const element of letter) {
        revers = element + revers;
    }
    return revers;
}

const myRevers = getReverse(greetings);
console.log(myRevers);