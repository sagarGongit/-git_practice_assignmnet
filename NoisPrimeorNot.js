let num = 6;
 let count = 0;
   for(let i=1;i<=num;i++){
        if(i%num==0){
            count++;
        }
   }
   if(count==2){
     console.log("is prime ");
   }
   else {
    console.log("not prime ");
   }