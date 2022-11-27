import React from 'react';

const Blog = () => {
    return (
        <div className='h-screen'>
            <h2 className='text-3xl text-center text-primary font-bold mt-12 mb-20'>FAQ's</h2>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
              <div className="collapse-title text-xl font-medium">
               What are the different ways to manage a state in a React application?
              </div>
              <div className="collapse-content"> 
                <p>There are four main types of state you need to properly manage in your React apps: Local state, Global state, Server state and URL state. Local state is most often managed in React using the useState hook.<br/>
                Global (UI) state – Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.<br/>
                Server state – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br/>
                URL state – Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
                In many cases, a lot of major parts of our application rely upon accessing URL state.</p>
              </div>
            </div>

            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
              <div className="collapse-title text-xl font-medium">
                How does prototypical inheritance work?
              </div>
              <div className="collapse-content"> 
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
              </div>
            </div>

            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
              <div className="collapse-title text-xl font-medium">
               What is a unit test? Why should we write unit tests?
              </div>
              <div className="collapse-content"> 
                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
              </div>
            </div>

            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
              <div className="collapse-title text-xl font-medium">
              React vs. Angular vs. Vue?
              </div>
              <div className="collapse-content"> 
                <p>In Vue.js you have to work with SFC, but apart from that, no more difficulties come to my mind.

                In the case of React, once you understand properly how JSX works, the rest is pretty simple. There is no structure that you have to follow or a particular template that you need to know. If you are familiar with development concepts and JavaScript, HTML and CSS, you have everything! The only thing that could be a bit challenging is learning how the hooks work.

                The hardest framework to learn is Angular. To develop properly with this framework, apart from having a good understanding of TypeScript, you need to have in mind that Angular projects have a strong structure. This helps you to keep the project more maintainable when it scales up, but at the beginning, it can be a bit hard.

                In summary, based on experience, the learning curve for Vue.js is the softer one, followed by React, and the hardest one being Angular.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;