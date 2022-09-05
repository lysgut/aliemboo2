function txt() {
    let n = ["Kyros", "Dofla", "Rebecca", "Spetrac", "Tretuo", "Freim", "Disis", "Gremiul", "Hirmo", "Potfre", "Wering", "Derulo", "Dulema", "Wop", "Bug", "Hehhh", "Yustana"];
    let p = ["Asteroide Low", "Gigantolium", "Venus", "Saturno", "Urano", "Jupiter", "Sol", "Rectium", "Buenie", "Frederi", "Fop", "Dolling", "Dfiui", "Kakloide", "Dond", "Qwer", "Diupi"]
    let e = r(r(r(1000)))
    let d = ["Hola, soy un alien que juega al futbol", "Hola buenas, mido 70 kg y busco chikibeibis", "Resurrecion, cristo, dios, amor y piedad", "let inde = [ddd] array.length, uh perdon es que soy programador (buscame)", "Hola soy de river y si pudiera no ser de river juro que no lo elijiria porque mi rivería está hasta en mi sangre", "Una vez jugue a la quiniela y perdi desde entonces mantengo una relacion intima con los jubilados"]
    document.getElementById("anom").innerHTML = n[r(n.length - 1)];
    document.getElementById("aeda").innerHTML = e;
    document.getElementById("ades").innerHTML = d[r(d.length - 1)];
    document.getElementById("apla").innerHTML = p[r(p.length - 1)];
    document.getElementById("nom").innerHTML = "Nombre: "
    document.getElementById("eda").innerHTML = "Edad: "
    document.getElementById("pla").innerHTML = "Planeta: "
    document.getElementById("des").innerHTML = "Descripción: "
    document.getElementById("imgbro").src = "https://api.minimalavatars.com/avatar/random/svg";
}
function r(x) {
    return Math.floor(Math.random() * (x + 1))
}