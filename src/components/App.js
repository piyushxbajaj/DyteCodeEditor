import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'


import pastebin from './PasteBin';
import { Container, Row, Col } from 'reactstrap';



function App() {
    const [html, setHtml] = useLocalStorage('html', '')
    const [css, setCss] = useLocalStorage('css', '')
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState('')

    // const url = client.createPaste({
    //     code: "const something = 'Hello World!'",
    //     expireDate: "N",
    //     format: "javascript",
    //     name: "something.js",
    //     publicity: 0,
    // });

    // console.log(url);

    // const PasteClient = require("pastebin-api").default;



    useEffect(() => {
            const timeout = setTimeout(() => {
                setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
            }, 300)

            return () => clearTimeout(timeout)
        }, [html, css, js])
        // handlePaste => {
        //     pastebin(html);
        //     pastebin(css);
        //     pastebin(js);
        // }

    return ( <
        >
        <
        div className = "pane top-pane" > < Container > <
        Row className = "button"
        xs = "3"
        xl = "3" > < Col > <
        button type = "button"
        className = "button"
        onClick = {
            () => pastebin(html, 'html5')
        } > Save HTML

        <
        /
        button > < /Col><Col> <
        button type = "button"
        className = "button"
        onClick = {
            () => pastebin(css, 'css')
        } > Save CSS

        <
        /
        button > < /Col ><Col> <
        button type = "button"
        className = "button"
        onClick = {
            () => pastebin(js, 'javascript')
        } > Save JS

        <
        /
        button > < /Col ><div className="editor-container-1" id="root">DYTE</div > < /Row > < /Container > <
        Editor language = "xml"
        displayName = "INDEX.HTML"
        value = { html }
        onChange = { setHtml }
        /> <
        Editor language = "css"
        displayName = "INDEX.CSS"
        value = { css }
        onChange = { setCss }
        /> <
        Editor language = "javascript"
        displayName = "INDEX.JS"
        value = { js }
        onChange = { setJs }
        /> < /
        div > <
        div className = "pane" >
        <
        iframe srcDoc = { srcDoc }
        title = "output"
        sandbox = "allow-scripts"
        frameBorder = "0"
        width = "100%"
        height = "100%" /
        >
        <
        /div> < / >
    )
}

export default App;