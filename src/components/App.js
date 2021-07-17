import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'


import pastebin from './PasteBin';
import { Container, Row, Col } from 'reactstrap';



function App() {
    const [html, setHtml] = useLocalStorage('html', '<h1>Submission by Piyush Bajaj<h1><br><br></h1></h1><h1>I am a headline made with HTML</h1> <p > And I am a simple text paragraph.The color of this text is styled with CSS.< /p>')
    const [css, setCss] = useLocalStorage('css', 'body { 	font-family: sans-serif; 	text-align: center; 	padding: 3rem; 	font-size: 1.125rem; 	line-height: 1.5; 	transition: all 725ms ease-in-out; }  h1 { 	font-size: 2rem; 	font-weight: bolder; 	margin-bottom: 1rem; }  p { 	margin-bottom: 1rem; 	color: tomato; }  button { 	cursor: pointer; 	appearance: none; 	border-radius: 4px; 	font-size: 1.25rem; 	padding: 0.75rem 1rem; 	border: 1px solid navy; 	background-color: dodgerblue; 	color: white; }')
    const [js, setJs] = useLocalStorage('js', 'document.body.style.backgroundColor = "orange";')

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