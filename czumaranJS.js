let button = document.querySelector('button');
button.addEventListener('click', function(){
// TODO use props to pull region-specific images
    url = 'https://www.universalorlando.com/hhn/en/us/haunted-houses';
    window.open(url, '_blank');
})

let hover = document.querySelectorAll('ul img');

hover[0].addEventListener('mouseover', function(){
    hover[0].className = 'enlarge';
    })

hover[1].addEventListener('mouseover', function(){
    hover[1].className = 'enlarge';
    })

hover[2].addEventListener('mouseover', function(){
    hover[2].className = 'enlarge';
    })

hover[3].addEventListener('mouseover', function(){
    hover[3].className = 'enlarge';
    })

hover[4].addEventListener('mouseover', function(){
    hover[4].className = 'enlarge';
    })

hover[0].addEventListener('mouseout', function(){
    hover[0].removeAttribute('class');
    })

hover[1].addEventListener('mouseout', function(){
    hover[1].removeAttribute('class');
    })

hover[2].addEventListener('mouseout', function(){
    hover[2].removeAttribute('class');
    })

hover[3].addEventListener('mouseout', function(){
    hover[3].removeAttribute('class');
    })

hover[4].addEventListener('mouseout', function(){
    hover[4].removeAttribute('class');
    })
