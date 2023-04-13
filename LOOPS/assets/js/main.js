
// 1. Ədədin rəqəmləri cəmini tapın
var a ,b ,cem=0;
var b=prompt("eded daxil edin");
while ((b>0)  )

{

   a=b%10; 
   cem+=a; 
 b=(b-a)/10;  
}

 alert(cem)






//  2. Daxil olunan müsbət tam ədədin sadə və ya mürəkkəb olduğunu tapın
var x;
var x=prompt("ededi daxil edin")


var k=0;
for(var i=1;i<=x;i++){
  
  if(x%i==0)
  k++
}

if(k>2)

alert("murekkebdir")
else if(k==1)
alert("ne sade ne murekkebdir")

else
alert("sadedir")












 








