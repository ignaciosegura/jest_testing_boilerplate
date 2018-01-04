## SIASAR API test suite

Ignacio Segura [(LinkedIn)](https://www.linkedin.com/in/isegura/)

While the full SIASAR project, including these tests, is published as open source on GitLab [(SIASAR on GitLab)](https://gitlab.com/Admin_Siasar/SIASAR-2.0),
we are publishing here a short, simplified version of our testing suite for educational purposes.

If you want to know more, I wrote an article on the subject on Medium:
[Facebook Jest, the JS testing tool for people who hate writing tests](https://blog.cloudboost.io/first-run-facebook-jest-the-js-testing-tool-for-people-who-hate-writing-tests-30b5bc4b9dd2)

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

Jest launches tests in parallel, every test inside their own clean environment. No information is shared between tests. If you need some global variable to be available across all tests, you can use `__GLOBAL__`, as specified in `package.json`. 
