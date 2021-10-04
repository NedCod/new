const Screen1 = document.getElementById("ProblemScreen");
const Screen2 = document.getElementById("SecondScreen");
const Brand = document.getElementsByClassName("Brand")[0];
Brand.innerHTML = "";

const ACButton = document.getElementById("ACKey");
const DevideButton = document.getElementById("DevideKey");
const MultipicationButton = document.getElementById("MultipicationKey");
const MinusButton = document.getElementById("MinusKey");
const SummessionButton = document.getElementById("SummessionKey");

const ZeroButton = document.getElementById("0Key");
const OneButton = document.getElementById("1Key");
const TwoButton = document.getElementById("2Key");
const ThreeButton = document.getElementById("3Key");
const FourButton = document.getElementById("4Key");
const FiveButton = document.getElementById("5Key");
const SixButton = document.getElementById("6Key");
const SevenButton = document.getElementById("7Key");
const EightButton = document.getElementById("8Key");
const NineButton = document.getElementById("9Key");
const PointButton = document.getElementById("PointKey");

const EqualButton = document.getElementById("EqualKey");

const SinButton = document.getElementById("SinKey");
const CosButton = document.getElementById("CosKey");
const TanButton = document.getElementById("TanKey");
const FactorialButton = document.getElementById("FactorialKey");
const LnButton = document.getElementById("LnKey");
const Log10Button = document.getElementById("Log10Key");
const EPowerXButton = document.getElementById("EPowerXKey");
const RootButton = document.getElementById("RootKey");
const PiButton = document.getElementById("PiKey");
const EButton = document.getElementById("eKey");
const OpenBracketButton = document.getElementById("OpenBracketKey");
const CloseBracketButton = document.getElementById("CloseBracketKey");
const PercentButton = document.getElementById("PercentKey");
const SquereButton = document.getElementById("SquereKey");
const AnsButton = document.getElementById("AnsKey");
const RadButton = document.getElementById("RadKey");
const DegButton = document.getElementById("DegKey");

var Screen1Value = "";
var Expression = "";
var SpecialOperation = "";


const btn = document.getElementById("invKey");

invKey.addEventListener("click", () => {
    if (invKey.value === "Inv") {
        SinKey.value = "sin⁻¹";
        CosKey.value = "cos⁻¹";
        TanKey.value = "tan⁻¹";
        LnKey.value = "e^";
        Log10Key.value = "10^x";
        RootKey.value = "X^2";
        AnsKey.value = "Rad";
        SquereKey.value = "y√x";
        invKey.value = "Ret";

    } else {
        SinKey.value = "Sin";
        CosKey.value = "Cos";
        TanKey.value = "Tan";
        LnKey.value = "ln";
        Log10Key.value = "log";
        RootKey.value = "√";
        AnsKey.value = "Ans";
        SquereKey.value = "x^y";
        invKey.value = "Inv";

    }
})





function factorial(a) {
    if (a === 0) {
        return 1;
    }
    return (a * factorial(a - 1));
}

OneButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "1";
    Expression = Expression + "1";
    Screen1.innerHTML = Screen1Value;
})
TwoButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "2";
    Expression = Expression + "2";
    Screen1.innerHTML = Screen1Value;
})
ThreeButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "3";
    Expression = Expression + "3";
    Screen1.innerHTML = Screen1Value;
})
FourButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "4";
    Expression = Expression + "4";
    Screen1.innerHTML = Screen1Value;
})
FiveButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "5";
    Expression = Expression + "5";
    Screen1.innerHTML = Screen1Value;
})
SixButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "6";
    Expression = Expression + "6";
    Screen1.innerHTML = Screen1Value;
})
SevenButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "7";
    Expression = Expression + "7";
    Screen1.innerHTML = Screen1Value;
})
EightButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "8";
    Expression = Expression + "8";
    Screen1.innerHTML = Screen1Value;
})
NineButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "9";
    Expression = Expression + "9";
    Screen1.innerHTML = Screen1Value;
})
ZeroButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "0";
    Expression = Expression + "0";
    Screen1.innerHTML = Screen1Value;
})
PointButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + ".";
    Expression = Expression + ".";
    Screen1.innerHTML = Screen1Value;
})


    function myFunctionrad(){
        // Get the checkbox
        var checkBoxrad = document.getElementById("radCheck");
        if (checkBoxrad.checked == true){
            DegButton.value="Deg";
            SinKey.addEventListener("click", () => {
                if (SinKey.value === "Sin") {
                    Screen1Value = "";
                    Screen1.innerHTML = "0";
                    Expression = "";
                    
                    Screen1Value = Screen1Value + "sin(";
                    Expression = Expression + "Math.sin(";
                    Screen1.innerHTML = Screen1Value;
                } else {
                    
                    Screen1Value = "";
                    Screen1.innerHTML = "0";
                    Expression = "";
                    Screen1Value = Screen1Value + "sin⁻¹(";
                    Expression = Expression + "Math.asin(";
                    Screen1.innerHTML = Screen1Value;
                }
            })
            CosKey.addEventListener("click", () => {
                if (CosKey.value === "Cos") {
                    Screen1Value = "";
                    Screen1.innerHTML = "0";
                    Expression = "";
                   
                    Screen1Value = Screen1Value + "cos(";
                    Expression = Expression + "Math.cos(";
                    Screen1.innerHTML = Screen1Value;
                } else {
                    
                    Screen1Value = "";
                    Screen1.innerHTML = "0";
                    Expression = "";
                    Screen1Value = Screen1Value + "cos⁻¹(";
                    Expression = Expression + "Math.acos(";
                    Screen1.innerHTML = Screen1Value;
                }
            })
            TanKey.addEventListener("click", () => {
                
                if (TanKey.value === "Tan") {
                    Screen1Value = "";
                    Screen1.innerHTML = "0";
                    Expression = "";
                    
                    Screen1Value = Screen1Value + "tan(";
                    Expression = Expression + "Math.tan(";
                    Screen1.innerHTML = Screen1Value;
                } else {
                    Screen1Value = "";
                    Screen1.innerHTML = "0";
                    Expression = "";
                    
                    Screen1Value = Screen1Value + "tan⁻¹(";
                    Expression = Expression + "Math.atan(";
                    Screen1.innerHTML = Screen1Value;
                }
            })    
            
        
        }
            
        
    }
    

     // normal button    

    SinKey.addEventListener("click", () => {
        if (SinKey.value === "Sin") {
            Screen1Value = "";
            Screen1.innerHTML = "0";
            Expression = "";
            
            Screen1Value = Screen1Value + "sin(";
            Expression = Expression + "Math.sin(";
            Screen1.innerHTML = Screen1Value;
        } else {
            
            Screen1Value = "";
            Screen1.innerHTML = "0";
            Expression = "";
            Screen1Value = Screen1Value + "sin⁻¹(";
            Expression = Expression + "Math.asin(";
            Screen1.innerHTML = Screen1Value;
        }
    })
    
    CosKey.addEventListener("click", () => {
        if (CosKey.value === "Cos") {
            Screen1Value = "";
            Screen1.innerHTML = "0";
            Expression = "";
           
            Screen1Value = Screen1Value + "cos(";
            Expression = Expression + "Math.cos(";
            Screen1.innerHTML = Screen1Value;
        } else {
            
            Screen1Value = "";
            Screen1.innerHTML = "0";
            Expression = "";
            Screen1Value = Screen1Value + "cos⁻¹(";
            Expression = Expression + "Math.acos(";
            Screen1.innerHTML = Screen1Value;
        }
    })
    
    TanKey.addEventListener("click", () => {
        
        if (TanKey.value === "Tan") {
            Screen1Value = "";
            Screen1.innerHTML = "0";
            Expression = "";
            
            Screen1Value = Screen1Value + "tan(";
            Expression = Expression + "Math.tan(";
            Screen1.innerHTML = Screen1Value;
        } else {
            Screen1Value = "";
            Screen1.innerHTML = "0";
            Expression = "";
            
            Screen1Value = Screen1Value + "tan⁻¹(";
            Expression = Expression + "Math.atan(";
            Screen1.innerHTML = Screen1Value;
        }
    })    

    function myFunctiondeg(){
        // Get the checkbox
        var checkBoxdeg = document.getElementById("degCheck");
        if (checkBoxdeg.checked == true){
            SinKey.addEventListener("click", () => {
                if (SinKey.value === "Sin") {
                    Screen1Value = "";
                    Screen1.innerHTML = "0";
                    Expression = "";
                    
                    Screen1Value = Screen1Value + "sin(";
                    Expression = Expression + "Math.sin((Math.PI/(180))*";
                    Screen1.innerHTML = Screen1Value;
                } else {
                    
                    Screen1Value = "";
                    Screen1.innerHTML = "0";
                    Expression = "";
                    Screen1Value = Screen1Value + "sin⁻¹(";
                    Expression = Expression + "(180/Math.PI)*Math.asin(";
                    Screen1.innerHTML = Screen1Value;
                }
            })
            
            CosKey.addEventListener("click", () => {
                if (CosKey.value === "Cos") {
                    Screen1Value = "";
                    Screen1.innerHTML = "0";
                    Expression = "";
                   
                    Screen1Value = Screen1Value + "cos(";
                    Expression = Expression + "Math.cos((Math.PI/(180))*";
                    Screen1.innerHTML = Screen1Value;
                } else {
                    
                    Screen1Value = "";
                    Screen1.innerHTML = "0";
                    Expression = "";
                    Screen1Value = Screen1Value + "cos⁻¹(";
                    Expression = Expression + "(180/Math.PI)*Math.acos(";
                    Screen1.innerHTML = Screen1Value;
                }
            })
            
            TanKey.addEventListener("click", () => {
                
                if (TanKey.value === "Tan") {
                    Screen1Value = "";
                    Screen1.innerHTML = "0";
                    Expression = "";
                    
                    Screen1Value = Screen1Value + "tan(";
                    Expression = Expression + "Math.tan((Math.PI/(180))*";
                    Screen1.innerHTML = Screen1Value;
                } else {
                    Screen1Value = "";
                    Screen1.innerHTML = "0";
                    Expression = "";
                    
                    Screen1Value = Screen1Value + "tan⁻¹(";
                    Expression = Expression + "(180/Math.PI)*Math.atan(";
                    Screen1.innerHTML = Screen1Value;
                }
            })    
    
    
}
    }

const acbtn = document.getElementById("ACKey");

ACKey.addEventListener("click", () => {
    if (ACKey.value === "AC") {
        location.reload();

    } else {
        Expression = "";
        Screen1Value = "";
        Screen1.innerHTML = "0";
        ACKey.value = "AC";
    }
})

DevideButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "÷";
    Expression = Expression + "/";
    Screen1.innerHTML = Screen1Value;     
    })

MultipicationButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "X";
    Expression = Expression + "*";
    Screen1.innerHTML = Screen1Value;
})
MinusButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "-";
    Expression = Expression + "-";
    Screen1.innerHTML = Screen1Value;
})
SummessionButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "+";
    Expression = Expression + "+";
    Screen1.innerHTML = Screen1Value ;
})
OpenBracketButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "(";
    Expression = Expression + "(";
    Screen1.innerHTML = Screen1Value;
})
CloseBracketButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + ")";
    Expression = Expression + ")";
    Screen1.innerHTML = Screen1Value;
})
const rootbtn = document.getElementById("RootKey");

RootKey.addEventListener("click", () => {
    if (RootKey.value === "√") {
        
        Screen1Value = "";
        Screen1.innerHTML = "0";
        Expression = "";
        Screen1Value = Screen1Value + "√(";
        Expression = Expression + "Math.sqrt(";
        Screen1.innerHTML = Screen1Value;
    } else {
       
        
        Screen1Value = Screen1Value + "^2";
        Expression = Expression + "**2";
        Screen1.innerHTML = Screen1Value;
    }
})

PiButton.addEventListener("click", () => {
    Screen1Value = "";
    Screen1.innerHTML = "0";
    Expression = "";
    Screen1Value = Screen1Value + "𝝅";
    Expression = Expression + "Math.PI";
    Screen1.innerHTML = Screen1Value;
})
EButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "e";
    Expression = Expression + "Math.E";
    Screen1.innerHTML = Screen1Value;
})




PercentButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "%";
    Expression = Expression + "/100";
    Screen1.innerHTML = Screen1Value;
})
FactorialButton.addEventListener("click", () => {
    Screen1Value = Screen1Value + "!";
    Expression = factorial(eval(Expression));
    Screen1.innerHTML = Screen1Value;
})

const lnbtn = document.getElementById("LnKey");

LnKey.addEventListener("click", () => {
    if (LnKey.value === "ln") {
        Screen1Value = "";
        Screen1.innerHTML = "0";
        Expression = "";
        
        Screen1Value = Screen1Value + "ln(";
        Expression = Expression + "Math.log(";
        Screen1.innerHTML = Screen1Value;
    } else {
        Screen1Value = "";
        Screen1.innerHTML = "0";
        Expression = "";
        
        Screen1Value = Screen1Value + "e^";
        Expression = Expression + "Math.E**";
        Screen1.innerHTML = Screen1Value;
    }
})
EPowerXButton.addEventListener("click",()=>{
    Screen1Value = Screen1Value + "E";
        Expression = Expression + " * 10**";
        Screen1.innerHTML = Screen1Value;
})

const logbtn = document.getElementById("Log10Button");

Log10Button.addEventListener("click", () => {
    if (Log10Button.value === "Log") {
        
        Screen1Value = Screen1Value + "log<sub>10</sub>(";
        Expression = Expression + "Math.log10(";
        Screen1.innerHTML = Screen1Value;
    } else {
        Screen1Value = "";
        Screen1.innerHTML = "0";
        Expression = "";
        Screen1Value = Screen1Value + "10^";
        Expression = Expression + "10**";
        Screen1.innerHTML = (Screen1Value);
    }
})

const sqerbtn = document.getElementById("SquereButton");

SquereButton.addEventListener("click", () => {
    if (SquereButton.value === "x^y") {
        Screen1Value = Screen1Value + "^";
        Expression = Expression + "**";
        Screen1.innerHTML = Screen1Value;
    } else {
        Screen1Value = Screen1Value + "√(";
        Expression = Expression + " * Math.sqrt(";
        Screen1.innerHTML = Screen1Value;
    }
})
const HisButton = document.getElementById("historyLog");
AnsButton.addEventListener("click", () => {
    if (AnsButton.value === "Ans") {
        
        Screen1Value= Screen1Value + "Ans" ;
        Expression = Expression + "HisButton.value";
        console.log(AnsButton.value);
      
         Screen1.innerHTML = Screen1Value;
         


    } else {
        if(Screen1Value==""){
        Screen1Value = Screen1Value + "x (";
        Expression = Expression + "Math.random(";
         Screen1.innerHTML = Screen1Value;
        }else{
            Screen1Value = Screen1Value + " x (";
            Expression = Expression + " * Math.random(";
             Screen1.innerHTML = Screen1Value;
         }

       
        
    }


}) 


EqualButton.addEventListener("click", () => {
  
    Screen2.innerHTML = Screen1Value;
    ans = eval(Expression);
    Screen1Value = String(ans);
    Screen1.innerHTML = ans;
    HisButton.value=ans;
    ACKey.value = "CE";

    
    
    
    
})

