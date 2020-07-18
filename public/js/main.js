
// import app from './app.js';
// const app = require('app.js');
// console.log(app)
window.onload = ()=>{
	
}
// position: relative;
// top: -7px

window.onscroll = ()=>{
	if (window.scrollY == 0){
		document.querySelector('.header').style.height = "70px";
		document.querySelector('.header .list').style.marginTop = "1.6%";
		document.querySelector('.header .brand').style.fontSize = "20px";
		document.querySelector('.header .brand').style.position = "";
		document.querySelector('.header .brand').style.top = "";
	}else {
		document.querySelector('.header').style.height = "40px";
		document.querySelector('.header .list').style.marginTop = ".1%";
		document.querySelector('.header .brand').style.fontSize = "15px";
		document.querySelector('.header .brand').style.position = "relative";
		document.querySelector('.header .brand').style.top = "-7px";
	}
}

document.querySelector(".dropdown").onmouseover = ()=>{
	document.querySelector('.products').style.height = "300px";
	const list = document.querySelector('.products').children;
	window.setTimeout(()=>{
		for (var i = 0; i < list.length; i++) {
			list[i].style.display = "block";
			list[i].style.transition = 'all .5s ease-out'
		}
	},500);
}

// document.querySelector(".dropdown").onmouseleave = ()=>{
// 	document.querySelector('.products').style.height = "0";
// }
document.querySelector(".products").onmouseover = ()=>{
	document.querySelector('.products').style.height = "300px";
}

document.querySelector(".products").onmouseleave = ()=>{
	document.querySelector('.products').style.height = "0";
	const list = document.querySelector('.products').children;

	for (var i = 0; i < list.length; i++) {
		list[i].style.display = "none";
	}

}

document.querySelector(".header .menu-icon").onclick = ()=>{
	const sidebar = document.querySelector('.sidebar');
	console.log(sidebar.style.width)
	if(sidebar.style.width === "0px"){
		sidebar.style.width = "200px";
	}
	else {
		sidebar.style.width = "0";
	}
}
