console.log(+"hello")

for(var x=0;x<5;x++){
   setTimeout(()=>console.log(x),4000); 
}

function mul(x){
    return function(y){
        return function(z){
            return x*y*z;
        }
    }

}
console.log(mul(1)(2)(3))