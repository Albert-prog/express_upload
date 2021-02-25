function pageLoad() {
  console.log("Client is running");
  document.getElementById('button').addEventListener("click", function (event) {
    event.preventDefault()
    console.log("The file upload process is blocked")
  } )
}
window.addEventListener("load", pageLoad);