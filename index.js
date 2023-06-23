const compareStudents = (a, b) => {
  // Priority one: total marks
  const totalMarksDiff = b.chemistry + b.biology - (a.chemistry + a.biology);
  if (totalMarksDiff !== 0) {
    return totalMarksDiff; // Sort in descending order
  }

  // Priority two: biology marks
  const biologyMarksDiff = b.biology - a.biology;
  if (biologyMarksDiff !== 0) {
    return biologyMarksDiff; // Sort in descending order
  }

  // Priority three: date of birth
  const dateOfBirthDiff = new Date(a.dob) - new Date(b.dob);
  return dateOfBirthDiff; // Sort in ascending order
};

const testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

const testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];
result1 = [];
result2 = [];

// Sorting the array of student objects
testCase1.sort(compareStudents);
testCase2.sort(compareStudents);

// Printing the sorted array of student objects
for (let i of testCase1) {
  result1.push(i.name);
}
for (let i of testCase2) {
  result2.push(i.name);
}
console.log(result1);
console.log(result2);
