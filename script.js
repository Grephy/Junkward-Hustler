function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        pickup : document.getElementById("pickup").value,
        datee : document.getElementById("datee").value,
        timee : document.getElementById("timee").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_v2zsfzw","template_jybmqp7",parms)
        .then(() => {
            alert("Appointment Booked!!");
        })
        .catch((error) => {
            alert("Error sending email:", error);
        });
}
//(alert("Appointment Booked!!"))