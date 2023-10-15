document.addEventListener("DOMContentLoaded",()=>{
	let levelEle=document.getElementById("level");

let level=1;
while(true)
	{
	  if(levelEle.tagName==="HTML")
		{
			break;
		}
		levelEle=levelEle.parentNode;
		level++;
	}

alert(`The level of the element is:${level}`);
});
