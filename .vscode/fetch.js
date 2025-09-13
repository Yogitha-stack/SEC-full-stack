    
fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(res => res.json())
    .then(users=> {
        let output="<h3>Users LIst</h3><ul>";
        users.forEach(user=>{
            output+=`<li>${user.name} (${user.email})</li>`;
        });
        output+="</ul>";
        document.body.innerHTML=output;
    });