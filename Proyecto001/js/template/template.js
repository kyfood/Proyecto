let MenuItems = ["Beef", "Rice", "Wine"];
let CountMesas = {
    Mesa1: {Beef: 0, Rice: 0, Wine: 0},
    Mesa2: {Beef: 0, Rice: 0, Wine: 0},
    Mesa3: {Beef: 0, Rice: 0, Wine: 0},
    Mesa4: {Beef: 0, Rice: 0, Wine: 0}
}
let datosTable = [];

function Apertura (){
    let ingresecod = 0;
    ingresecod = prompt('Ingrese Su Codigo De Mesero');

    if(ingresecod == 101){
      document.getElementById ("mesero1").disabled = false
    }
    else if(ingresecod == 102){
        document.getElementById ("mesero2").disabled = false
     }
     else if(ingresecod == 103){
        document.getElementById ("mesero3").disabled = false
     }
     else if(ingresecod == 104){
        document.getElementById ("mesero4").disabled = false
     } 
     
    
    
}

function InitialValues() {
    var select = document.getElementsByClassName("menuItems");

    for (var i = 0; i < select.length; i++) {

        MenuItems.forEach((value) => {
            // New item
            let option = document.createElement("option");
            option.text = value;
            option.value = value;

            select[i].appendChild(option);
        });
    }
}

function AddTemplateItem(label, value) {
    let template = `<li class="list-group-item d-flex justify-content-between align-items-center">${label}<span class="badge bg-primary rounded-pill">${value}</span></li>`

    return template;
}

function AddTableItem(id, first, last, handle) {
    let template = `<tr><th scope="row">${id}</th><td>${first}</td><td>${last}</td><td>${handle}</td></tr>`

    return template;
}

function AddTableItemOption2(id, first, last, handle, mesa) {

    var count = datosTable.length + 1;
    var arr = {id: count ? count : 0, Mesero: '', producto: first, total: 0};

    switch (mesa) {
        case 1:
            if(first === 'Beef'){
                CountMesas.Mesa1.Beef = CountMesas.Mesa1.Beef +1
                document.getElementsByClassName('BeefMesa1')[0].firstElementChild.innerHTML = CountMesas.Mesa1.Beef
                arr.total = `${CountMesas.Mesa1.Beef * 15000}`;
            }else if(first === 'Rice'){
                CountMesas.Mesa1.Rice = CountMesas.Mesa1.Rice +1
                document.getElementsByClassName('RiceMesa1')[0].firstElementChild.innerHTML = CountMesas.Mesa1.Rice
                arr.total = `${CountMesas.Mesa1.Rice * 10000}`;
            }else if(first === 'Wine'){
                CountMesas.Mesa1.Wine = CountMesas.Mesa1.Wine +1
                document.getElementsByClassName('WineMesa1')[0].firstElementChild.innerHTML = CountMesas.Mesa1.Wine
                arr.total = `${CountMesas.Mesa1.Wine * 20000}`;
            }
            arr.Mesero = 'Mesero #1';
            break;
        case 2:
            if(first === 'Beef'){
                CountMesas.Mesa2.Beef = CountMesas.Mesa2.Beef +1
                document.getElementsByClassName('BeefMesa2')[0].firstElementChild.innerHTML = CountMesas.Mesa2.Beef
                arr.total = `${CountMesas.Mesa2.Beef * 25000}`;
            }else if(first === 'Rice'){
                CountMesas.Mesa2.Rice = CountMesas.Mesa2.Rice +1
                document.getElementsByClassName('RiceMesa2')[0].firstElementChild.innerHTML = CountMesas.Mesa2.Rice
                arr.total = `${CountMesas.Mesa2.Rice * 19000}`;
            }else if(first === 'Wine'){
                CountMesas.Mesa2.Wine = CountMesas.Mesa2.Wine +1
                document.getElementsByClassName('WineMesa2')[0].firstElementChild.innerHTML = CountMesas.Mesa2.Wine
                arr.total = `${CountMesas.Mesa2.Wine * 2000}`;
            }
            arr.Mesero = 'Mesero #2';
            break;
        case 3:
            if(first === 'Beef'){
                CountMesas.Mesa3.Beef = CountMesas.Mesa3.Beef +1
                document.getElementsByClassName('BeefMesa3')[0].firstElementChild.innerHTML = CountMesas.Mesa3.Beef
                arr.total = `${CountMesas.Mesa3.Beef * 10000}`;
            }else if(first === 'Rice'){
                CountMesas.Mesa3.Rice = CountMesas.Mesa3.Rice +1
                document.getElementsByClassName('RiceMesa3')[0].firstElementChild.innerHTML = CountMesas.Mesa3.Rice
                arr.total = `${CountMesas.Mesa3.Rice * 30000}`;
            }else if(first === 'Wine'){
                CountMesas.Mesa3.Wine = CountMesas.Mesa3.Wine +1
                document.getElementsByClassName('WineMesa3')[0].firstElementChild.innerHTML = CountMesas.Mesa3.Wine
                arr.total = `${CountMesas.Mesa3.Wine * 50000}`;
            }
            arr.Mesero = 'Mesero #3';
            break;
        case 4:
            if(first === 'Beef'){
                CountMesas.Mesa4.Beef = CountMesas.Mesa4.Beef +1
                document.getElementsByClassName('BeefMesa4')[0].firstElementChild.innerHTML = CountMesas.Mesa4.Beef
                arr.total = `${CountMesas.Mesa4.Beef * 5000}`;
            }else if(first === 'Rice'){
                CountMesas.Mesa4.Rice = CountMesas.Mesa4.Rice +1
                document.getElementsByClassName('RiceMesa4')[0].firstElementChild.innerHTML = CountMesas.Mesa4.Rice
                arr.total = `${CountMesas.Mesa4.Rice * 17000}`;
            }else if(first === 'Wine'){
                CountMesas.Mesa4.Wine = CountMesas.Mesa4.Wine +1
                document.getElementsByClassName('WineMesa4')[0].firstElementChild.innerHTML = CountMesas.Mesa4.Wine
                arr.total = `${CountMesas.Mesa4.Wine * 35000}`;
            }
            arr.Mesero = 'Mesero #4';
            break;
      }

var x = datosTable.find((iter)=> iter.Mesero === arr.Mesero && iter.producto === arr.producto)
if(x){
    for (let i = 0; i < datosTable.length; i++) {
        if(datosTable[i].Mesero === arr.Mesero && datosTable[i].producto === arr.producto){
            datosTable[i].total = arr.total 
            break;
        }
    }
}else{
    datosTable.push(arr);
}
var pval = '';
var total = 0;

    for (let index = 0; index < datosTable.length; index++) {
        pval += "<tr>";
        pval += "<td>"+datosTable[index].id+"</td>";
        pval += "<td>"+datosTable[index].Mesero+"</td>";
        pval += "<td>"+datosTable[index].producto+"</td>";
        pval += "<td>"+datosTable[index].total+"</td>";
        pval += "</tr>";
        total = (Number(total) + Number(datosTable[index].total));
    }
    document.getElementById('salesItems').innerHTML=pval;
    document.getElementById('Total').innerHTML=total;
}

// Initial values and template defaults
InitialValues();