{

  // ts-node-dev --respawn --transpile-only server.ts
 
    //==============> Problem 1 <==============//
     function formatString(input: string, toUpper?: boolean) : string {
      
        return  toUpper === true ? input.toUpperCase(): toUpper === false ? input.toLowerCase():input.toUpperCase();
    
    };

    const result1 = formatString("Hello");          // Output: "HELLO"
    const result2 =formatString("Hello", true);     // Output: "HELLO"
    const result3= formatString("Hello", false);    // Output: "hello"



}