let array= new Array(1,2,4,5);

//  Add     &    remove  
array.push(6);
array.unshift(0);
array.splice(3,0,3)
array.pop(6)
console.log(array);
 

//Sum array
let sum=0;
for(i=0; i<array.length;i++){
sum+= array[i]
}
console.log(sum);

//reverse array
let revers =[];

for(i=array.length -1; i>=0;i--){
revers.push(array[i])
}
console.log(revers);
// display even number
for(i=0 ;i<array.length; i+=2){
    if(array[i] %2===0){
      console.log(array[i]);  
    }
}

// Merge the array
let array2=[5,7,5]
let merge =array.concat(array2)
   console.log(merge);  

   //count
   let count=0;
   for(let i in array){
   count++
   }
   console.log(count)

   //count repeated number5
   let countNumberFive=0;
   for(i=0; i<array.length; i++){
if(array===5){
    countNumberFive++
}
   }
     console.log(countNumberFive)

     // minmum
     let min=0;
     for(i=1; i<array.length;i++){
        if(array[i]<min){
            min=array[i]
        }
     }
     console.log(min)

     //maxmum
      let max=0;
     for(i=1; i<array.length;i++){
        if(array[i]>max){
            max=array[i]
        }
     }
     console.log(max)
