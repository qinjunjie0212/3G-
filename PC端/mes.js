const container = document.querySelector('#container');
const signInButton = document.querySelector('#signIn');
const signUpButton = document.querySelector('#signUp');

signUpButton.addEventListener('click',() => container.classList.add('right-panel-active'))
signInButton.addEventListener('click',() => container.classList.remove('right-panel-active'))

// let xhr=new XMLHttpRequest();
// xhr.open('get','http://localhost:3007/api/userinfo');
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


// 退出登录
// let token=localStorage.getItem('userToken');
// console.log(token);
// let btn=document.querySelector('.login');
// btn.addEventListener('click',()=>{
//     localStorage.clear('userToken');
//     window.location.assign('./page.html');
// })
// if(!token) {
//     alert('未登录');
//     window.location.assign('./login.html');
// }

let ps=document.querySelector('#mes').querySelectorAll('p');
let message = JSON.parse(localStorage.getItem('message'));
ps[0].innerHTML=`姓名：${message.username}`;
ps[1].innerHTML=`QQ号：${message.qq}`;
ps[2].innerHTML=`手机号：${message.tel}`;
ps[3].innerHTML=`专业班级：${message.classValue}`;
ps[4].innerHTML=`方向：${message.dir}`;
let ps2=document.querySelector('#reg').querySelector('p');
ps2.innerHTML=`${message.status}`;
if(message.status === '1') {
	ps2.innerHTML = `一面通过`
} else if(message.status === '2') {
	ps2.innerHTML = `一面未通过`
} else if(message.status === '3') {
	ps2.innerHTML = `二面通过`
} else if(message.status === '4') {
	ps2.innerHTML = `二面未通过`
} else if(message.status === '5') {
	ps2.innerHTML = `三面通过`
} else if(message.status === '0') {
	ps2.innerHTML = `报名成功`
}

// 字体动画
const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
	"Welcome",
	"to",
	"3G",
	"Xiyou",
	"Mobile"
];

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;
	
	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;
	
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";
	
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
	requestAnimationFrame(animate);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;
	
	cooldown -= dt;
	
	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		
		doMorph();
	} else {
		doCooldown();
	}
}

// Start the animation.

animate();

/* let xhr=new XMLHttpRequest();
xhr.open('post','http://localhost:3007/api/message');
xhr.setRequestHeader('Token',localStorage.getItem('userToken'));
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
xhr.send();
xhr.onreadystatechange=function() {
    if(xhr.readyState==4 && xhr.status==200) {
        let a=JSON.parse(xhr.response);
        if(a.status!==0) {
            alert("未登录");
            window.location.assign('./page.html');
        }
    }
}
let btn=document.querySelector('button');
btn.addEventListener('click',()=>{
    localStorage.clear('userToken');
    window.location.assign('./login.html')
})
 */



