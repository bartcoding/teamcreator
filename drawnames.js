//program that devides the classroom students into groups of 3 at random

const students = ["Emmanuel", "Lotte", "Arne", "Mikail", "Priya", "Elnura", "Yannick", "Susan", "Joty","Adnan","Oguz","Kobe"];

let group1 = [], group2 = [], group3 = [], group4 = [];

const groups = [group1,group2,group3,group4];

//first way to do for each
//students.forEach((student) => assignGroup(student));

//second way to do for each
/*for(student of students){
    assignGroup(student);
}
*/
//third way to do for each
for(let i =0; i<students.length;i++){
    assignGroup(students[i]);
}


console.log(group1);
console.log(group2);
console.log(group3);
console.log(group4);

function assignGroup(student){

    let group;
    do{
    // we want an index of 0,1,2 or 3
    let index = Math.floor(Math.random()*groups.length);
    //select group based on the index
    group = groups[index];
    }
    //make it so that the do part keeps hapening if the amount of students in a group is larger than 2
    while(group.length>=3)
    //push student to group
    group.push(student);
}

