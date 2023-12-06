import style from './style.module.css'

export default function TextBox({ id, mb, pattern, initialValue, label, error, name, area, className, minLength, maxLength, disabled, reference, type, onChanged, value, placeholder }) {
    function input(e) {
        e.target.style.height = "";
        e.target.style.height =
            e.target.scrollHeight + "px";
    }
    return (
        <div style={{ marginBottom: mb }}>
            <p className={style.labelText}>
                {label}
                {error && ` (${error})`}
            </p>
            {!area ? <input
                id={id}
                name={name}
                pattern={pattern}
                defaultValue={initialValue}
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
                    id={id}
                    pattern={pattern}
                    onInput={input}
                    name={name}
                    defaultValue={initialValue}
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
