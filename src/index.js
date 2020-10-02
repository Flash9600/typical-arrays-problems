
exports.min = function min (array) {
  if (array == undefined || array.length == 0){
    return 0;
  }
  return Math.min( ...array);
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0){
    return 0;
  }
  return Math.max( ...array);
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0){
    return 0;
  }
  let result=0;
  for(let i=0; i<array.length; i++){
     result += array[i];
  }
  if (result ===0) {return 0}
  return result/array.length;
}
