const Intern = require("../lib/Intern");

test('create an Intern object', () => {
    const intern = new Intern('Cyrus', 1, 'cyrus@gmail.com', 'Berkeley');

    expect(intern.name).toBe('Cyrus');
    expect(intern.id).toEqual(1);
    expect(intern.email).toBe('cyrus@gmail.com');
    expect(intern.school).toBe('Berkeley');
});

test("gets Intern's name", () => {
    const intern = new Intern('Cyrus', 1, 'cyrus@gmail.com', 'Berkeley');

    expect(intern.getName()).toBe('Cyrus');
});

test("gets Intern's Id", () => {
    const intern = new Intern('Cyrus', 1, 'cyrus@gmail.com', 'Berkeley');

    expect(intern.getId()).toEqual(1);
});

test("gets Intern's email", () => {
    const intern = new Intern('Cyrus', 1, 'cyrus@gmail.com', 'Berkeley');

    expect(intern.getEmail()).toBe('cyrus@gmail.com');
});

test("gets Intern's role", () => {
    const intern = new Intern('Cyrus', 1, 'cyrus@gmail.com', 'Berkeley');

    expect(intern.getRole()).toBe('Intern');
});

test("gets Intern's school", () => {
    const intern = new Intern('Cyrus', 1, 'cyrus@gmail.com', 'Berkeley');

    expect(intern.getSchool()).toBe('Berkeley');
}); 