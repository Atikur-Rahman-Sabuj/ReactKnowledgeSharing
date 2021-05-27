const cElement = React.createElement;

class LikeButton extends React.Component {
   constructor(props) {
      super(props);
      this.state = { liked: false };
   }

   render() {
      if (this.state.liked) {
         return "You liked this.";
      }

      return cElement("button", { onClick: () => this.setState({ liked: true }) }, cElement("div", {}, "Like"));
   }
}

const domContainer = document.querySelector("#root_raw");
ReactDOM.render(cElement(LikeButton), domContainer);
