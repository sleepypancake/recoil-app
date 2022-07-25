import { useRecoilState, useRecoilValue } from "recoil"
import { darkModeAtom } from "../store/atoms/darkModeAtom"

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)
    return  (
        <input 
            type="checkbox" 
            checked={darkMode} 
            onChange={e => {
                setDarkMode(e.currentTarget.checked)
            }}
        />
)}

const Button = () => {
    const darkMode = useRecoilValue(darkModeAtom)
    return (
        <button
            style={{
                backgroundColor: darkMode ? 'black' : 'white',
                color: darkMode ? 'white' : 'black',
                padding: '10px 25px',
                border: '1px solid black'
            }}
        >
            My UI Button
        </button>
)}

export const Atoms = () => {
    return (
    <div>
        <DarkModeSwitch />
        <div>
        <Button />
        </div>
    </div>
)}