const Api_code = '1217995528:AAHxgI8Y8EaT7336zwOJuH49RBkVm-2vKgE'
const Chat_id = '602671413'

let getData = function(key){
    fetch(`https://api.telegram.org/bot${key}/getUpdates`)
    .then(data =>data.json())
    .then(data=>console.log(data))
}

getData(Api_code)
let txtMsg = 'Hello, Johny! '
const options = {
    method: 'POST',
    chat_id: '@KateKhTest_bot',
    text: 'test',
    headers:{
        'content-type':'application/json'
    }
}
const postData = function(data, key, id){
fetch(`https://api.telegram.org/bot${key}/sendMessage?chat_id=${id}&text=${data}
`,options)
}

// postData(txtMsg, Api_code, Chat_id)