

//ae6868eb-a85d-4057-90cb-e2bfa99f07a9
//https://content.guardianapis.com/?api-key=ae6868eb-a85d-4057-90cb-e2bfa99f07a9

    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                    
                }
            });
        }, pause);
    }
    function pauseSlider() {
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
         
        // $('#newsBrief').html(data.response.results[0].webTitle);

        // $('#newsUrl').html(data.response.results.webUrl);

        // ${result.webUrl}

        for (let result of data.response.results) {

            // 

            const $news = $(`<p>Article: ${result.webTitle} </p>`)
            const $url= $(`<p>`)
            $url.html (`<a href = ${result.webUrl}> ${result.webUrl}  </a>`);
            // $url.html (`<a href={result.webUrl}>${result.webUrl}</a>`)
            $news.addClass('news')
            $url.addClass('url')
            

            $('.leftDiv').append($news)
            $news.append($url)

            // $news.hover(function(event){
            //     $(this).css('background-color', 'yellow'); 
            //     {
            //         $news.hover(function(){
            //     $(this).css('background-color', '')
            //         })
            //     }
                
            // })

            $news.mouseenter(function() {
                $news.css('font-size', '1.25em')
                 
            }) 
            $news.mouseleave(function() {
                $news.css('font-size', '')
                

            })
           

        
        }
        // const url = `${result.webUrl}.css('background-color', 'red')
        
    },
    
        
    ()=>{ 
        console.log('bad request');
    }
    
    );
    
})



        
        