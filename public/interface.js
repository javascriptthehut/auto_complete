function handleResult(input) {
    var array = input.split(',');
    var dropdown = document.getElementsByClassName('dropdown')[0]
    removeChildren();
      array.forEach(function(text){
        var p = document.createElement('p')
        p.className = 'option'
        var text = document.createTextNode(text)
        p.appendChild(text)
        dropdown.appendChild(p)
      })
}

function xhr () {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
          handleResult(xhr.response)
        }
    }
    xhr.open('get', '/find/' + document.getElementById('input').value);
    xhr.send();
}

function removeChildren () {
  var dropdown = document.getElementsByClassName('dropdown')[0]
  while (dropdown.firstChild){
    dropdown.removeChild(dropdown.firstChild)
  }
}

document.getElementById('input').addEventListener("input", function() {
    if (document.getElementById('input').value.length !== 0) {
      xhr();
    } else {
      removeChildren();
      getDef(document.getElementById('input').value)
    }
});

document.querySelector('body').addEventListener("keydown", function(event) {
var dropdown = document.getElementsByClassName('dropdown')[0]
var selected = document.getElementsByClassName("highlighted")[0]
if(dropdown.firstChild){
  if(selected) {
      if (event.keyCode === 40) {
        event.preventDefault()
        if (selected.nextSibling){
          selected.nextSibling.className = 'highlighted';
          selected.className = 'option';
        }
      } else if (event.keyCode === 38) {
        event.preventDefault()
        if (selected.previousSibling){
          selected.previousSibling.className = 'highlighted';
          selected.className = 'option';
        }
      } else if (event.keyCode === 13){
        event.preventDefault()
        console.log(selected.innerHTML)
        document.getElementById('input').value = selected.innerHTML
        getDef(document.getElementById('input').value)
        xhr();
      }
  } else if (event.keyCode === 40 || event.keyCode == 38) {
    event.preventDefault()
    dropdown.firstChild.className = 'highlighted';
  }
}
});
