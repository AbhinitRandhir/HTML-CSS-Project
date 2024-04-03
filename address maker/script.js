function main()
{
	var a = document.wap.name.value;
	var b = document.wap.mobile.value;
	var c = document.wap.email.value;
	var d = document.wap.spouse.value;
	var e = document.wap.address.value;
	var f = document.wap.al_mobile.value;
	document.getElementById("header_left").innerHTML=a;
	document.getElementById("header_right_one").innerHTML=b;
	document.getElementById("header_right_two").innerHTML=f;
	document.getElementById("spouse").innerHTML=c;
	document.getElementById("email").innerHTML=d;
	document.getElementById("address").innerHTML=e;

	return false;
}

function formating()
{
	var a = document.getElementById("spouse");
	var b = document.getElementById("email");
	var c = document.getElementById("address");
	a.style.fontWeight="bold";
	b.style.fontWeight="bold";
	c.style.fontWeight="bold";
}

function font_style()
{
	var a = document.getElementById("spouse");
	var b = document.getElementById("email");
	var c = document.getElementById("address");
	a.style.fontStyle="italic";
	b.style.fontStyle="italic";
	c.style.fontStyle="italic";
}