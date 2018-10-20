import * as React from 'react';
import ContentHeader from "../Components/ContentHeader";
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import "./Workflow.css"

class Workflow extends React.Component<{}, {}> {
  private CONTENT_HEADER_PROPS = {
    iconClass: "fa fa-desktop",
    title: "Workflow",
    subtitle: "How I spend most of my work hours."
  };

  public render() {
    return (
      <div>
        <NavigationBar />
        <ContentHeader {...this.CONTENT_HEADER_PROPS}/>
        <Item />
        <Footer />
      </div>
    );
  }
}

function Item() {
  return (
    <section className="workflow-component">
      <div className="workflow-picture">
        <img
          src="/Images/Workflow.gif"
          alt="workflow"
        />
      </div>
      <div className="workflow-writeup">
        <h1>Neovim + Tmux</h1>
        <h3>Writing code like a wizard.</h3>
        <p>
          Tmux + Neovim/Vim is awesome. This is probably the most productive workflow for me. This combination has been my daily driver since the start of 2018. I am using Alacritty since it's a GPU rendered terminal that performs insanely well for my needs. You can read more about it
          <a
            href="https://blog.ashwinchat.com/9-months-of-full-time-vim/"
            target="_blank"
            rel="noreferrer noopener"
          >
            &nbsp;here
          </a>.
        </p>
      </div>
    </section>
  )
}

export default Workflow;
