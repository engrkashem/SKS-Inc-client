import React, { useContext } from 'react';
import Footer from '../Shared/Footer';
import '../../styles/CustomButton.css';
import Banner from './Banner';
import Tools from './Tools';
import bgTools from '../../images/bg-tools.jpg';
import BusinessSummery from './BusinessSummery';
import bgStat from '../../images/bgStat.jpg';
import Reviews from './Reviews';
import bgReview from '../../images/bgReview.jpg';
import Carousel from './Carousel';
import StartJourney from './StartJourney';
import { ToolsContext } from '../../App';

const Home = () => {
    //Loading Tools from server via context API

    const sharedByToolsContext = useContext(ToolsContext);
    const { tools } = sharedByToolsContext
    // console.log(tools)

    return (
        <div>
            <Banner></Banner>
            <StartJourney></StartJourney>
            <div className=' bg-cover h-content ' style={{ backgroundImage: `url(${bgTools})` }}>
                <h2 className=' text-slate-100 text-center font-bold text-6xl py-10'>OUR PRODUCTS</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:p-5' >
                    {
                        tools.map(tool => <Tools
                            key={tool._id}
                            tool={tool}
                        ></Tools>)
                    }
                </div>
            </div>
            <div className='flex flex-col items-center justify-center bg-cover py-20' style={{ backgroundImage: `url(${bgStat})` }}>
                <h1 className=' text-5xl font-bold mb-2'>Appreciated Globally</h1>
                <p className=' text-2xl font-medium mb-10'>Provide Reliability to Clients</p>
                <BusinessSummery></BusinessSummery>
            </div>
            <div className=' bg-cover py-10' style={{ backgroundImage: `url(${bgReview})` }}>
                <h1 className=' uppercase text-6xl font-bold text-center my-5'>Testimony</h1>
                <Reviews></Reviews>
            </div>
            <Carousel></Carousel>
            <Footer></Footer>
        </div>
    );
};

export default Home;