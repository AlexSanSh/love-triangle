/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  const trianglesArr = preferences;
  trianglesArr.unshift(0);
  let count = 0;
  trianglesArr.map((item,index,arr)=>{
    if (arr[arr[item]]===index&&index!==item) {
      console.log(item,arr[item],arr[arr[item]] );
      trianglesArr[index]=0;
      trianglesArr[item]=0;
      trianglesArr[arr[item]] = 0;
      count++;
      console.log(trianglesArr);
    } else {
      count+=0;
    };
  });
  return count;
};
