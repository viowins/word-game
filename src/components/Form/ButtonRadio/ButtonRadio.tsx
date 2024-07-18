import styles from "./ButtonRadio.module.css"

interface Props {
  children: React.ReactNode
  id: string
  name: string
  onClick?: () => void
}

const ButtonRadio:React.FC<Props> = ({ children, id, name, onClick }) => {
  return (
    <label htmlFor={id} onClick={onClick}>
      <input type="radio" className={styles.input} id={id} name={name} />
      <span className={styles.btn}>{children}</span>
    </label>
  )
}

export default ButtonRadio