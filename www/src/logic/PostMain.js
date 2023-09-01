export function PostMain(queue){
    if (queue.length > 0) {
        let req = queue.pop();

        fetch(req.destination,{
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req.data)})
            .then((resp)=>{
                switch (resp.status){
                    case 200:
                        console.log('Post Success');
                        break;
                    case 404:
                        console.log('Not found!');
                        queue.push(req);
                        setTimeout(()=>{PostMain(queue)}, 15*60*1000);
                        break;
                    default:
                        console.log(resp);
                        queue.push(req);
                        setTimeout(()=>{PostMain(queue)}, 60*1000);
                        break;
                }
            })
    } else {
        console.log('Request queue is empty');
        setTimeout(()=>{PostMain(queue)}, 10*1000);
    }

};