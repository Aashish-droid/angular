let students = [
    { regNo: 1001, name: 'Alice', score: 90 },
    { regNo: 1002, name: 'Bob', score: 85 },
    { regNo: 1003, name: 'Charlie', score: 95 },
    { regNo: 1004, name: 'Dave', score: 80 },
    { regNo: 1005, name: 'Eve', score: 100 }
  ];

  let highestScoringStudent = students[0];

  for (let i = 1; i < students.length; i++) {
    if (students[i].score > highestScoringStudent.score) {
      highestScoringStudent = students[i];
    }
  }
  console.log('The student with the highest score is:', highestScoringStudent.name, 'with a score of', highestScoringStudent.score);
  