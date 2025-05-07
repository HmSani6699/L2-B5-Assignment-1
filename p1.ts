{

    function formatString(input: string, toUpper?: boolean) : string {
        // if (toUpper === true) {
        //     return input.toUpperCase();
        // } else if (toUpper === false) {
        //      return input.toLowerCase();
        // } else {
        //     return input.toUpperCase();
        // }

        return  toUpper === true ? input.toUpperCase(): toUpper === false ? input.toLowerCase():input.toUpperCase();
    
    };

    const result = formatString("Hello");          // Output: "HELLO"
    const result1 =formatString("Hello", true);   // Output: "HELLO"
    const result2= formatString("Hello", false);  // Output: "hello"

    console.log(result2);
    



    
}