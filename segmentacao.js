function segmentacao(){
    let largura = document.getElementById("largura").value;
    let tr = document.querySelectorAll('tr');
    sub = "";
    rgb = "";
    tr.forEach(l => {
        let tamanho = tr.length;
        if (l.rowIndex < tamanho) {
            for (i = 0; i < largura; i++) {
                rgb = l.cells[i].style.backgroundColor;
                sub = parseInt(rgb.substring(4,7));
                if(sub>10 && sub<50){
                    alert(sub);
                }
                
                }
               
            }

    })
}