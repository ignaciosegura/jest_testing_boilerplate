## SIASAR API test suite

### INSTALL:

npm install

### RUN:

npm run test-prod -> run tests against Staging server  
npm run test-dev -> run tests against Dev server  
npm run test-local -> run tests against Local  

### REQUIRES:

NodeJS (https://nodejs.org/en/) > 8.3.0

Mac users are recommended to use Homebrew (https://brew.sh/) to Install NodeJS instead:

brew install node

### WRITING TESTS

Just use the provided examples in `test`folder for a starting point. Jest has a auto-discovery mechanism, so it will take any file named `*.test.js` in any folder and launch it.

Jest launches tests in parallel, following no particular order. If you need some global variable to be available across all tests, you can use `__GLOBAL__`, as specifified in `package.json`. 
