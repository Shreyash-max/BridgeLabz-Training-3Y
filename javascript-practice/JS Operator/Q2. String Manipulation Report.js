
/*
Q2: String Manipulation Report
Clean and format a product title.
*/

// Original product name
let productName = " wireless headphones PRO ";

// Remove extra spaces and convert to lowercase
let cleanedName = productName.trim().toLowerCase();

// Capitalize the first letter of each word
cleanedName = cleanedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace Pro with Pro Edition
cleanedName = cleanedName.replace(/\bPro\b/g, "Pro Edition");

// Display the result
console.log(`Product Title: ${cleanedName}`);
console.log(`Title Length: ${cleanedName.length}`);
