tinymce.init({
    selector: '#descripcion',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
/*                  <option value="desayuno">Desayuno</option>
                    <option value="almuerzo">Almuerzo</option>
                    <option value="once">Once</option>
                    <option value="cena">Cena</option>
*/
let horarioSelect = document.querySelector("#horario");
let desayuno = document.createElement("option");
desayuno.value = "Desayuno";
desayuno.text = "Desayuno";
let almuerzo = document.createElement("option");
almuerzo.value = "Almuerzo";
almuerzo.text = "Almuerzo";
let once = document.createElement("option");
once.value = "Once";
once.text = "Once";
let cena = document.createElement("option");
cena.value = "Cena";
cena.text = "Cena";
horarioSelect.appendChild(desayuno);
horarioSelect.appendChild(almuerzo);
horarioSelect.appendChild(once);
horarioSelect.appendChild(cena);

const menus = [];

const cargartabla=()=>{
let tbody = document.querySelector("#tabla");
tbody.innerHTML = "";
for(let i=0;i<menus.length;++i){
    let m = menus[i];
    let tr = document.createElement("tr");
    let tdNombre = document.createElement("td");
    tdNombre.innerText = m.nombre;
    let tdHorario = document.createElement("td");
    tdHorario.innerText = m.horario;
    let tdValor = document.createElement("td");
    tdValor.innerText = m.valor;
    let tdDescripcion = document.createElement("td");
    tdDescripcion.innerHTML = m.descripcion;
    let tdOferta = document.createElement("td");
    let icono = document.createElement("i");
    //  Rango de Valor      Horario     Oferta
    //  Menor que 5000      Desayuno      Si
    //  Menor que 15000     Almuerzo      Si
    //  Menor que 10000     Once          Si
    //  Menor que 20000     Cena          Si
    //Precio total:     <i class="fas fa-dollar-sign"></i>
    //Oferta:           <i class="fas fa-percent"></i>
    if(m.horario =="Desayuno" && m.valor<5000){
        icono.classList.add("fas","fa-percent","fa-2x","text-danger")
    }else if(m.horario =="Almuerzo" && m.valor<15000){
        icono.classList.add("fas","fa-percent","fa-2x","text-danger")
    }else if(m.horario=="Once" && m.valor<10000){
        icono.classList.add("fas","fa-percent","fa-2x","text-danger")
    }else if(m.horario=="Cena" && m.valor<20000){
        icono.classList.add("fas","fa-percent","fa-2x","text-danger")
    }else{
        icono.classList.add("fas","fa-dollar-sign","fa-2x","text-warning")
    }
    tdOferta.classList.add("text-center")
    tdOferta.appendChild(icono);
    tr.appendChild(tdNombre);
    tr.appendChild(tdHorario);
    tr.appendChild(tdValor);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdOferta);
    tbody.appendChild(tr);
}
};
  
//  • Si es desayuno, el valor debe ser entre 1000 y 10000 pesos
//  • Si es almuerzo, el valor debe fluctuar entre los 10000 a 20000 pesos
//  • Si es once, el valor debe fluctuar entre los 5000 a los 15000 pesos
//  • Si es cena, el valor debe ser mayor a los 15000 pesos
document.querySelector("#guardar").addEventListener('click',()=>{
    let nombre = document.querySelector("#nombre").value;
    let horario = document.querySelector("#horario").value;
    let valor = document.querySelector("#valor").value;
    let descripcion = tinymce.get("descripcion").getContent();
    if(horario =="Desayuno"){
        if(valor<1000 || valor>10000){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Valor fuera del rango',
              })
        }else{
            let menu ={};
            menu.nombre = nombre;
            menu.horario = horario;
            menu.valor = valor;
            menu.descripcion = descripcion;
            menus.push(menu);
            cargartabla();
            Swal.fire("Exito!","Registro de Menu realizado","success")
        }
    }else if(horario=="Almuerzo"){
        if(valor<10000 || valor>20000){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Valor fuera del rango',
              })
        }else{
            let menu ={};
            menu.nombre = nombre;
            menu.horario = horario;
            menu.valor = valor;
            menu.descripcion = descripcion;
            menus.push(menu);
            cargartabla();
            Swal.fire("Exito!","Registro de Menu realizado","success")
        }
    }else if(horario=="Once"){
        if(valor<5000 || valor>15000){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Valor fuera del rango',
              })
        }else{
            let menu ={};
            menu.nombre = nombre;
            menu.horario = horario;
            menu.valor = valor;
            menu.descripcion = descripcion;
            menus.push(menu);
            cargartabla();
            Swal.fire("Exito!","Registro de Menu realizado","success")
        }
    }else{
        if(valor<15000){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Valor fuera del rango',
              })
        }else{
            let menu ={};
            menu.nombre = nombre;
            menu.horario = horario;
            menu.valor = valor;
            menu.descripcion = descripcion;
            menus.push(menu);
            cargartabla();
            Swal.fire("Exito!","Registro de Menu realizado  ","success")
        }
    }
});