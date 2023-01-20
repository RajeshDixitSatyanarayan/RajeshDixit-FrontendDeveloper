import { Columns, IColumnsProps } from "../common/columns";
import styles from './section.module.scss';
export interface ISectionProps extends IColumnsProps {
  title: string;
  footer?: JSX.Element;
  classname?: string;
}
export const Section = ({title, columns, footer, classname = ''}: ISectionProps) => {
  return (
    <div className={`${styles.sectionContainer} ${classname}`}>
      <h2>{title}</h2>
      <div className={styles.sectionBody}>
        <Columns columns={columns} />
      </div>
      {
        !!footer && <div className={styles.sectionFooter}>{footer}</div> 
      }
    </div>
  )
}