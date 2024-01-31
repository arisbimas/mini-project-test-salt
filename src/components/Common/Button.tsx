type ButtonProps = {
    label: string
    type?: "button" | "submit" | "reset",
    className?: string
    isLoading?: boolean
    disabled?: boolean
    variant?: "primary" | "secondary" | "outline"
    size?: "small" | "default"
    onClick?: () => void
}

export const Button = (props: ButtonProps) => {
    const { label, type = "button", className = "", isLoading, disabled = false, variant = "primary", size = "default", onClick = () => { } } = props
    return (
        <button type={type} className={`btn btn-${variant} btn-${size} ${isLoading ? "loading" : ""} ${className}`} onClick={onClick} disabled={isLoading || disabled}>
            {isLoading ? (
                <span className="spinner-border" role="status" aria-hidden="true"></span>
            ) : (
                label
            )}
        </button>
    )
}
