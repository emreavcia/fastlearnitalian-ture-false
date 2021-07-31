//Table and items
let veroFalsoTableBody = document.getElementById("vero-falso-table-body");
let tableStructureItems = test.map((item,index)=>
    '<tr>' +
    '<td class="col-10 pt-1 pb-1 bg-white">'+(index+1)+'. '+item.question+'</td>'+
    '<td class="col-1 pt-1 pb-0 align-middle bg-white" name="tds">'+
    '<div class="form-check"><input class="form-check-input" type="radio" value="V"'+
    '" name="flexRadioTestDefault'+index+'"'+
    '"></div></td>'+
    '<td class="col-1 pt-1 pb-0 align-middle  bg-white" name="tds"><div class="form-check"'+
    '><input class="form-check-input" type="radio"  value="F"'+
    '" name="flexRadioTestDefault'+index+'"></div></td></tr>'
);
veroFalsoTableBody.innerHTML=tableStructureItems.join("\n");

//setting total number of questions
totalNumberOfQuestions.innerHTML = test.length