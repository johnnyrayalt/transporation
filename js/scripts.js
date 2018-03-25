function StressLevel(question1, question2, question3) {
  this.question1 = question1;
  this.question2 = question2;
  this.question3 = question3;
}

StressLevel.prototype.totalResults = function() {
  var answer = this.question1 + this.question2 + this.question3;
  var low = "Not much bothers you, huh";
  var medium = "So you're just a normal person";
  var high = "lol same";

  if (answer <= 3) {
    return low;
  } else if (answer >= 4 && answer <= 6) {
    return medium;
  } else if (answer >= 7){
    return high;
  }
}

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();

    var answerQuestionOne = $('input:checkbox[name=question-input-one]:checked').length;
    var answerQuestionTwo = $('input:checkbox[name=question-input-two]:checked').length;
    var answerQuestionThree = $('input:checkbox[name=question-input-three]:checked').length;

    var newStressLevel = new StressLevel(answerQuestionOne, answerQuestionTwo, answerQuestionThree);

    var answer = newStressLevel.totalResults();

    $('#result').text(answer);
  });
});
