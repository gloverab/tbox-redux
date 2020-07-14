import React from 'react';
import Header from './common/Header';
import PanelOne from './panels/PanelOne';
import PanelTwo from './panels/PanelTwo';
import PanelThree from './panels/PanelThree';

const AppContainer: React.FC = () => {

  return (
    <div className='app-container'>
      <Header />
      <div className='panel-container'>
        <PanelOne />
        {/* <PanelTwo /> */}
        <PanelThree />
      </div>
    </div>
  )
}



export default AppContainer