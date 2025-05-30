let arr = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },

  { name: "Bob", tasksCompleted: 4, rating: 4.0 },

  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },

  { name: "David", tasksCompleted: 10, rating: 4.9 },

  { name: "Eve", tasksCompleted: 7, rating: 2.8 },
];

arr = arr.filter((employee) => employee.tasksCompleted > 5);

arr = arr.map((employee) => {
  if (employee.rating > 4.5) {
    return { name: employee.name, performance: "Excellent" };
  }  if (employee.rating >= 3 && employee.rating <= 4.5) {
    return { name: employee.name, performance: "Good" };
  } else {
    return { name: employee.name, performance: "Needs Improvement" };
  }
});
let performanceOrder = {
    'Excellent': 3,
    'Good': 2,
    'Needs Improvement': 1
};
arr=arr.sort((a, b) => performanceOrder[b.performance] - performanceOrder[a.performance]);
console.log(arr)