import { setRequestLocale } from 'next-intl/server';
import { HomeHero } from '@/components/sections/HomeHero';
import { TrustBar } from '@/components/sections/TrustBar';
import { HomeCapabilities } from '@/components/sections/HomeCapabilities';
import { HomeSolutions } from '@/components/sections/HomeSolutions';
import { CapabilitiesFull } from '@/components/sections/CapabilitiesFull';
import { HomeSectors } from '@/components/sections/HomeSectors';
import { HomeSecurity } from '@/components/sections/HomeSecurity';
import { HomeEfficiency } from '@/components/sections/HomeEfficiency';
import { HomeTechnology } from '@/components/sections/HomeTechnology';
import { HomeService } from '@/components/sections/HomeService';
import { HomeWhy } from '@/components/sections/HomeWhy';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return (
    <>
      <HomeHero />
      <TrustBar />
      <HomeCapabilities />
      <HomeSolutions />
      <CapabilitiesFull />
      <HomeSectors />
      <HomeSecurity />
      <HomeEfficiency />
      <HomeTechnology />
      <HomeService />
      <HomeWhy />
      <FAQ />
      <FinalCTA />
    </>
  );
}
