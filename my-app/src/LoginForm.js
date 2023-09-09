
import "./style.css";

//LoginForm function returns a JSX structure that represents an HTML form for user login. The form includes
// two input fields Username and Password and a submit  button. The form is styled with style.css
function LoginForm(){
    return(
        <div className="login-form">
        <h3>Log In</h3>
        <form>
       <div className="form-group">
       <label
       htmlFor="username">Username</label>
       <input type="text"
       id="username" name="username" />
       </div>
       <div className="form-group">
       <label
       htmlFor="password">Password</label>
       <input type="password"
       id="password" name="password" />
       </div>
       <button type="submit">Submit</button>
        </form>
        </div>
        
    );
}
//the component is exported using export default LoginForm, making it available in other parts of application
export default LoginForm; 
