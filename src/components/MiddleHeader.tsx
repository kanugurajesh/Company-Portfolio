import "../css/MiddleHeader.css";

function App() {
    return (
        <section id="section1" style={{color:'white'}}>
            <div id="section1-top">
                <h1>The Cosmos <span style={{color:'#01b4db'}}>Data</span> & <span style={{color:'#ff56a8'}}>Development</span> Platform</h1>
                <h5>Infrastructure to BUILD,MONITOR and GROW your project in Cosmos</h5>
            </div>
            <div id="section1-bottom">
                <p>Trusted by the top projects in Cosmos</p>
                <div>
                    <img src="/osmosis.png" alt="" />
                    <img src="/evmos.png" alt="" />
                    <img src="/stride.png" alt="" />
                    <img src="/quasar.png" alt="" />
                    <img src="/umee.png" alt="" />
                    <img src="/wynd.png" alt="" />
                </div>
            </div>
        </section>
    )
  }
  
export default App
  