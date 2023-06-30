const convertBtn = document.querySelector("#convert-btn");
const inputEl = document.querySelector('#number');
const lengthEl = document.querySelector("#length-result");
const volumEl = document.querySelector("#volume-result");
const massEl = document.querySelector("#mass-result");
const feet = 3.281;
const gallon = 0.264;
const pounds = 2.204;


function renderLength(value) {
    let valueType = Number(value);
    let meter = (valueType/feet).toFixed(3);
    let feetVal = (feet * valueType).toFixed(3);
    lengthEl.innerHTML = `<p id="length-result">${value} meters = ${feetVal} feet | ${value} feet = ${meter} meters</p>`;
}

function renderVolume(measurement) {
    let valueType = Number(measurement);
    let litre = (valueType/gallon).toFixed(3);
    let galVal = (gallon * valueType).toFixed(3);
    volumEl.innerHTML = `<p id="volume-result">${measurement} litres = ${galVal} gallons | ${measurement} feet = ${litre} litres</p>`
}

function renderMass(result) {
    let valueType = Number(result);
    let mass = (valueType/pounds).toFixed(3);
    let poundVal = (pounds * valueType).toFixed(3);
    massEl.innerHTML = `<p id="mass-result">${result} kilos = ${poundVal} pounds | ${result} pounds = ${mass} kilos</p>`
}

convertBtn.addEventListener('click', () => {
let valInput = inputEl.value;
    renderLength(valInput);
    renderVolume(valInput);
    renderMass(valInput);

    
if (inputEl.value === '') {
    volumEl.innerHTML = '';
    lengthEl.innerHTML = '';
    massEl.innerHTML = '';
}
})


