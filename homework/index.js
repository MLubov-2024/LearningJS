console.log(typeof("кот"+"код"),"кот"+"код"); // коткод - конкатенцаия строк
console.log(typeof("2"+2*"2"),"2"+2*"2"); // 24 - бинарный +, где хотя бы 1 операнд строка, значит конкатенация
console.log(typeof(undefined == null),undefined == null); // true - при нестрогом равенстве они равны друг другу
console.log(typeof(undefined != null),undefined != null); // false 
console.log(typeof(null == 0),null == 0); // false - нестрогая проверка на равенство null и undefind с чем угодно всегда дает ложь
console.log(typeof(2 > "3"),2 > "3"); // false - 2>3