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
### 2. What is the purpose of useEffect in React?
useEffect is a hook in React that lets you perform side effects in function components. It serves the same purpose as lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components. Common uses include fetching data, directly manipulating the DOM, and setting up subscriptions.
```
useEffect(() => {
    document.title = `You clicked ${count} times`;
}, [count]);
```
### 3. How do you manage state in a React application with Redux?
Redux is a state management library for JavaScript apps. It allows you to manage application state in a centralized store and use actions and reducers to update the state predictably. You connect your components to the Redux store using the connect function or hooks like useSelector and useDispatch.
```
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const initialState = { count: 0 };

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        default:
            return state;
    }
}

const store = createStore(reducer);

function Counter() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        </div>
    );
}

function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}
```

