import React from "react";
import './App.css'
import ChartColumn from "./exercise/Session2/ChartColumn/ChartColumn";
import LikeButton from "./exercise/Session3/Like-button/LikeButton";
import RateButton from "./exercise/Session3/Rate button/RateButton";
import SocialBlock from "./exercise/Session2/SocialBlock/SocialBlock";
import Lifecircle from "./component/Example/lifecircle";
import ChartBar1 from "./exercise/Session2/ChartBar1/ChartBar1";
import Profile from "./exercise/Session2/Profile/Profile";
import Session1 from "./exercise/Session1/Session1";
import Session2 from "./exercise/Session2/BasicUI/Session2";
import TABS from "./exercise/Session3/TABS/ButtonTab/TABS";
import IconTab from "./exercise/Session3/TABS/iconTab/iconTab";
import TextTab from "./exercise/Session3/TABS/TextTab/TextTab";
import ButtonAccordions from "./exercise/Session3/Accordions/Button-accordions/main";
import VerticalButton from "./exercise/Session3/TABS/VerticalTab/VerticalButton";
import Image from "./exercise/Session3/Image/Image";
import UseEffect from "./component/Example/useEffect";
import TextAccordions from "./exercise/Session3/Accordions/Text-accordions/main";
import Standard from "./exercise/Session3/Gallery/Standard";
import ReactHookForm from "./exercise/Session7/ReactHookForm";
import LikeHook from "./exercise/Session3/Like-button/LikeHook";
import RateHook from "./exercise/Session3/Rate button/RateHook";
import TabsHook from "./exercise/Session3/TABS/ButtonTab/TabsHook";
import IconHook from "./exercise/Session3/TABS/iconTab/IconHook";
import TextHook from "./exercise/Session3/TABS/TextTab/TextHook";



import axios from 'axios'
import Session8 from "./exercise/Session8";

axios.defaults.baseURL = 'https://62d16ed1d4eb6c69e7dd5691.mockapi.io/'

function App() {
  return (
    <>
    {/* <Session1></Session1> */}

    {/* <Session2></Session2> */}
    
    {/* <div className="ChartBar1">
      <ChartBar1 text='BANDWIDTH' color1='red1' colors='red' percentage={20}></ChartBar1>
      <ChartBar1 text='STORAGE' color1='lightblue1' colors='lightblue' percentage={50}></ChartBar1>
      <ChartBar1 text='USERS' color1='green1' colors='green' percentage={70}></ChartBar1>
      <ChartBar1 text='VISITORS' color1='yellow1' colors='yellow' percentage={30}></ChartBar1>
      <ChartBar1 text='EMAILS' color1='purple1' colors='purple' percentage={45}></ChartBar1>
      <ChartBar1 text='BASIC' color1='pink1' colors='pink' percentage={80}></ChartBar1>
      <ChartBar1 text='OTHERS' color1='blue1' colors='blue' percentage={37}></ChartBar1>
    </div> */}

    {/* <div className="Profile">
      <Profile Name='HTML' IconName={<i class="fa-brands fa-android"></i>} color='green' likes={60}></Profile>
      <Profile Name='CSS' IconName={<i class="fa-brands fa-apple"></i>} color='red' likes={50}></Profile>
      <Profile Name='PHP' IconName={<i class="fa-solid fa-box-open"></i>} color='blue' likes={25}></Profile>
      <Profile Name='Java' IconName={<i class="fa-brands fa-js-square"></i>} color='yellow' likes={70}></Profile>
      <Profile Name='.Net' IconName={<i class="fa-solid fa-diagram-project"></i>} color='purple' likes={35}></Profile>
    </div> */}

    {/* <div className="SocialBlock row justify-content-around">
      <SocialBlock className='col-2' text='Facebook' color='blue' iconName={<i className="fa-brands fa-facebook-f"></i>} total={500000} unit='Likes'></SocialBlock>
      <SocialBlock className='col-2' text='Twitter' color='blue1' iconName={<i className="fa-brands fa-twitter"></i>} total={40000} unit='Tweets'></SocialBlock>
      <SocialBlock className='col' text='Google +' color='orange' iconName={<i className="fa-brands fa-google-plus-g"></i>} total={460000} unit='Plus'></SocialBlock>
      <SocialBlock className='col' text='Pinterest' color='red' iconName={<i className="fa-brands fa-pinterest"></i>} total={34000} unit='Pins'></SocialBlock>
    </div> */}

    {/* <div className="ChartColumn">
      <ChartColumn text="TODAY'S VISITORS" total={'24,599'} unit='' percentages={[20, 45, 30, 80, 75]}></ChartColumn>
      <ChartColumn text="YESTERDAY'S VISITORS" total={'15,699'} unit='' percentages={[20, 45, 30, 80, 75]}></ChartColumn>
      <ChartColumn text="TOTAL DOWNLOADS" total={'1,24,599'} unit='' percentages={[20, 45, 30, 80, 75]}></ChartColumn>
      <ChartColumn text="CURRENT INCOME" total={'54,599'} unit='$' percentages={[20, 45, 30, 80, 75]}></ChartColumn>
    </div> */}

    {/* <Lifecircle></Lifecircle> */}

    {/* <LikeButton></LikeButton> */}
    {/* <LikeHook/> */}

    {/* <RateButton></RateButton> */}
    {/* <RateHook/> */}

    {/* <TABS></TABS> */}
    {/* <TabsHook /> */}
    
    {/* <IconTab></IconTab> */}
    {/* <IconHook/> */}

    {/* <TextTab></TextTab> */}
    {/* <TextHook/> */}

    {/* <VerticalButton></VerticalButton> */}

    {/* <ButtonAccordions></ButtonAccordions> */}

    {/* <TextAccordions></TextAccordions> */}

    {/* <Image></Image> */}

    {/* <Standard /> */}

    {/* <UseEffect></UseEffect> */}

    {/* <ReactHookForm /> */}

    <Session8/>
    </>
  );
}

export default App;