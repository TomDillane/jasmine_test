fizzbuzz = function(number) {
    if (number % 3 && number % 5) {
    return "FizzBuzz"
}

    else if (number % 3) {
    return "Fizz"
}

    else if (number % 5) {
    return "Buzz"
}

    else { return number
}
}