// Sorting array in Ascending order  without using  built-in method 
    
let arr=[90,-21,47,69,5,-68,33,12,1];
let swap;

for (i=0;i<arr.length;i++){

    for(j=i;j<arr.length;j++){
if (arr[i]>arr[j]) {
    swap=arr[i];
    arr[i]=arr[j];
    arr[j]=swap;
    
}

    }
}

console.log(arr);

 
