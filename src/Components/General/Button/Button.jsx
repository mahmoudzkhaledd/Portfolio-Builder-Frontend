import style from './style.module.css';

export default function Button({ width,borderWidth, flexDirection,borderColor, bordered, disabled, justifyContent, className, text, borderRadius, onClick, loading, color, textColor, btnType, fontSize, verticalPadding, horizontalPadding, icon }) {
    return (
        <button
            type={btnType}
            disabled={disabled}
            style={{
                width: width,
                border: !bordered ? "none" : `${borderWidth}px solid ${borderColor}`,
                backgroundColor: color || "var(--secondary)",
                fontSize: fontSize,
                color: textColor,
                paddingInline: horizontalPadding,
                paddingBlock: verticalPadding,
                borderRadius,
                justifyContent: justifyContent,
                alignItems: justifyContent,
                flexDirection: flexDirection || "row",
            }}
            onClick={onClick} className={`${style.button} ${className}`}>
            {icon && <i className={icon}></i>}
            {
                !loading ? <p>{text}</p> :
                    <i className={`fa-solid fa-circle-notch ${style.spinner}`}></i>
            }
        </button>
    )
}
