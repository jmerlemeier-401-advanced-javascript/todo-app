import React from 'react';
import { SettingsContext } from '../settings/site-context';

class Content extends React.Component {
  //static contextType gives us this.context
  static contextType = SettingsContext;

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <>
        {/* <button onClick={() => this.context.toggleDisplayMode}>change display mode</button> */}
        <section className={`${}`}>
        
        </section>
      </>
    )
  }
}

export default Content;