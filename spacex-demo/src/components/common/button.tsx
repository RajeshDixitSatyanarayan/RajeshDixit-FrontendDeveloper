import { MouseEventHandler } from "react";
import styles from  './button.module.scss';

export interface IButtonProps {
  label: string;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  roundBorder?: boolean;
}
const Button = ({label, className, onClick, roundBorder = false}: IButtonProps) => {
  const _class = roundBorder ? styles.roundButton : styles.rectangleButton
  return (
    <>
      <button className={`${_class} ${className}`} onClick={onClick}>{label}</button>
    </>
  )
}

export const PrimaryButton = (props: IButtonProps) => {
  return <Button {...props} className={`${styles.primary} ${props.className || ''}`} />
}

export const SecondaryButton = (props: IButtonProps) => {
  return <Button {...props} className={`${styles.secondary} ${props.className || ''}`} />
}
