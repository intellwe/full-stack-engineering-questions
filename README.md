### 1. Explain the concept of middleware in Express.js. Can you give an example of how it's used?
Middleware functions in Express.js are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. Middleware can execute code, modify the request and response objects, end the request-response cycle, and call the next middleware function. Example:
```
const express = require('express');
const app = express();

// Middleware function to log request method and URL
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000);
```
