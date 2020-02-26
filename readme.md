# Playwright delay problem

```
git clone https://github.com/k15a/playwright-delay-repro
yarn install
yarn start
```

The expected output is "Hello world" but without a delay Playwright calls `$eval` before we've updated the page.
