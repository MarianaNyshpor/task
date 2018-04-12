class Sequence {
   constructor(number, a1) {
   	 this.number = number;
   	 this.a1 = a1;
   }

   get multipleNumbers() {
   	 let quantity = 0;
     for (let i = this.a1; i <= this.number; i++) {
       if (i % 3 === 0 && i % 5 !== 0) {
    	   quantity++;
       }
     }
     return quantity;
   }

   get evenNumbers() {
   	 let quantity = 0;
     for (let i = this.a1; i <= this.number; i++) {
       if (Math.sqrt(i) % 2 === 0) {
         quantity++;
       }
     }
     return quantity;
   }

   get pythagoreanTriple() {
 	   const arr = [];
	   for (let a = 0; a <= this.number; a++) {

		   for (let b = a + 1; b <= this.number; b++) {

		     for (let c = b + 1; c <= this.number; c++ ){

			     if (a*a + b*b === c*c) {

			       let tripleString = `${a}, ${b}, ${c}`;
			       arr.push(tripleString);
			     }
		     }
		   }
	   }
	   return arr;
 	 } 
 }

 let sequence = new Sequence(30, 1);
 console.log(sequence.multipleNumbers);
 console.log(sequence.evenNumbers);
 console.log(sequence.pythagoreanTriple);

 let sequence2 = new Sequence(50, 2);
 console.log(sequence2.multipleNumbers);
 console.log(sequence2.evenNumbers);
 console.log(sequence2.pythagoreanTriple);