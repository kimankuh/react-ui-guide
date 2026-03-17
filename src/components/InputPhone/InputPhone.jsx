import Input from "../Input/Input"
import styles from "./InputPhone.module.scss"

const InputPhone = ({id, label, inputPhoneProps}) => {
    return (
        <div className={styles.inputPhoneWrap}>
            {label && <label htmlFor={id} className={styles.labelText}>{label}</label>}
            <div className={styles.phoneWrap}>
                <Input id={id} title="전화번호 앞 세자리" placeholder="" />
                <span className={styles.dash}>-</span>
                <Input title="전화번호 가운데 세자리" placeholder="" />
                <span className={styles.dash}>-</span>
                <Input title="전화번호 뒤 세자리" placeholder="" />
            </div>            
        </div>
    )
}

export default InputPhone