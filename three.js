function array1(arr) {
    let baris = [];
    for (let i = 0; i < arr.length; i++) {
        if ( i < 3) {
            baris.push(7) 
        } else {
            baris.push(arr[i]) 
        }
    }
    return baris;
  }
  
  console.log(array1([12, 24, 51, 6, 92, 11]));