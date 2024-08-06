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
### 4. What is a Higher-Order Component (HOC) in React?
A Higher-Order Component (HOC) is an advanced technique in React for reusing component logic. HOCs are functions that take a component and return a new component. They can be used to add functionality to existing components.
```
function withLogging(WrappedComponent) {
    return function(props) {
        console.log('Rendering component');
        return <WrappedComponent {...props} />;
    };
}
```
### 5. How does MongoDB handle indexing, and why is it important?
Indexing in MongoDB improves the efficiency of query operations by reducing the amount of data MongoDB needs to scan. Indexes are special data structures that store a small portion of the data set in an easy-to-traverse form. Without indexes, MongoDB must perform a collection scan, i.e., scan every document in a collection, to select those documents that match the query statement.
```
db.collection.createIndex({ field: 1 }); // Creates an index on `field` in ascending order
```
### 6. Explain the difference between componentWillMount and componentDidMount in React.
componentWillMount is called before the initial render when the component is about to mount. It is mostly used for setting initial state and other preparations. componentDidMount is called after the initial render when the component has been mounted to the DOM. It is often used for data fetching and setting up subscriptions. componentWillMount is deprecated and should be avoided in favor of componentDidMount or hooks.
### 7. How would you optimize the performance of a React application?
Performance optimization in React can be achieved through various techniques:
- Code splitting: Using dynamic import() to split code into smaller bundles.
- Memoization: Using React.memo and useMemo to avoid unnecessary re-renders.
- Virtualization: Using libraries like react-window or react-virtualized for rendering large lists efficiently.
- Avoiding anonymous functions in render: Prevents re-creation of functions on every render.
- Optimizing dependencies: Ensuring that useEffect and useCallback dependencies are managed correctly.
### 8. How does server-side rendering (SSR) work in a React application?
SSR in React involves rendering React components on the server and sending the HTML to the client. This improves the performance and SEO of the application. Libraries like Next.js facilitate SSR in React applications.
```
// Example with Next.js
export async function getServerSideProps() {
    const data = await fetchData();
    return { props: { data } };
}

function Page({ data }) {
    return <div>{data}</div>;
}
```
### 9. What are the common methods of securing a REST API in Node.js?
Common methods for securing a REST API include:
- Authentication: Using tokens (JWT) or OAuth for authenticating users.
- Authorization: Ensuring users have permission to access certain resources.
- Input validation: Using libraries like Joi to validate input data.
- HTTPS: Ensuring data is transmitted over HTTPS to prevent eavesdropping.
- Rate limiting: Using libraries like express-rate-limit to prevent abuse.
### 10. What are the differences between SQL and NoSQL databases, and when would you use MongoDB over a SQL database?
SQL databases are relational, structured, and use SQL for defining and manipulating data. They are suitable for applications requiring multi-row transactions. NoSQL databases like MongoDB are non-relational, schema-less, and store data in formats like JSON. They are suitable for applications requiring horizontal scaling, flexible schema, and handling large volumes of unstructured data.
### 11. How does the context API work in React, and when should you use it?
The Context API in React provides a way to pass data through the component tree without having to pass props down manually at every level. It is useful for global state management, themes, or authenticated user details.
```
const ThemeContext = React.createContext('light');

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return <button className={theme}>Button</button>;
}
```
### 12. Explain the event loop in Node.js.
The event loop in Node.js is a mechanism that handles asynchronous operations. Node.js processes operations in a single thread using an event-driven, non-blocking I/O model. The event loop continuously checks the call stack, and if it is empty, it processes the next event from the event queue.
### 13. How do you handle state management in large React applications?
In large React applications, state management can be handled using:
- Redux: Centralizes application state and logic.
- Context API: Provides a lighter alternative to Redux for smaller apps.
- MobX: Uses observables to reactively track state changes.
- Recoil: A state management library for React by Facebook.
### 14. How would you implement authentication in a MERN stack application?
Authentication in a MERN stack application involves:
- Backend (Node.js + Express): Use JWT for token-based authentication. Validate user credentials, generate a token, and send it to the client.
- Frontend (React): Store the token in localStorage or a cookie. Use context or Redux to manage authentication state.
```
// Example of generating a JWT
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' });
```
### 15. How do you prevent SQL injection in a Node.js application using MongoDB?
MongoDB is not vulnerable to SQL injection as it doesn't use SQL queries. However, to prevent other forms of injection and ensure security:
- Validate inputs: Use libraries like Joi.
- Use parameterized queries: Although MongoDB queries are not SQL-based, always treat user input cautiously.
- Sanitize inputs: Remove any potentially harmful characters or strings.
