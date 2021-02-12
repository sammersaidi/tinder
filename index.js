const storage = window.localStorage;
//signUp funktionen som bliver lagt i forbindelse med min button og henter værdierne fra min HTML side
function signUp(){
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;

    //her er mit min variabel jeg kalder som et array ved POST request
    let account = {
       fullname,
       email,
       age,
       password
    };

        // når jeg laver mit post request, så kalder den mit API/account, som indeholder mit account-objekt
        // da det ikke er muligt at gemme i localstorage fra api'et simulere udelukkende et api kald.
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        }
    };  

    xhttp.open("POST", "http://localhost:3000/account", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(account));


         // Her gemmes account i localstorage som et array for at kunne indeholde flere brugere på en gang

         let storageAccounts = storage.getItem("accounts");
         let accounts = [];
        
         // Check if account exists create account array if not.
         if(storageAccounts){
            accounts  = JSON.parse(storageAccounts);
         }

         accounts.push(account);

         storage.setItem("accounts", JSON.stringify(accounts));
}


//A function is made that checks if the mail and password that is put in is equal to the one from local storage
function doLogin() {
    const logInEmail = document.getElementById("logInEmail").value;
    const logInPassword = document.getElementById("logInPassword").value;

    let storageAccounts = storage.getItem("accounts");

    if(storageAccounts){
       accounts  = JSON.parse(storageAccounts);
    }


    // Her tjekker vi for en valid bruger, så hvis brugeren der er oprettet i signup matcher login oplysninger
    // skal den ikke søge videre for nogen bruger og dermed sende os ud af loopet og ind til den næste side
    let hasValidAccount = false;
    for (let index = 0; index < accounts.length; index++) {
        if(accounts[index] && accounts[index].email == logInEmail 
            && accounts[index].password == logInPassword){
                hasValidAccount = true;
                break;
        }
    }
    
      if (hasValidAccount) {
        window.location.href = "../view/like.html";                     //link til swipe siden når bruger er logget ind
      } else{
          alert("Account not found! Sign up for a new account..")
      }
    }