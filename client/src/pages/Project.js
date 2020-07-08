import React from "react";
import fetch from "node-fetch";

//TODO parallax scroll

class Project extends React.Component {
  state = {
    projects: [],
  };
  async componentDidMount() {
    let repos = [];
    // fetch("https://api.github.com/users/ashivalagar/repos").then(res => res.json()).then(res => console.log(res));
    let apiCall = await fetch("https://api.github.com/users/ashivalagar/repos");
    let apiRes = await apiCall.json();
    apiRes.forEach((element) => {
      repos.push({ repoName: element.name, repoUrl: element.html_url });
    });
    this.setState({ projects: repos });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.projects.map((i) => {
            return (
              <li>
                <a href={i.repoUrl}>
                  <p>{i.repoName}</p>
                  <div>Yo</div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Project;
