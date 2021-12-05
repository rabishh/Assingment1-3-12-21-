let sum=function(num1){
    let a=function(num2){
        let b=function(num3){
            var add=num1+num2+num3;
            document.write(add)
        }
        return b;
    }
    return a;
}
sum(3)(4)(5);