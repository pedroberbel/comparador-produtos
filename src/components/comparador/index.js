import { Product } from "../product";
import React from 'react';

export function Comparador(){
    const [p1value, setP1value] = React.useState();
    const [p2value, setP2value] = React.useState();
    const [p1quantity, setP1quantity] = React.useState();
    const [p2quantity, setP2quantity] = React.useState();

    const [percentP1, setPercentP1] = React.useState();
    const [percentP2, setpercentP2] = React.useState();
    const [resultP1, setresultP1] = React.useState();
    const [resultP2, setresultP2] = React.useState();
    const [resultP1eqP2, setResultP1eqP2] = React.useState()
    React.useEffect(()=>{
        if (p1value>0 && p2value>0 && p1quantity>0 && p2quantity>0){
            let valorP1 = p1value/p1quantity
            let valorP2 = p2value/p2quantity
            let difP1maior = ((valorP1-valorP2)/valorP2)*100
            let difP2maior = ((valorP2-valorP1)/valorP1)*100
            setPercentP1(difP1maior.toFixed(2))
            setpercentP2(difP2maior.toFixed(2))
           console.log('p1:', valorP1*1000)
           console.log('p2: ', valorP2*1000)
            if(valorP1>valorP2){
                setresultP1(`Este produto é ${percentP1}% mais caro`)
                setresultP2(`Este produto é ${percentP2}% mais barato`)
                setResultP1eqP2('')
            } else if(valorP1 === valorP2) {
                setresultP1('')
                setresultP2('')
                setResultP1eqP2('Estes produtos tem o mesmo valor')
            } else {
                setresultP1(`Este produto é ${percentP1}% mais barato`)
                setresultP2(`Este produto é ${percentP2}% mais caro`)
                setResultP1eqP2('')
            }


        }
    })
    return (
        <div style={{display:'block', flex:1, alignItems:'center', justifyContent:'center', maxWidth:'1660px', border:'1px solid white', boxShadow:'0 5px 20px rgba(253, 19, 58, 0.25)', borderColor:'#2c3e40', borderRadius:'8px', margin:'15px', padding:'5px'}}>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                <div>
                    <div style={{display:'block', flex:1, alignItems:'center', justifyContent:'center', maxWidth:'660px', border:'1px solid white', boxShadow:'0 5px 20px rgba(253, 19, 58, 0.25)', borderColor:'#2c3e40', borderTopLeftRadius:'8px', borderTopRightRadius:'8px', margin:'15px', marginBottom:'0', padding:'5px'}}>
                        <div>
                            <h5>Produto 1</h5>
                            <input type="number" className="form-control" name="quantity" placeholder="Quantidade" style={{textAlign:'center'}} onChange={function(p1qtd){
                                p1qtd.preventDefault();
                                setP1quantity(p1qtd.target.value)
                            }}/>
                            <input type="currency" className="form-control" name="value" placeholder="R$" style={{textAlign:'center'}} onChange={function(p1vlr){
                                p1vlr.preventDefault();
                                setP1value(p1vlr.target.value)
                        }}/>
                        </div>
                    </div>
                    <div style={{display:'block', flex:1, alignItems:'center', justifyContent:'center', minHeight:'30px', maxWidth:'660px', border:'1px solid white', boxShadow:'0 5px 20px rgba(253, 19, 58, 0.25)', borderColor:'#2c3e40', borderBottomLeftRadius:'8px', borderBottomRightRadius:'8px', margin:'15px',marginTop:'0', padding:'5px'}}>
                    {resultP1}
                    </div>
                </div>
                <div>
                    <div style={{display:'block', flex:1, alignItems:'center', justifyContent:'center', maxWidth:'660px', border:'1px solid white', boxShadow:'0 5px 20px rgba(253, 19, 58, 0.25)', borderColor:'#2c3e40', borderTopLeftRadius:'8px', borderTopRightRadius:'8px', margin:'15px', marginBottom:'0', padding:'5px'}}>
                        <div>
                            <h5>Produto 2</h5>
                            <input type="number" className="form-control" name="quantity" placeholder="Quantidade" style={{textAlign:'center'}} onChange={function(p2qtd){
                                p2qtd.preventDefault();
                                setP2quantity(p2qtd.target.value)
                        }}/>
                            <input type="currency" className="form-control" name="value" placeholder="R$" style={{textAlign:'center'}} onChange={function(p2vlr){
                                p2vlr.preventDefault();
                                setP2value(p2vlr.target.value)
                        }}/>
                        </div>
                    </div>
                    <div style={{display:'block', flex:1, alignItems:'center', justifyContent:'center', minHeight:'30px', maxWidth:'660px', border:'1px solid white', boxShadow:'0 5px 20px rgba(253, 19, 58, 0.25)', borderColor:'#2c3e40', borderBottomLeftRadius:'8px', borderBottomRightRadius:'8px', margin:'15px',marginTop:'0', padding:'5px'}}>
                    {resultP2}
                    </div>
                </div>

            </div>
            <h6 style={{textAlign:'center'}}>{resultP1eqP2}</h6>
            
        </div>
    )
}