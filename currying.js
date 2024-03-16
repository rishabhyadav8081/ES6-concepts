//  currying in javascript 
 
function addn(a,b,c){
    return a+b+c
};
console.log(addn(1,2,3));


// insted of doing this we can use currying method

function add(a){
    return function(b){
        return function(c){
          console.log(a+b+c); 
        }
    }
}
 add(3)(3)(3);