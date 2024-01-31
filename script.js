// setInterval(function(){ 
//     let timerElement = document.getElementById('timer');
//     let currentTime = timerElement.innerHTML;
//     currentTime++;
//     timerElement.innerHTML = currentTime;
// }, 1000);

let paragraphs = document.getElementsByTagName('p');

// All paragraphs
console.log('The HTMLCollection contains:', paragraphs);
console.log(paragraphs.item(4).textContent);
console.log(paragraphs[4].textContent);


// Iterate and print all their texts:
for(let i = 0; i < paragraphs.length; i++) {
    console.log('This is the', paragraphs[i].textContent);
}

// Get a specific index:
console.log("Index 2 is:", paragraphs[2].textContent);

// Same as above, but using the .item() method:
console.log("Index 4 is:", paragraphs.item(4).textContent);

// Get the specific paragraph, log its id attribute:
console.log('The specific paragraph has an id of:', paragraphs.namedItem('specific').id);