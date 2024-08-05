
const materials = window.data;
console.log(materials)

materials.forEach(el => {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    div.setAttribute('id', el.id)
    h1.textContent = el.title;
    div.appendChild(h1)
    document.querySelector("body").appendChild(div);

    let mat = el['materials'];
    let lsMat = document.createElement('ol');

    mat.forEach(m => {
        let li = document.createElement('li');
        let h2 = document.createElement('h2');
        h2.textContent = m.title;
        li.appendChild(h2);
    
        h2.insertAdjacentHTML('afterend', m.description);
    
        lsMat.appendChild(li);

        div.appendChild(lsMat)

    })

})
// const verrerie = materials[1]['materials'];
// const verrerieContainer = document.getElementById(materials[1]['id']);

// const lsVerrerieMaterials = document.createElement('ol');
// verrerieContainer.appendChild(lsVerrerieMaterials);

// verrerie.forEach(mat => {
//     let li = document.createElement('li');
//     let h2 = document.createElement('h2');
//     h2.textContent = mat.title;
//     li.appendChild(h2);

//     h2.insertAdjacentHTML('afterend', mat.description);

//     lsVerrerieMaterials.appendChild(li);
// })