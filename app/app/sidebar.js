// app/Sidebar.js
import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-100 p-4 fixed">
            <h2 className="text-xl font-bold mb-4">Questions</h2>
            <ul className="space-y-2">
                <li>
                    <a href="#middleware-express" className="text-blue-500 hover:underline">1. Middleware in Express.js</a>
                </li>
                <li>
                    <a href="#useeffect-react" className="text-blue-500 hover:underline">2. Purpose of useEffect in React</a>
                </li>
                <li>
                    <a href="#redux-state-management" className="text-blue-500 hover:underline">3. Managing State in Redux</a>
                </li>
                <li>
                    <a href="#hoc-react" className="text-blue-500 hover:underline">4. Higher-Order Component (HOC) in React</a>
                </li>
                <li>
                    <a href="#mongodb-indexing" className="text-blue-500 hover:underline">5. Indexing in MongoDB</a>
                </li>
                <li>
                    <a href="#react-lifecycle" className="text-blue-500 hover:underline">6. React Lifecycle Methods</a>
                </li>
                <li>
                    <a href="#react-optimization" className="text-blue-500 hover:underline">7. Optimizing React Performance</a>
                </li>
                <li>
                    <a href="#ssr-react" className="text-blue-500 hover:underline">8. Server-Side Rendering (SSR) in React</a>
                </li>
                <li>
                    <a href="#securing-nodejs-api" className="text-blue-500 hover:underline">9. Securing a REST API in Node.js</a>
                </li>
                <li>
                    <a href="#sql-vs-nosql" className="text-blue-500 hover:underline">10. SQL vs NoSQL Databases</a>
                </li>
                <li>
                    <a href="#react-context-api" className="text-blue-500 hover:underline">11. React Context API</a>
                </li>
                <li>
                    <a href="#nodejs-event-loop" className="text-blue-500 hover:underline">12. Node.js Event Loop</a>
                </li>
                <li>
                    <a href="#large-react-state-management" className="text-blue-500 hover:underline">13. State Management in Large React Apps</a>
                </li>
                <li>
                    <a href="#mern-authentication" className="text-blue-500 hover:underline">14. Authentication in a MERN Stack</a>
                </li>
                <li>
                    <a href="#prevent-sql-injection" className="text-blue-500 hover:underline">15. Preventing SQL Injection in Node.js</a>
                </li>
                <li>
                    <a href="#react-custom-hooks" className="text-blue-500 hover:underline">16. React Custom Hooks</a>
                </li>
                <li>
                    <a href="#nodejs-file-uploads" className="text-blue-500 hover:underline">17. Handling File Uploads in Node.js</a>
                </li>
                <li>
                    <a href="#react-virtual-dom" className="text-blue-500 hover:underline">18. Virtual DOM in React</a>
                </li>
                <li>
                    <a href="#mern-realtime-data" className="text-blue-500 hover:underline">19. Real-Time Data in a MERN Stack</a>
                </li>
                <li>
                    <a href="#mern-ssr" className="text-blue-500 hover:underline">20. SSR in a MERN Stack</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
