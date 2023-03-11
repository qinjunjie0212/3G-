const container = document.querySelector('#container');
const signInButton = document.querySelector('#signIn');
const signUpButton = document.querySelector('#signUp');

signUpButton.addEventListener('click',() => container.classList.add('right-panel-active'))
signInButton.addEventListener('click',() => container.classList.remove('right-panel-active'))

// 报名
const reg = document.querySelector('#reg');
reg.addEventListener('submit',function(e) {
    e.preventDefault();
    let username=document.querySelector('#username').value.trim();
    let qq=document.querySelector('#qq').value.trim();
    let tel=document.querySelector('#tel').value.trim();
    let classValue=document.querySelector('#class').value.trim();
    let dir=document.querySelector('.dir').value;
    // let message={
    //     username,qq,tel,classValue,dir,status:'0'
    // };
    // localStorage.setItem('message',JSON.stringify(message));
    const xhr=new XMLHttpRequest();
    xhr.open('post','http://43.138.89.150:5000/api/reguser');
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    xhr.send(`name=${username}&tel=${tel}&qq=${qq}&banji=${classValue}&dir=${dir}`);
    xhr.onreadystatechange=function() {
        if(xhr.readyState===4 && xhr.status===200) {
            console.log(xhr.response)
            let content = JSON.parse(xhr.response)
            alert(content.message)
            if(content.message === '报名成功') {
                window.location.assign('./page.html');
            }
        }
    }
})
//登录
// let token=localStorage.getItem('userToken');
// // if(token) {
// //     window.location.assign('./index.html')
// // }
// let username2=document.querySelector('#username2').value.trim();
// let tel2=document.querySelector('#tel2').value.trim();
// let xhr=new XMLHttpRequest();
// xhr.open('post','http://localhost:3007/api/message');
// xhr.setRequestHeader('Token',localStorage.getItem('userToken'));
// xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
// xhr.send(`name=${username2}&tel=${tel2}`);
// xhr.onreadystatechange=function() {
//     if(xhr.readyState===4 && xhr.status===200) {
//         let a=JSON.parse(xhr.response);
//         console.log(a);
//         if(a.status===0) {
//             alert('已登录');
//             window.location.assign('./message.html');
//         }
//     }
// }
const login=document.querySelector('#login');
login.addEventListener('submit',function(e) {
    e.preventDefault();
    let username2=document.querySelector('#username2').value.trim();
    let tel2=document.querySelector('#tel2').value.trim();
    console.log(username2,tel2);
    const xhr=new XMLHttpRequest();
    xhr.open('post','http://43.138.89.150:5000/api/login');
    xhr.setRequestHeader('Token',localStorage.getItem('userToken'));
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(`name=${username2}&tel=${tel2}`);
    xhr.onreadystatechange=function() {
        if(xhr.readyState===4) {
            if(xhr.status>=200 && xhr.status<300) {
                let a=JSON.parse(xhr.response);
                alert(a.message);
                if(a.message==='登录成功') {
                    window.location.assign('./message.html');
                    // console.log(a.token);
                    const token=a.token;
                    localStorage.setItem("userToken",token);
                    console.log(localStorage.getItem('userToken'));
                }
            }
        }
    }
})