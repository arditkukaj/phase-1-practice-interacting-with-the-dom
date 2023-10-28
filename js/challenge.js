const H1 = document.querySelector('#counter'); 


let counter = false,
    timer = function () { 
    return setInterval(function(){
    if(counter == false){
        H1.innerText++
    }
}, 1000)
},
interval = timer(),
minus = document.getElementById("minus"),
plus = document.getElementById("plus"),
heart = document.getElementById("heart"),
pause = document.getElementById("pause"),
commentForm = document.getElementsByTagName("form")[0];


pause.addEventListener('click', function(){
    if(counter == false){
        counter = true, clearInterval(interval), this.innerText = "resume"
    } else {
        counter = false, interval = timer(), this.innerText = "pause"
    }


})
pause.addEventListener('click', function disableButtons(a){
    document.getElementsByTagName("button");
    'pause' !== a.id && (a.disabled = minus)
})


plus.addEventListener('click', function(){
    H1.innerText = parseFloat(H1.innerText) + 1;

})


minus.addEventListener('click', function(){
    H1.innerText = parseFloat(H1.innerText) - 1;

})

let likes = {};

let likeList = document.querySelector('.likes');


heart.addEventListener('click', function(){
    let number = H1.innerText
    if(likes[number] == undefined){
        likes[number] = 1
    } else {
        likes[number]++
    }

    likeList.innerHTML = ""
    for (var key in likes) {
        let number = key
        let numberOfLikes = likes[key]
        let likeItem = document.createElement('li')
        likeItem.innerText = `${number} has been liked ${numberOfLikes}`
        likeList.append(likeItem)
    }
})

let submitComment = document.getElementsByTagName("form")[0];

submitComment.addEventListener('click', function(a){
    a.preventDefault()
    
    let element = this.children[0],
    elementValue = element.value
    element.value = ""
    let commentElement = document.querySelector(".comments")
    let pElement = document.createElement("p");
    pElement.innerText = elementValue,commentElement.append(pElement)
})


