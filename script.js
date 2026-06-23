window.addEventListener("load", function(){
// 1. Fetch and Display Posts
const button = document.getElementById("fetchButton");
button.addEventListener("click", function() { 
fetch("https://jsonplaceholder.typicode.com/posts")
.then(function (response) {
    console.log(response);

    //convert the response to JSON
    return response.json();
   
}).then(function(posts){
    const postList = document.getElementById("postList");
    postList.innerHTML = "";
   
    for(let post of posts) {    //titles and body for each post
       
        postList.innerHTML +=       
 ` 
 <h2>Title: ${post.title}</h2>
 <p>Body: ${post.body}</p>
`
    }
})

})
    // Task 2. Create and Send a New Post
  const titleInput = document.getElementById("titleInput");
  const bodyInput = document.getElementById("bodyInput");
  const postForm = document.getElementById("postForm");
  const formSuccess = document.getElementById("formSuccess");
    postForm.addEventListener("submit", function(event) {
        event.preventDefault();    //prevents the page refresh when submitting the form to create a new post.
        fetch("https://jsonplaceholder.typicode.com/posts" , {
            method: "POST",
            headers: {
              "Content-Type": "application/json"  
            },
            body: JSON.stringify({   //JavaScript object into a JSON string.
                title: titleInput.value,
                body: bodyInput.value
               
            })
        }).then(response => {
            return response.json();
        }).then(json => {
            console.log(json); 
            formSuccess.innerHTML =  "Form updated successfully";     //Prints Confirmation message

        
        })
            
            })


 })

    


