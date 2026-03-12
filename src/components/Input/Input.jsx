import styles from "./Input.module.scss";

const Input = ({
    label,
    type = "",
    value,
    placeholder = "",
    id,
    className,
    onChange,
    disabled,
    error = "",
}) => {
    const classes = [styles.input, error && styles.error, className].filter(Boolean).join(" ");
    return (
        <div className={styles.uiInput}>
            {label && <label className={styles.uiLabel} htmlFor={id}>{label}</label>}

            <input type={type} id={id} className={classes} value={value} placeholder={placeholder} onChange={onChange} disabled={disabled}  />

            {/* <input type={type} id={id} className={`input ${error ? "error" : ""} ${className || ""}`} value={value} placeholder={placeholder} onChange={onChange} disabled={disabled}  /> */}

            {error && <p className={styles.uiError}>{error}</p>}
        </div>
    );
};

export default Input;