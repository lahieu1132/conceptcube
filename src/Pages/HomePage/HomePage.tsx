import ReactFullpage from '@fullpage/react-fullpage';
import FullpageNavigation from '@fullpage/react-fullpage';

import React from 'react'
import HomePageSec1 from '../../Components/HomePageSecs/HomePageSec1/HomePageSec1';
import HomePageSec2 from '../../Components/HomePageSecs/HomePageSec2/HomePageSec2';
import HomePageSec3 from '../../Components/HomePageSecs/HomePageSec3/HomePageSec3';
import HomePageSec4 from '../../Components/HomePageSecs/HomePageSec4/HomePageSec4';
import HomePageSec5 from '../../Components/HomePageSecs/HomePageSec5/HomePageSec5';


function HomePage() {
  const anchors = ["firstPage", "secondPage", "thirdPage"];

  return (
    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    navigation={true}
    normalScrollElements={".home-four-content"}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <HomePageSec1 />
          <HomePageSec2 />
          <HomePageSec3 />
          <HomePageSec4 />
          <HomePageSec5 />
        </ReactFullpage.Wrapper>
      );
    }}
  />
  )
}

export default HomePage