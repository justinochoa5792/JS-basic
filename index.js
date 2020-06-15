//iteration 1
let hacker1 = "Justin";
let hacker2 = "Tony";
console.log(`The driver's name is ${hacker1}`);
console.log(`The Navigator's name is ${hacker2}`);
//iteration 2
if (hacker1.length > hacker2.length)
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
else if (hacker1.length < hacker2.length)
  console.log(
    `It seems the navigator has the longest name, it has ${hacker2.length} characters`
  );
else hacker1.length == hacker2.length;
console.log(
  `Wow, you both have equally long names,${hacker1.length} characters!`
);
// iteration 3
let test = hacker1.toUpperCase().split("").join(" ");
console.log(test);
let test2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  test2 = test2 += hacker2[i];
}

console.log(test2);
if (hacker1[0] < hacker2[0]) console.log(`The driver's name goes first.`);
else if (hacker1[0] > hacker2[0])
  console.log("Yo, the navigator goes first definitely.");
else hacker1[0] === hacker2[0];
console.log(`What?! You both have the same name?`);
