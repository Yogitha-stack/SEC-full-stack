fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(response => response.json())
    .then(data => console.log("Fetched  Data:", data))
    .catch(error => console.error("Error fetching data:", error));
