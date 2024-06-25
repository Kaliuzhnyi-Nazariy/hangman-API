import { useSelector } from "react-redux"
import { selectHint, selectWord } from "../redux/selectors"
import { useNavigate } from "react-router-dom"

const Game = () => {
    const word = useSelector(selectWord)
    const hint = useSelector(selectHint)

const navigate = useNavigate()

    const handleBackClick = () => {
    navigate("/")
}

    return (
        <><button onClick={handleBackClick}>back</button><p>game</p><span>{hint}</span><p>{ word}</p></>

  )
}

export default Game