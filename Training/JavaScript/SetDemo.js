let grade = new Set();

grade.add('A')
grade.add('B')
grade.add('C')
console.log(grade.size);

console.log(grade.has('A'));
console.log(grade.has('A1'));
console.log(grade.values());
grade.delete('C')
console.log(grade.values());

grade.forEach(level => {
    console.log(`Grade : ${level}`);
})