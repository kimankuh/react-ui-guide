import Input from "../Input/Input"
import Button from "../Button/Button"
import styles from "./InputMixed_01.module.scss"

// input + 저장 버튼
const InputMixed_01 = ({label, buttonText, buttonSize, inputProps, ...rest}) => {
    return (
        <div className={styles.inputMixedWrap} {...rest}>
            <Input label={label} {...inputProps} />{/* inputProps 보따리를 받아서 Input 컴포넌트에 통째로 넘김 */}
            <Button size={buttonSize}>{buttonText}</Button>
        </div>
    )
}
export default InputMixed_01