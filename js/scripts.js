function StressLevel(array1, array2, array3) {
  this.array1 = array1;
  this.array2 = array2;
  this.array3 = array3;
}

var array1 = [];
var array2 = [];
var array3 = [];

var initial = 0;
var total = 0;

function maths() {
  for(var i in array1) {
    var x = (initial += array1[i]);
  }
  for(var i in array2) {
    var y = (initial += array2[i]);
  }
  for(var i in array3) {
    var z = (initial += array3[i]);
  }
  total = z;
  return total;
}

function userStressLevel(){
  if (total === 0 || total <= 30){
    var result1 = "1";
    return result1;
  } else if (total >= 31 && total <= 60) {
    var result2 = "2";
    return result2;
  } else if (total >= 61) {
    var result3 = "3";
    return result3;
  } else {
    return alert('please fill it all in.')
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

    maths();
    var showResult = userStressLevel();
    $('#result').text(showResult);
  });
});
