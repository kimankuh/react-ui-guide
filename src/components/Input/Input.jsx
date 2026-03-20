// import styles from "./Input.module.scss";
import styled from "styled-components";

const InputWrap = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;

    ${props => props.$error && css`
        flex-wrap: wrap;
        // &:focus { border-color:#ff4d4f; }
    `}
`;

const uiLabel = props.label`
        padding-right: 20px;
        min-width:90px;
        font-size:14px;
        font-weight:600;
        color: $color-gray-700;
`;

const uiInput = props.input`
        padding: 10px 12px;
        width: 100%;
        font-size:15px;
        border:1px solid $color-gray-400;
        border-radius: 6px;
        &:focus {
            outline: none;
            border-color: $color-primary;
            box-shadow: 0,0,0,2px,rgba($color-primary, 0.2);
        }
        &:disabled {
            cursor: not-allowed;
        }
        
        ${props => props.$error && css`
            border-color: $color-danger;
            box-shadow: 0 0 0 2px rgba($color-danger, 0.2);
        `}
`;

// 세로방향일 때 prop 추가 : 
// 가로방향일 때 prop 추가 : 
const Input = ({id, label, type="text", name, title, value, placeholder="내용을 입력해 주세요", error, disabled, ...rest}) => {
// const classes = [styles.uiInput, error && styles.error, disabled && styles.disabled].filter(Boolean).join(' ');

    return (
        <InputWrap>
            {label && <uiLabel htmlFor={id}>{label}</uiLabel>}
            <input type={type} id={id} name={name} title={title} value={value} className={classes} placeholder={placeholder} disabled={disabled} {...rest} />
            {error && <p className={styles.uiError}>{error}</p>}
        </InputWrap>
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