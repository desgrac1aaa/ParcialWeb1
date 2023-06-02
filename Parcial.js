
var iter=0;
var group1;


function addRows() {
    gusto1 = document.getElementById('gusto1').value;
    const tbody = document.querySelector('tbody');
    tbody.innerHTML += '<tr>\
                            <th scope="row">'+ gusto1 +'\
                            <td>\
                                0\
                            </td>\
                            <td href="#" onclick="editRows()">\
                                <div id="edit'+iter+'">\
                                    <a href="#">\
                                        Editar\
                                    </a>\
                                </div>\
                            </td>\
                      </tr>';

console.log(tbody);
}



function editRows(){

  alert('Por favor volver a dar click');

    document.querySelectorAll('a').forEach(cell => {
        cell.addEventListener('click', evt => {
          console.log('The element that was clicked was ', evt.target);
        
        var editBtun = evt.target;
        var editTr = editBtun.parentNode.parentNode.parentNode;
        
        console.log(editTr);

        editTr.innerHTML = '<th scope="row">\
                                 <input class="form" id="gusto" value="'+ gusto1 +'">\
                                </input>\
                            </th>\
                            <td>\
                                <input class="form" id="porcent" value="0">\
                                </input>\
                            </td>\
                            <td>\
                                <div>\
                                        Editando\
                                </div>\
                            </td>'

       var  divBut = document.getElementById('2But');

       divBut.innerHTML = '<button id="can" type="button" onclick="cancelFun()">Cancel</button><button id="ace" type="button" onclick="acceptFun()">Accept</button>'
        });
      });



}

function acceptFun(){
    window.location.href="PrimerParcial2.html"
}

function cancelFun(){
    location.reload();
}