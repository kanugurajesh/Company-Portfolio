import "../css/Footer.css"

function App() {
    return (
        <section id="footer">
            <div>
                <h3 style={{marginBottom:'3rem'}}>Navigation</h3>
                <h3>Home</h3>
                <h3>Contact</h3>
            </div>
            <div>
                <h3>Resources</h3>
                <h3>Docs</h3>
            </div>
            <div>
                <h3>Social</h3>
                <ul style={{listStyle:'none'}}>
                    <li><a href="https://twitter.com/exploringengin1"><img src="/twitter.svg" alt="" /></a></li>
                    <li><a href="https://github.com/rajesh604"><img src="/github.svg" alt="" /></a></li>
                </ul>
            </div>
        </section> 
    )
}

export default App;