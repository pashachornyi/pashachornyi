const assert = require('assert')

describe('Testing Facebook login', () => {
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
    it('I press "Login" button', async () => {
        const myButton = await $('input[type="submit"]');
        myButton.click();
    })
    it('I press "My groups"', async () => {
        const myButton = await $('#navItem_1434659290104689 > a > div');
        await myButton.click();
    })
    it('I demonstrate the name of group', async () => {
        const elem = await $('.tm2miua2._4bl7 > div > div:nth-child(1) > div > div > div > div:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(1) > div > div > div.aeinzg81._3qn7._61-0._2fyi._3qng > div.mfclru0v.aeinzg81 > div > a');
        const name = await elem.getText();
        assert.equal(name,'Факти про Україну та Світ');
    })
    it('I press log out', async () => {
        const myButton = await $('#userNavigationLabel');
        myButton.click();
        const myButtonn = await $('._64kz.__MenuItem > a');
        myButtonn.click();
    })
    it('I demonstrate the some name', async () => {
        const elem = await $('._ihd._3ma.mbs._6n._6s._6v');
        const name = await elem.getText();
        assert.equal(name,'Создать аккаунт')
        // console.log(await elem.getText())
    })

})
