class Javabuzz {

  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }

  play(number) {
    if (this._isDivisibleBy(number, 15)) {
      return 'JavaBuzz';
    } else if (this._isDivisibleBy(number, 5)) {
      return 'Buzz';
    } else if (this._isDivisibleBy(number, 3)) {
      return 'Java';
    } else {
      return number;
    }
  }
}
