// const nums = [5, 10, 15, 20];
// const sum = nums.reduce((acc, sum) => acc + sum, 0);
// console.log(sum);

// const nums = [2, 3, 4];
// const product = nums.reduce((acc, pro) => acc * pro, 1);
// console.log(product);

const scores = [80, 90, 70, 100];
// const avg =
//   scores.reduce(
//     (acc, sum) => acc + sum,

//     0
//   ) / scores.length;
// console.log(avg);
// const nested = [[1, 2], [3, 4], [5]];
// const result = nested.flat();
// console.log(result);
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Carol" },
// ];
// const usersName = users.map((user) => user.name);
// console.log(usersName);

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const result = fruits.reduce((acc, curr) => {
//   acc[curr] = acc[curr] || 0 + 1;
//   return acc;
// }, {});
// console.log(result);
// const pets = [
//   { name: "Spot", type: "dog" },
//   { name: "Mittens", type: "cat" },
//   { name: "Rover", type: "dog" },
//   { name: "Whiskers", type: "cat" },
// ];
// const resultPets = pets.reduce((acc, pet) => {
//   if (!acc[pet.type]) {
//     acc[pet.type] = [];
//   }
//   acc[pet.type].push(pet);
//   return acc;
// }, {});
// console.log(resultPets);

// const products = [
//   { sku: "A123", name: "Socks", price: 5 },
//   { sku: "B456", name: "Hat", price: 15 },
// ];
// const resultPro = products.reduce((acc, curr) => {
//   acc[curr.sku] = curr;
//   return acc;
// }, {});

// console.log(resultPro);
const votes = [
  "Alice",
  "Bob",
  "Alice",
  "Carol",
  "Bob",
  "Alice",
  "Carol",
  "Bob",
];
const voteCount = votes.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(voteCount);
const pets = [
  { name: "Fido", type: "dog" },
  { name: "Mittens", type: "cat" },
  { name: "Rex", type: "dog" },
  { name: "Whiskers", type: "cat" },
  { name: "Goldie", type: "fish" },
];
const countPet = pets.reduce((acc, curr) => {
  acc[curr.type] = (acc[curr.type] || 0) + 1;
  return acc;
}, {});
console.log(countPet);
// const sales = [
//   { region: "North", amount: 100 },
//   { region: "South", amount: 80 },
//   { region: "North", amount: 120 },
//   { region: "East", amount: 75 },
//   { region: "South", amount: 20 },
// ];
// const salesResult = sales.reduce((acc, curr) => {
//   acc[curr.region] = (acc[curr.region] || 0) + curr.amount;
//   return acc;
// }, {});

// console.log(salesResult);
// const wordCount = (str) => {
//   const wordArr = str.split("");
//   const count = wordArr.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
//   }, {});
//   return count;
// };
//console.log(wordCount("mississippi"));
// const users = [
//   { name: "Anjali", active: true },
//   { name: "Raj", active: false },
//   { name: "Meena", active: true },
// ];
// const usersResult = users.reduce((acc, curr) => {
//   if (curr.active) {
//     acc.push(curr.name);
//   }
//   return acc;
// }, []);
// console.log(usersResult);
// const participation = [
//   { name: "Rahul", hours: 6 },
//   { name: "Neha", hours: 4 },
//   { name: "Ankit", hours: 3 },
//   { name: "Rahul", hours: 5 },
//   { name: "Neha", hours: 2 },
//   { name: "Anjali", hours: 9 },
// ];
// const filterParticipation = participation.reduce((acc, curr) => {
//   acc[curr.name] = (acc[curr.name] || 0) + curr.hours;
//   return acc;
// }, {});
// const result = Object.fromEntries(
//   Object.entries(filterParticipation).filter(([name, hours]) => hours > 8)
// );
// console.log(result);
// const sales = [
//   { executive: "Rohit", amount: 5000 },
//   { executive: "Sneha", amount: 4000 },
//   { executive: "Rohit", amount: 3000 },
//   { executive: "Sneha", amount: 1000 },
//   { executive: "Arjun", amount: 6000 },
// ];
// const salesResult = sales.reduce((acc, curr) => {
//   acc[curr.executive] = (acc[curr.executive] || 0) + curr.amount;

//   return acc;
// }, {});
// const finalSol = Object.fromEntries(
//   Object.entries(salesResult).filter(([executive, amount]) => amount > 7000)
// );
// console.log(finalSol);

// const users = [
//   {
//     id: 1,
//     name: "Alice",
//     videos: [
//       { title: "Intro", size: 80, tags: ["tutorial", "beginner"] },
//       { title: "Advanced Tips", size: 120, tags: ["tutorial", "advanced"] },
//     ],
//   },
//   {
//     id: 2,
//     name: "Bob",
//     videos: [
//       { title: "Travel Vlog", size: 200, tags: ["travel", "vlog"] },
//       { title: "Food Tour", size: 150, tags: ["food", "travel"] },
//     ],
//   },
// ];
// const analyzeVideos = (users) => {
//   const UserStorage = users.reduce((acc, user) => {
//     const totalSize = user.videos.reduce((acc, video) => acc + video.size, 0);
//     acc[user.name] = totalSize;
//     return acc;
//   }, {});
//   return UserStorage;
// };
// console.log(analyzeVideos(users));
// const allTags = users.flatMap((user) =>
//   user.videos.flatMap((video) => video.tags)
// );
// const tagSet = new Set(allTags);

// console.log(tagSet);

//

// const users = [
//   { name: "Alice", email: "alice@email.com" },
//   { name: "Bob", email: "bob@email.com" },
// ];
// const result = users.reduce((acc, curr) => {
//   acc[curr.name] = curr.email;
//   return acc;
// }, {});
// console.log(result);

const orders = [
  { id: 1, products: [{ price: 10 }, { price: 20 }] },
  { id: 2, products: [{ price: 15 }, { price: 5 }] },
];
const totalPrice = orders.flatMap((price) => price.products);
console.log(totalPrice);
