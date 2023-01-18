import { Columns, IColumnsProps } from '../common/columns'
import './banner.scss'

export interface IBannerProps extends IColumnsProps {
  classname?: string;
}

export const Banner = ({
  columns,
  classname = ''
}: IBannerProps) => {
  return (
    <div className={`banner-container ${classname}`}>
      <Columns columns={columns} />
    </div>
  )
}