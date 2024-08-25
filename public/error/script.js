const msg = document.getElementById("msg")
const err = localStorage.getItem("error")
localStorage.removeItem("error")

msg.innerHTML = err || "That's all we know."
