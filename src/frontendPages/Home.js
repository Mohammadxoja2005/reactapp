import React from 'react'; 
import {Header, FirstHead, News, Banner, Categories, BannerBack, Partners, Subscribe, Footer, BannerDouble, Phone} from '../components/main';   

export default function Home() {
  return (
    <>
    <div className="page-wrapper-red" style={{position: "relative"}}>
     <FirstHead/> 
     
     <Header/> 
     <News/>
     <Banner/>  
     <Categories />   
     <BannerBack />   
     {/* <BannerDouble />    */}
     <Partners/> 
     <Subscribe/> 
     <Footer/>   

     <Phone/>
    </div> 
    </>

  )
}
