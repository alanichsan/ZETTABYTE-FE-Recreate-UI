function array1(arr) {
    let x = false;
    for (let i = 0; i < arr.length; i++) {

        if ( arr[i] <= 91) {
            x = true;
        }
    }
    return x;
  }
  
  console.log(array1([1, 29, 88, 37, 22, '90']));