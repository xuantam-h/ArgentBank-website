import Icon from "../../components/Icon";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useSelector } from 'react-redux';

const Login = () => {
  const isLogged = useSelector((state) => state.user.userLogged);

  return (
    <div className="Login">
        <section className="sign-in-content">
          <Icon iconClass="fa fa-user-circle sign-in-icon"/>
          <h1>Sign In</h1>
          <h2>{isLogged ? <p>Vous êtes connectés !</p> : <p>Vous n'êtes pas un utilisateur connu...</p>}</h2>
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