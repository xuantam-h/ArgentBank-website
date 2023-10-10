const Button = ({btnClass, btnText, btnEvent, children}) => {
    return (
        <button className={btnClass} onClick={btnEvent}>{children} {btnText}</button>
    );
}
  
export default Button;