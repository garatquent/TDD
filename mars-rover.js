const Orientation = {
    N: 0,
    S: 2,
    E: 1,
    O: 3
}

const Ordre = {
    G: -1,
    D: 1,
    A: 0
}

function mod(n,m){
    return ((n % m) + m) % m;
}

function move(x,y,orientation,ordres){

    let ordre = ordres.pop()

    if (ordre == Ordre.A) {
        if (orientation%2 == 0) {
            y = mod(y + (1-orientation)*1,100)
        }
        if (orientation%2 == 1) {
            x = mod(x + (2-orientation)*1,100)
        }
    } else {
        orientation = mod(orientation + ordre*1 , 4)
    }
    
    return ([x,y,orientation])
}

module.exports = [Orientation,Ordre,move];