const HelloWorld = () => {
   return (
      <div>
         Hello world
         <br />
         <br />
         <Person2 name="X" height={{ inch: 30 }}>
            <div>My age is 20</div>
         </Person2>
         <Person2 name="Y" />
         <Person2 name="Z" />
         <br />
      </div>
   );
};

class Person2 extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: 10,
      };
   }
   componentDidMount() {}

   otherValue = 15;

   click = (e) => {
      this.setState({ value: 10 }, () => {
         this.otherValue = 39;
      });
   };

   render() {
      return (
         <div onClick={this.click}>
            My name is {this.props.name}
            {this.props.height && `My height is ${this.props.height.inch}`}
            {this.props.children}
            <div>Current value is {this.state.value}</div>
            <div>Other value is {this.otherValue}</div>
         </div>
      );
   }
}

const Person = (props) => {
   const click = (e) => {
      console.log("Clicked");
   };
   return (
      <div onClick={click}>
         My name is {props.name}
         {props.height && `My height is ${props.height.inch}`}
         {props.children}
      </div>
   );
};

const domContainer2 = document.querySelector("#root");
ReactDOM.render(<HelloWorld />, domContainer2);
