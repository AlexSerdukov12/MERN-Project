import "./AdminProd"
import { Prod } from "./AdminProd";
import { useNavigate } from 'react-router-dom';


export function Chooseoption(props)
{
    const history=useNavigate();

    function gohome()
    {
        history('/');
    }

    function goprod()
    {

        history('/adminoptions/adminproducts');
    }
    
    
return(

<div className="Admin">

    <h1>Testing</h1>
    <button onClick={() => {goprod()}}>products</button>
    <button onClick={() => {gohome()}}>home</button>
 </div>

);
}

