class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(value) {
        CheckingAccount._validateValue(value, /^[0-9]{6}$/g, 'Client ID must be a 6-digit number');
        this._clientId = value;
    }

    set email(value) {
        CheckingAccount._validateValue(value, /^[a-zA-Z]+@[a-zA-Z.]+$/g, 'Invalid e-mail');
        this._email = value;
    }

    set firstName(value) {
        CheckingAccount._validateValue(value, /.{3,20}/g, 'First name must be between 3 and 20 characters long');
        CheckingAccount._validateValue(value, /^[a-zA-Z]+$/g, 'First name must contain only Latin characters');
        this._firstName = value;
    }

    set lastName(value) {
        CheckingAccount._validateValue(value, /.{3,20}/g, 'Last name must be between 3 and 20 characters long');
        CheckingAccount._validateValue(value, /^[a-zA-Z]+$/g, 'Last name must contain only Latin characters');
        this._lastName = value;
    }

    static _validateValue(value, regexCondition, errorMessage) {
        if (!regexCondition.test(value)) {
            throw new TypeError(errorMessage);
        }
    }
}

// Examples:
try {
    let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
} catch (err) {
    console.log(err.message);
}