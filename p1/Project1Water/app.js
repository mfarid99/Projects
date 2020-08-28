



    const entsub = (myform) => {
    if (window.event && window.event.keyCode == 13)
    myform.submit();
    else
    return true;}

    let width = 720;
    let animationSpeed = 1000;
    let pause = 3000;
    let currentSlide = 1;

    
    let $slider = $('#slider');
    let $slideContainer = $('.slides', $slider);
    let $slides = $('.slide', $slider);

    let interval;

    const startSlider=() => {
        interval = setInterval(() => {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, () => {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                    
                }
            });
        }, pause);
    }
     pauseSlider =() => {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();

    

$('form').on('submit', (event)=>{

    event.preventDefault();
    $('.guardiangen').fadeOut(2000);
    $('.leftDiv').css({"background-image": "linear-gradient( rgb(233, 229, 229), rgb(233, 227, 227))", "box-shadow": "5px 5px grey"}).fadeIn(4000);
    
    const news = $('input[type="text"]').val();

    $.ajax({
    url: `https://content.guardianapis.com/search?q=${news}&api-key=ae6868eb-a85d-4057-90cb-e2bfa99f07a9`,

    
    }).then(
        (data)=>{
        console.log(data)

        for (let result of data.response.results) {

            const $news = $(`<p> Article: ${result.webTitle} </p>`)
            const $url= $(`<p>`)
            $url.html (`<a href = ${result.webUrl}> ${result.webUrl}  </a>`);
            
            $news.addClass('news')
            $url.addClass('url')
            

            $('.leftDiv').append($news)
            $news.append($url)

            $news.mouseenter(function() {
                $news.css({'font-size': '1.25em', 'color': 'red'});
                $('.url').css({'font-size': '1em', 'color': 'green'})
                 
            }) 
            $news.mouseleave(function() {
                $news.css({'font-size': '', 'color': ''})
                $('.url').css({'font-size': '1em', 'color': ''})

            })
           
        
        }
        
    },
    
        
    ()=>{ 
        console.log('bad request');
    }
    
    );
    
})



        
        