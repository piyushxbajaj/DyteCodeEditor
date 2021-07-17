import axios from 'axios';
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://pastebin.com/api/api_post.php";
const qs = require('qs');

export default function pastebin(data, ver) {
    const code = qs.stringify({
        'api_dev_key': process.env.REACT_APP_PASTEBIN_API,
        'api_paste_code': data,
        'api_option': 'paste',
        'api_paste_format': ver
    });
    const config = {
        method: 'post',
        url: proxyurl + url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: code
    };
    console.log(config)
    console.log(JSON.stringify(code))
    axios(config)
        .then(function(response) {
            console.log(JSON.stringify(response.data));
            // const element = JSON.stringify(response.data);
            // ReactDOM.render(element, document.getElementById('root'));
        })
        .catch(function(error) {
            console.log(error);
        });
}