// //yaha pe crateElemt react esliye hai kyuki hum direct react se bol rhe hai creat an element 
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},//<h1 id="heading">hello world from react!</h1>    
//     "hello world from react!"
// );//this object is place where u give attribute to the task

// // console.log(heading)// object

// //but when i want this in my root div so we createRoot but in reactDom bec. we use the browser 
// const root = ReactDOM.createRoot(document .getElementById("root"));

// root.render(heading);



/*
<div id="parent">\
    <div id="child">
        <h1></h1>
    </div>
<div>
*/

const parent= React.createElement(
    "div",
    {id:"parent"},[
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{}, "hello iam sub child 1" )
    ),
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{}, "hello iam sub child 2" )
    )
])

const root = ReactDOM.createRoot(document .getElementById("root"));

root.render(parent);
