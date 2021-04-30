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
      url: '/services/dev',
      descriptions: [
        {
          title: 'Web Applications',
          description: `At Mayak Corp, we develop modern & elegant web application. We use cutting edge technologies to ensure the longevity and security of all our developments. The web is moving faster than you think, that is why we make sure to always be part of the first wagon of the train.`,
        },
        {
          title: 'Mobile Applications',
          description: `Nowadays, having a dedicated mobile application for your business, company or NGO, on both platforms (IOS and Android) is a sign of professionalism, and modernity. An application lives within the phone of your audience, therefor is more present in their life than just a simple web application. However, a mobile application without a web application explaining what the mobile application does is not the best thing and we are aware of that. Therefore, in all our mobile application packages, a landing page is included for free if needed. `,
        },
        {
          title: 'SEO & Security Enhancement',
          description: `You have an existing website or web application? But it does not seem to reach as much people as you would like? No problem, here at Mayak Corp we provide Search Engine Optimization consultancy to ensure the visibility of your website/webapp.     
          Ever had a DDos Attack, or leaked information? We also provide consultancy in cyber security to improve your website/webapp.
            `,
        },
      ],
    },
    {
      title: 'Artistic Project Development',
      mainImg: creativity,
      url: '/services/art',
      secondaryImg: creativity,
      descriptions: [
        {
          title: 'Digital art',
          description: `Part of our services includes helping you in vector-based designs, that being a logo, an icon or even a typography related, it can be a new font, or just a couple of letters. Of course, these services include prints, flyers, posters, and brochures. `,
        },
        {
          title: 'Photo/Video editing',
          description: `Our multimedia team is ready to momtage your short films, create a captivating “court métrage”, and edit a bunch or over 100 photos, and even create a breath-taking Light VFX.`,
        },
        {
          title: 'Company Branding ',
          description: `Want to freshen up your brand? We offer company branding services, including logo design, colour identity, a business video trailer for your company, and photo shoots! After we are done, it will feel like a new haircut that just makes your company feel awesome! `,
        },
      ],
    },
    {
      title: 'Online Marketing',
      mainImg: dmarketing,
      url: '/services/personal',
      secondaryImg: dmarketing1,
      descriptions: [
        {
          title: 'Online Presence Consultancy',
          description: `We analyse your online presence, number of likes, number of shares, quality of your content and finally your organization. We also analyse your audience behaviour, what are they saying about you, when are they the most active? Once this information is gathered, we deliver to you a confidential report.`,
        },
        {
          title: 'Social Media Management',
          description: `You do not have time to take care of your social medias but still need to be part of the online scene? No problem at all, we have dedicated people to help thrive your business online. `,
        },
        {
          title: 'Branding & Marketing',
          description: `Sometimes, the easiest option to increase your company statistics is to modify the way it looks.  `,
        },
      ],
    },
  ];
};
