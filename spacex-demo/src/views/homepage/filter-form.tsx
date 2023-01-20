import { useState } from "react"
import APIs from "../../api"
import { PrimaryButton, SecondaryButton } from "../../components/common/button"
import { Select, TSelectItem } from "../../components/common/select"
import { Section } from "../../components/section/section"
import { capsuleType, capsuleStatus } from "../../constants/capsule"
import styles from './filter-form.module.scss'
import { FilterResult } from "./filter-result"

const createSelect = (
  label: string,
  dataSet: string[] | TSelectItem[],
  onChange: (value: string) => void,
  value: string
) => {
  return (
    <div className={styles.filterField}>
      <span>{label}: </span>
      <Select
        dataSet={dataSet}
        onChange={onChange}
        placeholder={label}
        initialValue={value}/>
    </div>
  )
}

const validateDate = (date: any) => {
  return date instanceof Date && !isNaN(date.getSeconds());
}

export const FilterForm = () => {
  const [status, setStatus] = useState('')
  const [type, setType] = useState('')
  const [originalLaunch, setOriginalLaunch] = useState('')
  const [result, setResult] = useState([])

  const setDate = (value: string) => {
    const date = new Date(value)
    validateDate(date) ? setOriginalLaunch(date.toISOString()) : setOriginalLaunch('')
  }

  const launchDate = (
    <div className={styles.filterField}>
      <span>Launch Date: </span>
      <input type="date" value={originalLaunch} onChange={({target}) => setDate(target.value)}/>
    </div>
  )

  const handleSubmit = () => {
    APIs.getCapsules(status, originalLaunch, type).then((res) => {
      setResult(res)
    }).catch((er) => {
      console.log(er)
    }).finally(() => {
      handleReset()
    })
  }
  const handleReset = () => {
    setStatus('')
    setType('')
    setOriginalLaunch('')
  }
  const footer = (
    <div className={styles.filterActionPanel}>
      <PrimaryButton label="Submit" onClick={handleSubmit} roundBorder={true} />
      <SecondaryButton label="Reset" onClick={handleReset} roundBorder={true} />
    </div>
  )

  const fields: JSX.Element[] = [
    createSelect('Status', capsuleStatus, setStatus, status),
    launchDate,
    createSelect('Type', capsuleType, setType, type),
  ]
  return (
    <>
      <Section title="Search Form" columns={fields} footer={footer} classname={styles.searchForm} />
      {
        result.length
          ? <Section
              title="Search Results"
              columns={ [ <FilterResult data={result} /> ]}
              classname={styles.searchResult} />
          : null
      }
    </>
  )
}