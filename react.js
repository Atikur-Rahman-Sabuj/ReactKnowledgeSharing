const HelloWorld = () => {
   return (
      <div>
         Hello world
         <br />
         <br />
         <Component />
         <br />
      </div>
   );
};
const Component = () => {
   return (
      <div>
         Another Component
         <br />
         <br />
         <br />
      </div>
   );
};

const domContainer = document.querySelector("#root");
ReactDOM.render(<HelloWorld />, domContainer);