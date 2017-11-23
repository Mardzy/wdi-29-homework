import React from 'react';

const Menu = ({links, text}) => {
  // console.log(links, text);
  return (
    <section id="menus">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Menu</h2>
            {text.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            {links.map((link, i) => <a key={i} href="{link.url}">{link.text}</a>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
