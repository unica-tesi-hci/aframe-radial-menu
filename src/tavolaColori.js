/**
*** Registro un nuovo componente di A-FRAME chiamato colori, che conterrà
*** varie opzioni per poter modificare gli oggetti all'interno della scena.
**/ 

AFRAME.registerComponent('colori', {
  schema: {
    
    positioning_scene: {
    type: 'boolean', default: true},
    
  },
      defaultmaterial: {color: '#000',opacity: 0.8},
      geometryCircle:{primitive: 'circle',segments: 500,radius: 0.8},
      /**
      *** Creo un entità, dentro la quale inserisco una parte di ring che
      *** conterrà la freccia per ritornare indietro
      ***
      *** @scene = richiama la scena che è stata creata nell'index
      *** @ring = creo una parte di anello e gli setto tutti i valori
      *** @segments-theta = contiene il numero di segmenti
      *** @theta-length = contiene la lunghezza in gradi del ring
      *** @theta-start = indica l'inizio del ring 
      *** @material = setto il colore e l'opacità sfruttando 
      *** defaultmaterial dichiarata precedentemente
      *** @position = definisco i valori relativi alla posizione
      *** @scale = definisco i valori relativi alla dimensione/scale
      *** @addEventListener = setto i vari eventi per poter effettuare delle operazioni:
      *** quando avvicino il cursore alla parte interessata, questa diventa bianca, 
      *** quando è deselezionato, rimane nero, quando clicco, mi porta alla sezione
      *** interessata
      **/ 
 
  init: function(){
    var scene = document.querySelector('a-scene');
    var camer1 = document.querySelector('a-camera');
    var questa = document.querySelector('#menu');
    var entity = document.createElement('a-entity');
    entity.setAttribute('id', "colori");
    
    if(questa.getAttribute('colori').positioning_scene ){
    scene.appendChild(entity);}
    else{
    camer1.appendChild(entity);}

    
    /*controllo per l'src dell pulsante indietro*/
    if(questa.getAttribute('colori').script_back != 'none'){
    var script_indietro= document.createElement('script')
    document.head.appendChild(script_indietro);
    var src_script= questa.getAttribute('colori').script_back;
    script_indietro.setAttribute('src', src_script);
    }
      /**
      *** Parte di anello che contiene il pennello
      **/
    
      /********** COLOR PICKER ***********/
    
    //creazione entità principale contenente tutti gli oggetti del color picker
    var entityColorPicker= document.createElement('a-entity');
    entityColorPicker.setAttribute('id','colorpicker');
    entityColorPicker.setAttribute('visible', true);
    entityColorPicker.setAttribute('scale', {x: 2,y: 2,z: 2});
    scene.appendChild(entityColorPicker);

     var ringColor1= document.createElement('a-ring');
     entityColorPicker.appendChild(ringColor1);
     ringColor1.setAttribute('id', 'ringindietro');
     ringColor1.setAttribute('segments-theta', 500);
     ringColor1.setAttribute('theta-length', 90);
     ringColor1.setAttribute('theta-start', -45);
     ringColor1.setAttribute('material',this.defaultmaterial);
     ringColor1.setAttribute('position',{x:0,y: 2.5,z: -5});
     ringColor1.setAttribute('scale',{x:2,y:2,z:2});
 
     ringColor1.addEventListener('mouseenter', function () {
        ringColor1.setAttribute('color', '#fff');
      });
      ringColor1.addEventListener('mouseleave', function () {
        ringColor1.setAttribute('color', '#000');
      });
      ringColor1.addEventListener('click', function () {
        entityColorPicker.setAttribute('visible', false );
        entityColorPicker.setAttribute('scale', {x: -1,y: -1,z: -1  });
        entity.setAttribute('visible', true );
        entity.setAttribute('scale', {x: 2,y: 2,z: 2});
      });
     
       /*!-- freccia indietro -->
      <a-image id = "backcolor" src = "https://cdn.glitch.com/ea330562-3dce-4b4d-9299-9a5940832bd0%2FindietroSmall.png?1526368911662" 
               position = "1.96 2.5 -4.9" scale="0.5 0.45 1"
               event-set__enter="_event: mousenter; color: #fff; _target: #ringindietro"
               event-set__leave="_event: mouseleave; color: #000 ; _target: #ringindietro"
               event-set__click0="_event: click; _target: #colorpicker; visible:false; scale: -1 -1 -1"
               event-set__click="_event: click; _target: #bg; visible:true ; scale: 2 2 2">
      </a-image>*/
    
    var frecciaindietroimg=document.createElement('a-image');
    entityColorPicker.appendChild(frecciaindietroimg);
    frecciaindietroimg.setAttribute('id','backcolor');
    frecciaindietroimg.setAttribute('src','https://cdn.glitch.com/ea330562-3dce-4b4d-9299-9a5940832bd0%2FindietroSmall.png?1526368911662');
    frecciaindietroimg.setAttribute('position',{x:1.96,y:2.5,z:-4.9});
    frecciaindietroimg.setAttribute('scale',{x:0.5,y:0.45,z:1 });
    
    frecciaindietroimg.addEventListener('mouseenter', function () {
        ringColor1.setAttribute('color', '#fff');
      });
      frecciaindietroimg.addEventListener('mouseleave', function () {
        ringColor1.setAttribute('color', '#000');
      });
      frecciaindietroimg.addEventListener('click', function () {
        entityColorPicker.setAttribute('visible', false );
        entityColorPicker.setAttribute('scale', {x: -1,y: -1,z: -1});
        entity.setAttribute('visible', true );
        entity.setAttribute('scale', {x: 2,y: 2,z: 2});
      });
      
      
      
    /*<!-- cerchio esterno menu -->
     <a-ring  
          segments-theta= "500" theta-length= "270" theta-start= "45" 
          material="color: #000; opacity: 0.8" 
          position="0 2.5 -5"
          scale="2 2 2" 
          rotation="" visible=""></a-ring>
      
      <a-colorwheel position="0 2.5 -5" rotation="0 0 0" scale="2 2 2" showswatches="true" visible="" raycaster="" colorwheel="">
        
      </a-colorwheel>*/
    var cerchioesternoCP = document.createElement('a-ring');
    entityColorPicker.appendChild(cerchioesternoCP);
    cerchioesternoCP.setAttribute('segments-theta', 500);
    cerchioesternoCP.setAttribute('theta-length', 270);
    cerchioesternoCP.setAttribute('theta-start',45);
    cerchioesternoCP.setAttribute('material',this.defaultmaterial);
    cerchioesternoCP.setAttribute('position',{ x:0, y:2.5, z:-5});
    cerchioesternoCP.setAttribute('scale',{ x:2, y:2, z:2});
    
    var colorwheel= document.createElement('a-colorwheel');
    entityColorPicker.appendChild(colorwheel);
    colorwheel.setAttribute('rotation',{ x:0, y:0, z:0});
    colorwheel.setAttribute('position',{ x:0, y:2.5, z:-5});
    colorwheel.setAttribute('scale',{ x:2, y:2, z:2});
    colorwheel.setAttribute('showswatches',true);
    
    
    
  }
});