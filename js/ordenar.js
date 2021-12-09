var pos=0;
var flag;
var numbers=[];
var size=0;
var cont=0;
var temp=0;


do {
    size++;
    numbers[pos]=prompt('Capture un número: ');
    flag=prompt('Desea capturar otro número?: s=si n=no');
    pos++;
 } while (flag != "n");

 

 for (var x=0; x<size-1; x++) { 
     for(var y=x+1; y<size; y++){
         if(numbers[x]>numbers[y]){
             temp=numbers[x];
             numbers[x]=numbers[y];
             numbers[y]=temp;
         }
     }  
  } 

document.write("Números Ordenados:"+ "<br>"+ numbers);



 
