import "../css/Footer.css"

function App() {
    return (
        <section id="footer">
            <div>
                <h3 style={{marginBottom:'3rem'}}>Navigation</h3>
                <h3 style={{color:'#b2d1f5'}}>Home</h3>
                <h3 style={{color:'#b2d1f5'}}>Contact</h3>
            </div>
            <div>
                <h3>Resources</h3>
                <h3 style={{color:'#b2d1f5'}}>Docs</h3>
            </div>
            <div>
                <h3>Social</h3>
                <ul style={{listStyle:'none'}}>
                    <li style={{color:'#b2d1f5'}}><a href="https://twitter.com/exploringengin1"><img src="/twitter.svg" alt="" /></a></li>
                    <li style={{color:'#b2d1f5'}}><a href="https://github.com/rajesh604"><img src="/github.svg" alt="" /></a></li>
                </ul>
            </div>
            <footer>
                <div>
                    <img src="/vect.svg" alt="" />
                    <h3 style={{fontWeight:'bold',letterSpacing:'0.1rem',lineHeight:'1.1',marginTop:'5px'}}>Gmate</h3>
                </div>
                <h3 style={{color:'#b2d1f5',marginTop:'10px'}}>The Cosmos Data & Development Platform</h3>
            </footer>
        </section> 
    )
}

export default App;