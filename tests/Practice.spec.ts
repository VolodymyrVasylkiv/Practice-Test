import { test } from "@playwright/test";


test("Bondar API", async ({page, request}) => {
  const loginResponse = await request.post("https://conduit-api.bondaracademy.com/api/users/login", {
      data: { 
          user:{
            email: "pwapiuser@test.com",
            password: "Welcome"
        }     
    } 
})
    const tokenResponse = await loginResponse.json();
    const token = tokenResponse.user.token;
    console.log(`The token is:\n ${token}\n`);

    await page.route('https://conduit-api.bondaracademy.com/api/tags', async (route) => {
        const data ={
          "tags": [
            "Metallica",
            "Master Of Puppets",
            "Nothing Else",
            "YouTube",
            "МИШААААААААААА"]
        }
        await route.fulfill({
         status: 200,
         json: data,})
    })

    //await page.goto("https://conduit.bondaracademy.com/")
    //await page.waitForTimeout(3000)
    const tags = await request.get('https://conduit-api.bondaracademy.com/api/tags')
    const getTags = await tags.json()
    console.log(getTags);
    
    console.log(getTags.tags[6]);
    


})

    
    
    
   
    

