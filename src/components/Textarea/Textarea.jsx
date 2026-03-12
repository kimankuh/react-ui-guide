import styles from "./Textarea.module.scss"

const Textarea = ({
    label,
    id,
    className,
    value,
    placeholder,
    onChange,
    disabled,
    error,
    rows = 4,
}) => {
    const classes = [styles.textarea, error && styles.error, className].filter(Boolean).join(" ");// 클래스 미사용시 공백 없애줌
    return (
        <div className={styles.uiTextarea}>
            {label && <label className={styles.uiTextarea__labe} htmlFor={id}>{label}</label>}
            
            <textarea 
                id={id}
                className={classes}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                rows={rows}
            />

            {error && <p className={styles.uiError}>{error}</p>}
        </div>
    );
}

export default Textarea;