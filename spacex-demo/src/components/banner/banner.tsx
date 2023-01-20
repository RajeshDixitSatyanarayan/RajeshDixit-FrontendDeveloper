import { Columns, IColumnsProps } from '../common/columns'
import styles from './banner.module.scss'

export interface IBannerProps extends IColumnsProps {
  classname?: string;
}

export const Banner = ({
  columns,
  classname = ''
}: IBannerProps) => {
  return (
    <div className={`${styles.bannerContainer} ${classname}`}>
      <Columns columns={columns} />
    </div>
  )
}