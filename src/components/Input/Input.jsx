import styles from "./Input.module.scss";

// 세로방향일 때 prop 추가 : 
// 사로방향일 때 prop 추가 : 
const Input = ({id, label, type="text", name, title, className, value, placeholder="내용을 입력해 주세요", error, disabled, ...rest}) => {
    const classes = [styles.uiInput, error && styles.error, disabled && styles.disabled].filter(Boolean).join(' ');

    return (
        <div className={`${styles.inputWrap} ${error && styles.error}`}>
            {label && <label htmlFor={id} className={styles.uiLabel}>{label}</label>}
            <input type={type} id={id} name={name} title={title} value={value} className={classes} placeholder={placeholder} disabled={disabled} {...rest} />
            {error && <p className={styles.uiError}>{error}</p>}
        </div>
    )
}


// const Input = ({
//     label,
//     type = "",
//     value,
//     placeholder = "",
//     id,
//     className,
//     onChange,
//     disabled,
//     error = "",
// }) => {
//     const classes = [styles.input, error && styles.error, className].filter(Boolean).join(" ");
//     return (
//         <div className={styles.uiInput}>
//             {label && <label className={styles.uiLabel} htmlFor={id}>{label}</label>}

//             <input type={type} id={id} className={classes} value={value} placeholder={placeholder} onChange={onChange} disabled={disabled}  />

//             {/* <input type={type} id={id} className={`input ${error ? "error" : ""} ${className || ""}`} value={value} placeholder={placeholder} onChange={onChange} disabled={disabled}  /> */}

//             {error && <p className={styles.uiError}>{error}</p>}
//         </div>
//     );
// };

export default Input;