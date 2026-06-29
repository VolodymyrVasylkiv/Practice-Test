import {test as base } from '@playwright/test'


type TestOptions = {
    tokenFIXT: string
}

export const test = base.extend<TestOptions>({
    tokenFIXT: async ({ request }, use) =>
    {
        const response = await request.post("https://conduit-api.bondaracademy.com/api/users/login", {
            data: { user: { email: "pwapiuser@test.com", password: "Welcome" } }
        })
        const responseBody = await response.json();
        const token = 'Token ' + responseBody.user.token;
        await use(token)

          console.log(`The token is:\n ${token}\n`);
    }

})