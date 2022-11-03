name = prompt('Enter your name: ', 'Player');
document.getElementById('name').textContent = name;

const button = document.querySelector('#button');
button.addEventListener('click',function()
{
	if(document.getElementById('button').textContent != "Reload")
	{
		var numb1 = Math.floor(Math.random() * 10);
		document.getElementById('pNumd1').textContent = numb1;
		var numb2 = Math.floor(Math.random() * 10);
		document.getElementById('pNumb2').textContent = numb2;

		var score1 = Number(document.getElementById('pScore1').textContent);
		var score2 = Number(document.getElementById('pScore2').textContent);

		if(numb1 > numb2)
			score1++;
		if(numb1 < numb2)
			score2++;
		
		document.getElementById('pScore1').textContent = score1;
		document.getElementById('pScore2').textContent = score2;

		if(score1 >= 3)
		{
			document.getElementById('pAnswer').textContent = 'Winner: ' + name;
			document.getElementById('button').textContent = "Reload";
		}
		else if(score2 >= 3)
		{
			document.getElementById('pAnswer').textContent = 'Winner: Computer';
			document.getElementById('button').textContent = "Reload";
		}
	}
	else
	{
		document.getElementById('button').textContent = "Generate";
		document.getElementById('pScore1').textContent = 0;
		document.getElementById('pScore2').textContent = 0;
		document.getElementById('pNumd1').textContent = 0;
		document.getElementById('pNumb2').textContent = 0;
		document.getElementById('pAnswer').textContent = 'Winner: (In round)';
	}
});