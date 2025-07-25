// components/FAQSection.tsx
'use client';

import React from 'react';

import ContactUs from '@/components/ContactUs';
import Faq from '@/components/Faq';
// import Address from '@/components/Address';




const ContactPage: React.FC = () => {
  

  return (
    <div >
   <section>
    <Faq/>
    <ContactUs/>
        {/* <Address/> */}

    </section>
    </div>
  );
};

export default ContactPage;
