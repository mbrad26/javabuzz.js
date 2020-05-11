describe('Javabuzz', function () {

  var javabuzz;

  beforeEach(function () {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function () {
    it('divisible by 3', function () {
      expect(javabuzz.play(3)).toEqual('Java');
    });

    it('divisible by 5', function () {
      expect(javabuzz.play(10)).toEqual('Buzz');
    });

    it('divisible by 15', function () {
      expect(javabuzz.play(15)).toEqual('JavaBuzz');
    });
  });

  describe('when a number is not divisible by 3 and/or 5', function () {
    it('returns the number', function () {
      expect(javabuzz.play(31)).toEqual(31);
    });
  });
});
