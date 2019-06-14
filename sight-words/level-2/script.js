
setTimeout( function(){
  document.getElementById('sneaky').style.display = 'block';}, 3000 );

var els = document.querySelectorAll('#hexagon'),
	words = ['day', 'get', 'give', 'her', 'new', 'out', 'over', 'she', 'then', 'want', 'were', 'your', 'nice', 'from', 'after', 'good', 'little', 'made', 'make',
  'off', 'old', 'rain', 'ride', 'some', 'tell', 'them', 'because', 'favorite', 'didn\'t', 'house', 'how', 'night', 'people', 'pretty', 'us', 'very', 'who', 'why', 'friend', 'eat',
  'again', 'could', 'does', 'every', 'laugh', 'many', 'walk', 'don\'t', 'neat', 'boat'],
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
