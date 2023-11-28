function romanize(n){
    let romanum = "";

    if (n >= 50){
        romanum += "L"
        n -= 50
    }

    if (n >= 40){
        romanum += "XL"
        n -= 40
    }

    while (n >= 10){
        romanum += "X";
        n -= 10
    }

    if (n == 9){
        romanum += "IX"
        n -= 9
    }

    if (n >= 5){
        romanum += "V"
        n -= 5
    }

    if (n == 4){
        romanum += "IV"
        n -= 4
    }

    while (n >= 1) {
        romanum += "I";
        n -= 1
    }


    return(romanum)
}

module.exports = romanize;