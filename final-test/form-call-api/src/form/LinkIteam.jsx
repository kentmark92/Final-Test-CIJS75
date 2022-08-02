import React from "react";

const LinkIteam = (props) => {
  const { links } = props;
  const { titleItem } = links;
  return (
    <div className="linkItemContainer">
      <div className="linkItem">
        <h2>link generated!</h2>
        <div className="linkTitle">{titleItem}</div>
      </div>
    </div>
  );
};

export default LinkIteam;
