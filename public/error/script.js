const msg = document.getElementById("msg")
const err = localStorage.getItem("error")

if (err) {
    msg.innerHTML = err
}