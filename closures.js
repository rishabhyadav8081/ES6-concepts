// this is lexical scoping in javascript. as you can  see the inner function has access to outer fuction but outer function does not have any access to inner function . and one more thing to notice that if we have two inner function they also do not give any access to each other they just have an access to their  parent and that is called lexical scoping



let outer = function(){
     let  name = "rishabh";
     function inner(){
        let innername = "yadav"
         console.log(`inner ${name}`);
     }
     inner();
     function inner2(){
    //   console.log(innername);// it will not exacute 
     }
     inner2();
    }
    outer();
    console.log(`outer ${name}`);

    // closures

    function init(){
        let name = "rishabh";
        function display(){
            console.log(name);
        }
        return  display;
    }
    let print = init();
     print();

 // example of closures

 function add(num){
     function adder(b){
        console.log(num +b );
     }
     return adder;
 }
   const result = add(10);
   result(100);
//  result(10);
//  result(30);


 // pratical example of closures

 const myname = document.getElementById('name');
 const btn = document.getElementById('btn');

 function incresesize(size){
      function changesize(){
        myname.style.fontSize = `${size}px`
      }
      return changesize;
 }

 const size12 = incresesize(12);
 const size20 = incresesize(20);
 const size120 = incresesize(120);
 


 btn.addEventListener('click',size120)
//  btn.addEventListener('click',size12)
//  btn.addEventListener('click',size20)