const monthNames = [
    "Enero",
"Febrero",
"Marzo",
"Abril",
"Mayo",
"Junio",
"Julio",
"Agosto",
"Septiembre",
"Octubre",
"Noviembre",
"Diciembre"
]

const getLongMonthName = function(date) {
    return monthNames[date.getMonth()].toLowerCase();
}
 
const getCurrentDate = () => {
    let date = new Date();
    let output = 'Hoy es '+ String(date.getDate()).padStart(2, '0') + ' de ' +  getLongMonthName(date) + ' del ' + date.getFullYear();
    return  output

}
export { getCurrentDate}