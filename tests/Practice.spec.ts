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

test("Some test", async ({ page }) => {
    await page.goto("https://click.ua/")

    const products: { name: string }[] = []
    const menu = await page.locator('.main-slider-left .main-navigation .catalog-menu-open').all()
    
    for (const item of menu) {
        const text = await item.locator('span').innerText();
        products.push({name: text});
        console.log(text);
    }

})

test("Practice", async ({ }) => { 

    type obj3 = {ages: number}
    const obj1: obj3 = { ages: 10 }
    console.log(obj1);

    type User1 = { name2: string, age2: number } 

    const user1: User1 = { name2: 'VV', age2: 1 }
    console.log(`The first name is ${user1.name2} and age is ${user1.age2}`);

    const name1 = (name: string, age: number) => { 
        console.log(`My name is ${name} and my age is ${age}`)
    }
    name1('dd', 56)

    const generic = <T>(arg1: T, arg2: T) => {
        console.log(arg1, arg2);
     }
    generic<string>('Vol', 'Vas');
    generic<number>(1, 2);
    generic<boolean>(true, false)
    
    
})



    
    
    
   
    

