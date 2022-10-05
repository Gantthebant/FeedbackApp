function FormButton({children, disabled}) {
    return (
        <button type='submit' disabled={disabled} className={`btn btn-primary`}>
            {children}
        </button>
    )
}

export default FormButton;