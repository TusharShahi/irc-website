window.onscroll = changescroll;


function changescroll()
{	console.log('working');
	if(document.body.scrollTop>200||document.documentElement.scrollTop>850)
		{document.getElementById("menubar").style.display="block";
	console.log("hey");
}
	else
		{document.getElementById("menubar").style.display='none';


console.log("fey");
document.getElementById("logoheading").style.display="display";
}			
}