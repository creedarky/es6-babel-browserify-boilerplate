class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      debugger;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
export default Person

