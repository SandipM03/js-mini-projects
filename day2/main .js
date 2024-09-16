// function getLength(str) {
//     console.log("original string:", str);
//     console.log("length is:", str.length);
// }
// getLength("sandip");
// const b = 100;
// {
//     let a=20;
//     const b = 200;
//     let c=10;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);
// function z(){
//     var b=200;
//      function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }     
//         y();
//      }
//      x();    
// }
// z();
// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function (){
//             console.log(i);
//         },i * 3000);
//     }
//     console.log("sa")
// }
// x();


function x(){
    
    for(let i=1;i<=5;i++){
        function closer(x){
            setTimeout(function (){
                console.log(i);
            },x * 1000);
        }
        closer(x);
    }
    console.log("sa")
}
x();
