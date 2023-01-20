import styles from './filter-form.module.scss';

export interface IFilterResultProps {
  data: {[key: string]: any}[]
}
interface IKeyLabelMap {
  key: string;
  label: string;
}
export const FilterResult = ({data}: IFilterResultProps) => {
  const keysToShow: IKeyLabelMap[] = [
    { key: 'serial', label: 'Serial'},
    { key: 'status', label: 'Status'},
    { key: 'type', label: 'Type'},
    { key: 'reuse_count', label: 'Reuse Count'},
    { key: 'water_landings', label: 'Water Landings'},
    { key: 'land_landings', label: 'Land Landings'},
    { key: 'last_update', label: 'Update'},
    
  ]
  return (
    <>
      <table border={0}>
        <thead>
          <tr>
            {
              keysToShow.map(({label}) => <th key={label}>{label}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            data.length
              ? data.map((item, rowIndex) => (
                <tr key={rowIndex}>
                  {
                    keysToShow.map(({key}: IKeyLabelMap, index) => <td key={`${item[key]}_${index}`}>{item[key]}</td>)
                  }
                </tr>
              ))
              : <div className={styles.noDataFound}>No data found</div>
          }
        </tbody>
      </table>
    </>
  )
}