const Input = ({inputName,inputId,inputType}) => {
    return (
        <>
            <label htmlFor={inputId}>{inputName}</label>
            <input id={inputId} type={inputType} />
        </>
    );
}
  
export default Input;