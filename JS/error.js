function squareroot(){
    a=document.getElementById("num").value;
    try{
       if(sqr=a**(1/2)){
        throw sqr
       }
       else if(a < 0){
        throw "Error! Negative number is not possible"
       }
       else if(isNaN(a)){
        throw "Error! The input is not an integer"
       }
       else{
        throw ""
       }
        
    }
    catch(err){
        document.getElementById("p1").innerHTML=err;
    }
    finally{
        document.getElementById('num').value=""
    }
}