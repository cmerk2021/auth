const pb = new PocketBase('https://connormerk-auth.pockethost.io');

const urlParams = new URLSearchParams(window.location.search);
const redirect = urlParams.get('redirect')

const err = document.getElementById("error")

const form = document.querySelector("form");
const username = document.getElementById("email");
const password = document.getElementById("password");
form.addEventListener('submit', async (event) => {
    try {
	event.preventDefault();
 
	const authData = await pb.collection('users').authWithPassword(
        username.value,
        password.value,
    );

    if (authData.token) {
        window.location = `${redirect}?token=${authData.token}`
    }
    
    } catch (e) {
        err.innerHTML = "Invalid username or password."
    }

});

