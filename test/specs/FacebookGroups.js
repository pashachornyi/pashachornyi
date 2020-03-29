const assert = require('assert')

describe('Testing Facebook Repost', () => {
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
    it('I press group "Факти про Україну та Світ"', async () => {
        const myButton = await $('._2fyi._3qng > .mfclru0v:nth-child(2)');
        await myButton.click();
    })
    it('I press join to group button', async () => {
        const myButton = await $('#joinButton_1612585548977517');
        await myButton.click();
    })
    it('I press close button', async () => {
        const myButton = await $('._3n5s');
        await myButton.click();
    })
    it('I press close button2', async () => {
        const myButton = await $('._4-hy._3qw > div._59s7 > div > div > div > div > div > div > div._4iyh._2pia._2pi4 > span._4iyi > div > div:nth-child(1) > button');
        await myButton.click();
    })


})