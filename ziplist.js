
const tList1 = ['a', 'b', 'c'];
const tList2 = [1, 2, 3];

function zipList(List1, List2){
  const List = [];
  for(let i = 0; i < List1.length; i++){
    List.push(List1[i], List2[i]);
  }
  return List;
}
console.log(zipList(tList1, tList2));

function zipListTSW(List1, List2){
  return _.flatten(_.zip(List1, List2));
}

console.log(zipListTSW(tList1, tList2));
