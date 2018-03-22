function StressLevel(array1, array2, array3) {
  this.array1 = array1;
  this.array2 = array2;
  this.array3 = array3;
}

var array1 = [];
var array2 = [];
var array3 = [];
var total = 0;

function maths() {
  debugger;
  var x = array1.forEach(function() {
    total += array1;
  });

  var y = array2.forEach(function() {
    total += array2;
  });

  var z = array3.forEach(function() {
    total += array3;
  });
  return parseInt(total);

}

function userStressLevel(total){
  debugger;
  if (total === 0 || total <= 30){
    var result1 = "1";
    return result1;
  } else if (total >= 31 && total <= 60) {
    var result2 = "2";
    return result2;
  } else {
    var result3 = "3";
    return result3;
  }
}


$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();

    $('input:checkbox[name=question-input-one]:checked').each(function() {
      var answerQuestionOne = parseInt($(this).val());
      array1.push(answerQuestionOne);
    });
    $('input:checkbox[name=question-input-two]:checked').each(function() {
      var answerQuestionTwo = parseInt($(this).val());
      array2.push(answerQuestionTwo);
    });
    $('input:checkbox[name=question-input-three]:checked').each(function() {
      var answerQuestionThree = parseInt($(this).val());
      array3.push(answerQuestionThree);
    });
    var newStressLevel = new StressLevel(array1, array2, array3);
    console.log(array1, array2, array3);

    maths();
    var showResult = userStressLevel();
    $('#result').text(showResult);
          console.log(total);
  });
});
