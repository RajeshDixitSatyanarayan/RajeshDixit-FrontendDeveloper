import { SpaceXInfo } from "../../constants/spacex-info"
import styles from './banner-info.module.scss'
export const HomePageBannerInfo = () => {
  return (
    <div className={styles.bannerInfo}>
      <h2>Space X</h2>
      <p>{SpaceXInfo}</p>
    </div>
  )
}