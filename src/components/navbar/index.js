import { useRouter } from 'next/dist/client/router';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Navbar(){
    const router = useRouter();
    return (
        <nav className="navbar navbar-expand-lg navbar-light .bg-transparent">
        <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{color:'black'}}>Comparador</a>
         
        
         
        </div>
      </nav>


    )



}
