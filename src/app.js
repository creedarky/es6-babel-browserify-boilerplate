import Person from './model/Person';

global.app = function () {
  var christoph = new Person('Christoph', 'Burgdorf');
  debugger;
  console.log(christoph.fullName);
};