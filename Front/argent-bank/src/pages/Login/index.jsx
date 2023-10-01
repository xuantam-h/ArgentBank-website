import Icon from "../../components/Icon";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  return (
    <div className="Login">
        <section className="sign-in-content">
          <Icon iconClass="fa fa-user-circle sign-in-icon"/>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <Input inputId="username" inputName="Username" inputType="text" />
            </div>
            <div className="input-wrapper">
              <Input inputId="password" inputName="Password" inputType="password" />
            </div>
            <div className="input-remember">
              <Input inputId="remember-me" inputName="Remember me" inputType="checkbox" />
            </div>
            <Button btnClass="sign-in-button" btnText="Sign In" />
          </form>
        </section>
    </div>
  );
}

export default Login;