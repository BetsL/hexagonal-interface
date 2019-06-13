
setTimeout( function(){
  document.getElementById('sneaky').style.display = 'block';}, 2000 );

var els = document.querySelectorAll('#hexagon'),
	words = ['small', 'set', 'put', 'end', 'does', 'another', 'well', 'large',
  'must', 'big', 'even', 'such', 'because', 'turn', 'here', 'why', 'asked',
  'went', 'men', 'read', 'need', 'land', 'different', 'home', 'us', 'move',
  'try', 'kind', 'hand', 'picture', 'again', 'change', 'off', 'play', 'spell',
  'air', 'away', 'animals', 'house', 'point', 'page', 'letters', 'mother',
  'answer', 'continent', 'found', 'study', 'still', 'learn', 'should', 'America', 'world'],
	ms = 1500,
	interval;

function start(els, words, ms){
	var i = 0;
	interval = setInterval(function(){
		[].forEach.call(els, function(el){
			el.innerHTML = words[i];
		})
		i += 1;
		i === words.length ? i = 0 : false;
	}, ms);
}

function stop(){
	clearInterval(interval);
}

var x = document.getElementById('start');
var y = document.getElementById('stop');

x.addEventListener('click', function(){
	start(els, words, ms);
  x.classList.add('green-glow');
  setTimeout(() => x.classList.remove('green-glow'), 3000);
});

y.addEventListener('click', function(){
	stop();
  y.classList.add('red-glow');
  setTimeout(() => y.classList.remove('red-glow'), 3000);
});
