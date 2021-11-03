export const interviews = [
    {
        category: 'javascript',
        questionObj: 'A sorted array is rotated at some unknown point, how to efficiently search an element in it.',
        answerObj: 'Check the middle index of the array and see if it smaller than the last index and larger than the first index. If this happens, then the array has not been rotated. Otherwise, wlog assume that first index’s value is larger than the middle index value. This would mean that the smallest element/ largest element of the rotated sorted array is between the first index and the middle index. Repeat the above process spending  O(logn)  time to find the point of rotation(index of the largest element in the sorted array). Let that index be  i . Whenever u need to search for a value  x  do a binary search on indices between 0 and  i  and another binary search on indices between  i+1  and  n .',
    },
    {
        category: 'javascript',
        questionObj: 'How is an Array different from Linked List?',
        answerObj: 'An array is a collection of elements of a similar data type. A linked list is a collection of objects known as a node where node consists of two parts, i.e., data and address. Array elements store in a contiguous memory location. Linked list elements can be stored anywhere in the memory or randomly stored.',
    },
    {
        category: 'front-end',
        questionObj: 'Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?',
        answerObj: 'The main reason as to why JS files are linked at the bottom of the body is because whenever a browser encounters any JS, it parses it and executes that on the spot. Hence if it was to be added at the top, it would make the page rendering slow and thus it would take more time for page load. Moreover since the DOM will not be rendered fully, JS will not be able to manipulate the elements. On the contrary, CSS files are linked in the head because they get applied regardless of DOM already rendered or not. Hence the webpage looks elegant as soon as the page loads.',
    },
    {
        category: 'front-end',
        questionObj: 'What is the CSS display property and can you give a few examples of its use?',
        answerObj: 'The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex. Formally, the display property sets an elements inner and outer display types.',
    },
    {
        category: 'javascript',
        questionObj: 'What is a “closure” in JavaScript? Provide an example.',
        answerObj: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer functions scope from an inner function. <code>function init() { <br> var name = "Mozilla"; // name is a local variable created by init <br> function displayName() { // displayName() is the inner function, a closure <br> alert(name); // use variable declared in the parent function <br> } <br> displayName(); <br> } <br> init();',
    },
    {
        category: 'javascript',
        questionObj: 'What is function hoisting in JavaScript?',
        answerObj: 'JavaScript Hoisting refers to the process whereby the interpreter allocates memory for variable and function declarations prior to execution of the code. Declarations that are made using var are initialized with a default value of undefined. Declarations made using let and const are not initialized as part of hoisting. Conceptually hoisting is often presented as the interpreter "splitting variable declaration and initialization, and moving (just) the declarations to the top of the code". This allows variables to appear in code before they are defined. Note however, that any variable initialization in the original code will not happen until the line of code is executed.',
    },
    {
        category: 'javascript',
        questionObj: 'What is JSX?',
        answerObj: 'JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code). It is easy to create a template using JSX in React, but it is not a simple template language instead it comes with the full power of JavaScript.',
    }
];