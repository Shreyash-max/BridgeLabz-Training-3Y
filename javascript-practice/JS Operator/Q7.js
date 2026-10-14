
/*
Q7: Customer Feedback Processor
Analyze feedback for negative words and count words.
*/

// Customer feedback
const feedback =
    "Great product! Fast delivery and amazing sound quality!";

// Convert to lowercase for case-insensitive checking
const lowerFeedback = feedback.toLowerCase();

// Count words
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

// Check for negative words
const hasNegativeWords =
    lowerFeedback.includes("bad") ||
    lowerFeedback.includes("poor");

// Display report
console.log("===== Customer Feedback Report =====");
console.log(`Feedback: ${feedback}`);
console.log(`Word Count: ${wordCount}`);

if (hasNegativeWords) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
