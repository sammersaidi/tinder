function likeBtn() { 

   
    localStorage.setItem("Match", "Kim");
    window.alert("You got a new match!")
};

//min dislike button, som fremkalder en alert, når dislike knappen bliver trykket på.
function dislikeBtn(){ 
    localStorage.removeItem("Match", "Kim");
    window.alert("You disliked Kim")
}

