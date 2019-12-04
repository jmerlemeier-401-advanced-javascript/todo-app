import React from 'react';

export const SettingsContext = React.createContext();

class SettingProvider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      maxNumItemsVisible: 3
    }
  }

  displayItems = () => {
    // this.state.
  }

  render () {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    )
  }
}

export default SettingProvider;