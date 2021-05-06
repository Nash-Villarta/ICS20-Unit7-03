//  Listener for click
document.getElementById('button').addEventListener('click', calculate)
let userage = 0
//  Ranges age to find appropiate age group
function calculate () {
  userage = document.getElementById('inputbox').value
  userage = parseFloat(userage)
  if (userage > 17) {
    document.getElementById('textbox').innerHTML = 'You can view a R rated movie'
  } else if (userage > 13) {
    document.getElementById('textbox').innerHTML = 'You can view a PG 13 rated movie'
  } else {
    document.getElementById('textbox').innerHTML = 'You can view a G rated movie'
  }
}
