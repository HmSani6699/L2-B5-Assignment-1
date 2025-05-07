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


}