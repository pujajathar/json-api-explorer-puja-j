window.addEventListener("load", function(){
// 1. Fetch and Display Posts
  const button = document.getElementById("fetchButton");
  const titleInput = document.getElementById("titleInput");
  const bodyInput = document.getElementById("bodyInput");
  const postForm = document.getElementById("postForm");
  const formSuccess = document.getElementById("formSuccess");
  const postList = document.getElementById("postList");
    
   
button.addEventListener("click", function() { 
postList.innerHTML = "Loading........"; // Shows a “Loading…” message while the fetch is in progress

fetch("https://jsonplaceholder.typicode.com/posts")
.then(function (response) {
   if(!response.ok) {
       postList.innerHTML = "Error fetching the data";  //Displays an error message if the fetch fails , tried passing wrong URL

       throw new Error("Failed to fetch.");
   }
    console.log(response);
     

    //convert the response to JSON
    return response.json();
   
}).then(function(posts) {
      setTimeout(() => {        //using setTimeout to delay the response after the "loading..." message
          postList.innerHTML = "";
   for(let post of posts) {    //titles and body for each post
       
    postList.innerHTML +=       
 ` <h2>Title: ${post.title}</h2>
  <p>Body: ${post.body}</p>
 `
    };
    }, 1000);                  //delays displaying the posts for 1 second after the loading message
                        })
    .catch(error => {     //Error handling: displays error if fetch request fails
       console.log(error);
   })
    
    });



    // Task 2. Create and Send a New Post
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
            formSuccess.innerHTML =  "Form updated successfully";    //Prints Confirmation message

        
        })
            
            })


})