let Book1={
    title: "The Great Gatsby",
    author:"F. Scott Fitzgerald",
    price:1500
};
let Book2={
    title:"To Kill a Mockingbird",
    author:"Harper Lee",
    price:1960
};
let Book3={
    title:"1984",
    author:"George Orwell",
    price:1200
};
let jsonString1=JSON.stringify(Book1);
console.log("JSON String of Book1:",jsonString1);
let jsonString2=JSON.stringify(Book2);
console.log("JSON String of Book2:",jsonString2);
let jsonString3=JSON.stringify(Book3);
console.log("JSON String of Book3:",jsonString3);
let parsedBook1=JSON.parse(jsonString1);
console.log("Parsed Book1 Object:",parsedBook1);
let parsedBook2=JSON.parse(jsonString2);
console.log("Parsed Book2 Object:",parsedBook2);
let parsedBook3=JSON.parse(jsonString3);
console.log("Parsed Book3 Object:",parsedBook3);

fetch("https://api.example.com/books")
    .then(response => response.json())
    .then(data => console.log("Fetched Books Data:", data))
    .catch(error => console.error("Error fetching data:", error));

fetch("https://jsonplaceholder.typiocode.com/posts/")
    .then(response => response.json())
    .then(data => console.log("Fetched  Data:", data))
    .catch(error => console.error("Error fetching data:", error));