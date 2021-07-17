import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/3024-night.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'


import { Controlled as ControlledEditor } from 'react-codemirror2'


export default function Editor(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props
    // const [open, setOpen] = useState(true)

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return ( <
        div className = { `editor-container` } >
        <
        div className = "editor-title" > { displayName } <
        /div> <
        ControlledEditor onBeforeChange = { handleChange }
        value = { value }
        className = "code-mirror-wrapper"
        options = {
            {
                lineWrapping: true,
                lint: true,
                mode: language,
                theme: '3024-night',
                lineNumbers: true
            }
        }
        /> < /
        div >
    )
}