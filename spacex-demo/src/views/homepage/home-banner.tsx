import { Banner } from "../../components/banner/banner";
import { HomePageBannerInfo } from "./banner-info";
import './home-banner.scss';

export const HomeBanner = () => {
  const columns: JSX.Element[] = [ <HomePageBannerInfo />, <img src='/spacex.png' alt='SpaceX Logo' /> ]
  return (
    <>
      <Banner columns={columns} classname="home-banner"/>
    </>
  )
}