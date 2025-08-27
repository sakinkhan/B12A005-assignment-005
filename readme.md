### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
    - **getElementById** is used to get an element inside a HTML by it's ID. It will return a single object.
    - **getElementsByClassName** is used to get all the elements inside a HTML by their class name. It will return an array like object which is also known as HTML Collection.
    - **querySelector** is used to get the first element that matches the selector. It uses CSS selectors to find out elements. We need to use '#' before ID name and '.' before class name.
    - **querySelectorAll** is used to get the all elements that matches the selector. It also uses CSS selectors to find out elements. We need to use '#' before ID name and '.' before class name.
2. How do you **create and insert a new element into the DOM**?
    - To create a new element into the DOM we need to use document.createElement() method. Inside the method we need to mention which HTML element are we going to create. For example, if we want to create a div, we need to write document.createElement("div").
    - To insert a new element we can use appendChild() method.
3. What is **Event Bubbling** and how does it work?
    Event Bubbling is the way DOM events goes up from the selected element to it's parent elements. It will then jump up to it's grand parent and then continue jumping up all the way up to <html>.
4. What is **Event Delegation** in JavaScript? Why is it useful?
    Event Delegation is a technique where we can add the event listener to the parent element instead of multiple child elements. If a child element is triggered, event bubbling will come into action and the event will jump up to the parent. We can then find out which child was involved by checking the event details.
    It is useful because it saves memory, keeps the code cleaner and the code becomes easy to manage and debug. Also, we don't need to write separate codes for each child.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
    - **preventDefault()** method is used to stop the default action that happens when an event is triggered. It can prevent a form from submitting by default or a link from navigating to a new page. However, it doesn't stop the event to bubble up to it's parent.
    - **stopPropagation()** method does the opposite. It is used to stop the event to bubble up to it's parent. But it doesn't stop the default action of the event, like submitting a form or openning a link to a new page.
