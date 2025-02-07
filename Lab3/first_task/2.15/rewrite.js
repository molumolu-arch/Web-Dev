function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

function checkAge(age) {
    return (age>18) ? true: confirm('Did ur parent allow you?');
}

function checkAge(age) {
    retunr (age>18) || confirm('Did ur parents allow u?');
}