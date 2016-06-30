document.getElementById('input').addEventListener("change", function() {

});

function xhr (handleResult) {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
          handleResult(xhr.response)
        }
    }
    xhr.open('get', '/find/' + document.getElementById('input').value);
    xhr.send();
}


function updateDom() {

}

function handleResult(input) {
    var array = input.split(',');
    var dropdown = document.getElementsByClassName('dropdown')[0]
    array.forEach(function(text){
      var p = document.createElement('p')
      var text = document.createTextNode(text)
      p.appendChild(text)
      dropdown.appendChild(p)
    })

}
