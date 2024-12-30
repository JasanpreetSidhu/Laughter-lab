const btn = document.getElementById("joke-btn");

// shows joke when page is loaded for the first time
document.addEventListener("DOMContentLoaded", getJokeFromApi);
btn.addEventListener("click", getJokeFromApi);

function getJokeFromApi(e) {
  //console.log("joke");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");
  // adding event handler to when HTTPrequest states are changed
  xhr.onreadystatechange = function () {
    // checking request is finished
    if (xhr.readyState === 4) {
      // checking response is received successfully from api
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        document.querySelector("#joke").textContent = data.value;
      } else {
        document.querySelector("#joke").textContent = "An error occurred";
      }
    }
  };
  xhr.send();
}
