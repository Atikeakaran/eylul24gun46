/* Demo Başlancıç   --  sonra silinecek */

document.getElementById("ekle").onclick = () => {
    for (let i = 0; i < 100; i++) {
        document.getElementById("liste").innerHTML += `<button type="button" class="list-group-item list-group-item-action"> Not ${i + 5}</button>`;
    }
};

/* Demo Bitiş   --  sonra silinecek */