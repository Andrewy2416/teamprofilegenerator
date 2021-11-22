const Employee = require("../lib/Employee");

test('create an Employee object', () => {
    const employee = new Employee('Kevin', 1, 'kevin@gmail.com');

    expect(employee.name).toBe('Kevin');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('kevin@gmail.com');
});

test("gets Employee's name", () => {
    const employee = new Employee('Kevin', 1, 'kevin@gmail.com');

    expect(employee.getName()).toBe('Kevin');
});

test("gets Employee's Id", () => {
    const employee = new Employee('Kevin', 1, 'kevin@gmail.com');

    expect(employee.getId()).toEqual(1);
});

test("gets Employee's email", () => {
    const employee = new Employee('Kevin', 1, 'kevin@gmail.com');

    expect(employee.getEmail()).toBe('kevin@gmail.com')
});

test("gets Employee's role", () => {
    const employee = new Employee('Kevin', 1, 'kevin@gmail.com');

    expect(employee.getRole()).toBe('Employee')
});