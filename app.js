console.log("Hello World!\n==========\n");

// Exercise 1 Section


function plus(num) {
 return function (plusNumber) {
    return num + plusNumber;
    };
}

const plus2 = plus(2);

console.log(plus2(2));
console.log(plus2)





// Exercise 2

console.log("EXERCISE 1:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];



  
  users.forEach((user) => console.log(user.name));

  

// Exercise 3

  let newUsers = users.map((user) => {
      return { name: user.name, score: user.score };
  });

// Exercise 4

let activeUsers = users.filter((user) => user.isActive);
console.log(activeUsers);



// Exercise 5

users.sort((a, b) => {
    if (a.score < b.score) return 1;
    else return -1;
});
console.log(users);

// Exercise 6

let avgScore = users.reduce((sum, user) => sum + user.score, 0) / users.length;

console.log(avgScore);