import React, { Component } from "react";
import axios from "axios";
export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
      //   isLoaded: false,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")

      //Exception Handling
      // axios
      //   .get("https://jsonplaceholder.typicode.com/posts65465")
      .then((response) => {
        this.setState({
          //   isLoaded: true,
          posts: response.data,
        });
        console.log(response);
      })
      .catch((error) => {
        this.setState({ error: "error found" });
        console.log(error);
      });
  }

  render() {
    const { posts, error } = this.state;

    return (
      <div>
        Post List
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {!error ? <div>{error}</div> : null}
      </div>
    );
  }
}

export default PostList;
