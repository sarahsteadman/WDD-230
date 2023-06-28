
        const formElement = document.forms[0];

         formElement.addEventListener('submit', function(e) {
            e.preventDefault();
            window.alert('Hello '+ formElement.user_name.value +'! Thank you for your message. We will get back with you as soon as possible!');

            location.reload();
        });