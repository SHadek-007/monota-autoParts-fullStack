import React from 'react';

const Blogs = () => {
    return (
        <div className='px-5 lg:px-28 my-12'>
            <div className='shadow p-5 border rounded-2xl'>
                <h3 className='text-2xl font-semibold'>01.How will you improve the performance of a React Application?</h3>
                <p>Ans: React performance optimization process</p>
                <p># Using Immutable Data Structures.</p>
                <p># Dependency optimization.</p>
                <p># Keeping component state local where necessary.</p>
                <p># React components to prevent unnecessary re-renders.</p>
                <p># Spreading props on DOM elements</p>
            </div>

            <div className='shadow p-5 border rounded-2xl my-10'>
                <h3 className='text-2xl font-semibold'>02.What are the different ways to manage a state in a React application?</h3>
                <p>Ans:</p>
                <p>Initially we use useState and useReducer to manage local and global states
There are 4 kinda states in a React application, Local State, Global State, Server State and URL State
Local State is used inside a local component, we use useState hook to manage local state
Global State is necessary when we update data in multiple components
Redux is one of the best library to manage Global state
Zustand library simplify our work without writing any boilerplate code.
Server State is used at the time of fetching data from an external server.
swr and react-query manage server side state memory efficiently
useLocation and useHistory help us to effectively manage our URL state</p>
            </div>

            <div className='shadow p-5 border rounded-2xl my-10'>
                <h3 className='text-2xl font-semibold'>03. How does prototypical inheritance work?</h3>
                <p>Ans:</p>
                <p>JavaScript Objects have a property called [[prototype]]
In modern JavaScript the property is __proto__
By following the prototypical inheritance system objectA can borrow some method from objectB
There is no class feature in core JavaScript, But class in ES6 is specially a syntactical sugar over javascript's prototypical inheritance.
Class instances can extend their methods from another instances with the help of __proto__ method</p>
            </div>

            <div className='shadow p-5 border rounded-2xl my-10'>
                <h3 className='text-2xl font-semibold'>04. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                <p>Firstly, We use state in a react application, so that we can rerender the DOM efficiently and effectively.
State or useState hook causes rerendering the DOM
If you write code <code> products = [...]</code> in this way, our DOM will not be rerendered, and we will not see any changes or effects on the UI
And If we use <code>setProducts([...])</code> like that our DOM will be rerendered and we experience dynamic UI</p>
            </div>
            <div className='shadow p-5 border rounded-2xl my-10'>
                <h3 className='text-2xl font-semibold'>05. What is a unit test? Why should write unit tests?</h3>
                <p>Ans:</p>
                <p>Unit test is testing small parts/component of our application in isolation
We can split testing methods in 3. Unit Tests, Integration Tests and End-to-End Tests
With Unit testing we can identify bugs and problems before publishing to production.
We should write Unit Tests because, it is easy to write
Unit Tests is less time consuming
If we write unit tests, we will face less bugs in integration and end-to-end testing, and lastly, users will face less problems on the production application</p>
            </div>
        </div>
        
    );
};

export default Blogs;