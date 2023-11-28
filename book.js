function Book(t) {
    return {
        title : t
    }
}

function Cart() {
    return {
        books : [],
        price : function () {
            let price = 0
            var occBook = new Object()
            while (this.books.length > 0) {

                newBook = this.books.pop()
                let isNew = true;

                for(var key in occBook){
                    if (key === newBook.title) {
                        occBook[key] += 1;
                        isNew = false;
                    }
                }

                if (isNew) {
                    occBook[newBook.title] = 1;
                }
            }

            let double4Stack = false;

            while (Object.keys(occBook).length > 0) {
                switch (Object.keys(occBook).length) {
                    case 1:
                        price += 8
                        break;

                    case 2:
                        price += 15.2
                        break;

                    case 3:
                        if (double4Stack) {
                            price += 21.2
                            double4Stack = false;
                        } else {
                            price += 21.6
                        }
                        break;

                    case 4:
                        price += 25.6
                        break;

                    case 5:
                        price += 30
                        double4Stack = true;
                        break;
                }
                for(var key in occBook){
                    occBook[key] -= 1
                    if (occBook[key] == 0){
                        delete occBook[key]
                    }
                }
            }

            return parseFloat(price.toFixed(2))
        }
    }
}

module.exports = [Book,Cart];