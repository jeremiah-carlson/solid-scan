export const PostMain = async (url, body)=>{
    fetch(url,{
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)})
            .then((resp)=>{
                switch (resp.status){
                    case 200:
                        console.log('Post Success');
                        break;
                    case 404:
                        console.log('Not found!');
                        break;
                    default:
                        console.log(resp);
                        break;
                }
            })
};