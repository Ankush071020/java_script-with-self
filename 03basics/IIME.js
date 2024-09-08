// **********Immedately Invoked Function Expressiomm(IIFE)**********
(function one(serial_number) {
    console.log(`chapter ${serial_number}`);
    
    
})(4);//this ; is important
// ()()
// for arrow function
((serial_number) =>(console.log(`chapter ${serial_number}`))
)(19)
