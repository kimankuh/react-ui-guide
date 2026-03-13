import Input from "../Input/Input"
import Button from "../Button/Button"
import styles from "./InputMixed_01.module.scss"

// input + 저장 버튼
const InputMixed_01 = ({label, error, ...props}) => {
    return (
        <div className={styles.inputWrap}>
            <Input label="직업" />
            <Button size="sm">저장</Button>
        </div>
    )
}
export default InputMixed_01