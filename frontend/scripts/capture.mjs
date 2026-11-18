import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
const browser=await chromium.launch({headless:true});
try {const page=await browser.newPage({viewport:{width:1536,height:1000},deviceScaleFactor:1});
await page.goto('http://localhost:5176',{waitUntil:'networkidle'});
await page.locator('form input').nth(0).fill('Exemplo real 16');
await page.locator('form input').nth(1).fill('Demonstração');
await page.locator('form input').nth(2).fill(new Date(Date.now() + 86400000 + Math.floor(Math.random() * 10000000)).toISOString());
await page.getByRole('button',{name:'Adicionar registro'}).click();
await page.getByText('Exemplo real 16').last().waitFor({timeout:15000});
mkdirSync('docs/images',{recursive:true});
await page.screenshot({path:'docs/images/funcionamento.png',fullPage:true});
console.log('Captura real concluída');} finally {await browser.close();}
