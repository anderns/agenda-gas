function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}
function obtenerDatosHtml(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
    let hoja = SpreadsheetApp.openById('1mp6aOvS0HVdOaiTGJG8xqrKaJ4MjQ4v4CmQHNEO3BlI').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos
}