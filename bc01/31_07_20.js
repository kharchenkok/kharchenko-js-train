let refs ={
    body:document.querySelector('body')
}
// let box = document.createElement('div');
// body.append(box)
console.log(refs.body);
for(let i=0; i<=15; i+=1){
    let circle = document.createElement('div')
    refs.body.append(circle)
    circle.classList.add('circle-style')
    setInterval(() => {
        circle.style.backgroundColor = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
        
    }, 400);
}

// circle.style.width = '100px'
// circle.style.height = '100px'
// circle.style.borderRadius = '50%'
// circle.style.backgroundColor = '#ff0000a1'
// circle.style.margin = '0 auto'




