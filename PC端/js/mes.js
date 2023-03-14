const container = document.querySelector('#container');
const signInButton = document.querySelector('#signIn');
const signUpButton = document.querySelector('#signUp');

signUpButton.addEventListener('click',() => container.classList.add('right-panel-active'))
signInButton.addEventListener('click',() => container.classList.remove('right-panel-active'))

let xhr=new XMLHttpRequest();
xhr.open('get','http://43.138.89.150:8889/my/userinfo');
xhr.setRequestHeader('Authorization',localStorage.getItem('userToken'));
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
xhr.send();
xhr.onreadystatechange=function() {
	if(xhr.readyState==4 && xhr.status==200) {
		let a=JSON.parse(xhr.response);
		console.log(a.data);
		if(a.message === '获取用户信息失败') {
			alert("未登录");
			window.location.assign('./page.html');
		}else {
			console.log(a);
			let ps=document.querySelector('#mes').querySelectorAll('p');
			ps[0].innerHTML=`姓名：${a.data.name}`;
			ps[1].innerHTML=`QQ号：${a.data.qq}`;
			ps[2].innerHTML=`手机号：${a.data.tel}`;
			ps[3].innerHTML=`专业班级：${a.data.banji}`;
			ps[4].innerHTML=`方向：${a.data.dir}`;
			let ps2=document.querySelector('#reg').querySelector('p');
			
			if(a.data.status === '1') {
				ps2.innerHTML = `一面通过`
			} else if(a.data.status === '2') {
				ps2.innerHTML = `一面未通过`
			} else if(a.data.status === '3') {
				ps2.innerHTML = `二面通过`
			} else if(a.data.status === '4') {
				ps2.innerHTML = `二面未通过`
			} else if(a.data.status === '5') {
				ps2.innerHTML = `三面通过`
			} else if(a.data.status === '0') {
				ps2.innerHTML = `报名成功`
			}
		}
	}
}


// 退出登录
let token=localStorage.getItem('userToken');
// console.log(token);
let btn=document.querySelector('.login');
btn.addEventListener('click',()=>{
    window.location.assign('./index.html');
	localStorage.clear('userToken');
})
if(!token) {
    alert('未登录');
    window.location.assign('./page.html');
}

// /* let xhr=new XMLHttpRequest();
// xhr.open('post','http://43.138.89.150:8889/api/message');
// xhr.setRequestHeader('Token',localStorage.getItem('userToken'));
// xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
// xhr.send();
// xhr.onreadystatechange=function() {
//     if(xhr.readyState==4 && xhr.status==200) {
//         let a=JSON.parse(xhr.response);
//         if(a.status!==0) {
//             alert("未登录");
//             window.location.assign('./page.html');
//         }
//     }
// }
// let btn=document.querySelector('button');
// btn.addEventListener('click',()=>{
//     localStorage.clear('userToken');
//     window.location.assign('./login.html')
// })
//  */