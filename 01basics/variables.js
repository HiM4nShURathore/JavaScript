let coo="hellos";
var pasa="3434";
const da=34;
ma=45;
let pa;
const java=[]; 
//da=67;//XXXXX wrong
coo="gooes"
pasa=78
ma=676
//other than const every variable can be changed
console.log([coo,pasa,ma,da,pa,java]);
console.table([coo,pasa,ma,da,pa,java]);
// prefer not to use var due to block scope and functional scope
if(da==34)
{
    var g=68;
}
console.log(g);//acessible here even outside the {}
function game(){
    var tam=90;
}
//console.log(tam)//but here var not acessible due to the functional scope
