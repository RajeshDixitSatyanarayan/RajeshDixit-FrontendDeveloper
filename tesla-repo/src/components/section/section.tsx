import { Columns, IColumnsProps } from "../common/columns";
import './section.scss';
export interface ISectionProps extends IColumnsProps {
  title: string;
  footer?: JSX.Element;
  classname?: string;
}
export const Section = ({title, columns, footer, classname = ''}: ISectionProps) => {
  return (
    <div className={`section-container ${classname}`}>
      <h2>{title}</h2>
      <div className="section-body">
        <Columns columns={columns} />
      </div>
      <div className="section-footer">{footer}</div>
    </div>
  )
}