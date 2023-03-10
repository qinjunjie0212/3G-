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
    xhr.open('post','http://localhost:3007/api/reguser');
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
    xhr.open('post','http://localhost:3007/api/login');
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