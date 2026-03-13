import styles from "./Input.module.scss";

// 세로방향일 때 prop 추가 : 
// 사로방향일 때 prop 추가 : 
const Input = ({id, label, type, className, placeholder, error, disabled, ...rest}) => {
    const classes = [styles.uiInput, error && styles.error, disabled && styles.disabled].filter(Boolean).join(' ');

    return (
        <div className={styles.inputWrap}>
            {label && <label htmlFor={id} className={styles.uiLabel}>{label}</label>}
            <input type={type} id={id} className={classes} placeholder={placeholder} disabled {...rest} />
            {error && <p className={styles.uiError}>에러메세지 영역</p>}
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