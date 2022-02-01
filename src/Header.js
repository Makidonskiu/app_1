
const Header = () => {
return(
    <div>
        <nav>
           <ul style={{'listStyle': "none"}}>
               <li><a className="btn btn-success" href="/form">Login</a></li>
               <li><a className="btn btn-primary" href="/register">Register</a></li>
           </ul>
        </nav>
    </div>
)
}

export default Header