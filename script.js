window.addEventListener("load", function(){
// 1. Fetch and Display Posts
const button = document.getElementById("fetchButton");
button.addEventListener("click", function() { 
fetch("https://jsonplaceholder.typicode.com/posts")
.then(function (response) {
    console.log(response);

    //convert the response to JSON
    return response.json();
    console.log(json);
}).then(function(posts){
    const div = document.getElementById("postList");
    div.innerHTML = "";
    for(let post of posts) {    //titles and body for each post
     div.innerHTML +=       
 `
 Title: ${post.title}<br>
 Body: ${post.body}<br>
`
    }
})

    
})
})


