
setTimeout( function(){
  document.getElementById('sneaky').style.display = 'block';}, 5000 );

var els = document.querySelectorAll('#hexagon'),
	words = ['am', 'at', 'can', 'go', 'is', 'me', 'my', 'see', 'the', 'to', 'up', 'we', 'and', 'do', 'got', 'had', 'has', 'he', 'his', 'in', 'it', 'like', 'look', 'on', 'are', 'come', 'did', 'for', 'get', 'have', 'here', 'him', 'of', 'play', 'said', 'she', 'will', 'you', 'all', 'down', 'saw', 'that', 'they', 'this', 'was', 'went', 'when', 'where', 'with', 'what'],
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
