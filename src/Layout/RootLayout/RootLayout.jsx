import React from 'react';
import Hero from '../../Componets/Hero/Hero';
import Navbar from '../../Componets/Navbar/Navbar';
import Projects from '../../Componets/Projects/Projects';

import WhatILearned from '../../Componets/WhatILearned/WhatILearned';
import BackToTopButton from '../../Componets/BackToTopButton/BackToTopButton';

import Journey from '../../Componets/Journey/Journey';

import GithubContribution from '../../Componets/GithubContribution';
import ContactForm from '../../Componets/ContactForm';

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-cyan-800">
            {/* Fixed Navbar */}
            <Navbar />
            {/* <marquee  className="w-full bg-red-600 text-white py-2 overflow-hidden">
  <p className="whitespace-nowrap animate-marquee">
    This portfolio is under upgradation, will be fixed within 6 September
  </p>
</marquee> */}

            {/* Hero section - no padding needed since Hero handles its own height */}
            <div>
                <Hero />
            
            
                <Journey/>
            </div>
            <div>
                <WhatILearned/>
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <GithubContribution/>
            </div>
           
            <div>
                <ContactForm/>
            </div>
            
            <div>
                <BackToTopButton/>
            </div>
          
        </div>
    );
};

export default RootLayout;