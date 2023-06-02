$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);

    const email = document.createElement("p");
    const phone = document.createElement("p");
    const like = document.createElement("p");
    const perc = document.createElement("p");

    document.getElementById("nombre").innerText = urlParams.get("nombre") || "N/A";
    
    email.innerText = urlParams.get("email") || "N/A";
    email.classList.add("text__stats","bg-info");

    phone.innerText = urlParams.get("telef") || "N/A";
    phone.classList.add("text__stats", "bg-info");

    like.innerText = urlParams.get("gustos") || "N/A";
    like.classList.add("text__stats", "bg-info");

    perc.innerText = urlParams.get("porcen") || "N/A";
    perc.classList.add("text__stats", "bg-info");

    document.getElementById("email").appendChild(email);
    document.getElementById("telef").appendChild(phone);
    document.getElementById("gustos").appendChild(like);
    document.getElementById("porcen").appendChild(perc);

    console.log()
});