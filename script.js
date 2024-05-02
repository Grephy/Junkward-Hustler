// function sendMail(){
//     let parms = {
//         name : document.getElementById("name").value,
//         email : document.getElementById("email").value,
//         pickup : document.getElementById("pickup").value,
//         datee : document.getElementById("datee").value,
//         timee : document.getElementById("timee").value,
//         message : document.getElementById("message").value,
//     }

//     emailjs.send("service_v2zsfzw","template_bjc11cf",parms)
//         .then(() => {
//             alert("Appointment Booked!!");
//         })
//         .catch((error) => {
//             alert("Error sending email:", error);
//         });
// }
// //(alert("Appointment Booked!!"))
function sendMail(event) {
    event.preventDefault(); // Prevent default form submission

    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        pickup : document.getElementById("pickup").value,
        datee : document.getElementById("datee").value,
        timee : document.getElementById("timee").value,
        message : document.getElementById("message").value,
    }
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var service = document.getElementById('pickup').value;
    var date = document.getElementById('datee').value.trim();
    var time = document.getElementById('timee').value.trim();
    var message = document.getElementById('message').value.trim();
    // emailjs.send("service_v2zsfzw","template_bjc11cf",parms)
    //     .then(() => {
    //         alert("Appointment Booked!!");
    //     })
    //     .catch((error) => {
    //         alert("Error sending email: " + error);
    //     });

    // Simple validation
    if (name === '' || email === '' || mobile === '' || service === 'Choose Service' || date === '' || time === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Validate mobile number (10 digits)
    if (!/^\d{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

    // Validate email format (must contain "@gmail.com")
    if (!/@gmail\.com$/.test(email)) {
        alert('Please enter a valid Gmail address.');
        return;
    }

    else{
        emailjs.send("service_v2zsfzw","template_bjc11cf",parms)
        .then(() => {
            alert("Appointment Booked!!");
        })
        .catch((error) => {
            alert("Error sending email: " + error);
        });
    }
}

