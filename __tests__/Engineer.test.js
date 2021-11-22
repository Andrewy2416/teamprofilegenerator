const Engineer = require("../lib/Engineer");

test('create an Engineer object', () => {
    const engineer = new Engineer('Frank', 1, 'frank@gmail.com', 'frankGitHub');

    expect(engineer.name).toBe('Frank');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe('frank@gmail.com');
    expect(engineer.github).toBe('frankGitHub');
});

test("gets Engineer's name", () => {
    const engineer = new Engineer('Frank', 1, 'frank@gmail.com', 'frankGitHub');

    expect(engineer.getName()).toBe('Frank');
});

test("gets Engineer's Id", () => {
    const engineer = new Engineer('Frank', 1, 'frank@gmail.com', 'frankGitHub');

    expect(engineer.getId()).toEqual(1);
});

test("gets Engineer's email", () => {
    const engineer = new Engineer('Frank', 1, 'frank@gmail.com', 'frankGitHub');

    expect(engineer.getEmail()).toBe('frank@gmail.com');
});

test("gets Engineer's role", () => {
    const engineer = new Engineer('Frank', 1, 'frank@gmail.com', 'frankGitHub');

    expect(engineer.getRole()).toBe('Engineer')
});

test("gets Engineer's github", () => {
    const engineer = new Engineer('Frank', 1, 'frank@gmail.com', 'frankGitHub');

    expect(engineer.getGithub()).toBe('frankGitHub')
});