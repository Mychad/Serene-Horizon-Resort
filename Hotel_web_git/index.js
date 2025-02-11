/* All */

AOS.init({
    once: false  
  });

function myFunction() {
    var x = document.getElementById("myLinks");
    var currentDisplay = window.getComputedStyle(x).display;

    if (currentDisplay === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// ✅ Desktop view pe aate hi inline styles hata do
window.addEventListener("resize", function () {
    var x = document.getElementById("myLinks");
    if (window.innerWidth > 650) {
        x.style.display = ""; // Reset to default CSS
    }
});

/* Review */

const addReviewButton = document.getElementById('newReview');
    const container = document.getElementById('reviews');
    
    addReviewButton.addEventListener("click" , ()=>{
        let name = document.getElementById('name').value;
        let review = document.getElementById('review').value;
        //let use isliye karenge kyu ke woh customize kiya jaa sakta hai means usko 
        //aage jaake end mei empty kiya jaa sakta hai

        if(name.trim() ==="" || review.trim() === ""){
            alert("Please enter both fields");
            return; //aage nhi jayega tab tak jab tak value true na ho
        }

        const newdiv = document.createElement('div');
        newdiv.setAttribute("class" , "review");

        newdiv.innerHTML = `<h2>${name} </h2> <p> ${review} </p>`;

        container.appendChild(newdiv);

        //at end lets clear the values of input fields
        //yaha variable is liye nhi likha kyu ke variable toh sirf function mei hai
        //html se clear aise document.get se hoga
        document.getElementById("name").value = "";
        document.getElementById("review").value = "";
    })
    AOS.init({
        once: false  
      });