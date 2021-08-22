import { Product } from "../product";

export function Comparador(){


    return (
        <div style={{display:'block', flex:1, alignItems:'center', justifyContent:'center', maxWidth:'660px', border:'1px solid white', boxShadow:'0 5px 20px rgba(253, 19, 58, 0.25)', borderColor:'#2c3e40', borderRadius:'8px', margin:'15px', padding:'50px'}}>
            <div>
                <Product />
                <Product />
            </div>
        </div>
    )
}