use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          buttonText="Get Started"
          onButtonClick={() => console.log('Get Started clicked')}
          navItems={
            [
              { name: 'Hero', id: 'hero' },
              { name: 'About', id: 'about' },
              { name: 'How to Buy', id: 'how-to-buy' },
              { name: 'Tokenomics', id: 'tokenomics' },
              { name: 'Footer', id: 'footer' }
            ]
          }
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to Xeven"
          description="Your fun and trendy SaaS solution awaits!"
          primaryButtonText="Learn More"
          secondaryButtonText="Get Started"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="What is Xeven?"
          descriptions={["Xeven is the next big thing in SaaS solutions!", "We bring innovative tools to your fingertips."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Our Tokenomics"
          description="Xeven offers transparent and user-centric tokenomics."
          cardItems={[{ id: 1, title: 'Total Supply', description: '1 Million XEV tokens' }, { id: 2, title: 'Token Distribution', description: '30% to Users, 20% to Development'}]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          columns={[
            { title: 'Products', items: [{ label: 'Product 1', onClick: () => {} }, { label: 'Product 2', onClick: () => {} }] },
            { title: 'Company', items: [{ label: 'About Us', onClick: () => {} }, { label: 'Careers', onClick: () => {} }] },
            { title: 'Support', items: [{ label: 'Help Center', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] },
          ]}
          copyrightText="© 2023 Xeven"
          onPrivacyClick={() => { console.log('Privacy Policy clicked'); }}
        />
      </div>
    </SiteThemeProvider>
  );
}
