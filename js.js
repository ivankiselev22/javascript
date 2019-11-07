if (num < 49) {
    console.log("neverno")
} else if (num > 100) {
    console.log("mnogovato")
} else {
    console.log('verno')
}

(num == 50) ? console.log('verno') : console.log("neverno");

switch (num) {
    case num < 49:
        console.log("neverno");
        break;
    case num > 100:
        console.log("mnogovato");
        break;
    case num > 80:
        console.log('vse yesho mnogo');
        break;
    case 50:
        console.log('verno');
        break;
    default:
        console.log('что-то пошло не так');
        break;
}


/* while (num < 55) {
    console.log(num);
    num++;
} */


let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i)
}