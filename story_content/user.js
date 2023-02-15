function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64XwD1snuTQ":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwx1tpkjsQ8FLjB060ftGNC_nzrql14tgcxIiGzosAj_C72-oNCO5aGWB5Q9dfGKfx9/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

