import * as React from "react";

import "./ContentHeader.css";

interface ContentHeaderProps {
  iconClass: string;
  title: string;
  subtitle: string;
}

class ContentHeader extends React.Component<ContentHeaderProps, {}> {
  public render() {
    const { title, iconClass, subtitle } = this.props;
    return (
      <header className="content-header-wrapper">
        <h1><i className={iconClass}/>{title}</h1>
        <p>{subtitle}</p>
      </header>
    );
  }
}

export default ContentHeader;
