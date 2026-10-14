
/*
Q4: Array Performance Analyzer
Generate and analyze 8 student scores.
*/

// Generate 8 random scores between 30 and 100
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Use map() to create a display-friendly score list
const displayedScores = scores.map(score => score);

// Find highest and lowest scores
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Calculate average using reduce()
const totalScore = scores.reduce(
    (total, score) => total + score,
    0
);
const averageScore = totalScore / scores.length;

// Count students who passed
const passedStudents = scores.filter(score => score >= 50);
const passCount = passedStudents.length;

// Display summary
console.log("===== Student Performance Report =====");
console.log(`Scores: ${displayedScores.join(", ")}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Students Passed: ${passCount}`);
console.log(`Students Failed: ${scores.length - passCount}`);
