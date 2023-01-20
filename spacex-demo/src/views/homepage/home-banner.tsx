import { Banner } from "../../components/banner/banner";
import { HomePageBannerInfo } from "./banner-info";
import styles from './home-banner.module.scss';

export const HomeBanner = () => {
  const columns: JSX.Element[] = [<HomePageBannerInfo />, <img src='/spacex.png' alt='SpaceX Logo' />]
  return (
    <>
      <Banner columns={columns} classname={styles.homeBanner} />
    </>
  )
}