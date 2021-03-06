export function indexEvents(api,onSuccess) {
    // fetch('http://localhost:8000/api/events')
    fetch(api)
        .then(results =>  {
            if(results.ok) {
                return results.json();
            }else{
                console.log('error event index')
            }
        }).then(data =>
        onSuccess(data),
    )
        .catch(error=>console.log('error => '+error));
}

export function indexMedia(api,onSuccess) {
    // fetch('http://localhost:8000/api/events')
    fetch(api)
        .then(results =>  {
            if(results.ok) {
                return results.json();
            }else{
                console.log('error media index')
            }
        }).then(data =>
        onSuccess(data),
    )
        .catch(error=>console.log('error => '+error));
}

export function showUser(api,onSuccess) {
    fetch(api)
        .then(results =>  {
            if(results.ok) {
                return results.json();
            }else{
                console.log('error user index')
            }
        }).then(data =>
        onSuccess(data),
    )
        .catch(error=>console.log('error => '+error));
}
export function mediaIndex(api,onSuccess) {
    fetch(api)
        .then(results =>  {
            if(results.ok) {
                return results.json();
            }else{
                console.log('error media index')
            }
        }).then(data =>
        onSuccess(data),
    )
        .catch(error=>console.log('error => '+error));
}
export function getResults(api,onSuccess) {
    fetch(api)
        .then(results =>  {
            if(results.ok) {
                return results.json();
            }else{
                console.log('error index')
            }
        }).then(data =>
        onSuccess(data),
    )
        .catch(error=>console.log('error => '+error));
}

