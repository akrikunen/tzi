//READ COMMENTS TO UNDERSTAND THE TECHNIQUE

(function () {

    "use strict";

    //Making the global function of CeasarsCipher
    window.CeasarsCipher = function (input) {
        //Just storing an alphabet into a variable
        var alphabet1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
        var alphabet = ["11","12","13","14","15","21","22","23","24","24","25","31","32","33","34","35","41","42","43","44","45","51","52","53","54","55"],
            //The amount of shift. Will be defined in the future by the input value.
            shiftAmount,
            //The variable that WILL store the shifted alphabet.
            shiftedAlphabet = "",
            //The string that WILL store the future output.
            OUTPUT = "",
            //The input string itself, that will be defined by the input value in the future.
            STRING,
            //Just the characters that are not part of the alphabet.
            otherCharacters = '-=~\"\'#$%&*^:<>?/!{(|)}.1234567890\, '
        //Then, we are checking the argument of the function. If this is an object, we will set out predefined variables
        if (typeof input === "object") {
            shiftAmount = input.shift;
            STRING = input.msg.toLowerCase();
        } else {
            //If an argument is not an object with stuff we need, drop the function
            return;
        }
        //Now, we make the whole magic here
        if (typeof STRING === "string" || typeof (STRING + "") === "string") {
        
            //Then, we make the output
            for (var i = 0; i < STRING.length; i++) {
                //Take the index of the letter we want to replace
                if(STRING[i] == " ")
                {
                    OUTPUT += " ";
                }
               
                else
                {
                   
                    if(STRING[i+1]== " " || STRING[i+1] == null)
                    {
                        var numberd = alphabet.indexOf(STRING[i])

                        OUTPUT += alphabet1[numberd];
                    }  
                    else
                    {
                        var str = STRING[i]+STRING[i+1];
                        var numberd = alphabet.indexOf(str)
                        OUTPUT += alphabet1[numberd];
                        i++;                                        
                    }                              
                }
                
            }
        } else {
            //IF STRING is not a STRING or it is not even present, we drop the function
            return;
        };

        //RETURNING THE OUTPUT
        return OUTPUT;

        //DONE =) XD
    };
})();

//Now just the calling stuff. You can check this out if you want to implement the same thing. Pretty EZ. I think you can understand it EZ without my comments =)

document.getElementById("message").addEventListener("input", function () {
    var itsValue = this.value;
    document.getElementById("output").textContent = CeasarsCipher({
        msg: itsValue,
        shift: document.getElementById("shift").value
    });
});
document.getElementById("shift").addEventListener("keyup", function () {
    var itsValue = this.value;
    document.getElementById("output").textContent = CeasarsCipher({
        msg: document.getElementById("message").value,
        shift: itsValue
    })
});
document.getElementById("output").textContent = CeasarsCipher({
    msg: document.getElementById("message").value,
    shift: document.getElementById("shift").value
});