import styles from './Keybord.module.css'
import keys from "../keys.json"
import { Keyboard } from './KeybordGeneral'

type KeybordProp = {
  activeLetters: string[],
  inActiveLetters: string[],
  addGuessedLetter: (letter: string) => void
  disabled?: boolean
}

const Keybord = ({activeLetters, inActiveLetters, addGuessedLetter, disabled = false} : KeybordProp) => {

  return (
    <Keyboard>
      {keys.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inActiveLetters.includes(key)
        return <button onClick={() => addGuessedLetter(key)} className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""} `} disabled={isActive||isInactive||disabled } key={key}>{key}</button>
      }) }
    </Keyboard>
  )
}

export default Keybord