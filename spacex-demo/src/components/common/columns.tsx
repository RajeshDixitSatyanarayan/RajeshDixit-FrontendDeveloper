import styles from '../section/section.module.scss';
export interface IColumnsProps {
  columns: JSX.Element[]
}
export const Columns = ({columns}: IColumnsProps) => {
  return (
    <>
      {
        columns.map((el, index) => (
          <div key={index} className={styles.col}>{el}</div>
        ))
      }
    </>
  )
}