(function init(){
var el = function (param){
    if (param.charAt(0) == "#"){
        return document.querySelector(param);
    }
    return document.querySelectorAll(param);
}
var viewer = el("#viewer"),
    equals = el("#equals"),
    deleteEl = el("#delete"),
    clear = el("#clear"),
    nums = el("[data-value]"),
    ops = el("[data-operand]");

    var result = 0,
        number1 = "",
        number2 = "",
        operand = "";
        
        var setNumber = function(){
            number2 += this.getAttribute('data-value');
            viewer.setAttribute('value', number2)
     }
     for(var i= 0; i < nums.length; i++){
         nums[i].onclick = setNumber
     }
     var moveNumber = function () {
         number1 = number2 ;
         number2 = "";
         operand = this.getAttribute("data-operand");
         viewer.setAttribute('value', operand)
     }
     for ( i= 0; i < ops.length; i++){
         ops[i].onclick = moveNumber
     }
     var display = function(){
         number1 = parseFloat(number1);
         number2 = parseFloat(number2);

         switch(operand){
            case "+":
                 result = number1 + number2;
                 
                break;
            case "-":
                 result = number1 - number2;
                break;
            case "x":
                result = number1 * number2;
                break;
            case "/":
                result = number1 / number2;
                break;
            default:
                result = number2;
                break;
                    }
                    viewer.setAttribute('value', result)
     }
     equals.onclick = display;

     deleteEl.onclick = function() {
    number2 = number2.slice ( 0, -1);
    viewer.setAttribute('value', number2 || 0);

     }
     clear.onclick = function() {
         result = 0;
         number1 = "";
         number2 = "";
         viewer.setAttribute('value', result)
     }
})()