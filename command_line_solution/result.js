
function printError(error) {
    console.error(error.message);
}

function printResult(result, methodMessage) {
    const message = `Your result is ${result} ${methodMessage} `;
    console.log(message);
}

function get(query) {

    const input1 = parseInt(query[0]);
    const input2 = parseInt(query[1]);

    if (isNaN(input1) || isNaN(input2) || query.length < 2) {
        const typeError = new Error(`Error. Enter two numbers`);
        printError(typeError);
    } else {

        class Sequence {

            constructor(number, a1) {
                this.number = number;
                this.a1 = a1;
            }

            getMultipleNumbers() {
                let quantity = 0;
                for (let i = this.a1; i <= this.number; i++) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                        quantity++;
                    }
                }
                const multipleNumbersMessage = 'numbers multiples of 3 and not multiple of 5';
                return `${printResult(quantity, multipleNumbersMessage)}`;
            }

            getEvenNumbers() {
                let quantity = 0;
                for (let i = this.a1; i <= this.number; i++) {
                    if (Math.sqrt(i) % 2 === 0) {
                        quantity++;
                    }
                }
                const evenNumbersMessage = 'squares of even numbers';
                return `${printResult(quantity, evenNumbersMessage)}`;
            }

            getPythagoreanTriple() {
                const arr = [];
                for (let a = 0; a <= this.number; a++) {

                    for (let b = a + 1; b <= this.number; b++) {

                        for (let c = b + 1; c <= this.number; c++) {

                            if (a * a + b * b === c * c) {

                                let tripleString = `/${a}, ${b}, ${c}`;
                                arr.push(tripleString, );
                            }
                        }
                    }
                }
                const pythagoreanTripleMessage = 'pythagorean triples';
                return `${printResult(arr, pythagoreanTripleMessage)}`;
            }
        }

        let sequence = new Sequence(input1,input2);
        sequence.getMultipleNumbers();
        sequence.getEvenNumbers();
        sequence.getPythagoreanTriple();
    }

}

module.exports.get = get;
