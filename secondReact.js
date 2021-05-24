const HelloWorld = () => {
   return <div>Hello world2</div>;
};

const domContainer = document.querySelector("#root2");
ReactDOM.render(<HelloWorld />, domContainer);
