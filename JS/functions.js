//number of Veros and Falsos were doubled
const double = function(){
    for(var i=0; i<veroOrFalse.length; i++){
    for(var j =0; j<2 ; j++){
        doubleVeroOrFalso.push(veroOrFalse[i])
    }
}}; 

//function for check button 
const checkBtn = function(){checkButton.addEventListener("click", function(){
    let iteration = 0;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked === true && doubleVeroOrFalso[i] === inputs[i].value) {
            tds[i].classList.remove("bg-white")
            tds[i].classList.add("bg-success")
            iteration++;
        } else if (inputs[i].checked === true && doubleVeroOrFalso[i] !== inputs[i].value) {
            tds[i].classList.remove("bg-white")
            tds[i].classList.add("bg-danger")
        }
        scoreSpan.innerText = iteration;
    }
});
};

//function to show correct options 
const showButton = function() {
    showBtn.addEventListener("click", function () {
        for (var i = 0; i < inputs.length; i++) {
            tds[i].classList.remove("bg-success");
            tds[i].classList.remove("bg-danger");
            inputs[i].checked = false;
            if (inputs[i].value === doubleVeroOrFalso[i]) {
                tds[i].classList.remove("bg-white");
                tds[i].classList.add("bg-success");
            }
        }
    })
};

//function to clear all selected radio inputs in test
const clearButton = function () {
    let clearBtn = document.getElementById("clear-button");
    clearBtn.addEventListener("click", function () {
        for (var i = 0; i < inputs.length; i++) {
            tds[i].classList.add("bg-white");
            inputs[i].checked = false;
        }
    })
}
