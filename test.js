//something to test
/** percentage calculation with no denominator. */
const op1 = (width, x) => {
    x = +x;
    width = +width;
    let result = width + x;
    if (result < 0 ) {
        result = 0;
    }
    return result;
}

/** percentage calculation with denominator. */
const op2 = (width, x, denominator) => {
    x = +x;
    width = +width;
    denominator = +denominator;
    let result = ((width + x)/denominator)*100;
    result = Math.round(result);
    if (result < 0 ) {
        result = 0;
    }
    return result;
}

// Tiny unit test framework
const test = (component, fn, count = 1) => {
    console.log(`# ${ component }`);
    fn({
      same: (actual, expected, msg) => {
        if (actual == expected) {
          console.log(`ok ${ count } - ${ msg }`);
        } else {
          throw new Error(
      `not ok ${ count } -  ${ msg }
        expected:
          ${ expected }
        actual:
          ${ actual }
      `
          );
        }
        count++;
      }
    });
  };


// Test suite for op1
test('op1', assert => {
    {
        const msg = 'op1() add positive number.';

        const actual = op1(0, 10);
        const expected = 10;

        assert.same(actual, expected, msg);
    }
    {
        const msg = 'op1() negative result should return 0.';

        const actual = op1(0, -10);
        const expected = 0;

        assert.same(actual, expected, msg);
    }
    {
        const msg = 'op1() add number and +string.';

        const actual = op1(10, "+10");
        const expected = 20;

        assert.same(actual, expected, msg);
    }
    {
        const msg = 'op1() add number and -string.';

        const actual = op1(70, "-10");
        const expected = 60;

        assert.same(actual, expected, msg);
    }
    {
        const msg = 'op1() add +string and number.';

        const actual = op1("+10", 10);
        const expected = 20;

        assert.same(actual, expected, msg);
    }
    {
        const msg = 'op1() add -string and number.';

        const actual = op1("-10", 70);
        const expected = 60;

        assert.same(actual, expected, msg);
    }
    {
        const msg = 'op1() add -string and +string.';

        const actual = op1("-10", "+70");
        const expected = 60;

        assert.same(actual, expected, msg);
    }

})

// Test suite for op2
test('op2', assert => {
    {
        const msg = 'op2() add +ve number, limit 100.';

        const actual = op2(0, 10, 100);
        const expected = 10;

        assert.same(actual, expected, msg);
    }
    {
        const msg = 'op2() add +ve number, limit 1000.';

        const actual = op2(0, 10, 1000);
        const expected = 1;

        assert.same(actual, expected, msg);
    }
    {
        const msg = 'op2() add -ve number, limit 1000.';

        const actual = op2(50, -10, 1000);
        const expected = 4;

        assert.same(actual, expected, msg);
    }
    {
        const msg = 'op2() add number and -string, limit 1000.';

        const actual = op2(50, "-10", 100);
        const expected = 40;

        assert.same(actual, expected, msg);
    }
    {
        const msg = 'op2() add number and -string, limit 1000.';

        const actual = op2("50", "10", 100);
        const expected = 60;

        assert.same(actual, expected, msg);
    }
})