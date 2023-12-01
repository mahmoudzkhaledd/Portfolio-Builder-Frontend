import style from './style.module.css'

export default function TextBox({ mb, label, error, name, area, className, minLength, maxLength, disabled, reference, type, onChanged, value, placeholder }) {

    return (
        <div style={{ marginBottom: mb }}>
            <p className={style.labelText}>
                {label}
                {error && ` (${error})`}
            </p>
            {!area ? <input
                name={name}
                minLength={minLength}
                maxLength={maxLength}
                ref={reference}
                disabled={disabled}
                placeholder={placeholder}
                type={type || "text"}
                onChange={onChanged}
                value={value}
                className={`${style.textBox} ${className}`} /> :
                <textarea
                    oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
                    name={name}
                    minLength={minLength}
                    maxLength={maxLength}
                    ref={reference}
                    disabled={disabled}
                    placeholder={placeholder}
                    type={type || "text"}
                    onChange={onChanged}
                    value={value}
                    className={`${style.textBox} ${className} ${style.textarea}`}
                />}
        </div>

    )
}
