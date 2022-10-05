//Prework study guide website JS

var topics = ['HTML', 'CSS', 'Git', 'JavaScript', 'Vim'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)]

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("How about HTML?");
    } else if (randomTopic === 'CSS') {
        console.log("Let's read about CSS.");
    } else if (randomTopic === 'Git') {
        console.log("How about Git?");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's take a look at JavaScript.");
    } else if (randomTopic === 'Vim') {
        console.log("Let's memorize some important Vim shortcuts.")
    } else {
        console.log("It looks like that didn't work as expected. Give it another try.");
    }
}

console.log("These are the topics we learned about through the coding bootcamp's prework assignments, with some Vim shortcuts thrown in as an extra bonus.")
listTopics();

console.log("Which topic should we study first?")
selectTopic();

/* EXAMPLE FOR LOOP
var shapes = ["triangle", "square", "pentagon", "circle"];
for(var x = 0; x < shapes.length; x++) {
    console.log(shapes[x]);
}
*/



