console.log(typeof("кот"+"код"),"кот"+"код"); // =string коткод - конкатенцаия строк
console.log(typeof("2"+2*"2"),"2"+2*"2"); // =string 24 - бинарный +, где хотя бы 1 операнд строка, значит конкатенация
console.log(typeof(undefined == null),undefined == null); // =boolean true - при нестрогом равенстве они равны друг другу
console.log(typeof(undefined != null),undefined != null); // =boolean false 
console.log(typeof(null == 0),null == 0); // =boolean false - нестрогая проверка на равенство null и undefind с чем угодно всегда дает ложь
console.log(typeof(2 > "3"),2 > "3"); // =boolean false - 2>3
console.log(typeof(null - false + true),null - false + true); //=number 1-  унарный+, нечислов null конверт в 0
console.log(typeof(1/"I"),1/"I"); // =number NaN - матем операции 1/строку
console.log(typeof("2"*"3"),"2"*"3"); // =number 6 - матем операции, строка преобр в число 2*3
console.log(typeof(4+5+"О"),4+5+"О"); // =string 9О - бинарный+, тк один операнд строка, то конкатенация
console.log(typeof("I"+4+5),"I"+4+5); // =string I45 - бинарный+, тк один операнд строка, то конкатенация
console.log(typeof("4"-2),"4"-2); // =number 2 -матем оп, строка преобр в число
console.log(typeof("4"-"4x"),"4"-"4x"); // =number NaN -матем оп, строка преобр в число
console.log(typeof('23'==23),'23'==23); // =boolean true -оператор сравнения, строка преобр в true
console.log(typeof(null==false),null==false); // =boolean false -оператор сравнения, null->undefind
console.log(typeof("-4"/0+1),"-4"/0+1); // =number -Infinity -матем оп -4/0+1
console.log(typeof(null+1),null+1); // =number 1 - бинарный+, null->0
console.log(typeof(undefined+null),undefined+null); // =number NaN - бинарный+, null->0, undef->Nan
console.log(typeof(1==="1"),1==="1"); // =boolean false - оп строгого рав-ва, разные типы сразу false
console.log(typeof("2">10),"2">10); // =boolean false - оп сравнения, разные типы сравн, то приводятся к числу, 2<10
console.log(typeof(NaN==undefined),NaN==undefined); // =boolean false - оп нестрог сравнения, NaN всегда при сравнении дает false




