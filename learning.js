//1.1 Numbers - Any Numbers
var num1 = 20;
var num2 = 30;
var num3 = num1 + num2;
console.log("The sum of two number is " + num3);
console.log(typeof num3);

//1.2 Strings - It could be a text or number but written inside the single '' or doble ""
var fstname = "Sundar";
var lstname = "Moorthi";
var age = 20 //Here 20 is number not a String
var dob = "30" //Here 30 is not a number, it's a string
console.log(fstname +" " + lstname + " and his age is " + age + " and his birth year is "+ dob);
console.log(typeof fstname, typeof lstname, typeof age, typeof dob);

//1.3 Boolean - Either value should be true or false

//1.4 Null - Here the value, which can't be valued. 

//1.5 undefined - NA
/**
var ex1 = "Tamil";
var ex2 = "English";
var ex3 = "Maths";
var ex4 = 
var ex5 = "Social";
console.log(ex4);
console.log(typeof ex4);
 */

//1.6 NaN - Not a Number

//1.7 Array - Collection of elements
var fruits = ['apple', 'banana', 'orange', 'mango', 'dragon_fruit', 'custard_apple']
console.log(typeof fruits)
console.log(fruits[0])
console.log(fruits[3])
console.log(fruits[6]) //Fetching 6th index value
console.log(fruits.length) //fetching length of the array
console.log(fruits); //fetching full array
//syntax console.log(fruits.slice(start, end)) - slice concept - adding stop gate infront of end index. Getting range of cont. values
//In JS negative array(negative index) is not possible
console.log(fruits.slice(1,4)); //To print the certain values from array - It will print index from 1 to 3

var scores = [2, 4, 5, 1, 3, 6, 6, 2, 1]
//Adding two values from array
console.log(scores[1] + scores[4]);

//Array Destructuring
var [one, two, three, four, five, six] = [2, 5, 7, 8, 1, 4]
console.log(three + six); //it will return 7+4 = 11
var [a, b] = [2, 5, 7, 8, 1, 4]
console.log(a + b); //this will return 2 + 5 = 7

//Split concept in string - Making string to array
var marks = "97 86 98 91 96"
console.log(marks)
console.log(marks.split(" "))

//join concet in array - Making array to String
var input = [1, 2, 3]
console.log(input.join(" "))
console.log(input[0]+ " " + input[1]+ " " + input[2])

var input1 = "sundar";
console.log(typeof input1)
console.log(input1)
var input2 = input1.split("")
console.log(input2)
//console.log(input1[0]+ " "+input1[1]+ " "+input1[2]+ " "+input1[3]+ " "+input1[4]+ " "+input1[5])
//console.log(input1.split(""))
console.log(input2.join(" "))

//1.8 objects - key:value - pairs
var userinfo = {
    firstname : "Sundara",
    lastname : "Moorthi",
    age : 30,
    mail_ID : "sundar.ram.mv@gmail.com",
    emp_code : "HI-3711",
    course_status : true
}
console.log(userinfo);
console.log(typeof userinfo);
//For Loop to print 1 to 10
for(var x=1; x <= 10; x=x+1) {
    console.log(x)
}
//For loop to print the values from array
var mob = ["Redmi", "Apple", "Realme", "oneplus", "Samsung", "google", "jio_mobiles"];
for(m=0; m<=10; m=m+1) {
    console.log(mob[m])
}
//For loop with dynamic condition 
for(m=0; m<mob.length; m=m+1) {
    console.log(mob[m])
}
//Conditional Statement - IF.. ELSE.. ELSEIF...
var saving = 100;
if (saving >= 500 && saving < 999) {
    console.log("Trip to ooty")
} else if (saving >= 1000 && saving < 4999) {
    console.log("Trip to Kerala")
} else if (saving >= 5000 && saving < 9999 ) {
    console.log("Trip to Goa")
} else {
    console.log("Hotstar and Chill with Frnds")
}

//ex:- Print number 2, 4 times. using for loop
var arr = [2, 3]; 
var [a1, b1] = [2, 3]; //array de-structuring
for (x=0; x<=2; x=x+1) //applying for loop
    console.log(a1) //passing a1 value through loop
    // console.log(arr) //passing array through loop
var N1 = 10;
for (x=N1; x>=1; x=x-1)
console.log(x)

var cube = 5;
console.log(cube * cube * cube) // To find the value of exponent 3.
var num3 = 3;
console.log(num3**3) //To find the value of exponent 3.  

var array1 = [1, 6, 4, 0, 3]
var small_index = array1[0]
var large_index = array1[4]
var diff = small_index - large_index
console.log(diff)

//to find a smallest and lasrgest value in a array. 
var min = array1[0];
var max = array1[0];

for (x=1; x < array1.length; x=x+1) {
    if(array1[x] <= min) {
        min = array1[x]
    }
    if(array1[x] >= max) {
        max = array1[x]
    }
}
console.log(min, max)

//to find the index of min and max value from a array
minIndex = array1.indexOf(min);
maxIndex = array1.indexOf(max);
console.log(minIndex, maxIndex)

//to find the difference between max index and min index
console.log(maxIndex - minIndex)

//Another way to find the difference between max index and min index using sort methos
var srtArray = array1.sort();
console.log(srtArray)
var maxValue = srtArray[srtArray.length - 1]
var minValue = srtArray[0]
console.log(maxValue, minValue) 



var array2 = [4, 1, 8, 9, 3, 5, 2]
//Sort the array in ascending order and descending order
var array2Value = array2.sort((a, b) => {
    
    return a - b;
})
console.log(array2Value)

var array3Value = array2.sort((a, b) => {
    return b - a;
})
console.log(array3Value)