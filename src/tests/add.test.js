const generateGreeting = (name) => `Hello ${name}`;

test('Should return a greeting', ()=> {
    const result = generateGreeting('world');
    expect(result).toBe('Hello world');
});