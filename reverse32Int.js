// Given a 32-bit signed integer, reverse digits of an integer.

var reverse = function(num) {
    if (num < 10 && num > -1) {
        return num;
    }
    num = num.toString();
  var arr = num.split('');
  
  while (arr[arr.length-1] === '0') {
    arr.length = arr.length - 1;
  }
  console.log(arr);
  if (arr.length == 2 && arr[0] == '-') {
    arr = arr.join('');
    num = Number(arr);
    return num;
  }
  var neg = false;
  if (arr[0] == "-") {
    neg = true;
    arr.shift();
  }
  for (var i = 0; i < Math.floor(arr.length/2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  arr = arr.join('');
  num = Number(arr);
    if (num > 2147483647) {
        return 0;
    }
  if (neg) {
    return num * -1;
  } else {
    return num;
  }
};