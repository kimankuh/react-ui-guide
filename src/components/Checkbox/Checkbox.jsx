// import styles from  "./Checkbox.module.scss";

export default function Checkbox({
    id,
    label,
    checked,
    disabled,
}){
    return (
        <div>
            <input type="checkbox" id={id} checked={checked} disabled={disabled} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}