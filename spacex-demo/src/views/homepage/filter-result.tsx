/*
  {
    "reuse_count": 0,
    "water_landings": 1,
    "land_landings": 0,
    "last_update": "Hanging in atrium at SpaceX HQ in Hawthorne ",
    "launches": [
        "5eb87cdeffd86e000604b330"
    ],
    "serial": "C101",
    "status": "retired",
    "type": "Dragon 1.0",
    "id": "5e9e2c5bf35918ed873b2664"
  }
*/
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
              : <div className="no-data-found">No data found</div>
          }
        </tbody>
      </table>
    </>
  )
}