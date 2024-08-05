/* Load materials on the screen */
function loadingMat() {
    
    let content = create('div');
    content.setAttribute('id', 'contentMat')
    lessonSelected.appendChild(content);

    for (let i=1; i<materials['materials'][part[subTitle.textContent]].length; i++) {
        let mat = materials['materials'][part[subTitle.textContent]][i]

        let div = create("div");
        div.setAttribute('id', mat.id);
        div.setAttribute('class', 'equipment');
        content.appendChild(div)
        div.insertAdjacentHTML('beforebegin', '<hr>');
        
        let titleMat = create('h2');
        titleMat.textContent = mat.title;
        div.appendChild(titleMat);

        let contentMat = create('section');
        div.appendChild(contentMat);

        let containerImgMat = create("div");
        containerImgMat.setAttribute('id', mat.id+'Img');
        containerImgMat.setAttribute('class', 'imgContainer');
        let imgMat = create('img');
        imgMat.setAttribute('src', mat.picture);
        imgMat.setAttribute('alt', mat.alt);
        containerImgMat.appendChild(imgMat)
        contentMat.appendChild(containerImgMat);

        contentMat.insertAdjacentHTML('beforeend', mat.description);
    }
}

const lessonSelected = getId(materials.id);
const header = create('header');
lessonSelected.appendChild(header)

const title = create('h1');
title.textContent = materials.title;
header.appendChild(title);
header.insertAdjacentHTML('beforeend', '<hr width=100%>');



/* ===== Sub Title ===== */
let subPart = Object.keys(materials.materials);
let part = {}
for (let i = 0; i< subPart.length; i++) {
    part[materials['materials'][subPart[i]][0]] = subPart[i];
}

let subTitle = create('h2');
subTitle.textContent = materials['materials'][subPart[0]][0];
if (materials['materials'][subPart[0]][0] !== "") header.appendChild(subTitle);

/* ===== Nav Bar pour changer de sous parties ===== */
let nav = create('nav');
header.appendChild(nav);

/* ===== Adding Button on the navbar */
let btns = [];
let btnOneSelected = (subTitle.textContent == materials['materials'][subPart[0]][0]);
for (let i = 0; i<subPart.length; i++) {
    let btn = create('button');
    if (materials['materials'][subPart[0]][0] === "") {
        btn.style.borderRadius = "15px 5px 15px 5px"
    }
    btn.textContent = subPart[i]

    /* ==== Buttons Function ===== */
    btn.addEventListener('click', ev => {
        select(".btnNavMatActive").removeAttribute('class')
        btns[i].setAttribute('class', 'btnNavMatActive')
        subTitle.textContent = materials['materials'][subPart[i]][0];
        
        getId('contentMat').remove();
        loadingMat();
        btnOneSelected = (subTitle.textContent == materials['materials'][subPart[0]][0])
    })
    
    btns.push(btn);
    nav.appendChild(btn);
}

/* ===== Default Button ===== */
btns[0].setAttribute('class' ,'btnNavMatActive');

/* ===== Set content, materials */
loadingMat();



// =================================================== //

// function selection(id, isImg=false) {
//     if (isImg) {
//         return document.getElementById(id).children.item(0);
//     } else {
//         return document.getElementById(id).children.item(1).children.item(1);
//     }
// }


// function blouseSelect() {
//     if (isBlouse) {
//         blouse.setAttribute("style", "");
//         blouseTxt.setAttribute("style", "display:none;");
//         isBlouse = false;
//     } else {
//         blouse.setAttribute("style", activeEffect);
//         blouseTxt.setAttribute("style", "display:block;");
//         isBlouse = true;
//     }
// }

// function glassesSelect() {
//     if (isGlasses) {
//         glasses.setAttribute("style", "");
//         glassesTxt.setAttribute("style", "display:none;");
//         isGlasses = false;
//     } else {
//         glasses.setAttribute("style", activeEffect);
//         glassesTxt.setAttribute("style", "display:block;");
//         isGlasses = true;
//     }
// }

// function glovesSelect() {
//     if (isGloves) {
//         gloves.setAttribute("style", "");
//         glovesTxt.setAttribute("style", "display:none;");
//         isGloves = false;
//     } else {
//         gloves.setAttribute("style", activeEffect);
//         glovesTxt.setAttribute("style", "display:block;");
//         isGloves = true;
//     }
// }

// const blouse = selection("blouseImg", true);
// const blouseTxt = selection("blouse");
// let isBlouse = false;

// const glasses = selection("glassesImg", true)
// const glassesTxt = selection("glasses")
// let isGlasses = false;

// const gloves = selection("glovesImg", true)
// const glovesTxt = selection("gloves")
// let isGloves = false;

// const activeEffect = "box-shadow:0 0 3px 1px black;";


// blouse.addEventListener('click', ev => {
//     blouseSelect();

//     isGlasses = true;
//     isGloves = true;
//     glassesSelect()
//     glovesSelect()
// })

// glasses.addEventListener('click', ev => {
//     glassesSelect();

//     isBlouse = true;
//     isGloves = true;
//     blouseSelect();
//     glovesSelect();
// })

// gloves.addEventListener('click', ev => {
//     glovesSelect();

//     isBlouse = true;
//     isGlasses = true;
//     blouseSelect();
//     glassesSelect();
// })

// // ================ VERRERIE =================================== //


// const verrerie = select("#verrerie");
// const imgContainer = selectAll(verrerie, ".imgContainer");
// const txt = selectAll(verrerie, "p, ul");
// const sections = selectAll(verrerie, "section")


// const tools = {};
// for (let i=0; i<imgContainer.length; i++) {
//     tools[imgContainer[i].id] = [txt[i], "none", sections[i]];
// }

// for (let i =0; i<sections.length; i++) {
//     sections[i].addEventListener('click', ev => {
//         let properties = tools[imgContainer[i].id];
//         if (properties[1] == 'none') {
//             properties[1] = "block";
//             properties[2].style = `
//             grid-template-areas: 
//             "img text";
//             grid-template-columns: 1fr 2fr;
//             gap: 1px;
//             `;
//         } else {
//             properties[1] = "none";
//             properties[2].style = `
//             grid-area: "img";
//             grid-template-columns: 1fr;
//             `;
//         }

//         properties[0].style.display = properties[1];
//     })
// }
