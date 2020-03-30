const assert = require('assert')

describe('Testing registration form', () => {
    it('I open Facebook autorization form', async () => {
        await browser.url('/')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'Facebook - Log In or Sign Up')
    })
    it('I write login and password in the form', async () => {
        const login = await $('#email');
        login.setValue('pavel_chorniy@i.ua');
        const password = await $('#pass');
        password.setValue('TORNADO_123');
    })

})