let Calculator = {

    
    
    add: function (num1, num2) {
        if (typeof(num1) == "number" && typeof(num2) == "number") {
        return num1 + num2} else {
            return "Error!"
        }
       
    },
    sub: function (num1, num2) {
        if (typeof(num1) == "number" && typeof(num2) == "number") {
        return num1 - num2} else {
            return "Error!"
        }
       
    },
    mul: function (num1, num2) {
        if (typeof(num1) == "number" && typeof(num2) == "number") {
        return num1 * num2} else {
            return "Error!"
        }
       
    },
     div: function (num1, num2) {
        if (typeof(num1) == "number" && typeof(num2) == "number") {
        return num1 / num2} else {
            return "Error!"
        }
       
    }

};