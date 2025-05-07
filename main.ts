{

    //==============> Problem 1 <==============//
     function formatString(input: string, toUpper?: boolean) : string {
      
        return  toUpper === true ? input.toUpperCase(): toUpper === false ? input.toLowerCase():input.toUpperCase();
    
    };

    const result1 = formatString("Hello");          // Output: "HELLO"
    const result2 =formatString("Hello", true);     // Output: "HELLO"
    const result3= formatString("Hello", false);    // Output: "hello"



    //==============> Problem 2 <==============//
     function filterByRating(items: {
        title: string;
        rating: number;
    }[]): {
        title: string;
        rating: number;
    }[]{

        return items.filter((item) => item.rating >= 4);
    };
    
    const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
    ];

    filterByRating(books); 
    // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]


    //==============> Problem 3 <==============//

    // Pore korbo

    //==============> Problem 4 <==============//

      class Vehicle {
      public  make: string;
      public  year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        getInfo() {
            return `Make: ${this.make}, Year: ${this.year}`
        }
    }
    

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }

        getModel() {
            return `Model: ${this.model}`
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
    myCar.getModel();  // Output: "Model: Corolla"




    //==============> Problem 5 <==============//

      function processValue(value: string | number): number{
        return typeof value === "string" ? value?.length : value * 2;
    }

    processValue("hello");    // Output: 5
    processValue(10);         // Output: 20































    //
}