'use strict';
const Gasolinera = (data,update)=>{
    const contenedor = $("<div class='general'></div>");
    const dato = $("<span class='titulo'>"+data.name+"</span>");
    const info = $("<p>"+data.address+"</p>");
    const distrito = $("<p>"+data.district+"</p>");
    const ubicacion = $("<a class='go-maps'><i class='fa fa-map'></i></a>");

    contenedor.append(dato);
    contenedor.append(info);
    contenedor.append(distrito);
    contenedor.append(ubicacion);
    
    ubicacion.on("click", (e) => {
        e.preventDefault();
        state.selectedStation = data;
        update();
    });

    return contenedor;

};

const reRender = (estaciones,finded,update)=>{
    estaciones.empty();

    finded.forEach(station=>{
        estaciones.append(Gasolinera(station,update));

    });
};

const Search = (update)=>{
    const contenedor2 = $("<div id='buscador'></div>");
    const iconLoop = $("<i class='fa fa-search'></i>");
    const input = $("<input type='text' placeholder='Ingrese distrito:'>");
    const estaciones = $("<div></div>");
    
    state.stations.forEach(station=>{
        estaciones.append(Gasolinera(station,update));

    });
    
    contenedor2.append(iconLoop);
    contenedor2.append(input);
    contenedor2.append(estaciones);

    input.on("keyup", () =>{		
        if(input.val() != ""){
            var finded = filterByDistrict(state.stations,input.val());
        }

        reRender(estaciones,finded,update);	
    });

    return contenedor2;	
};