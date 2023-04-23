let students = [
    { regNo: 1001, name: 'Alice', score: 90 },
    { regNo: 1002, name: 'Bob', score: 85 },
    { regNo: 1003, name: 'Charlie', score: 95 },
    { regNo: 1004, name: 'Dave', score: 80 },
    { regNo: 1005, name: 'Eve', score: 100 },
    { regNo: 1006, name: 'Frank', score: 65 },
    { regNo: 1007, name: 'Grace', score: 72 },
    { regNo: 1008, name: 'Henry', score: 60 }
  ];
  let highScoringStudents = students.filter(student => student.score >= 70);
  
  console.log('The list of high scoring students is:', highScoringStudents);
  