const request = require('supertest');
const app = require('./app');
const calculator = require('./calculator'); // ✅ Import entire calculator module
const { add, subtract, multiply, divide, modulus } = calculator;


describe('Calculator Functions', () => {
  test('adds numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts numbers correctly', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplies numbers correctly', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('divides numbers correctly', () => {
    expect(divide(6, 2)).toBe(3);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
  });
});

describe('Calculator API', () => {
  test('GET /add', async () => {
    const res = await request(app).get('/add?a=2&b=3');
    expect(res.body.result).toBe(5);
  });

  test('GET /subtract', async () => {
    const res = await request(app).get('/subtract?a=5&b=2');
    expect(res.body.result).toBe(3);
  });

  test('GET /multiply', async () => {
    const res = await request(app).get('/multiply?a=2&b=3');
    expect(res.body.result).toBe(6);
  });

  test('GET /divide', async () => {
    const res = await request(app).get('/divide?a=6&b=2');
    expect(res.body.result).toBe(3);
  });

  test('GET /divide by zero returns error', async () => {
    const res = await request(app).get('/divide?a=6&b=0');
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Cannot divide by zero");
  });
  test('calculates modulus correctly', () => {
    expect(calculator.modulus(10, 3)).toBe(1);
  });

  test('throws error when modulus by zero', () => {
    expect(() => calculator.modulus(10, 0)).toThrow('Cannot take modulus by zero');
  });
});
