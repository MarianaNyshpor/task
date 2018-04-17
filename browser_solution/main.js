const firstInputValue = document.getElementById('firstNumberInput');
const secondInputValue = document.getElementById('secondNumberInput');
const outputOne = document.getElementById('numberOutputOne');
const outputTwo = document.getElementById('numberOutputTwo');

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
        return quantity;
    }

    getEvenNumbers() {
        let quantity = 0;
        for (let i = this.a1; i <= this.number; i++) {
            if (Math.sqrt(i) % 2 === 0) {
                quantity++;
            }
        }
        return quantity;
    }

    getPythagoreanTriple() {
        const arr = [];
        for (let a = 0; a <= this.number; a++) {

            for (let b = a + 1; b <= this.number; b++) {

                for (let c = b + 1; c <= this.number; c++) {

                    if (a * a + b * b === c * c) {

                        const tripleString = `/${a}, ${b}, ${c}`;
                        arr.push(tripleString);
                    }
                }
            }
        }
        if (arr.length > 0) {
          return arr;
        }
         return 0;
        
        
    }
}

firstInputValue.addEventListener('input', ()=>{
    if (isNaN(parseInt(firstInputValue.value, 10))) {
        outputOne.innerHTML = 'Enter number!';
    } else {

        const sequence = new Sequence(parseInt(firstInputValue.value, 10));
        const message = `You have ${sequence.getPythagoreanTriple()} pythagorean triples before your number`;
        outputOne.innerHTML = message;
    }
}
);

secondInputValue.addEventListener('input', () => {
    if (isNaN(parseInt(secondInputValue.value, 10))) {
        outputTwo.innerHTML = 'Enter number!';
    } else {
        const sequence = new Sequence(parseInt(firstInputValue.value, 10), parseInt(secondInputValue.value, 10));
        const message = `You have ${sequence.getMultipleNumbers()} numbers which are multiples of 3 and are not multiples of 5 
                   and ${sequence.getEvenNumbers()} squares of even numbers between your numbers`;
        outputTwo.innerHTML = message;
    }
});

    