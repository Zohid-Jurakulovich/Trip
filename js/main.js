var ticket = 500;
var hotelPrice = 250;
var entertainment = 120;

var dollar = 10900;
var yevro = 12272.64;

var ticketInSoum = ticket * dollar ;
var hotelPriceInSoum = hotelPrice * dollar;
var entertainmentInSoum = Math.round( entertainment * yevro);

var allExpense = ticketInSoum + hotelPriceInSoum + entertainmentInSoum;

var customerBudget = Number(prompt("Alisher qancha mablag'ingiz bor?"))


if(customerBudget >= allExpense){
  console.log("Oq yo'l, Alisher!");
}else{
  console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan");
}
  
  