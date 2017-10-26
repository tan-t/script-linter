// vanilla!!!!
document.getElementById('test-button').onclick = function(e){
  var sql = document.getElementById('test').value;
  var func = document.getElementById('func').value;
  var errorMessage = document.getElementById('errorMessage').value;
  var successMessage = document.getElementById('successMessage').value;
  try {
    var f = evaluate(func);
    if(f(sql)){
      resetCss(document.getElementById('test-validation'));
      document.getElementById('test-validation').classList.add('text-danger');
      document.getElementById('test-validation').innerHTML = errorMessage;
    } else {
      resetCss(document.getElementById('test-validation'));
      document.getElementById('test-validation').classList.add('text-success');
      document.getElementById('test-validation').innerHTML = successMessage;
    }
  } catch(e) {
    resetCss(document.getElementById('test-validation'));
    document.getElementById('test-validation').classList.add('text-danger');
    document.getElementById('test-validation').innerHTML = 'JSエラーが発生しています ' + e;
  }
};

var evaluate = function(arg){
  var func = `function f(sql){${arg}}`;
  eval(func);
  return f;
}

var resetCss = function(elem){
  elem.classList.remove('text-danger');
  elem.classList.remove('text-success');
}
