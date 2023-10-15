
let levelele=document.getElementById("level");

let level=1;
while(true)
	{
	  if(level.tagName==="HTML")
		{
			break;
		}
		levelele=levelele.parentNode;
		level++;
	}

alert(`The level of the element is:${level}`);