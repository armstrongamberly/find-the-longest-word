function findLongestWord(str) {
  array = str.split(' ');
  newArray = array.map (x => x.length );
  return newArray.sort(function(a, b){return b-a})[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");
