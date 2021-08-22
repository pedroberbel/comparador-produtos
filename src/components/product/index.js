export function Product(){
    let percentP1 = 50
    let percentP2 = 50
    let resultP1 = 'caro'
    let resultP2 = 'barato'
        return (
        <div>
            <div style={{display:'block', flex:1, alignItems:'center', justifyContent:'center', maxWidth:'660px', border:'1px solid white', boxShadow:'0 5px 20px rgba(253, 19, 58, 0.25)', borderColor:'#2c3e40', borderTopLeftRadius:'8px', borderTopRightRadius:'8px', margin:'15px', marginBottom:'0', padding:'5px'}}>
                <div>
                    <h5>Produto</h5>
                    <input type="number" className="form-control" name="quantity" placeholder="Quantidade"/>
                    <input type="currency" className="form-control" name="value" placeholder="R$"/>
                </div>
            </div>
            <div style={{display:'block', flex:1, alignItems:'center', justifyContent:'center', maxWidth:'660px', border:'1px solid white', boxShadow:'0 5px 20px rgba(253, 19, 58, 0.25)', borderColor:'#2c3e40', borderBottomLeftRadius:'8px', borderBottomRightRadius:'8px', margin:'15px',marginTop:'0', padding:'5px'}}>
            Este produto é {percentP1}% mais {resultP1}.
            </div>
        </div>
    )
}