function updateInfo() {
    const fullname = document.getElementById("updateFname").value;
    const email = document.getElementById("updateEmail").value;
    const Password = document.getElementById("updatePassword").value;
    const age = document.getElementById("updateAge").value;
  


    localStorage.setItem("fullName", fullname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", Password);
    localStorage.setItem("age", age);

    e.preventDefault(); //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

      reload = location.reload();

};

function reload() {
  reload = location.reload();

}