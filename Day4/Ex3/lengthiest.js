let strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let lengthiestString = strings[0];

for (let i = 1; i < strings.length; i++) {
  if (strings[i].length > lengthiestString.length) {
    lengthiestString = strings[i];
  }
}

console.log('The lengthiest string is:', lengthiestString);
