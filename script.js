function reserver() {
    let nom = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let heure = document.getElementById("time").value;
    let message = document.getElementById("message");

    if (nom === "" || date === "" || heure === "") {
        message.style.color = "red";
        message.innerHTML = "❌ Veuillez remplir tous les champs";
    } else {
        message.style.color = "green";
        message.innerHTML =
            "✅ Rendez-vous confirmé pour " + nom +
            " le " + date + " à " + heure;
    }
}