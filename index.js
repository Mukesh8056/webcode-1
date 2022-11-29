

 let api_key="AIzaSyACUHRbn1qKm1DYO-N1WwUGghWwR_Hp6Xg";
 let video_http="https://youtube.googleapis.com/youtube/v3/videos?"
 let channel_http="https://www.googleapis.com/youtube/v3/channels?"




    fetch(video_http + new URLSearchParams({
        key: api_key,
        part:'snippet',
        chart:'mostPopular',
        maxResults: 50,
        regionCode:'IN'
    })) .then(data=>data.json()).then((data2)=>{
            console.log(data2)
            data2.items.forEach(element => {
                channelId(element)
             console.log(element)
            }
            )
            })
            .catch(err =>{console.log(err)});
        let channelId=(element1)=>{
            fetch(channel_http + new URLSearchParams({
                key:api_key,
                part:'snippet',
                id:element1.snippet.channelId
            }
            ))
            .then(data=>data.json()).then(data2=>{
                console.log(data2)
                data2.create_thumbnails =data2.items[0].snippet.thumbnails.default .url;
                console.log(data2.create_thumbnails)
                console.log(data2.items[0].snippet.thumbnails.default .url)
                make_video(data2)
                console.log(data2)


            })

            }
          let video_page=document.getElementById("video_page")
            let make_video=(data)=>{
                // console.log(data)
                console.log(data)
                video_page.innerHTML+=` <div class="card" style="width: 18rem br-1;" onclick="location.href='https://www.youtube.com/results?search_query=${data.items[0].id}'">
                <img src="${data.items[0].snippet.thumbnails.high.url  }" class="card-img-top"  >
                <div class="card-body">
                  <img src="${data.create_thumbnails}" class="thumbnails">
                  <h5 class="card-des">${data.items[0].snippet.description}</h5>
                  <p class="card-title">${data.items[0].snippet.localized.title}</p>
                  
                </div>
              </div> `

            }
           
        
        //search
        
        let searchIt=document.getElementById("search")
        let button=document.getElementById("button")    
        let y_search=`https://www.youtube.com/results?search_query=`;
        
          button.addEventListener("click",()=>{
        if(searchIt.value.length){
            location.href= y_search+searchIt.value;
        }

    })

        