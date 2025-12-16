const btn = document.getElementById('btn');
const box = document.getElementById('box');

btn.style.backgroundColor = "red"
btn.style.color = "white"
btn.addEventListener('click', () => {

    console.log('Thi is box elemnt value', box.style.width);

    if (box.style.width === "120px") {
        box.style.cssText = 'display:none'
        box.style.width = "122px"
        //console.log('after change',box.style.display);

    } else {
        box.style.display = "block"
        btn.innerText = "Hide"
        btn.style.backgroundColor = "red"
        btn.style.color = "white"
        box.style.width = "120px"
    }


})










const img = document.getElementById("img");
const btn_1 = document.getElementById("btn");

btn_1.addEventListener('click', () => {
    console.log('chnage');

    img.src = "../HTML/Senior/img/logo/tom_nta_KV_PC2x._CB803443920_.jpg"
    img.style.width = "900px"
})