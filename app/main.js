/**
 * Created by Justin on 14-5-24.
 */

var testList = treeToList(testTree);
console.log(testList);

// shuffle the testList
var shuffleList = _.shuffle(testList);

var testTree2 = listToTree(shuffleList);
console.log(testTree2);



