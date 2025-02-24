import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1();
warmup2();

function warmup1() {
   console.log("Exercise week 1");

   //const button = document.querySelector('#button-1a'); //bij selector moet je specifiëren of
   // het een id of een class is (# of . ervoor)
   //const button = document.getElementById('button-1a'); // hier niet want is al gespecifiëerd
   const button = document.querySelector('#button-1a');
   button.addEventListener('click', function () {
      console.log('click ok');

      document.querySelector('#content-1').innerHTML = '<p>Hallo dit is de oefening van Bichiran</p>';
      //je selecteert de content van #content-1 met .innerHTML en vervangt die door de nieuwe tekst
   })
}

function warmup2() {
    console.log("Exercise week 2");
   const scores = getRandomScores(10);

   const button = document.querySelector('#button-2a');
   button.addEventListener('click', function () {
      console.log('click ok2');

      let html = '<ul>';

      scores.forEach(function (score) {
         console.log(scores);
         console.log(score);

         html += `<li>$(score)</li>`;
      });

      html += '</ul>';

      document.querySelector('#content-2').innerHTML = html;
      //document.querySelector('#content-2').innerHTML = '<ul> <li>1</li> </ul >'
   });
}

function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}