class Reservation {

    constructor (name, phoneNum, email, resID) {
        this.name = name;
        this.phoneNum = phoneNum;
        this.email = email;
        this.resID = resID;
    }

    getName() {
        return this.name;
    };
    
    getPhone() {
        return this.phoneNum;
    }

    getEmail() {
        return this.email;
    }

    getID() {
        return this.resID;
    }

}

module.exports = Reservation;