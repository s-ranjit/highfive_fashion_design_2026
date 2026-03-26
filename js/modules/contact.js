export function contact() {
    const form = document.querySelector("#contact-form");
	const feedback = document.querySelector("#feedback");

    function regForm (event) {

        event.preventDefault();
        // console.log("called");

        const thisform = event.currentTarget;
        const url = "includes/scripts/contact.php";
    
        const formData =  new URLSearchParams({
            name: thisform.elements.name.value,
            email: thisform.elements.email.value,
            phone:  thisform.elements.phone.value,
            message: thisform.elements.message.value
        });
        console.log(formData);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData
        })
        .then(response => response.json())
        .then(responseText => {
            console.log(responseText);
            feedback.innerHTML = "";
            if(responseText.errors) {
                responseText.errors.forEach(error => {
                    const errorElement = document.createElement("p");
                    errorElement.textContent = error;
                    feedback.appendChild(errorElement);
                })
            } else {
                form.reset();
                const messageElement = document.createElement("p");
                messageElement.textContent = responseText.message;
                feedback.appendChild(messageElement);
            }
        

            feedback.scrollIntoView({ behavior: 'smooth', block: 'end'})
        })
        .catch(error => {
            console.log("Error during fetch:", error);
            feedback.innerHTML = "";
            const errorMessageElement = document.createElement("p");
            errorMessageElement.textContent = "Sorry, your message couldn't send. Please try again later.";
            feedback.appendChild(errorMessageElement);
        })
    }

    form.addEventListener("submit", regForm);
}