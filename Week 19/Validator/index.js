class Validator {
    static isEmail(email) {
        this.email = email;
        const validMail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        
        if(this.email.match(validMail)) {
            return true;
        }
        return false;
    }

    static isDomain(domain) {
        this.domain = domain;
        const validDomain = /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/;
        
        if(this.domain.match(validDomain)) {
            return true;
        }
        return false;
    }

    static isDate(date) {
        this.date = date;

        const validDate = /^(\d{4}[-/.](0[1-9]|1[0-2])[-/.][0-3]\d\s([0-1][0-9]|2[0-3]):[0-5]\d$)/;
        if (date.match(validDate)) {
            return true;
        }
        return false;
    }

    static isPhone(phone) {
        this.phone = phone;

        const validPhone = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;
        if (phone.match(validPhone)) {
            return true;
        }
        return false;
    }
}

const mailTrue = 'ivlevanastia2001@mail.ru';
const mailFalse = 'bla bla bla';
//console.log(Validator.isEmail(mailTrue)); //true
//console.log(Validator.isEmail(mailFalse)); //false

const domainTrue = 'itgirlschool.ru';
const domainFalse = 'bla bla bla';
//console.log(Validator.isDomain(domainTrue)); //true
//console.log(Validator.isDomain(domainFalse)); //false

const dateTrue = '2023-01-21 22:15'; //t
const dateTrue2 = '2023/01/21 22:15'; //t
const dateTrue3 = '2023.01.21 22:15'; //t
const dateFalse = '2023.01.21'; //f
const dateFalse1 = 'bla bla bla'; //f
// console.log(Validator.isDate(dateTrue)); //true
// console.log(Validator.isDate(dateTrue2)); //true
// console.log(Validator.isDate(dateTrue3)); //true
// console.log(Validator.isDate(dateFalse)); //true
// console.log(Validator.isDate(dateFalse1)); //false

const phoneTrue = '+7 (900) 000 00-00'; //t
const phoneTrue1 = '8 900 000-00-00'; //t
const phoneTrue2 = '8(900) 111-2233'; //t
const phoneFalse = 'bla bla bla'; //f
console.log(Validator.isPhone(phoneTrue)); //true
console.log(Validator.isPhone(phoneTrue1)); //true
console.log(Validator.isPhone(phoneTrue2)); //true
console.log(Validator.isPhone(phoneFalse)); //false