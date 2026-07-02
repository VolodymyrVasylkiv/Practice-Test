import { test, expect } from "@playwright/test";

test("Find Products Name and Price", async ({ page }) => {
  await page.goto("https://automationexercise.com/category_products/6");

  async function getProductsNameAndPrice() {
   
    const products: {name: string, price: number}[] = []; 
    const productItems = await page.locator("//*[@class='features_items']//*[@class='col-sm-4']").all();

    for (const item of productItems) {
      const productName = await item.locator(".productinfo.text-center p").innerText();
      const priceText = await item.locator(".productinfo.text-center h2").innerText();
      const productprice = parseFloat(priceText.replace("Rs.", "").trim());
      products.push({name: productName, price: productprice});
      console.log(`Product name is: ${productName}, price is: ${productprice}`);     
    }
    return products;  
  }
  
  const prod = await getProductsNameAndPrice();
  expect(prod.filter(product => product.name.includes("Grunt")));
  expect(prod[1].price).toBe(1200);
  console.log(prod);

});



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

    function name1 (name: string, age: number) { 
       return console.log(`My name is ${name} and my age is ${age}`)
    }
    name1('dd', 56)

    const generic = <T>(arg1: T, arg2: T) => {
        console.log(arg1, arg2);
     }
    generic<string>('Vol', 'Vas');
    generic<number>(1, 2);
    generic<boolean>(true, false)
    
    
})



    
    
    
   
    

