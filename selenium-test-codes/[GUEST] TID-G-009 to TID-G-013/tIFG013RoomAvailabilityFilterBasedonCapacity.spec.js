// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('TIF-G-013- Room Availability Filter Based on Capacity', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('TIF-G-013- Room Availability Filter Based on Capacity', async function() {
    await driver.get("https://banihiddenparadiseresort.onrender.com/")
    await driver.manage().window().setRect({ width: 1265, height: 1372 })
    await driver.findElement(By.linkText("Reservations")).click()
    await driver.executeScript("window.scrollTo(0,232)")
    await driver.findElement(By.css(".flex:nth-child(1) > .p-1")).click()
    await driver.findElement(By.css(".flex:nth-child(1) > .p-1")).sendKeys("2024-11-27")
    await driver.findElement(By.css(".flex:nth-child(2) > .p-1")).click()
    await driver.findElement(By.css(".flex:nth-child(2) > .p-1")).sendKeys("2024-11-29")
    await driver.findElement(By.id("mantine-bhuflofp5")).click()
    await driver.findElement(By.id("mantine-bhuflofp5")).click()
    {
      const dropdown = await driver.findElement(By.id("mantine-78w4rea6e"))
      await dropdown.findElement(By.xpath("//option[. = '7']")).click()
    }
    await driver.findElement(By.id("mantine-m37rd3yvs")).click()
    {
      const dropdown = await driver.findElement(By.id("mantine-h4evcgkhs"))
      await dropdown.findElement(By.xpath("//option[. = '3']")).click()
    }
    await driver.findElement(By.css(".p-2")).click()
    await driver.findElement(By.id("mantine-m37rd3yvs")).click()
    {
      const dropdown = await driver.findElement(By.id("mantine-zs460g3vs"))
      await dropdown.findElement(By.xpath("//option[. = '0']")).click()
    }
    await driver.findElement(By.id("mantine-bhuflofp5")).click()
    {
      const dropdown = await driver.findElement(By.id("mantine-7eldaxbb1"))
      await dropdown.findElement(By.xpath("//option[. = '4']")).click()
    }
    await driver.findElement(By.css(".p-2")).click()
  })
})
