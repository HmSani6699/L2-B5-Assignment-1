{
    //==============> Problem 1 <==============//
     function formatString(input: string, toUpper?: boolean) : string {
        return  toUpper === true ? input.toUpperCase(): toUpper === false ? input.toLowerCase():input.toUpperCase();
    };

    //==============> Problem 2 <==============//
    function filterByRating(items: {title: string;rating: number;}[]): {
        title: string;
        rating: number;
    }[]{
        return items.filter((item) => item.rating >= 4);
    };

    //==============> Problem 3 <==============//
    function concatenateArrays<T>(...arrays: T[][]): T[]{
        const result = arrays.reduce((prev, current) => [...prev, ...current]);
        return result;
    }

    //==============> Problem 4 <==============//
      class Vehicle {
      private  make: string;
      private  year: number;

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

    //==============> Problem 5 <==============//
    function processValue(value: string | number): number{
        return typeof value === "string" ? value?.length : value * 2;
    }

    //==============> Problem 6 <==============//
    interface Product {
        name: string;
        price: number;
    }
    
    function getMostExpensiveProduct(products: Product[]): Product | null {
        const result = products?.reduce((prev, current) => (prev.price > current?.price ? prev : current), products[0]);
        return result || null
    }
    
    //==============> Problem 7 <==============//
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    
    function getDayType(day: Day): string{
        if (Day[day] === "Saturday" || Day[day] === "Sunday") {
            return "Weekend"
        } else {
            return "Weekday"
        }
    }

    //==============> Problem 8 <==============//
     async function squareAsync(n: number): Promise<number>{
        return new Promise<number>((resolve, reject) => {
           if (n && n >0) {
               setTimeout(() => {
                   resolve(n*n)
               },1000)
           } else {
               reject('Error: Negative number not allowed')
           }
       })
   }
    




























    //
}