import { test, expect } from "@playwright/test";
import users from "../Api/usersResponse.json";

const path = 'pre';

test("Sample API Test GET", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/", {
    headers: { "x-api-key": "reqres_496f5fb9046444ef80c04366564108a6" },
  });

  const responseBody = await response.json();
  console.log(responseBody);

  
  expect(response.status()).toBe(200);
  console.log(`User first name is ${users.data[4].first_name} and email is ${users.data[2].email}\n`);
  
 });

test("Sample API Test PATCH", async ({ request }) => {
  const response = await request.patch("https://reqres.in/api/users/2", {
    headers: { "x-api-key": "reqres_496f5fb9046444ef80c04366564108a6" },
    data: {
      name: "morpheus",
      job: "zion resident",
    }
  });

  const responseBody = await response.json();
  console.log(responseBody);
  expect(response.status()).toBe(200);

});

test("Mock route API Test 2", async ({ page }) => {
  await page.goto("https://app.reqres.in/playground");
  await page.getByPlaceholder("free_user_xxxxx").fill("reqres_496f5fb9046444ef80c04366564108a6");
  await page.getByRole("button", { name: "Send request" }).click();
  await page.locator("//*[@aria-label='Switch to dark mode']").click();
  await page.locator('pre').click();
  await page.waitForTimeout(2000);

  await page.route("**/api/users*", async (route) => {
    
    const mockData = {
      data: {
      name: "Volodymyr",
      second_name: "Vasylkiv",
      position: "QA Engineer",
      salary: 15000
    }
    };
    
    await route.fulfill({
      status: 200,
      json: mockData,
    });
  });

  await page.getByPlaceholder("free_user_xxxxx").fill("reqres_496f5fb9046444ef80c04366564108a6");
  await page.getByRole("button", { name: "Send request" }).click();
  await expect(page.locator(path)).toContainText("Volodymyr");
  await page.waitForTimeout(2000);

});

test("Get Token Bondar API", async ({request}) => {
  const response = await request.post("https://conduit-api.bondaracademy.com/api/users/login", {
    data: {
      user:
      {
        email: "pwapiuser@test.com",
        password: "Welcome"
      }
    }  
})
const responseToken = await response.json();
const token = responseToken.user.token;
console.log(`The token is:\n ${token}\n`);


const response2 = await request.post("https://conduit-api.bondaracademy.com/api/articles", {
  headers: {"Authorization": `Token ${token}`},
  data: {
    "article": {
      "title": "VolVas",
      "description": "AQA Engineer",
      "body": "This is a test article",
      "tagList": ["qa", "automation"]
    }
  }
})
const responsePost = await response2.json();
  console.log("Article is created:\n");
  console.log(responsePost);
  
  
const response3 = await request.get("https://conduit-api.bondaracademy.com/api/articles/VolVas-15658", {})
const responseGet = await response3.json();
  console.log("Article is found:\n");
  console.log(responseGet);


const response4 = await request.put("https://conduit-api.bondaracademy.com/api/articles/VolVas-15658", {
  headers: {"Authorization": `Token ${token}`},
  data: {
    "article": {
      "title": "1",
      "description": "2",
      "body": "3"     
    }
  }
})
const responsePut = await response4.json();
console.log("Article is updated:\n");
console.log(responsePut);


const response5 = await request.delete("https://conduit-api.bondaracademy.com/api/articles/1-15658", {
  headers: {"Authorization": `Token ${token}`},
})
  console.log("Article is deleted:\n");
  console.log(`Status: ${response5.statusText()}\n`);
  

})