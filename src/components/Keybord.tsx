import styles from './Keybord.module.css'
import keys from "../keys.json"

type KeybordProp = {
  activeLetters: string[],
  inActiveLetters: string[],
  addGuessedLetter: (letter: string) => void
  disabled?: boolean
}

const Keybord = ({activeLetters, inActiveLetters, addGuessedLetter, disabled = false} : KeybordProp) => {

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: ".5rem" }}>
      {keys.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inActiveLetters.includes(key)
        return <button onClick={() => addGuessedLetter(key)} className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""} `} disabled={isActive||isInactive||disabled } key={key}>{key}</button>
      }) }
    </div>
  )
}

export default Keybord