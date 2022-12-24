

document.getElementById('generate-button').addEventListener('click', generateAssignments);
var cards = document.querySelectorAll('.card');
[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

function generateAssignments() {
    console.log("generateAssignments called");
    // Get the names of the participants from the textarea
    var names = document.getElementById('names').value;
  
    // Split the names into an array
    var participants = names.split(',');
  
    // Dictionary of participants and their assigned gift recipients
    var assignments = {};
    participants = shuffle(participants)

    for (var i = 0; i < participants.length; i++) {
        assignments[participants[i]] = participants[(i + 1) % participants.length];
    }

    assignments = shuffleObject(assignments)
   
    document.getElementById('assignments').innerHTML = '';

    // Iterate over the participants and create a list of assignments
    
    var scene = document.createElement('div');
    scene.setAttribute("class","scene scene--card")
    for (var participant in assignments) {
      var card = document.createElement('div');
      card.setAttribute("class","card")
      var card_front = document.createElement("div")
      card_front.setAttribute("class","card__face card__face--front")
      card_front.appendChild( document.createTextNode( participant ) );
      var card_back = document.createElement("div")
      card_back.setAttribute("class","card__face card__face--back")
      card_back.appendChild( document.createTextNode( assignments[participant] ) );
      // item.innerHTML = participant + ' gets ' + assignments[participant];
      card.append(card_front, card_back)
      // card.appendChild(card_back)
      scene.appendChild(card);
    }
    
    // Append the list to the assignments div
    document.getElementById('assignments').appendChild(scene);
    var cards = document.querySelectorAll('.card');
    [...cards].forEach((card)=>{
      card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
      });
    });
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function shuffleObject(obj){
    // new obj to return
  let newObj = {};
    // create keys array
  var keys = Object.keys(obj);
    // randomize keys array
    keys.sort(function(a,b){return Math.random()- 0.5;});
  // save in new array
    keys.forEach(function(k) {
        newObj[k] = obj[k];
});
  return newObj;
}

