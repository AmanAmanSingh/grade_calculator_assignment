const english = document.getElementById("english");
const maths = document.getElementById("maths");
const physics = document.getElementById("physics");
const chemistry = document.getElementById("chemistry");
const computer = document.getElementById("computer");
const calculateGrade = document.getElementById("calculateGrade");
const total = document.getElementById("total");
const avarage = document.getElementById("avarage");
const grade = document.getElementById("grade");

let mathVal;
let engValue;
let phyValue;
let chemistryVal;
let comVal

let flag = false;

let sum = 0;
let averageVal = 0;

function checkInputValue(val) {
    if (val > 100) {
        alert("Please enter marks in range 100");
    }

}


english.addEventListener("change", () => {
    engValue = parseFloat(english.value);
    checkInputValue(engValue);
    sum += engValue;
})
maths.addEventListener("change", () => {
    mathVal = parseFloat(maths.value);
    checkInputValue(mathVal);

    sum += mathVal;
})
physics.addEventListener("change", () => {
    phyValue = parseFloat(physics.value);
    checkInputValue(phyValue);

    sum += phyValue;
})
chemistry.addEventListener("change", () => {
    chemistryVal = parseFloat(chemistry.value);
    checkInputValue(chemistryVal);

    sum += chemistryVal;
})
computer.addEventListener("change", () => {
    comVal = parseFloat(computer.value);
    checkInputValue(comVal);
    sum += comVal;

});


calculateGrade.addEventListener("click", () => {

    if ((engValue || mathVal || phyValue || chemistryVal || comVal) < 35) {
        console.log("here")
        total.innerHTML = `total Marks :${sum}`;
        let avg = sum / 5;
        avarage.innerHTML = `your Average marks are: ${avg}`
        return grade.innerHTML = "you got F Grade"
    }

    total.innerHTML = `total Marks :${sum}`;
    let avg = sum / 5;
    avarage.innerHTML = `your Average marks are: ${avg}`

    if (avg >= 90) {
        grade.innerHTML = "A Grade"
    } else if (avg >= 80 && avg <= 89) {
        grade.innerHTML = "B Grade"
    } else if (avg >= 70 && avg <= 79) {
        grade.innerHTML = "C Grade"
    } else if (avg >= 60 && avg <= 69) {
        grade.innerHTML = "D Grade"
    } else {
        grade.innerHTML = "you got F Grade"
    }
})



