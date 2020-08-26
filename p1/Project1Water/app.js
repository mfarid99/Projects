

//ae6868eb-a85d-4057-90cb-e2bfa99f07a9
//https://content.guardianapis.com/?api-key=ae6868eb-a85d-4057-90cb-e2bfa99f07a9

$('form').on('submit', (event)=>{

    event.preventDefault();

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
            $url.html (`<a href = {result.webUrl}> ${result.webUrl} </a>`)
            $news.addClass('news')
            $url.addClass('url')
            

            $('.leftDiv').append($news)
            $news.append($url)
           

        
        }
        // const url = `${result.webUrl}.css('background-color', 'red')
        
    },

        
    ()=>{ 
        console.log('bad request');
    }
    );
})



        
        