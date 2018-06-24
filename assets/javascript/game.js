prompt('Press any key to play!');




var gaCityArr = ['Atlanta', 'Savannah', 'Macon', 'Marietta',

'Alpheretta','Decatur', 'Lawrenceville', 'Athens','Tybee Island', 'Roswell', 'Helen', 'Kennesaw', 'Warner Robins', 'Stone Mountain', 'Covington','Cartersville', 'Norcross']

 

var cityName = gaCityArr[Math.floor(Math.random() * gaCityArr.length)];

 


 

var d;

var count = 0;

var answerArray = [];





function startUp() {

  for (var i = 0; i < cityName.length; i++) {

    answerArray[i] = "_";

  }

 

  // putting in a string

  d = answerArray.join(" ");

  document.getElementById("answer").innerHTML = d;

}

 

function letter() {

  var letter = document.getElementById("letter").value;

 

  if (letter.length > 0) {

    for (var i = 0; i < cityName.length; i ++) {

      if (cityName[i] === letter) {

        answerArray[i] = letter;

      }

    }

    count++;

    document.getElementById("counter").innerHTML = "You have clicked: " + count;

    document.getElementById("answer").innerHTML = answerArray.join(" ");

  }

  if(count>5) {

    document.getElementById("stat").innerHTML = "Do you need some help?!";

  }

}