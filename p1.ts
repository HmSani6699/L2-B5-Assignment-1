{


    // ts-node-dev --respawn --transpile-only server.ts

    function processValue(value: string | number): number{
        return typeof value === "string" ? value?.length : value * 2;
    }

    console.log(processValue('hallo'));
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //
}