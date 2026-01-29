function step1(){
    return new Promise((resolve,reject)=>{
        resolve('Clicked Image');
    })
}
function step2(clickedImage){
    return new Promise((resolve,reject)=>{
        resolve('Filtered Image');
    })
}
function step3(filteredImage){
    return new Promise((resolve,reject)=>{
        resolve('Captioned Image');
    })
}
function step4(captionedImage){
    return new Promise((resolve,reject)=>{
        resolve('Shared Image');
    })
}

step1()
.then((data)=>{
    step2(data)
    .then((data)=>{
        step3(data)
        .then((data)=>{
            step4(data)
            .then((data)=>{
                console.log(data);
            })
            .catch((error)=>{
                console.log('Something Went Wrong',err);
            })

        })
        .catch((error)=>{
            console.log('Something Went Wrong',err);
        })
    })
    .catch((error)=>{
        console.log('Something Went Wrong',err);
    })
})
.catch((error)=>{
    console.log('Something Went Wrong',err);
})


step1()
.then((data)=>{
    return step2(data);
})
.then((data)=>{
    return step3(data);
})
.then((data)=>{
    return step4(data);
})
.then((data)=>{
    console.log('Image processing complete', data);
})
.catch((err)=>{
    console.log('Something Went Wrong', err);
})


async function doTasks()
{
    try{
        const image = await step1();
        const filtered = await step2(image);
        const captioned = await step3(filtered);
        const posted = await step4(captioned);
    }
    catch{
        console.log('Something Went Wrong')
    }
}

doTasks();
