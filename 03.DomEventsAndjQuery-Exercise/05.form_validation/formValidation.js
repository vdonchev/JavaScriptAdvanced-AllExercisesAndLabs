function solve() {
    let isCompany = false;
    setEventHandlers();

    function setEventHandlers() {
        $('#company').on('change', function () {
            let companyFieldSet = $('#companyInfo');
            if ($(this).is(':checked')) {
                companyFieldSet.slideDown();
                isCompany = true;
            } else {
                companyFieldSet.slideUp();
                isCompany = false;
            }
        });

        $('#submit').click(function (event) {
            event.preventDefault();
            validateForm();
        });
    }

    function validateForm() {
        let formIsValid = true;
        let username = $('#username');
        if (!username.val().match(/^[a-zA-Z0-9]{3,20}$/)) {
            username.css('border-color', 'red');
            formIsValid = false;
        } else {
            username.css('border', 'none');
        }

        let email = $('#email');
        if (!email.val().match(/^.*@.*?\..*?$/)) {
            email.css('border-color', 'red');
            formIsValid = false;
        } else {
            email.css('border', 'none');
        }

        let password = $('#password');
        let confirmPassword = $('#confirm-password');

        if (!password.val().match(/^[\w]{5,15}$/)) {
            password.css('border-color', 'red');
            confirmPassword.css('border-color', 'red');
            formIsValid = false;
        } else {
            if (!confirmPassword.val().match(/^[\w]{5,15}$/)) {
                password.css('border-color', 'red');
                confirmPassword.css('border-color', 'red');
                formIsValid = false;
            } else {
                if (confirmPassword.val() != password.val()) {
                    password.css('border-color', 'red');
                    confirmPassword.css('border-color', 'red');
                    formIsValid = false;
                } else {
                    confirmPassword.css('border', 'none');
                    password.css('border', 'none');
                }
            }
        }

        if (isCompany) {
            let companyNumber = $('#companyNumber');
            if (!companyNumber.val().match(/^[1-9]\d{3}$/)) {
                companyNumber.css('border-color', 'red');
                formIsValid = false;
            } else {
                companyNumber.css('border', 'none');
            }
        }

        if (formIsValid) {
            $('#valid').show();
        }
    }
}