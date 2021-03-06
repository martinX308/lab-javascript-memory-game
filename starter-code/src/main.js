var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  var shuffledCards =memoryGame.shuffleCard(memoryGame.cards);
  memoryGame.cards=shuffledCards.slice();

  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
  var eventArray =[];

$('.back').on('click', function () {
   var theTarget= event.target;
   theTarget.classList.toggle('back');
   theTarget.nextSibling.classList.toggle('back');
   eventArray.push(theTarget);
   theTarget ='';

   if (eventArray.length ===2) { // it seems that the script runs into runtime problems if I don't use a debugger?
     var pairCheck = memoryGame.checkIfPair(eventArray[0].getAttribute('name'),eventArray[1].getAttribute('name'));
     if(pairCheck) {
       eventArray[0].classList.add('blocked');
       eventArray[0].nextSibling.classList.add('blocked');
       eventArray[1].classList.add('blocked');
       eventArray[1].nextSibling.classList.add('blocked');
     } else {
      eventArray[0].classList.toggle('back');
      eventArray[0].nextSibling.classList.toggle('back');
      eventArray[1].classList.toggle('back');
      eventArray[1].nextSibling.classList.toggle('back');
     }
     eventArray=[];
   }

   document.querySelector('#pairs_guessed').innerText=memoryGame.pairsGuessed;
   document.querySelector('#pairs_clicked').innerText=memoryGame.pairsClicked;

  if(memoryGame.finished()){
    alert("Succeeded! Congratulations");
    break;
  }

});
});


