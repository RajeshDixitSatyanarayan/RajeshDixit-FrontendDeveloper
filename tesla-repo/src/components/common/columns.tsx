export interface IColumnsProps {
  columns: JSX.Element[]
}
export const Columns = ({columns}: IColumnsProps) => {
  return (
    <>
      {
        columns.map((el, index) => <div key={index} className="col">{el}</div>)
      }
    </>
  )
}