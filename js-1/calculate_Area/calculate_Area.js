let length;
let width;

let calculateArea = function(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the reactangle is :${area}`;
}