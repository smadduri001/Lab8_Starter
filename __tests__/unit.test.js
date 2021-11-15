// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('phone number 1', () => {
    expect(functions.isPhoneNumber('abba')).toBe(false);
});
test('phone number 2', () => {
    expect(functions.isPhoneNumber('1000000000')).toBe(false);
});
test('phone number 3', () => {
    expect(functions.isPhoneNumber('(100)000-0000')).toBe(true);
});
test('phone number 4', () => {
    expect(functions.isPhoneNumber('(966)000-1111')).toBe(true);
});

test('email 1', () => {
    expect(functions.isEmail('abba')).toBe(false);
});
test('email 2', () => {
    expect(functions.isEmail('askdmka@kmdks')).toBe(false);
});
test('email 3', () => {
    expect(functions.isEmail('abba@gmail.com')).toBe(true);
});
test('email 4', () => {
    expect(functions.isEmail('baba@gmail.com')).toBe(true);
});

test('password 1', () => {
    expect(functions.isStrongPassword('ba')).toBe(false);
});
test('password 2', () => {
    expect(functions.isStrongPassword('askdmka_kmdks')).toBe(true);
});
test('password 3', () => {
    expect(functions.isStrongPassword('a')).toBe(false);
});
test('password 4', () => {
    expect(functions.isStrongPassword('baba1gmail1com')).toBe(true);
});

test('date 1', () => {
    expect(functions.isDate('abba')).toBe(false);
});
test('date 2', () => {
    expect(functions.isDate('askdmka@kmdks')).toBe(false);
});
test('date 3', () => {
    expect(functions.isDate('10/20/2001')).toBe(true);
});
test('date 4', () => {
    expect(functions.isDate('11/14/2021')).toBe(true);
});

test('hex 1', () => {
    expect(functions.isHexColor('abba')).toBe(false);
});
test('hex 2', () => {
    expect(functions.isHexColor('askdmka@kmdks')).toBe(false);
});
test('hex 3', () => {
    expect(functions.isHexColor('AAAAAA')).toBe(true);
});
test('hex 4', () => {
    expect(functions.isHexColor('BBBBBB')).toBe(true);
});