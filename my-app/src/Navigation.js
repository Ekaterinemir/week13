
import "./style.css"

//the Navigation component defines the structure and appearance of a navigation menu. It provides links that 
//potentially navigate the user to different sections or pages of the application. 
function Navigation(){
    return(
        <nav className="navbar">
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
     
        </ul>
        </nav>
    );
}
//the component is exported, making it available in other parts of the application. 
export default Navigation;