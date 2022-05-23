import React from 'react';

const Blogs = () => {
    return (
        <div className='px-5 lg:px-12 my-12'>
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
                <p>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components. There are four main types of state you need to properly manage in your React State</p>
                <p># Local state</p>
                <p># Global state</p>
                <p># Server state</p>
                <p># URL state</p>
            </div>

            <div className='shadow p-5 border rounded-2xl my-10'>
                <h3 className='text-2xl font-semibold'>03. How does prototypical inheritance work?</h3>
                <p>Ans:</p>
                <p>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components. There are four main types of state you need to properly manage in your React State</p>
                <p># Local state</p>
                <p># Global state</p>
                <p># Server state</p>
                <p># URL state</p>
            </div>

            <div className='shadow p-5 border rounded-2xl my-10'>
                <h3 className='text-2xl font-semibold'>04. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                <p>Ans: I should never set the state directly because of the following reasons:</p>
                <p># If I set it directly, calling the setState() afterward may just replace the set i made.</p>
                <p># When i directly set the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
                <p># I will lose control of the state across all components.</p>
            </div>
        </div>
        
    );
};

export default Blogs;