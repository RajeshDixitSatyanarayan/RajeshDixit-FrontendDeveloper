import './select.scss';
export type TSelectItem =  { label: string, value: string}

export interface ISelectProps {
  dataSet: string[] | TSelectItem[];
  onChange: (value: string) => void;
  placeholder?: string;
  initialValue: string;
}
export const Select = ({ dataSet, onChange, placeholder, initialValue }: ISelectProps) => {
  return (
    <div className="select" placeholder={placeholder}>
      <select onChange={(e) => onChange(e.target.value)} value={initialValue}>
        {
          ['', ...dataSet].map((item: string | TSelectItem) => {
            const _value: string = typeof item === "object" ? item.value : item
            const _label: string = typeof item === "object" ? item.label : item
            if (!item) {
              return <option className='placeholder' value='' key={placeholder}>{placeholder}</option>
            }
            return <option value={_value} key={_value}>{_label}</option>
          })
        }
      </select>
    </div>
  )
}