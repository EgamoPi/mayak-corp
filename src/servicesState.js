//Images
import dev from './img/development.jpg';
import creativity from './img/creativity.jpg';
import dmarketing from './img/digital-marketing.jpeg';
import dmarketing1 from './img/digital-marketing-1.jpeg';

//Services Data
export const DataServices = () => {
  return [
    {
      title: 'IT-Product development',
      mainImg: dev,
      secondaryImg: dev,
      url: '/services/it-development',
      descriptions: [
        {
          title: 'Web Applications',
          description: `At Mayak Corp. we develop modern and elegant web application. We use cutting edge technologies to ensure the longevity and security of all our developments. The web is moving faster than you think, that is why we make sure to always be onboard the first wagon of the train.`,
        },
        {
          title: 'Mobile Applications',
          description: `Nowadays, having a dedicated mobile application for your business, company or NGO, on both platforms (IOS and Android) is a sign of professionalism, and modernity. A mobile application is woven into the life of your audience as it lives on their phone. While it is the main interaction between your company and its users, a web application, which explains what the mobile application does and how it works, is wise to have, and we are aware of that. That is why in all our mobile application packages, a landing page is included for free if needed.`,
        },
        {
          title: 'SEO & Security Enhancement',
          description: `You have an existing website or web application but it does not seem to reach as much people as you would like? No problem, here at Mayak Corp. we provide Search Engine Optimization consultancy to ensure the visibility of your website/webapp. 
          Ever had a DDos Attack, or leaked information? We also provide consultancy in cyber security matters to improve your website/webapp’s defences.`,
        },
      ],
    },
    {
      title: 'Artistic Project Development',
      mainImg: creativity,
      url: '/services/art-development',
      secondaryImg: creativity,
      descriptions: [
        {
          title: 'Digital art',
          description: `Part of our services includes helping you in vector-based designs. May that be a logo, an icon or even a typography related job we are here for you!  We realize that quality beats quantity, and that’s why we are here to help you design a brand-new font, or just a couple of letters, brochures, flyers and even posters. We ensure that the content and aesthetics of your digital art are both on point!`,
        },
        {
          title: 'Photo/Video editing',
          description: `Our multimedia team is ready to montage your short films, create a captivating “court métrage”, and edit a bunch - or over 100 - photos, and even create a breath-taking Light VFX.`,
        },
        {
          title: 'Company Branding ',
          description: `Want to freshen up your brand? We offer company branding services, including logo design, colour identity, a photo shoots, and business video trailer for your company! After we are done, it will feel like a new haircut that just makes you feel awesome!`,
        },
      ],
    },
    {
      title: 'Online Marketing',
      mainImg: dmarketing,
      url: '/services/digital-marketing',
      secondaryImg: dmarketing1,
      descriptions: [
        {
          title: 'Online Presence Consultancy',
          description: `We analyse your online presence, number of likes, number of shares, quality of your content, and finally your organization. We also analyse your audience’s behaviour, what are they saying about you, when are they most active. Once this information is gathered, we deliver you a confidential report. Containing this data, and its analysis, we then offer some guidance regarding what this data means and how to improve the report outcomes.`,
        },
        {
          title: 'Social Media Management',
          description: `Do you not have the time to take keep up with your social media platforms, but still need to be part of the online scene? No problem at all, we have dedicated people to help thrive your business online.`,
        },
        {
          title: 'Branding & Marketing',
          description: `Sometimes, the easiest option to increase your company’s statistics is to modify the way it looks. Check out the Company Branding section in the Artistic Creation and Development page for more details on what we offer!`,
        },
      ],
    },
  ];
};
