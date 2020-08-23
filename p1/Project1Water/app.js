//old fashioned
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
//     success: (response) => {
//         console.log(response);

//     }
// })
// 
//The modern way which executes in order

// const promise = $.ajax({
//     url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
// });

// promise.then(
//     (data)=>{
//         console.log(data);
//     },
//     ()=>{
//         console.log('bad request');
//     }
// );

//or even better



// const hello = $.ajax('https://newsapi.org/v2/top-headlines?country=us&apiKey=2f4f60fc84de4a6aaae4e07490128f32');

//     console.log(hello)

    const promise = $.ajax({
            url: 'https://data.cityofchicago.org/resource/t62e-8nvc.json'
        });
        
        promise.then(
            (data)=>{
                console.log(data);
            },
            ()=>{
                console.log('bad request');
            }
        );
    

