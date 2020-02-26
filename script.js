import { chromium } from 'playwright'
import * as path from 'path'

const indexHTML = path.join(__dirname, 'index.html')

async function run(delay) {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto('file://' + indexHTML)
  await page.type('#input', 'Hello world', { delay })

  const output = await page.$eval('#output', element => element.textContent)

  console.log('Delay:', delay)
  console.log('Output:', output)

  await browser.close()
}

async function main() {
  await run(0)
  await run(100)
}

main()
