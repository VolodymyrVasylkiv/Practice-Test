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

test.skip('Rozetka', async ({page}) => { 

//   await page.goto("https://rozetka.com.ua")
//   await page.locator("//*[text()=' Товари для геймерів ']").click()
//   await page.locator("//*[text()=' Ігрові приставки PlayStation ']").click()
//   await page.locator("//*[text()=' Sony Playstation 5 Pro ']").click()
  
  const minField = page.getByTestId("filter_slider_min_input");
  const maxField = page.getByTestId("filter_slider_max_input");

  await minField.press("Control+A");
  await minField.press("Backspace");
  await minField.fill("38000")
  await minField.press("Tab")

  await maxField.press("Control+A");
  await maxField.fill("40000");

  await expect(page.getByRole("button", { name: " 38000 - 40000 " })).toBeVisible()
  async function getPS5PRONameAndPrice() {

    const products: {name: string, price: number}[] = [];
    const ps5NameAndPrice = await page.locator("//*[@data-testid='category_goods']/div").all()

    for (const item of ps5NameAndPrice) {
      const ps5Name = await item.locator("//*[@class='tile-title black-link text-base']").innerText()
      const price = (await item.locator("//*[contains(@class, 'price text-2x')]").innerText())
      const ps5Price = parseFloat(price.replace(/\s/g, ''))
      products.push({name: ps5Name, price: ps5Price});
    }
    return products;
  }
  const products = await getPS5PRONameAndPrice();
  console.log(products);
  
 

})





