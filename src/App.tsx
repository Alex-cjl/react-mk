import styles from './app.module.css';
import http from 'http'
import React from 'react';

const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain')
  res.end(App)
})
const logo = './logo.svg'

server.listen(port,hostname, ()=>{
  console.log(`listening on http://${hostname}:${port}`)
})
function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App-header}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
