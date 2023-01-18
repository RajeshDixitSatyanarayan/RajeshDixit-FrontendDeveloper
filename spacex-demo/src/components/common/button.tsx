import { MouseEventHandler } from "react";
import './button.scss';

export interface IButtonProps {
  label: string;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  roundBorder?: boolean;
}
const Button = ({label, className, onClick, roundBorder = false}: IButtonProps) => {
  const _class = roundBorder ? 'round-button' : 'rectangle-button'
  return (
    <>
      <button className={`${_class} ${className}`} onClick={onClick}>{label}</button>
    </>
  )
}

export const PrimaryButton = (props: IButtonProps) => {
  return <Button {...props} className={`primary ${props.className}`} />
}

export const SecondaryButton = (props: IButtonProps) => {
  return <Button {...props} className={`secondary ${props.className}`} />
}