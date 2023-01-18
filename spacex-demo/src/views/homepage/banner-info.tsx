import { SpaceXInfo } from "../../constants/spacex-info"
import './banner-info.scss'
export const HomePageBannerInfo = () => {
  return (
    <div className="banner-info">
      <h2>Space X</h2>
      <p>{SpaceXInfo}</p>
    </div>
  )
}