"01";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: '02', colorTemplate: 1, textAnimation: '03' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="01"
          logoWidth={100}
          logoHeight={40}
          buttonText="02"
          onButtonClick={() => console.log('03')}
          navItems={
            [
              { name: 'G', id: 'e' },
              { name: 't', id: ' ' },
              { name: 'S', id: 't' },
              { name: 'a', id: 'r' },
              { name: 't', id: 'e' }
            ]
          }
        />
      </div>
      <div id="d" data-section="W" className="e">
        <FrameHero
          title="l"
          description="c"
          primaryButtonText="o"
          secondaryButtonText="m"
        />
      </div>
      <div id="e" data-section="t" className="o">
        <CtaAbout
          title="X"
          descriptions={["e", "v"]}
        />
      </div>
      <div id="e" data-section="n" className="W">
        <HowToBuy2D variant="h" />
      </div>
      <div id="a" data-section="t" className="i">
        <ExpandingGridTokenomics
          title="s"
          description="X"
          cardItems={[{ id: 1, title: 'e', description: 'v' }, { id: 2, title: 'e', description: 'n'}]}
        />
      </div>
      <div id="?" data-section="H" className="o">
        <FooterBase
          logoSrc="w"
          logoWidth={100}
          logoHeight={40}
          columns={[
            { title: 't', items: [{ label: 'o', onClick: () => {} }, { label: 'B', onClick: () => {} }] },
            { title: 'u', items: [{ label: 'y', onClick: () => {} }, { label: 'O', onClick: () => {} }] },
            { title: 'u', items: [{ label: 'r', onClick: () => {} }, { label: 'T', onClick: () => {} }] },
          ]}
          copyrightText="o"
          onPrivacyClick={() => { console.log('k'); }}
        />
      </div>
    </SiteThemeProvider>
  );
}
