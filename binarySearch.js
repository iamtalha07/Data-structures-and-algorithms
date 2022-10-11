//Binary search Or Dvide & Conquerer Technique
//Find the index of given no in a sorted array 7
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ==> index 6 -> output

// min = 0 , element = 1
// max = array.length-1 , element = 15
// midIndex = (min+max)/2 => (0+14)/2 = 7(index) , element = 8
// if array[midIndex] < number(7) then,
// min = midIndex+1
// if array[midIndex] > number(7) then,
// max = midIndex-1;   min=0, max=6 { 1,2,3,4,5,6,7 }

//  (min+max)/2 => 3
// index+1 => 4   min = 4, max = 6 { 5,6,7 }

//(min+max)/2 => 5
// index+1 => 6   min = 6, max = 6
//(min+max)/2 => 6

// else
//output = midIndex(6) , element = 7;

function searchAlgo(array,num) {
    let min = 0;
    let max = array.length-1;
    while(min<=max) {
        let midIndex = Math.floor((min+max)/2);
        console.log("Mid Index: "+midIndex+" min: "+min+" max: "+max)
        if(array[midIndex] < num) {
            min = midIndex + 1;
        }
        else if(array[midIndex] > num) {
            max = midIndex - 1;
        }
        else {
            return midIndex;
        }
    }
    return -1;
}
const sortedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const result = searchAlgo(sortedArray,7);
console.log(result);