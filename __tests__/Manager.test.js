const Manager = require("../lib/Manager");

test('create a Manager object', () => {
    const manager = new Manager('Justin', 1, 'justin@gmail.com', 100);

    expect(manager.name).toBe('Justin');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('justin@gmail.com');
    expect(manager.officeNumber).toEqual(100)
});

test("gets Manager's name", () => {
    const manager = new Manager('Justin', 1, 'justin@gmail.com', 100);

    expect(manager.getName()).toBe('Justin');
});

test("gets Manager's Id", () => {
    const manager = new Manager('Justin', 1, 'justin@gmail.com', 100);

    expect(manager.getId()).toEqual(1);
});

test("gets Manager's email", () => {
    const manager = new Manager('Justin', 1, 'justin@gmail.com', 100);

    expect(manager.getEmail()).toBe('justin@gmail.com')
});

test("gets Manager's role", () => {
    const manager = new Manager('Justin', 1, 'justin@gmail.com', 100);

    expect(manager.getRole()).toBe('Manager')
});