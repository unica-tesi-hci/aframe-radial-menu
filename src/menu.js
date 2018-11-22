/**
*** Registro un nuovo componente di A-FRAME chiamato menu, che conterrà
*** varie opzioni per poter modificare gli oggetti all'interno della scena.
**/ 

AFRAME.registerComponent('menu', {
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
    entity.setAttribute('id', "bg");
    
    if(questa.getAttribute('menu').positioning_scene ){
    scene.appendChild(entity);}
    else{
    camer1.appendChild(entity);}

    
    var ring = document.createElement('a-ring');
    ring.setAttribute('id', "indietro");
    ring.setAttribute('segments-theta', 500);
    ring.setAttribute('theta-length', 60);
    ring.setAttribute('theta-start', -30);
    ring.setAttribute('material', this.defaultmaterial);
    ring.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ring.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    ring.addEventListener('mouseenter', function () {
        ring.setAttribute('color', '#fff');
        imgBackCircle.setAttribute('id', "frecciaind");  
        imgBackCircle.setAttribute('src', "https://cdn.glitch.com/ea330562-3dce-4b4d-9299-9a5940832bd0%2FindietroSmall.png?1526368911662");
        imgBackCircle.setAttribute('position', {x: 0,y: 2.5,z: -4.9});
        imgBackCircle.setAttribute('scale', { x: 1.2, y: 0.9, z: 1}); 
        
      });
      ring.addEventListener('mouseleave', function () {
        ring.setAttribute('color', '#000');
      });
      ring.addEventListener('click', function () {
        entity.setAttribute('visible', false );
        entity.setAttribute('scale', {x: -1,y: -1,z: -1});
      });
      
    /**Immagine della freccia indietro
    *** @id = setto l'id dell'immagine
    *** @src = inserisco l'immagine
    *** @position = definisco i valori relativi alla posizione
    *** @scale = definisco i valori relativi alla dimensione/scale
    **/ 
    var imgBack = document.createElement('a-image');
    imgBack.setAttribute('id', "back");  
    imgBack.setAttribute('src', "https://cdn.glitch.com/ea330562-3dce-4b4d-9299-9a5940832bd0%2FindietroSmall.png?1526368911662");
    imgBack.setAttribute('position', {x: 1.96,y: 2.5,z: -4.9});
    imgBack.setAttribute('scale', { x: 0.5, y: 0.45, z: 1}); 
      
      imgBack.addEventListener('mouseenter', function () {
        ring.setAttribute('color', '#fff');
        imgBackCircle.setAttribute('src', "https://cdn.glitch.com/ea330562-3dce-4b4d-9299-9a5940832bd0%2FindietroSmall.png?1526368911662");
        imgBackCircle.setAttribute('position', {x: 0,y: 2.5,z: -4.9});
        imgBackCircle.setAttribute('scale', { x: 1.2, y: 0.9, z: 1}); 
      });
      imgBack.addEventListener('mouseleave', function () {
        ring.setAttribute('color', '#000');
      });
      imgBack.addEventListener('click', function () {
        entity.setAttribute('visible', false );
        entity.setAttribute('scale', {x: -1,y: -1,z: -1});
      });
      
    entity.appendChild(ring);
    entity.appendChild(imgBack);
    
    /***
    *** Creazione del cerchio interno
    *** @entityCerchioInterno = cerchio interno che conterrà l'icona
    *** @geometry = setto la geometria a circle
    *** @segments = numero di segmenti del cerchio
    *** @radius = raggio del cerchio
    *** @scale = dimensioni
    *** @material = setto il colore e l'opacità sfruttando 
    *** defaultmaterial dichiarata precedentemente
    *** @position = definisco i valori relativi alla posizione
    ***/
      
    var cerchioInterno = document.createElement('a-entity');
    entity.appendChild(cerchioInterno);
    cerchioInterno.setAttribute('geometry', this.geometryCircle);
    cerchioInterno.setAttribute('segments', 500);
    cerchioInterno.setAttribute('radius', 0.8);
    cerchioInterno.setAttribute('scale', {x: 1.8,y: 1.8,z: 1.8});
    cerchioInterno.setAttribute('material', this.defaultmaterial);
    cerchioInterno.setAttribute('position', {x: 0,y: 2.5,z: -5});
  
  
    
    /***
    *** Creazione dell'immagine contenuta all'interno del cerchio
    *** @id = setto l'id dell'immagine
    *** @src = inserisco l'immagine
    *** @position = definisco i valori relativi alla posizione
    *** @scale = definisco i valori relativi alla dimensione/scale
    ***/  
    
    var imgBackCircle = document.createElement('a-image');
    imgBackCircle.setAttribute('id', "frecciaind");  
    imgBackCircle.setAttribute('src', "https://cdn.glitch.com/ea330562-3dce-4b4d-9299-9a5940832bd0%2FindietroSmall.png?1526368911662");
    imgBackCircle.setAttribute('position', {x: 0,y: 2.5,z: -4.9});
    imgBackCircle.setAttribute('scale', { x: 1.2, y: 0.9, z: 1}); 
    entity.appendChild(imgBackCircle);
    /***
    *** Cerchio esterno menu a text
    ***
    ***/
    
    var ring2 = document.createElement('a-ring');
    ring2.setAttribute('id', "aText");
    ring2.setAttribute('segments-theta', 500);
    ring2.setAttribute('theta-length', 50);
    ring2.setAttribute('theta-start', 30);
    ring2.setAttribute('material', this.defaultmaterial);
    ring2.setAttribute('position', { x: 0, y: 2.5, z: -5})
    ring2.setAttribute('scale', {x: 2,y: 2,z: 2})
    
    ring2.addEventListener('mouseenter', function () {
        ring2.setAttribute('color', '#fff');
        imgBackCircle.setAttribute('src', "https://cdn.glitch.com/945f543f-a4c6-456b-9ae5-8ddaf81bd4c8%2FAtext.png?1527940365687");
        imgBackCircle.setAttribute('position', {x: 0,y: 2.5,z: -4.9});
        imgBackCircle.setAttribute('scale', { x: 1.2, y: 1.2, z: 1}); 
      });
      ring2.addEventListener('mouseleave', function () {
        ring2.setAttribute('color', '#000');
      });
      ring2.addEventListener('click', function () {
        entity.setAttribute('visible', false );
        entity.setAttribute('scale', {x: -1,y: -1,z: -1  });
        entityTastiera.setAttribute('visible', true );
        entityTastiera.setAttribute('scale', {x: 2,y: 2,z: 2});
        //entityTastiera.setAttribute('position', {x: 0,y: 0.9,z: 0 });
      });
    entity.appendChild(ring2);
    
    ;
      
  /**Immagine della a text
    *** @id = setto l'id dell'immagine
    *** @src = inserisco l'immagine
    *** @position = definisco i valori relativi alla posizione
    *** @scale = definisco i valori relativi alla dimensione/scale
    **/ 
      
    var imgA = document.createElement('a-image');
    imgA.setAttribute('id', "atext");  
    imgA.setAttribute('src', "https://cdn.glitch.com/945f543f-a4c6-456b-9ae5-8ddaf81bd4c8%2FAtext.png?1527940365687");
    imgA.setAttribute('position', { x: 1.1, y: 4.15, z: -4.9});
    imgA.setAttribute('scale', { x: 0.42, y: 0.42, z: 1});  

      imgA.addEventListener('mouseenter', function () {
        ring2.setAttribute('color', '#fff');
          imgBackCircle.setAttribute('src', "https://cdn.glitch.com/945f543f-a4c6-456b-9ae5-8ddaf81bd4c8%2FAtext.png?1527940365687");
          imgBackCircle.setAttribute('position', {x: 0,y: 2.5,z: -4.9});
          imgBackCircle.setAttribute('scale', { x: 1.2, y: 1.2, z: 1}); 
      });
      imgA.addEventListener('mouseleave', function () {
        ring2.setAttribute('color', '#000');
      });
      imgA.addEventListener('click', function () {
        entity.setAttribute('visible', false );
        entity.setAttribute('scale', {x: -1,y: -1,z: -1});
        entityTastiera.setAttribute('visible', true );
        entityTastiera.setAttribute('scale', {x: 2,y: 2,z: 2});
        //entityTastiera.setAttribute('position', {x: 0,y: 0.9,z: 0});
      });
    entity.appendChild(imgA);
    
        
      /**
      *** Parte di anello che contiene il pennello
      **/
      
    var ring3 = document.createElement('a-ring');
    ring3.setAttribute('id', "pennello");
    ring3.setAttribute('segments-theta', 500);
    ring3.setAttribute('theta-length', 50);
    ring3.setAttribute('theta-start', 80);
    ring3.setAttribute('material', this.defaultmaterial);
    ring3.setAttribute('position', {x: 0, y: 2.5, z: -5});
    ring3.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    ring3.addEventListener('mouseenter', function () {
        ring3.setAttribute('color', '#fff');
        imgBackCircle.setAttribute('src', "https://cdn.glitch.com/81d13b8a-19e8-43e2-bde4-9dad16367eaf%2Fpennello.png?1526542737879");
        imgBackCircle.setAttribute('position', {x: 0,y: 2.5,z: -4.9});
        imgBackCircle.setAttribute('scale', { x: 1.2, y: 1.2, z: 1}); 
      });
      ring3.addEventListener('mouseleave', function () {
        ring3.setAttribute('color', '#000');
      });
      ring3.addEventListener('click', function () {
        entity.setAttribute('visible', false );
        entity.setAttribute('scale', {x: -1,y: -1,z: -1  });
        entityColorPicker.setAttribute('visible', true );
        entityColorPicker.setAttribute('scale', {x: 2,y: 2,z: 2});
        //entityColorPicker.setAttribute('position', { x: 0, y: 0.9, z: 0});
    });
    entity.appendChild(ring3);
      /**Immagine del pennello
    *** @id = setto l'id dell'immagine
    *** @src = inserisco l'immagine
    *** @position = definisco i valori relativi alla posizione
    *** @scale = definisco i valori relativi alla dimensione/scale
    **/ 
      
    var imgPennello = document.createElement('a-image');
    imgPennello.setAttribute('id', "pennello");  
    imgPennello.setAttribute('src', "https://cdn.glitch.com/81d13b8a-19e8-43e2-bde4-9dad16367eaf%2Fpennello.png?1526542737879");
    imgPennello.setAttribute('position', {x: -0.5,y: 4.35,z: -4.9});
    imgPennello.setAttribute('scale', { x: 0.5, y: 0.5, z: 1}); 

      imgPennello.addEventListener('mouseenter', function () {
        ring3.setAttribute('color', '#fff');
        imgBackCircle.setAttribute('src', "https://cdn.glitch.com/81d13b8a-19e8-43e2-bde4-9dad16367eaf%2Fpennello.png?1526542737879");
        imgBackCircle.setAttribute('position', {x: 0,y: 2.5,z: -4.9});
        imgBackCircle.setAttribute('scale', { x: 1.2, y: 1.2, z: 1}); 
      });
      imgPennello.addEventListener('mouseleave', function () {
        ring3.setAttribute('color', '#000');
      });
      imgPennello.addEventListener('click', function () {
        entity.setAttribute('visible', false );
        entity.setAttribute('scale', { x: -1, y: -1, z: -1});
        entityColorPicker.setAttribute('visible', true );
        entityColorPicker.setAttribute('scale', {x: 2,y: 2,z: 2});
      });   
    entity.appendChild(imgPennello);
    
     
   /***
   *** Parte del ring relativa al posizionamento 
   ***/
    var ring4 = document.createElement('a-ring');
    ring4.setAttribute('id', "posizionamento");
    ring4.setAttribute('segments-theta', 500);
    ring4.setAttribute('theta-length', 50);
    ring4.setAttribute('theta-start', 130);
    ring4.setAttribute('material', this.defaultmaterial);
    ring4.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ring4.setAttribute('scale', {x: 2,y: 2,z: 2 });
    
    ring4.addEventListener('mouseenter', function () {
        ring4.setAttribute('color', '#fff');
        imgBackCircle.setAttribute('src', "https://cdn.glitch.com/22a8740c-4a57-4c05-a185-7c56c11270af%2F54301.png?1526591436964");
        imgBackCircle.setAttribute('position', {x: 0,y: 2.5,z: -4.9});
        imgBackCircle.setAttribute('scale', { x: 1.2, y: 1.2, z: 1});
      });
      ring4.addEventListener('mouseleave', function () {
        ring4.setAttribute('color', '#000');
      });
      ring4.addEventListener('click', function () {
        entity.setAttribute('visible', false );
        entity.setAttribute('color', "#E91E63");
        entity.setAttribute('scale', {x: -1,y: -1,z: -1 });
    });  
    entity.appendChild(ring4);
      
    
     
    /**Immagine del posizionamento
    *** @id = setto l'id dell'immagine
    *** @src = inserisco l'immagine
    *** @position = definisco i valori relativi alla posizione
    *** @scale = definisco i valori relativi alla dimensione/scale
    **/ 
      
    var imgPosizionamento = document.createElement('a-image');
    imgPosizionamento.setAttribute('id', "posizionamento");  
    imgPosizionamento.setAttribute('src', "https://cdn.glitch.com/22a8740c-4a57-4c05-a185-7c56c11270af%2F54301.png?1526591436964");
    imgPosizionamento.setAttribute('position', {x: -1.73,y: 3.4,z: -4.9});
    imgPosizionamento.setAttribute('scale', {  x: 0.4,  y: 0.4,  z: 2}); 

      imgPosizionamento.addEventListener('mouseenter', function () {
        ring4.setAttribute('color', '#fff');
        imgBackCircle.setAttribute('src', "https://cdn.glitch.com/22a8740c-4a57-4c05-a185-7c56c11270af%2F54301.png?1526591436964");
        imgBackCircle.setAttribute('position', {x: 0,y: 2.5,z: -4.9});
        imgBackCircle.setAttribute('scale', { x: 1.2, y: 1.2, z: 1});
      });
      imgPosizionamento.addEventListener('mouseleave', function () {
        ring4.setAttribute('color', '#000');
      });
      imgPosizionamento.addEventListener('click', function () {
        entity.setAttribute('visible', false );
        entity.setAttribute('color', "#E91E63");
        entity.setAttribute('scale', { x: -1, y: -1, z: -1});
      });  
    entity.appendChild(imgPosizionamento);
   
    /***
   *** Parte del ring relativa alla rotazione 
   ***/
    var ring5 = document.createElement('a-ring');
    ring5.setAttribute('id', "rotazione");
    ring5.setAttribute('segments-theta', 500);
    ring5.setAttribute('theta-length', 50);
    ring5.setAttribute('theta-start', 180);
    ring5.setAttribute('material', this.defaultmaterial);
    ring5.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ring5.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ring5.addEventListener('mouseenter', function () {
        ring5.setAttribute('color', '#fff');
        imgBackCircle.setAttribute('src', "https://cdn.glitch.com/81d13b8a-19e8-43e2-bde4-9dad16367eaf%2FrotateCube.png?1526543031384");
        imgBackCircle.setAttribute('position', {x: 0,y: 2.5,z: -4.9});
        imgBackCircle.setAttribute('scale', { x: 1.5, y: 1.2, z: 1});
      });
      ring5.addEventListener('mouseleave', function () {
        ring5.setAttribute('color', '#000');
      });
      ring5.addEventListener('click', function () {
        entity.setAttribute('visible', false );
        entity.setAttribute('color', "#E91E63");
        entity.setAttribute('scale', { x: -1,y: -1,z: -1});
    });   
    entity.appendChild(ring5);
      
  
        /**Immagine della rotazione
    *** @id = setto l'id dell'immagine
    *** @src = inserisco l'immagine
    *** @position = definisco i valori relativi alla posizione
    *** @scale = definisco i valori relativi alla dimensione/scale
    **/ 
      
    var imgRotate = document.createElement('a-image');
    imgRotate.setAttribute('id', "rotate");  
    imgRotate.setAttribute('src', "https://cdn.glitch.com/81d13b8a-19e8-43e2-bde4-9dad16367eaf%2FrotateCube.png?1526543031384");
    imgRotate.setAttribute('position', {x: -1.7,y: 1.65,z: -4.9});
    imgRotate.setAttribute('scale', {x: 0.8,y: 0.6,z: 0.5}); 

      imgRotate.addEventListener('mouseenter', function () {
        ring5.setAttribute('color', '#fff');
        imgBackCircle.setAttribute('src', "https://cdn.glitch.com/81d13b8a-19e8-43e2-bde4-9dad16367eaf%2FrotateCube.png?1526543031384");
        imgBackCircle.setAttribute('position', {x: 0,y: 2.5,z: -4.9});
        imgBackCircle.setAttribute('scale', { x: 1.5, y: 1.2, z: 1});
      });
      imgRotate.addEventListener('mouseleave', function () {
        ring5.setAttribute('color', '#000');
      });
      imgRotate.addEventListener('click', function () {
        entity.setAttribute('visible', false );
        entity.setAttribute('color', "#E91E63");
        entity.setAttribute('scale', {x: -1,y: -1,z: -1});
      });   
    entity.appendChild(imgRotate);
    
    
    
  /***
   *** Parte del ring relativa alla dimensione 
   ***/
    var ring6 = document.createElement('a-ring');
    ring6.setAttribute('id', "dimensione");
    ring6.setAttribute('segments-theta', 500);
    ring6.setAttribute('theta-length', 50);
    ring6.setAttribute('theta-start', 230);
    ring6.setAttribute('material', this.defaultmaterial);
    ring6.setAttribute('position', {x: 0,  y: 2.5,z: -5});
    ring6.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ring6.addEventListener('mouseenter', function () {
        ring6.setAttribute('color', '#fff');
        imgBackCircle.setAttribute('src', "https://cdn.glitch.com/81d13b8a-19e8-43e2-bde4-9dad16367eaf%2Fdimension.png?1526543146295");
        imgBackCircle.setAttribute('position', {x: 0,y: 2.7,z: -4.9});
        imgBackCircle.setAttribute('scale', { x: 2, y: 1.5, z: 1});
      });
      ring6.addEventListener('mouseleave', function () {
        ring6.setAttribute('color', '#000');
      });
      ring6.addEventListener('click', function () {
        entity.setAttribute('visible', false );
        entity.setAttribute('color', "#E91E63");
        entity.setAttribute('scale', {x: -1,y: -1,z: -1});
    });
    entity.appendChild(ring6);
    
    
    /**Immagine della dimensione
    *** @id = setto l'id dell'immagine
    *** @src = inserisco l'immagine
    *** @position = definisco i valori relativi alla posizione
    *** @scale = definisco i valori relativi alla dimensione/scale
    **/ 
      
    var imgDimension = document.createElement('a-image');
    imgDimension.setAttribute('id', "dimension");  
    imgDimension.setAttribute('src', "https://cdn.glitch.com/81d13b8a-19e8-43e2-bde4-9dad16367eaf%2Fdimension.png?1526543146295");
    imgDimension.setAttribute('position', {x: -0.5,y: 0.65,z: -4.9 });
    imgDimension.setAttribute('scale', {x: 0.9,y: 0.7,z: 1}); 

      imgDimension.addEventListener('mouseenter', function () {
        ring6.setAttribute('color', '#fff');
        imgBackCircle.setAttribute('src', "https://cdn.glitch.com/81d13b8a-19e8-43e2-bde4-9dad16367eaf%2Fdimension.png?1526543146295");
        imgBackCircle.setAttribute('position', {x: 0,y: 2.7,z: -4.9});
        imgBackCircle.setAttribute('scale', { x: 2, y: 1.5, z: 1});
      });
      imgDimension.addEventListener('mouseleave', function () {
        ring6.setAttribute('color', '#000');
      });
      imgDimension.addEventListener('click', function () {
        entity.setAttribute('visible', false );
        entity.setAttribute('color', "#E91E63");
        entity.setAttribute('scale', {x: -1,y: -1,z: -1 });
      });  
    entity.appendChild(imgDimension);
    
    
    
    /***
   *** Parte del ring relativa al volume del suono 
   ***/
    var ring7 = document.createElement('a-ring');
    ring7.setAttribute('id', "volumesuono");
    ring7.setAttribute('segments-theta', 500);
    ring7.setAttribute('theta-length', 50);
    ring7.setAttribute('theta-start', 280);
    ring7.setAttribute('material', this.defaultmaterial);
    ring7.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ring7.setAttribute('scale', {x: 2,y: 2,z: 2  });
    
    ring7.addEventListener('mouseenter', function () {
        ring7.setAttribute('color', '#fff');
        imgBackCircle.setAttribute('src', "https://cdn.glitch.com/81d13b8a-19e8-43e2-bde4-9dad16367eaf%2Fsound3.png?1526542607882")
        imgBackCircle.setAttribute('position', {x: 0,y: 2.5,z: -4.9});
        imgBackCircle.setAttribute('scale', { x: 1.2, y: 1.2, z: 1});
      });
    ring7.addEventListener('mouseleave', function () {
        ring7.setAttribute('color', '#000');
      });
    ring7.addEventListener('click', function () {
        entity.setAttribute('visible', false );
        entity.setAttribute('color', "#E91E63");
        entity.setAttribute('scale', {x: -1,y: -1,z: -1});
        entitySuono.setAttribute('visible', true );
        entitySuono.setAttribute('scale', {x: 2,y: 2,z: 2});  
        //entitySuono.setAttribute('position', {x: 0,y: 0.9,z: 0});  
      });
    entity.appendChild(ring7);
    
    
    /**Immagine del suono
    *** @id = setto l'id dell'immagine
    *** @src = inserisco l'immagine
    *** @position = definisco i valori relativi alla posizione
    *** @scale = definisco i valori relativi alla dimensione/scale
    **/
    
    var imgSound = document.createElement('a-image');
    imgSound.setAttribute('id', "soundimg");  
    imgSound.setAttribute('src', "https://cdn.glitch.com/81d13b8a-19e8-43e2-bde4-9dad16367eaf%2Fsound3.png?1526542607882");
    imgSound.setAttribute('position', {x: 1.1,y: 0.95,z: -4.9 });
    imgSound.setAttribute('scale', {x: 0.6,y: 0.6,z: 1}); 

      imgSound.addEventListener('mouseenter', function () {
        ring7.setAttribute('color', '#fff');
        imgBackCircle.setAttribute('src', "https://cdn.glitch.com/81d13b8a-19e8-43e2-bde4-9dad16367eaf%2Fsound3.png?1526542607882");
        imgBackCircle.setAttribute('position', {x: 0,y: 2.5,z: -4.9});
        imgBackCircle.setAttribute('scale', { x: 1.2, y: 1.2, z: 1});
      });
      imgSound.addEventListener('mouseleave', function () {
        ring7.setAttribute('color', '#000');
      });
      imgSound.addEventListener('click', function () {
        entity.setAttribute('visible', false );
        entity.setAttribute('color', "#E91E63");
        entity.setAttribute('scale', {x: -1,y: -1,z: -1 });
        entitySuono.setAttribute('visible', true );
        entitySuono.setAttribute('scale', {x: 2,y: 2,z: 2});
        //entitySuono.setAttribute('position', {x: 0,y: 0.9,z: 0});
      });
    entity.appendChild(imgSound);
    
    
      /********** COLOR PICKER ***********/
    
    //creazione entità principale contenente tutti gli oggetti del color picker
    var entityColorPicker= document.createElement('a-entity');
    entityColorPicker.setAttribute('id','colorpicker');
    entityColorPicker.setAttribute('visible', false);
    entityColorPicker.setAttribute('scale', {x: -1,y: -1,z: -1});
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
    
    
    
  
      /*------------------------------------------------------------------------------------------------------------------------
      --------------------------------------------------------------------------------------------------------------------------
      ----------------------------------------------------SUONO VOLUME----------------------------------------------------------
      --------------------------------------------------------------------------------------------------------------------------
      -------------------------------------------------------------------------------------------------------------------------*/
      
     var entitySuono= document.createElement('a-entity');
     scene.appendChild(entitySuono);
     var ringback=document.createElement('a-ring');
     entitySuono.appendChild(ringback);
     entitySuono.setAttribute('id','volumeSuono');
     entitySuono.setAttribute('position',{x:0, y:0.9 , z:0});
     entitySuono.setAttribute('scale',{x:-1, y:-1, z:-1});
     entitySuono.setAttribute('visible',false);
    
     ringback.setAttribute('segments-theta', 500);
     ringback.setAttribute('theta-length',90);
     ringback.setAttribute('theta-start',-45);
     ringback.setAttribute('material',this.defaultmaterial);
     ringback.setAttribute('position',{x:0, y:2.5, z:-5});
     ringback.setAttribute('scale',{x:2, y:2, z:2});

    ringback.addEventListener('mouseenter', function () {
        ringback.setAttribute('color', '#fff');
      });
      ringback.addEventListener('mouseleave', function () {
        ringback.setAttribute('color', '#000');
      });
      ringback.addEventListener('click', function () {
        entitySuono.setAttribute('visible', false );
        entitySuono.setAttribute('scale', {x: -1,y: -1,z: -1});
        entity.setAttribute('visible', true );
        entity.setAttribute('scale', {x: 2,y: 2,z: 2 });
      });
     
    
    /*
    <!-- freccia indietro -->
      <a-image id = "back1" src = "https://cdn.glitch.com/ea330562-3dce-4b4d-9299-9a5940832bd0%2FindietroSmall.png?1526368911662" 
               position = "1.96 2.5 -4.9" scale="0.5 0.45 1"
               event-set__click="_event: click;  _target: #volumeSuono; visible: false; scale: -1 -1 -1"
               event-set__click0="_event: click; _target: #bg; visible:true ; scale: 2 2 2">
      </a-image>*/
  
    var imgfrecciaindietro= document.createElement('a-image');
    entitySuono.appendChild(imgfrecciaindietro);
    imgfrecciaindietro.setAttribute( 'id','back1');
    imgfrecciaindietro.setAttribute( 'src','https://cdn.glitch.com/ea330562-3dce-4b4d-9299-9a5940832bd0%2FindietroSmall.png?1526368911662');
    imgfrecciaindietro.setAttribute('position',{x:1.96,y:2.5,z:-4.9});
    imgfrecciaindietro.setAttribute('scale',{x:0.5,y:0.45,z:1});

    imgfrecciaindietro.addEventListener('click', function () {
        entitySuono.setAttribute('visible', false );
        entitySuono.setAttribute('scale', {x: -1,y: -1,z: -1});
        entity.setAttribute('visible', true );
        entity.setAttribute('scale', {x: 2,y: 2,z: 2 });
      });
    imgfrecciaindietro.addEventListener('mouseenter', function () {
        ringback.setAttribute('color', '#fff');
      });
    imgfrecciaindietro.addEventListener('mouseleave', function () {
        ringback.setAttribute('color', '#000');
      });
    
      
    /*-- cerchio esterno menu -->
     <a-ring  
          segments-theta= "500" theta-length= "270" theta-start= "45" 
          material="color: #000; opacity: 0.8" 
          position="0 2.5 -5"
          scale="2 2 2" 
          rotation="" visible=""></a-ring>*/

    var ringesterno= document.createElement('a-ring');
    entitySuono.appendChild(ringesterno);
    ringesterno.setAttribute('segments-theta', 500);
    ringesterno.setAttribute('theta-length',270);
    ringesterno.setAttribute('theta-start',45);
    ringesterno.setAttribute('material',this.defaultmaterial);
    ringesterno.setAttribute('position',{x:0, y:2.5,z:-5});
    ringesterno.setAttribute('scale',{x:2, y:2,z:2});
    
     
/*  <!-- sfera centrale suono-->
    <a-entity geometry="primitive: circle; segments: 500; radius: 0.8" scale= "1.8 1.8 1.8" 
              material="color:#000; opacity: 0.8" position="0 2.5 -5"></a-entity>
   
        */
    var sferaSuono= document.createElement('a-entity');
    entitySuono.appendChild(sferaSuono);
    var imgSuono3= document.createElement('a-image');
    entitySuono.appendChild(imgSuono3);
    
    sferaSuono.setAttribute('geometry',this.geometryCircle);
    sferaSuono.setAttribute('scale',{x: 1.8, y: 1.8, z: 1.8});
    sferaSuono.setAttribute('material',this.defaultmaterial);
    sferaSuono.setAttribute('position',{x: 0, y: 2.5, z: -5});
    
    imgSuono3.setAttribute('id','suonoimg3');
    imgSuono3.setAttribute('src','https://cdn.glitch.com/ea4cbc17-1f9a-4d66-a022-282536131071%2Fsound3.png?1523351708836');
    imgSuono3.setAttribute('position',{x: 0, y: 2.5, z: -4.9});
    imgSuono3.setAttribute('scale',{x: 1, y: 1, z: 1});

    imgSuono3.addEventListener('click', function () {
         imgSuono3.setAttribute('visible', false );
         imgSuono3.setAttribute('scale', {x: -1,y: -1,z: -1});
         imgSuono2.setAttribute('visible', false );
         imgSuono2.setAttribute('scale', {x: -1,y: -1,z: -1});
         imgSuono1.setAttribute('visible', false );
         imgSuono1.setAttribute('scale', {x: -1,y: -1,z: -1});
         imgSuononull.setAttribute('visible', true );
         imgSuononull.setAttribute('scale', {x: 1,y: 1,z: 1 });
      });
   
    
    var imgSuono1= document.createElement('a-image');
    entitySuono.appendChild(imgSuono1);
    
    imgSuono1.setAttribute('id','suonoimg1');
    imgSuono1.setAttribute('src','https://cdn.glitch.com/22a8740c-4a57-4c05-a185-7c56c11270af%2Fsound1.png?1526984586638');
    imgSuono1.setAttribute('scale', {x: 1,y: 1,z: 1 });
    imgSuono1.setAttribute('position', {x: 0,y: 2.5,z: -4.9 });

   imgSuono1.addEventListener('click', function () {
         imgSuono1.setAttribute('visible', false );
         imgSuono1.setAttribute('scale', {x: -1,y: -1,z: -1});
         imgSuono3.setAttribute('visible', false );
         imgSuono3.setAttribute('scale', {x: -1,y: -1,z: -1});
         imgSuono2.setAttribute('visible', false );
         imgSuono2.setAttribute('scale', {x: -1,y: -1,z: -1});
         imgSuononull.setAttribute('visible', true );
         imgSuononull.setAttribute('scale', {x: 1,y: 1,z: 1});
      });
    
    
    var imgSuono2= document.createElement('a-image');
    entitySuono.appendChild(imgSuono2);
    imgSuono2.setAttribute('id','suonoimg2');
    imgSuono2.setAttribute('src','https://cdn.glitch.com/22a8740c-4a57-4c05-a185-7c56c11270af%2Fsound2.png?1526984604279');
    imgSuono2.setAttribute('scale', {x: 1,y: 1,z: 1 });
    imgSuono2.setAttribute('position', {x: 0,y: 2.5,z: -4.9 });
    
    imgSuono2.addEventListener('click', function () {
         imgSuono3.setAttribute('visible', false );
         imgSuono3.setAttribute('scale', {x: -1,y: -1,z: -1});
         imgSuononull.setAttribute('visible', true );
         imgSuononull.setAttribute('scale', {x: 1,y: 1,z: 1});
         imgSuono1.setAttribute('visible', false );
         imgSuono1.setAttribute('scale', {x: -1,y: -1,z: -1});
         imgSuono2.setAttribute('visible', false );
         imgSuono2.setAttribute('scale', {x: -1,y: -1,z: -1});
      });
    
    var imgSuononull= document.createElement('a-image');
    entitySuono.appendChild(imgSuononull);
    
    imgSuononull.setAttribute('visible', false );
    imgSuononull.setAttribute('id','suonoimgnull');
    imgSuononull.setAttribute('src','https://cdn.glitch.com/22a8740c-4a57-4c05-a185-7c56c11270af%2Fsoundx.png?1527007549808');
    imgSuononull.setAttribute('scale', {x: 1,y: 1,z: 1 });
    imgSuononull.setAttribute('position', {x: 0,y: 2.5,z: -4.9 });
    
     /*<!-- cerchio interno al menu per il volume: round slider-->*/

          var v1= document.createElement('a-ring');
          entitySuono.appendChild(v1);
          v1.setAttribute('id','v1');
          v1.setAttribute('segments-theta',500);
          v1.setAttribute('theta-length',17);
          v1.setAttribute('theta-start',90.5);
          v1.setAttribute('material',this.defaultmaterial);
          v1.setAttribute('position',{x:0,y:2.5,z:-4.9});
          v1.setAttribute('radius-inner',0.92);
          v1.setAttribute('radius-outer',1.08);
          v1.setAttribute('scale',{x:2,y:2,z:2});

     v1.addEventListener('click', function () {
       v10.setAttribute('color', '#fff');
       v9.setAttribute('color', '#fff' );
       v8.setAttribute('color', '#fff' );
       v7.setAttribute('color', '#fff' );
       v6.setAttribute('color', '#fff' );
       v5.setAttribute('color', '#fff' );
       v4.setAttribute('color', '#fff' );
       v3.setAttribute('color', '#fff' );
       v2.setAttribute('color', '#fff' );
       v1.setAttribute('color', '#fff' );
       imgSuono3.setAttribute('visible', true );
       imgSuono3.setAttribute('scale', {x:1 ,y:1 ,z:1 } );
       imgSuono2.setAttribute('visible', false );
       imgSuono2.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuono1.setAttribute('visible', false );
       imgSuono1.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuononull.setAttribute('visible', false );
       imgSuononull.setAttribute('scale', {x:-1,y:-1,z:-1} );
      });
    
    
    var v2= document.createElement('a-ring');
    entitySuono.appendChild(v2);
    v2.setAttribute('id','v2');
    v2.setAttribute('segments-theta',500);
    v2.setAttribute('theta-length',17);
    v2.setAttribute('theta-start',108.5);
    v2.setAttribute('material',this.defaultmaterial);
    v2.setAttribute('position',{x:0,y:2.5,z:-4.9});
    v2.setAttribute('radius-inner',0.92);
    v2.setAttribute('radius-outer',1.08);
    v2.setAttribute('scale',{x:2,y:2,z:2});

     v2.addEventListener('click', function () {
       v10.setAttribute('color', '#fff');
       v9.setAttribute('color', '#fff' );
       v8.setAttribute('color', '#fff' );
       v7.setAttribute('color', '#fff' );
       v6.setAttribute('color', '#fff' );
       v5.setAttribute('color', '#fff' );
       v4.setAttribute('color', '#fff' );
       v3.setAttribute('color', '#fff' );
       v2.setAttribute('color', '#fff' );
       v1.setAttribute('color', '#000' );
       imgSuono3.setAttribute('visible', true );
       imgSuono3.setAttribute('scale', {x:1,y:1,z:1} );
       imgSuono2.setAttribute('visible', false );
       imgSuono2.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuono1.setAttribute('visible', false );
       imgSuono1.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuononull.setAttribute('visible', false );
       imgSuononull.setAttribute('scale', {x:-1,y:-1,z:-1} );
      });
    
    
    var v3= document.createElement('a-ring');
    entitySuono.appendChild(v3);
    v3.setAttribute('id','v3');
    v3.setAttribute('segments-theta',500);
    v3.setAttribute('theta-length',17);
    v3.setAttribute('theta-start',126.5);
    v3.setAttribute('material',this.defaultmaterial);
    v3.setAttribute('position',{x:0,y:2.5,z:-4.9});
    v3.setAttribute('radius-inner',0.92);
    v3.setAttribute('radius-outer',1.08);
    v3.setAttribute('scale',{x:2,y:2,z:2});

     v3.addEventListener('click', function () {
       v10.setAttribute('color', '#fff');
       v9.setAttribute('color', '#fff' );
       v8.setAttribute('color', '#fff' );
       v7.setAttribute('color', '#fff' );
       v6.setAttribute('color', '#fff' );
       v5.setAttribute('color', '#fff' );
       v4.setAttribute('color', '#fff' );
       v3.setAttribute('color', '#fff' );
       v2.setAttribute('color', '#000' );
       v1.setAttribute('color', '#000' );
       imgSuono3.setAttribute('visible', true );
       imgSuono3.setAttribute('scale', {x:1,y:1,z:1} );
       imgSuono2.setAttribute('visible', false );
       imgSuono2.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuono1.setAttribute('visible', false );
       imgSuono1.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuononull.setAttribute('visible', false );
       imgSuononull.setAttribute('scale', {x:-1,y:-1,z:-1} );
      });
    
    var v4= document.createElement('a-ring');
    entitySuono.appendChild(v4);
    v4.setAttribute('id','v4');
    v4.setAttribute('segments-theta',500);
    v4.setAttribute('theta-length',17);
    v4.setAttribute('theta-start',144.5);
    v4.setAttribute('material',this.defaultmaterial);
    v4.setAttribute('position',{x:0,y:2.5,z:-4.9});
    v4.setAttribute('radius-inner',0.92);
    v4.setAttribute('radius-outer',1.08);
    v4.setAttribute('scale',{x:2,y:2,z:2});

     v4.addEventListener('click', function () {
       v10.setAttribute('color', '#fff');
       v9.setAttribute('color', '#fff' );
       v8.setAttribute('color', '#fff' );
       v7.setAttribute('color', '#fff' );
       v6.setAttribute('color', '#fff' );
       v5.setAttribute('color', '#fff' );
       v4.setAttribute('color', '#fff' );
       v3.setAttribute('color', '#000' );
       v2.setAttribute('color', '#000' );
       v1.setAttribute('color', '#000' );
       imgSuono3.setAttribute('visible', true );
       imgSuono3.setAttribute('scale', {x:1,y:1,z:1} );
       imgSuono2.setAttribute('visible', false );
       imgSuono2.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuono1.setAttribute('visible', false );
       imgSuono1.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuononull.setAttribute('visible', false );
       imgSuononull.setAttribute('scale', {x:-1,y:-1,z:-1} );
      });
    
    var v5= document.createElement('a-ring');
    entitySuono.appendChild(v5);
    v5.setAttribute('id','v5');
    v5.setAttribute('segments-theta',500);
    v5.setAttribute('theta-length',17);
    v5.setAttribute('theta-start',162.5);
    v5.setAttribute('material',this.defaultmaterial);
    v5.setAttribute('position',{x:0,y:2.5,z:-4.9});
    v5.setAttribute('radius-inner',0.92);
    v5.setAttribute('radius-outer',1.08);
    v5.setAttribute('scale',{x:2,y:2,z:2});

     v5.addEventListener('click', function () {
       v10.setAttribute('color', '#fff');
       v9.setAttribute('color', '#fff' );
       v8.setAttribute('color', '#fff' );
       v7.setAttribute('color', '#fff' );
       v6.setAttribute('color', '#fff' );
       v5.setAttribute('color', '#fff' );
       v4.setAttribute('color', '#000' );
       v3.setAttribute('color', '#000' );
       v2.setAttribute('color', '#000' );
       v1.setAttribute('color', '#000' );
       imgSuono3.setAttribute('visible', false );
       imgSuono3.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuono2.setAttribute('visible', true );
       imgSuono2.setAttribute('scale', {x:1,y:1,z:1} );
       imgSuono1.setAttribute('visible', false );
       imgSuono1.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuononull.setAttribute('visible', false );
       imgSuononull.setAttribute('scale', {x:-1,y:-1,z:-1} );
      });
    
    var v6= document.createElement('a-ring');
    entitySuono.appendChild(v6);
    v6.setAttribute('id','v6');
    v6.setAttribute('segments-theta',500);
    v6.setAttribute('theta-length',17);
    v6.setAttribute('theta-start',180.5);
    v6.setAttribute('material',this.defaultmaterial);
    v6.setAttribute('position',{x:0,y:2.5,z:-4.9});
    v6.setAttribute('radius-inner',0.92);
    v6.setAttribute('radius-outer',1.08);
    v6.setAttribute('scale',{x:2,y:2,z:2});

     v6.addEventListener('click', function () {
       v10.setAttribute('color', '#fff');
       v9.setAttribute('color', '#fff' );
       v8.setAttribute('color', '#fff' );
       v7.setAttribute('color', '#fff' );
       v6.setAttribute('color', '#fff' );
       v5.setAttribute('color', '#000' );
       v4.setAttribute('color', '#000' );
       v3.setAttribute('color', '#000' );
       v2.setAttribute('color', '#000' );
       v1.setAttribute('color', '#000' );
       imgSuono3.setAttribute('visible', false );
       imgSuono3.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuono2.setAttribute('visible', true );
       imgSuono2.setAttribute('scale', {x:1,y:1,z:1} );
       imgSuono1.setAttribute('visible', false );
       imgSuono1.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuononull.setAttribute('visible', false );
       imgSuononull.setAttribute('scale', {x:-1,y:-1,z:-1} );
      });
    
    
     var v7= document.createElement('a-ring');
    entitySuono.appendChild(v7);
    v7.setAttribute('id','v7');
    v7.setAttribute('segments-theta',500);
    v7.setAttribute('theta-length',17);
    v7.setAttribute('theta-start',198.5);
    v7.setAttribute('material',this.defaultmaterial);
    v7.setAttribute('position',{x:0,y:2.5,z:-4.9});
    v7.setAttribute('radius-inner',0.92);
    v7.setAttribute('radius-outer',1.08);
    v7.setAttribute('scale',{x:2,y:2,z:2});

     v7.addEventListener('click', function () {
       v10.setAttribute('color', '#fff');
       v9.setAttribute('color', '#fff' );
       v8.setAttribute('color', '#fff' );
       v7.setAttribute('color', '#fff' );
       v6.setAttribute('color', '#000' );
       v5.setAttribute('color', '#000' );
       v4.setAttribute('color', '#000' );
       v3.setAttribute('color', '#000' );
       v2.setAttribute('color', '#000' );
       v1.setAttribute('color', '#000' );
       imgSuono3.setAttribute('visible', false );
       imgSuono3.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuono2.setAttribute('visible', true );
       imgSuono2.setAttribute('scale', {x:1,y:1,z:1} );
       imgSuono1.setAttribute('visible', false );
       imgSuono1.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuononull.setAttribute('visible', false );
       imgSuononull.setAttribute('scale', {x:-1,y:-1,z:-1} );
      });
    
    
     var v8= document.createElement('a-ring');
    entitySuono.appendChild(v8);
    v8.setAttribute('id','v8');
    v8.setAttribute('segments-theta',500);
    v8.setAttribute('theta-length',17);
    v8.setAttribute('theta-start',216.5);
    v8.setAttribute('material',this.defaultmaterial);
    v8.setAttribute('position',{x:0,y:2.5,z:-4.9});
    v8.setAttribute('radius-inner',0.92);
    v8.setAttribute('radius-outer',1.08);
    v8.setAttribute('scale',{x:2,y:2,z:2});

     v8.addEventListener('click', function () {
       v10.setAttribute('color', '#fff');
       v9.setAttribute('color', '#fff' );
       v8.setAttribute('color', '#fff' );
       v7.setAttribute('color', '#000' );
       v6.setAttribute('color', '#000' );
       v5.setAttribute('color', '#000' );
       v4.setAttribute('color', '#000' );
       v3.setAttribute('color', '#000' );
       v2.setAttribute('color', '#000' );
       v1.setAttribute('color', '#000' );
       imgSuono3.setAttribute('visible', false );
       imgSuono3.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuono2.setAttribute('visible', false );
       imgSuono2.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuono1.setAttribute('visible', true );
       imgSuono1.setAttribute('scale', {x:1,y:1,z:1} );
       imgSuononull.setAttribute('visible', false );
       imgSuononull.setAttribute('scale', {x:-1,y:-1,z:-1} );
      });
    
    
    
     var v9= document.createElement('a-ring');
    entitySuono.appendChild(v9);
    v9.setAttribute('id','v9');
    v9.setAttribute('segments-theta',500);
    v9.setAttribute('theta-length',17);
    v9.setAttribute('theta-start',234.5);
    v9.setAttribute('material',this.defaultmaterial);
    v9.setAttribute('position',{x:0,y:2.5,z:-4.9});
    v9.setAttribute('radius-inner',0.92);
    v9.setAttribute('radius-outer',1.08);
    v9.setAttribute('scale',{x:2,y:2,z:2});

     v9.addEventListener('click', function () {
       v10.setAttribute('color', '#fff');
       v9.setAttribute('color', '#fff' );
       v8.setAttribute('color', '#000' );
       v7.setAttribute('color', '#000' );
       v6.setAttribute('color', '#000' );
       v5.setAttribute('color', '#000' );
       v4.setAttribute('color', '#000' );
       v3.setAttribute('color', '#000' );
       v2.setAttribute('color', '#000' );
       v1.setAttribute('color', '#000' );
       imgSuono3.setAttribute('visible', false );
       imgSuono3.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuono2.setAttribute('visible', false );
       imgSuono2.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuono1.setAttribute('visible', true );
       imgSuono1.setAttribute('scale', {x:1,y:1,z:1} );
       imgSuononull.setAttribute('visible', false );
       imgSuononull.setAttribute('scale', {x:-1,y:-1,z:-1} );
      });
    
    var v10= document.createElement('a-ring');
    entitySuono.appendChild(v10);
    v10.setAttribute('id','v10');
    v10.setAttribute('segments-theta',500);
    v10.setAttribute('theta-length',17);
    v10.setAttribute('theta-start',252.5);
    v10.setAttribute('material',this.defaultmaterial);
    v10.setAttribute('position',{x:0,y:2.5,z:-4.9});
    v10.setAttribute('radius-inner',0.92);
    v10.setAttribute('radius-outer',1.08);
    v10.setAttribute('scale',{x:2,y:2,z:2});

     v10.addEventListener('click', function () {
       v10.setAttribute('color', '#fff');
       v9.setAttribute('color', '#000' );
       v8.setAttribute('color', '#000' );
       v7.setAttribute('color', '#000' );
       v6.setAttribute('color', '#000' );
       v5.setAttribute('color', '#000' );
       v4.setAttribute('color', '#000' );
       v3.setAttribute('color', '#000' );
       v2.setAttribute('color', '#000' );
       v1.setAttribute('color', '#000' );
       imgSuono3.setAttribute('visible', false );
       imgSuono3.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuono2.setAttribute('visible', false );
       imgSuono2.setAttribute('scale', {x:-1,y:-1,z:-1} );
       imgSuono1.setAttribute('visible', true );
       imgSuono1.setAttribute('scale', {x:1,y:1,z:1} );
       imgSuononull.setAttribute('visible', false );
       imgSuononull.setAttribute('scale', {x:-1,y:-1,z:-1} );
      });
    
    /**************************************************************************************************/
    /**************************************************************************************************/
    /***                                        Tastiera                                            ***/
    /**************************************************************************************************/
    /**************************************************************************************************/
    
    var entityTastiera= document.createElement('a-entity');
    entityTastiera.setAttribute('id', 'tastiera');
    entityTastiera.setAttribute('visible', false);
    entityTastiera.setAttribute('position', {x: 0,y: 0.9,z: 0});
    entityTastiera.setAttribute('scale', {x: -1,y: -1,z: -1});
    scene.appendChild(entityTastiera);
    
     /***Cerchio esterno
    *** @ringZero = contiene il valore 0 della tastiera
    *** @id = setto l'id della tastiera numerica
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
    ***/
    
    var ringZero = document.createElement('a-ring');
    ringZero.setAttribute('id', "zero");
    ringZero.setAttribute('segments-theta', 500);
    ringZero.setAttribute('theta-length', 12.4);
    ringZero.setAttribute('theta-start', -6.2);
    ringZero.setAttribute('material', this.defaultmaterial);
    ringZero.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringZero.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringZero.addEventListener('mouseenter', function () {
        ringZero.setAttribute('color', '#fff');
      });
      ringZero.addEventListener('mouseleave', function () {
        ringZero.setAttribute('color', '#000');
      });   
    entityTastiera.appendChild(ringZero);
   
    /**@aTextZero = contiene il valore 0 della tastiera**/
    var aTextZero = document.createElement('a-text');
    aTextZero.setAttribute('value', 0);
    aTextZero.setAttribute('color', "#ffffff");
    aTextZero.setAttribute('position', {x: 0.92,y: 0,z: 0.01});
    aTextZero.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1 });
      
    ringZero.appendChild(aTextZero);
    
    /**@ringUno = contiene il valore 1 della tastiera**/
    
    var ringUno = document.createElement('a-ring');
    ringUno.setAttribute('id', "uno");
    ringUno.setAttribute('segments-theta', 500);
    ringUno.setAttribute('theta-length', 12.4);
    ringUno.setAttribute('theta-start', -18.6);
    ringUno.setAttribute('material', this.defaultmaterial);
    ringUno.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringUno.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringUno.addEventListener('mouseenter', function () {
        ringUno.setAttribute('color', '#fff');
      });
      ringUno.addEventListener('mouseleave', function () {
        ringUno.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringUno);
    
    
    /**@aTextUno = contiene il valore 0 della tastiera**/
    
    var aTextUno = document.createElement('a-text');
    aTextUno.setAttribute('value', 1);
    aTextUno.setAttribute('color', "#ffffff");
    aTextUno.setAttribute('position', {x:0.91,y:  -0.21,z: 0.01});
    aTextUno.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1 });
      
    ringUno.appendChild(aTextUno);
    
    
     /**@ringDue = contiene il valore 2 della tastiera
   **/
    
    var ringDue = document.createElement('a-ring');
    ringDue.setAttribute('id', "due");
    ringDue.setAttribute('segments-theta', 500);
    ringDue.setAttribute('theta-length', 12.4);
    ringDue.setAttribute('theta-start', -31);
    ringDue.setAttribute('material', this.defaultmaterial);
    ringDue.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringDue.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringDue.addEventListener('mouseenter', function () {
        ringDue.setAttribute('color', '#fff');
      });
      ringDue.addEventListener('mouseleave', function () {
        ringDue.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringDue);
    
    
    /**@aTextUDue = contiene il valore 2 della tastiera
    **/
    
    var aTextDue = document.createElement('a-text');
    aTextDue.setAttribute('value', 2);
    aTextDue.setAttribute('color', "#ffffff");
    aTextDue.setAttribute('position', {x: 0.845,y: -0.412,z: 0.01});
    aTextDue.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1});
    
    aTextDue.addEventListener('mouseenter', function () {
        ringDue.setAttribute('color', '#fff');
      });
      aTextDue.addEventListener('mouseleave', function () {
        ringDue.setAttribute('color', '#000');
      });
      
    ringDue.appendChild(aTextDue);
    
    /**@ringTre = contiene il valore 3 della tastiera**/
    
    var ringTre = document.createElement('a-ring');
    ringTre.setAttribute('id', "tre");
    ringTre.setAttribute('segments-theta', 500);
    ringTre.setAttribute('theta-length', 12.4);
    ringTre.setAttribute('theta-start', -43.4);
    ringTre.setAttribute('material', this.defaultmaterial);
    ringTre.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringTre.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringTre.addEventListener('mouseenter', function () {
        ringTre.setAttribute('color', '#fff');
      });
    ringTre.addEventListener('mouseleave', function () {
        ringTre.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringTre);
    
     /**@aTextTre = contiene il valore 3 della tastiera
    **/
    
    var aTextTre = document.createElement('a-text');
    aTextTre.setAttribute('value', 3);
    aTextTre.setAttribute('color', "#ffffff");
    aTextTre.setAttribute('position', {x: 0.75,y: -0.61,z: 0.01});
    aTextTre.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1});
      
    ringTre.appendChild(aTextTre);
    
    
    
    
    /**@ringQuattro = contiene il valore 4 della tastiera**/
    
    var ringQuattro = document.createElement('a-ring');
    ringQuattro.setAttribute('id', "quattro");
    ringQuattro.setAttribute('segments-theta', 500);
    ringQuattro.setAttribute('theta-length', 12.4);
    ringQuattro.setAttribute('theta-start', -55.8);
    ringQuattro.setAttribute('material', this.defaultmaterial);
    ringQuattro.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringQuattro.setAttribute('scale', {x: 2,y: 2,z: 2  });
    
    ringQuattro.addEventListener('mouseenter', function () {
        ringQuattro.setAttribute('color', '#fff');
      });
    ringQuattro.addEventListener('mouseleave', function () {
        ringQuattro.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringQuattro);
    
    /**@aTextQuattro = contiene il valore 4 della tastiera**/
    
    var aTextQuattro = document.createElement('a-text');
    aTextQuattro.setAttribute('value', 4);
    aTextQuattro.setAttribute('color', "#ffffff");
    aTextQuattro.setAttribute('position', {x: 0.585,y: -0.76,z: 0.01});
    aTextQuattro.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1});
    
    ringQuattro.appendChild(aTextQuattro);
    
    
    /**@ringCinque = contiene il valore 5 della tastiera
    **/
    
    var ringCinque = document.createElement('a-ring');
    ringCinque.setAttribute('id', "cinque");
    ringCinque.setAttribute('segments-theta', 500);
    ringCinque.setAttribute('theta-length', 12.4);
    ringCinque.setAttribute('theta-start', -68.2);
    ringCinque.setAttribute('material', this.defaultmaterial);
    ringCinque.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringCinque.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringCinque.addEventListener('mouseenter', function () {
        ringCinque.setAttribute('color', '#fff');
      });
      ringCinque.addEventListener('mouseleave', function () {
        ringCinque.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringCinque);
    
    /**@aTextCinque = contiene il valore 5 della tastiera
    **/
    
    var aTextCinque = document.createElement('a-text');
    aTextCinque.setAttribute('value', 5);
    aTextCinque.setAttribute('color', "#ffffff");
    aTextCinque.setAttribute('position', {x: 0.41,y: -0.885,z: 0.01});
    aTextCinque.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1});
    
    ringCinque.appendChild(aTextCinque);
    
    
    /**@ringSei = contiene il valore 6 della tastiera
    **/
    
    var ringSei = document.createElement('a-ring');
    ringSei.setAttribute('id', "sei");
    ringSei.setAttribute('segments-theta', 500);
    ringSei.setAttribute('theta-length', 12.4);
    ringSei.setAttribute('theta-start', -80.6);
    ringSei.setAttribute('material', this.defaultmaterial);
    ringSei.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringSei.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringSei.addEventListener('mouseenter', function () {
        ringSei.setAttribute('color', '#fff');
      });
      ringSei.addEventListener('mouseleave', function () {
        ringSei.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringSei);
    
    /**@aTextSei = contiene il valore 6 della tastiera
    **/
    
    var aTextSei = document.createElement('a-text');
    aTextSei.setAttribute('value', 6);
    aTextSei.setAttribute('color', "#ffffff");
    aTextSei.setAttribute('position', {x: 0.19,y: -0.96,z: 0.01});
    aTextSei.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1});
    
    ringSei.appendChild(aTextSei);
    
    
    /**@ringSette = contiene il valore 7 della tastiera
    **/
    
    var ringSette = document.createElement('a-ring');
    ringSette.setAttribute('id', "sette");
    ringSette.setAttribute('segments-theta', 500);
    ringSette.setAttribute('theta-length', 12.4);
    ringSette.setAttribute('theta-start', -93);
    ringSette.setAttribute('material', this.defaultmaterial);
    ringSette.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringSette.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringSette.addEventListener('mouseenter', function () {
        ringSette.setAttribute('color', '#fff');
      });
    ringSette.addEventListener('mouseleave', function () {
        ringSette.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringSette);
    
    /**@aTextSette = contiene il valore 7 della tastiera
    **/
    
    var aTextSette = document.createElement('a-text');
    aTextSette.setAttribute('value', 7);
    aTextSette.setAttribute('color', "#ffffff");
    aTextSette.setAttribute('position', {x: -0.025,y: -1.01,z: 0.01});
    aTextSette.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1});
      
    ringSette.appendChild(aTextSette);
    
    
    /**@ringOtto = contiene il valore 8 della tastiera
    **/
    
    var ringOtto = document.createElement('a-ring');
    ringOtto.setAttribute('id', "otto");
    ringOtto.setAttribute('segments-theta', 500);
    ringOtto.setAttribute('theta-length', 12.4);
    ringOtto.setAttribute('theta-start', -105.4);
    ringOtto.setAttribute('material', this.defaultmaterial);
    ringOtto.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringOtto.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringOtto.addEventListener('mouseenter', function () {
        ringOtto.setAttribute('color', '#fff');
      });
    ringOtto.addEventListener('mouseleave', function () {
        ringOtto.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringOtto);
    
    /**@aTextOtto = contiene il valore 8 della tastiera
    **/
    
    var aTextOtto = document.createElement('a-text');
    aTextOtto.setAttribute('value', 8);
    aTextOtto.setAttribute('color', "#ffffff");
    aTextOtto.setAttribute('position', {x: -0.25,y: -0.985,z: 0.01});
    aTextOtto.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1  });
      
    ringOtto.appendChild(aTextOtto);
    
    
    
    
    /**@ringNove = contiene il valore 9 della tastiera
    **/
    
    var ringNove = document.createElement('a-ring');
    ringNove.setAttribute('id', "nove");
    ringNove.setAttribute('segments-theta', 500);
    ringNove.setAttribute('theta-length', 12.4);
    ringNove.setAttribute('theta-start', -117.8);
    ringNove.setAttribute('material', this.defaultmaterial);
    ringNove.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringNove.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringNove.addEventListener('mouseenter', function () {
        ringNove.setAttribute('color', '#fff');
      });
    ringNove.addEventListener('mouseleave', function () {
        ringNove.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringNove);
    
    /**@aTextNove = contiene il valore 9 della tastiera
    **/
    
    var aTextNove = document.createElement('a-text');
    aTextNove.setAttribute('value', 9);
    aTextNove.setAttribute('color', "#ffffff");
    aTextNove.setAttribute('position', {x: -0.45 ,y: -0.929,z: 0.01});
    aTextNove.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1});
      
    ringNove.appendChild(aTextNove);
    
    
    /**@ringPunto = contiene il valore . della tastiera
    **/
    
    var ringPunto = document.createElement('a-ring');
    ringPunto.setAttribute('id', "punto");
    ringPunto.setAttribute('segments-theta', 500);
    ringPunto.setAttribute('theta-length', 12.4);
    ringPunto.setAttribute('theta-start', -130.2);
    ringPunto.setAttribute('material', this.defaultmaterial);
    ringPunto.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringPunto.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringPunto.addEventListener('mouseenter', function () {
        ringPunto.setAttribute('color', '#fff');
      });
    ringPunto.addEventListener('mouseleave', function () {
        ringPunto.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringPunto);
    
    /**@aTextPunto = contiene il valore . della tastiera
    **/
    
    var aTextPunto = document.createElement('a-text');
    aTextPunto.setAttribute('value', ".");
    aTextPunto.setAttribute('color', "#ffffff");
    aTextPunto.setAttribute('position', {x: -0.64,y: -0.82,z: 0.01});
    aTextPunto.setAttribute('scale', {x: 1,y: 1,z: 1.01});
      
    ringPunto.appendChild(aTextPunto);
    
    
    
    /**@ringVirgola = contiene il valore , della tastiera
    **/
    
    var ringVirgola = document.createElement('a-ring');
    ringVirgola.setAttribute('id', "virgola");
    ringVirgola.setAttribute('segments-theta', 500);
    ringVirgola.setAttribute('theta-length', 12.4);
    ringVirgola.setAttribute('theta-start', -142.6);
    ringVirgola.setAttribute('material', this.defaultmaterial);
    ringVirgola.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringVirgola.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringVirgola.addEventListener('mouseenter', function () {
        ringVirgola.setAttribute('color', '#fff');
      });
    ringVirgola.addEventListener('mouseleave', function () {
        ringVirgola.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringVirgola);
    
    /**@aTextVirgola = contiene il valore , della tastiera
    **/
    
    var aTextVirgola = document.createElement('a-text');
    aTextVirgola.setAttribute('value', ",");
    aTextVirgola.setAttribute('color', "#ffffff");
    aTextVirgola.setAttribute('position', {x: -0.79,y: -0.67,z: 0.01});
    aTextVirgola.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1});
    
    ringVirgola.appendChild(aTextVirgola);
    
    
    
    
    /**@ringPuntoVirgola = contiene il valore ; della tastiera
    **/
    
    var ringPuntoVirgola = document.createElement('a-ring');
    ringPuntoVirgola.setAttribute('id', "puntovirgola");
    ringPuntoVirgola.setAttribute('segments-theta', 500);
    ringPuntoVirgola.setAttribute('theta-length', 12.4);
    ringPuntoVirgola.setAttribute('theta-start', -155);
    ringPuntoVirgola.setAttribute('material', this.defaultmaterial);
    ringPuntoVirgola.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringPuntoVirgola.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringPuntoVirgola.addEventListener('mouseenter', function () {
        ringPuntoVirgola.setAttribute('color', '#fff');
      });
    ringPuntoVirgola.addEventListener('mouseleave', function () {
        ringPuntoVirgola.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringPuntoVirgola);
    
    /**@aTextPuntoVirgola = contiene il valore ; della tastiera
    **/
    
    var aTextPuntoVirgola = document.createElement('a-text');
    aTextPuntoVirgola.setAttribute('value', ";");
    aTextPuntoVirgola.setAttribute('color', "#ffffff");
    aTextPuntoVirgola.setAttribute('position', {x: -0.95,y: -0.5,z: 0.01});
    aTextPuntoVirgola.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1});
      
    ringPuntoVirgola.appendChild(aTextPuntoVirgola);
    
       
    /**@ringDuepunti = contiene il valore : della tastiera
    **/
    
    var ringDuepunti = document.createElement('a-ring');
    ringDuepunti.setAttribute('id', "duepunti");
    ringDuepunti.setAttribute('segments-theta', 500);
    ringDuepunti.setAttribute('theta-length', 12.4);
    ringDuepunti.setAttribute('theta-start', -167.4);
    ringDuepunti.setAttribute('material', this.defaultmaterial);
    ringDuepunti.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringDuepunti.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringDuepunti.addEventListener('mouseenter', function () {
        ringDuepunti.setAttribute('color', '#fff');
      });
    ringDuepunti.addEventListener('mouseleave', function () {
        ringDuepunti.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringDuepunti);
    
    /**@aTextDuepunti = contiene il valore : della tastiera
    **/
    
    var aTextDuepunti = document.createElement('a-text');
    aTextDuepunti.setAttribute('value', ":");
    aTextDuepunti.setAttribute('color', "#ffffff");
    aTextDuepunti.setAttribute('position', {x: -1.01,y: -0.305,z: 0.01});
    aTextDuepunti.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1});
    
    ringDuepunti.appendChild(aTextDuepunti);
    
    
    
    /**@ringTrattobasso= contiene il valore _ della tastiera
    **/
    
    var ringTrattobasso = document.createElement('a-ring');
    ringTrattobasso.setAttribute('id', "trattobasso");
    ringTrattobasso.setAttribute('segments-theta', 500);
    ringTrattobasso.setAttribute('theta-length', 12.4);
    ringTrattobasso.setAttribute('theta-start', -179.8);
    ringTrattobasso.setAttribute('material', this.defaultmaterial);
    ringTrattobasso.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringTrattobasso.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringTrattobasso.addEventListener('mouseenter', function () {
        ringTrattobasso.setAttribute('color', '#fff');
      });
    ringTrattobasso.addEventListener('mouseleave', function () {
        ringTrattobasso.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringTrattobasso);
    
    /**@aTextTrattobasso = contiene il valore _ della tastiera
    **/
    
    var aTextTrattobasso = document.createElement('a-text');
    aTextTrattobasso.setAttribute('value', "_");
    aTextTrattobasso.setAttribute('color', "#ffffff");
    aTextTrattobasso.setAttribute('position', {x: -1.065,y: 0,z: 0.01});
    aTextTrattobasso.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1});
      
    ringTrattobasso.appendChild(aTextTrattobasso);
    
    
     /**@ringVirgoletta = contiene il valore " della tastiera
    **/
    
    var ringVirgoletta = document.createElement('a-ring');
    ringVirgoletta.setAttribute('id', "virgoletta");
    ringVirgoletta.setAttribute('segments-theta', 500);
    ringVirgoletta.setAttribute('theta-length', 12.4);
    ringVirgoletta.setAttribute('theta-start', -192.2);
    ringVirgoletta.setAttribute('material', this.defaultmaterial);
    ringVirgoletta.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringVirgoletta.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringVirgoletta.addEventListener('mouseenter', function () {
        ringVirgoletta.setAttribute('color', '#fff');
      });
    ringVirgoletta.addEventListener('mouseleave', function () {
        ringVirgoletta.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringVirgoletta);
    
    /**@aTextVirgoletta = contiene il valore " della tastiera
    **/
    
    var aTextVirgoletta = document.createElement('a-text');
    aTextVirgoletta.setAttribute('value', "\""); ////DA VERIFICARE
    aTextVirgoletta.setAttribute('color', "#ffffff");
    aTextVirgoletta.setAttribute('position', {x: -1.051, y:0.11,z: 0.01});
    aTextVirgoletta.setAttribute('scale', {x: 0.8,y: 0.8,z: 0.1});
    
    ringVirgoletta.appendChild(aTextVirgoletta);
    
    
    
  
    /**@ringMeno = contiene il valore - della tastiera
    **/
    
    var ringMeno = document.createElement('a-ring');
    ringMeno.setAttribute('id', "meno");
    ringMeno.setAttribute('segments-theta', 500);
    ringMeno.setAttribute('theta-length', 12.4);
    ringMeno.setAttribute('theta-start', -204.6);
    ringMeno.setAttribute('material', this.defaultmaterial);
    ringMeno.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringMeno.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringMeno.addEventListener('mouseenter', function () {
        ringMeno.setAttribute('color', '#fff');
      });
    ringMeno.addEventListener('mouseleave', function () {
        ringMeno.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringMeno);
    
    /**@aTextMeno = contiene il valore - della tastiera
    **/
    
    var aTextMeno = document.createElement('a-text');
    aTextMeno.setAttribute('value', "-"); ////DA VERIFICARE
    aTextMeno.setAttribute('color', "#ffffff");
    aTextMeno.setAttribute('position', { x: -1.025, y: 0.325, z: 0.01});
    aTextMeno.setAttribute('scale', { x: 0.8,y: 0.8,z: 0.1});
      
    ringMeno.appendChild(aTextMeno);
    
        
    /**@ringPiu = contiene il valore + della tastiera
    **/
    
    var ringPiu = document.createElement('a-ring');
    ringPiu.setAttribute('id', "piu");
    ringPiu.setAttribute('segments-theta', 500);
    ringPiu.setAttribute('theta-length', 12.4);
    ringPiu.setAttribute('theta-start', -217);
    ringPiu.setAttribute('material', this.defaultmaterial);
    ringPiu.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringPiu.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringPiu.addEventListener('mouseenter', function () {
        ringPiu.setAttribute('color', '#fff');
      });
    ringPiu.addEventListener('mouseleave', function () {
        ringPiu.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringPiu);
    
    /**@aTextPiu= contiene il valore + della tastiera
    **/
    
    var aTextPiu = document.createElement('a-text');
    aTextPiu.setAttribute('value', "+"); ////DA VERIFICARE
    aTextPiu.setAttribute('color', "#ffffff");
    aTextPiu.setAttribute('position', { x: -0.931, y: 0.524, z: 0.01});
    aTextPiu.setAttribute('scale', { x: 0.8,y: 0.8,z: 0.1});
      
    ringPiu.appendChild(aTextPiu);
    
    
    
    /**@ringPer = contiene il valore * della tastiera
    **/
    
    var ringPer = document.createElement('a-ring');
    ringPer.setAttribute('id', "per");
    ringPer.setAttribute('segments-theta', 500);
    ringPer.setAttribute('theta-length', 12.4);
    ringPer.setAttribute('theta-start', -229.4);
    ringPer.setAttribute('material', this.defaultmaterial);
    ringPer.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringPer.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringPer.addEventListener('mouseenter', function () {
        ringPer.setAttribute('color', '#fff');
      });
    ringPer.addEventListener('mouseleave', function () {
        ringPer.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringPer);
    
    /**@aTextPer = contiene il valore * della tastiera
    **/
    
    var aTextPer = document.createElement('a-text');
    aTextPer.setAttribute('value', "*"); ////DA VERIFICARE
    aTextPer.setAttribute('color', "#ffffff");
    aTextPer.setAttribute('position', { x: -0.81, y: 0.69, z: 0.01});
    aTextPer.setAttribute('scale', { x: 0.8,y: 0.8,z: 0.1});
      
    ringPer.appendChild(aTextPer);
    
    
    
    /**@ringDiviso= contiene il valore / della tastiera
    **/
    
    var ringDiviso = document.createElement('a-ring');
    ringDiviso.setAttribute('id', "piu");
    ringDiviso.setAttribute('segments-theta', 500);
    ringDiviso.setAttribute('theta-length', 12.4);
    ringDiviso.setAttribute('theta-start', -241.8);
    ringDiviso.setAttribute('material', this.defaultmaterial);
    ringDiviso.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringDiviso.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringDiviso.addEventListener('mouseenter', function () {
        ringDiviso.setAttribute('color', '#fff');
      });
    ringDiviso.addEventListener('mouseleave', function () {
        ringDiviso.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringDiviso);
    
    /**@aTextDiviso= contiene il valore / della tastiera
    **/
    
    var aTextDiviso = document.createElement('a-text');
    aTextDiviso.setAttribute('value', "/"); 
    aTextDiviso.setAttribute('color', "#ffffff");
    aTextDiviso.setAttribute('position', { x: -0.65, y: 0.82, z: 0.01});
    aTextDiviso.setAttribute('scale', { x: 0.8,y: 0.8,z: 0.1});
    
    ringDiviso.appendChild(aTextDiviso);
    
    
    /**@ringBackSlash = contiene il valore \ della tastiera
    **/
    
    var ringBackSlash = document.createElement('a-ring');
    ringBackSlash.setAttribute('id', "backslash");
    ringBackSlash.setAttribute('segments-theta', 500);
    ringBackSlash.setAttribute('theta-length', 12.4);
    ringBackSlash.setAttribute('theta-start', -254.2);
    ringBackSlash.setAttribute('material', this.defaultmaterial);
    ringBackSlash.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringBackSlash.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringBackSlash.addEventListener('mouseenter', function () {
        ringBackSlash.setAttribute('color', '#fff');
      });
    ringBackSlash.addEventListener('mouseleave', function () {
        ringBackSlash.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringBackSlash);
    
    /**@aTextBackSlash= contiene il valore \ della tastiera
    **/
    
    var aTextBackSlash = document.createElement('a-text');
    aTextBackSlash.setAttribute('value', '\\'); 
    aTextBackSlash.setAttribute('color', "#ffffff");
    aTextBackSlash.setAttribute('position', { x: -0.46, y: 0.926, z: 0.01});
    aTextBackSlash.setAttribute('scale', { x: 0.8,y: 0.8,z: 0.1});
    
    ringBackSlash.appendChild(aTextBackSlash);
    
    
    
    
    /**@ringUguale = contiene il valore = della tastiera
    **/
    
    var ringUguale = document.createElement('a-ring');
    ringUguale.setAttribute('id', "uguale");
    ringUguale.setAttribute('segments-theta', 500);
    ringUguale.setAttribute('theta-length', 12.4);
    ringUguale.setAttribute('theta-start', -266.6);
    ringUguale.setAttribute('material', this.defaultmaterial);
    ringUguale.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringUguale.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringUguale.addEventListener('mouseenter', function () {
        ringUguale.setAttribute('color', '#fff');
      });
    ringUguale.addEventListener('mouseleave', function () {
        ringUguale.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringUguale);
    
    /**@aTextUguale = contiene il valore = della tastiera
    **/
    
    var aTextUguale = document.createElement('a-text');
    aTextUguale.setAttribute('value', "="); 
    aTextUguale.setAttribute('color', "#ffffff");
    aTextUguale.setAttribute('position', { x: -0.25, y: 0.985, z: 0.01});
    aTextUguale.setAttribute('scale', { x: 0.8,y: 0.8,z: 0.1});
      
    ringUguale.appendChild(aTextUguale);
    
    
    /**@ringChiocciola = contiene il valore @ della tastiera
    **/
    
    var ringChiocciola = document.createElement('a-ring');
    ringChiocciola.setAttribute('id', "chiocciola");
    ringChiocciola.setAttribute('segments-theta', 500);
    ringChiocciola.setAttribute('theta-length', 12.4);
    ringChiocciola.setAttribute('theta-start', -279);
    ringChiocciola.setAttribute('material', this.defaultmaterial);
    ringChiocciola.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringChiocciola.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringChiocciola.addEventListener('mouseenter', function () {
        ringChiocciola.setAttribute('color', '#fff');
      });
    ringChiocciola.addEventListener('mouseleave', function () {
        ringChiocciola.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringChiocciola);
    
    /**@aTextChiocciola = contiene il valore @ della tastiera
    **/
    
    var aTextChiocciola = document.createElement('a-text');
    aTextChiocciola.setAttribute('value', "@"); 
    aTextChiocciola.setAttribute('color', "#ffffff");
    aTextChiocciola.setAttribute('position', { x: -0.05, y: 1.016, z: 0.01});
    aTextChiocciola.setAttribute('scale', { x: 0.8,y: 0.8,z: 0.1});
    
    ringChiocciola.appendChild(aTextChiocciola);
    
    
    /**@ringTonda1 = contiene il valore ( della tastiera
    **/
    
    var ringTonda1 = document.createElement('a-ring');
    ringTonda1.setAttribute('id', "backslash");
    ringTonda1.setAttribute('segments-theta', 500);
    ringTonda1.setAttribute('theta-length', 12.4);
    ringTonda1.setAttribute('theta-start', -291.4);
    ringTonda1.setAttribute('material', this.defaultmaterial);
    ringTonda1.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringTonda1.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringTonda1.addEventListener('mouseenter', function () {
        ringTonda1.setAttribute('color', '#fff');
      });
    ringTonda1.addEventListener('mouseleave', function () {
        ringTonda1.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringTonda1);
    
    /**@aTextTonda1 = contiene il valore ( della tastiera
    **/
    
    var aTextTonda1 = document.createElement('a-text');
    aTextTonda1.setAttribute('value', "("); 
    aTextTonda1.setAttribute('color', "#ffffff");
    aTextTonda1.setAttribute('position', { x: 0.18, y: 0.98, z: 0.01  });
    aTextTonda1.setAttribute('scale', { x: 0.8 , y: 0.8,z: 0.1});
   
    ringTonda1.appendChild(aTextTonda1);
    
    
    
    /**@ringTonda2 = contiene il valore ) della tastiera
    **/
    
    var ringTonda2 = document.createElement('a-ring');
    ringTonda2.setAttribute('id', "tonda2");
    ringTonda2.setAttribute('segments-theta', 500);
    ringTonda2.setAttribute('theta-length', 12.4);
    ringTonda2.setAttribute('theta-start', -303.8);
    ringTonda2.setAttribute('material', this.defaultmaterial);
    ringTonda2.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringTonda2.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringTonda2.addEventListener('mouseenter', function () {
        ringTonda2.setAttribute('color', '#fff');
      });
    ringTonda2.addEventListener('mouseleave', function () {
        ringTonda2.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringTonda2);
    
    /**@aTextTonda2 = contiene il valore ) della tastiera
    **/
    
    var aTextTonda2 = document.createElement('a-text');
    aTextTonda2.setAttribute('value', ")"); 
    aTextTonda2.setAttribute('color', "#ffffff");
    aTextTonda2.setAttribute('position', { x: 0.375, y: 0.89, z: 0.01});
    aTextTonda2.setAttribute('scale', { x: 0.8,y: 0.8,z: 0.1});
    
    ringTonda2.appendChild(aTextTonda2);
    
    
    
    
    /**@ringEsclamativo = contiene il valore ! della tastiera
    **/
    
    var ringEsclamativo = document.createElement('a-ring');
    ringEsclamativo.setAttribute('id', "esclamativo");
    ringEsclamativo.setAttribute('segments-theta', 500);
    ringEsclamativo.setAttribute('theta-length', 12.4);
    ringEsclamativo.setAttribute('theta-start', -316.2);
    ringEsclamativo.setAttribute('material', this.defaultmaterial);
    ringEsclamativo.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringEsclamativo.setAttribute('scale', {x: 2,     y: 2,z: 2});
    
    ringEsclamativo.addEventListener('mouseenter', function () {
        ringEsclamativo.setAttribute('color', '#fff');
      });
    ringEsclamativo.addEventListener('mouseleave', function () {
        ringEsclamativo.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringEsclamativo);
    
    /**@aTextEsclamativo = contiene il valore ! della tastiera
    **/
    
    var aTextEsclamativo = document.createElement('a-text');
    aTextEsclamativo.setAttribute('value', "!"); 
    aTextEsclamativo.setAttribute('color', "#ffffff");
    aTextEsclamativo.setAttribute('position', { x:0.55 , y: 0.78, z: 0.01});
    aTextEsclamativo.setAttribute('scale', { x: 0.8,y: 0.8,z: 0.1});
    
    ringEsclamativo.appendChild(aTextEsclamativo);
    
    
        
    /**@ringPercento = contiene il valore % della tastiera
    **/
    
    var ringPercento = document.createElement('a-ring');
    ringPercento.setAttribute('id', "percento");
    ringPercento.setAttribute('segments-theta', 500);
    ringPercento.setAttribute('theta-length', 12.4);
    ringPercento.setAttribute('theta-start', -328.6);
    ringPercento.setAttribute('material', this.defaultmaterial);
    ringPercento.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringPercento.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringPercento.addEventListener('mouseenter', function () {
        ringPercento.setAttribute('color', '#fff');
      });
    ringPercento.addEventListener('mouseleave', function () {
        ringPercento.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringPercento);
    
    /**@aTextPercento = contiene il valore % della tastiera
    **/
    
    var aTextPercento = document.createElement('a-text');
    aTextPercento.setAttribute('value', "%"); 
    aTextPercento.setAttribute('color', "#ffffff");
    aTextPercento.setAttribute('position', { x: 0.7, y: 0.65, z: 0.01});
    aTextPercento.setAttribute('scale', { x: 0.8,y: 0.8,z: 0.1});
      
    ringPercento.appendChild(aTextPercento);
    
    
    
    
    
  /**@ringECommerciale = contiene il valore & della tastiera
    **/
    
    var ringECommerciale = document.createElement('a-ring');
    ringECommerciale.setAttribute('id', "ecommerciale");
    ringECommerciale.setAttribute('segments-theta', 500);
    ringECommerciale.setAttribute('theta-length', 12.4);
    ringECommerciale.setAttribute('theta-start', -341);
    ringECommerciale.setAttribute('material', this.defaultmaterial);
    ringECommerciale.setAttribute('position', {x: 0,y: 2.5,z: -5 });
    ringECommerciale.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringECommerciale.addEventListener('mouseenter', function () {
        ringECommerciale.setAttribute('color', '#fff');
      });
    ringECommerciale.addEventListener('mouseleave', function () {
        ringECommerciale.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringECommerciale);
    
    /**@aTextECommerciale = contiene il valore & della tastiera
    **/
    
    var aTextECommerciale = document.createElement('a-text');
    aTextECommerciale.setAttribute('value', "&"); 
    aTextECommerciale.setAttribute('color', "#ffffff");
    aTextECommerciale.setAttribute('position', { x: 0.84, y: 0.44, z: 0.01});
    aTextECommerciale.setAttribute('scale', { x: 0.8,y: 0.8,z: 0.1});
    
    ringECommerciale.appendChild(aTextECommerciale);
    
    
        
    /**@ringDollaro = contiene il valore $ della tastiera
    **/
    
    var ringDollaro = document.createElement('a-ring');
    ringDollaro.setAttribute('id', "dollaro");
    ringDollaro.setAttribute('segments-theta', 500);
    ringDollaro.setAttribute('theta-length', 12.8);
    ringDollaro.setAttribute('theta-start', -353.8);
    ringDollaro.setAttribute('material', this.defaultmaterial);
    ringDollaro.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringDollaro.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringDollaro.addEventListener('mouseenter', function () {
        ringDollaro.setAttribute('color', '#fff');
      });
    ringDollaro.addEventListener('mouseleave', function () {
        ringDollaro.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringDollaro);
    
    /**@aTextDollaro = contiene il valore $ della tastiera
    **/
    
    var aTextDollaro = document.createElement('a-text');
    aTextDollaro.setAttribute('value', "$"); 
    aTextDollaro.setAttribute('color', "#ffffff");
    aTextDollaro.setAttribute('position', { x: 0.92, y: 0.23, z: 0.01});
    aTextDollaro.setAttribute('scale', { x: 0.8,y: 0.8,z: 0.1});
    
    ringDollaro.appendChild(aTextDollaro);

    
/*********************************************************************************************************
**********************************************LETTERE MAIUSCOLE*******************************************
**********************************************************************************************************/

var A = document.createElement('a-ring');
    A.setAttribute('id', "A");
    A.setAttribute('radius-inner', 1.205 );
    A.setAttribute('radius-outer', 1.6 );
    A.setAttribute('segments-theta', 500);
    A.setAttribute('theta-length', 12.4);
    A.setAttribute('theta-start', -6.2); 
    A.setAttribute('material', this.defaultmaterial);
    A.setAttribute('position', { x: 0, y: 2.5, z: -5});
    A.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    A.addEventListener('mouseenter', function () {
        A.setAttribute('color', '#fff');
      });
    A.addEventListener('mouseleave', function () {
        A.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(A);
    
    /**@aTextA = contiene il valore A della tastiera
    **/
    
    var aTextA = document.createElement('a-text');
    aTextA.setAttribute('class','maiuscolea');
    aTextA.setAttribute('value', 'A');
    aTextA.setAttribute('color', "#ffffff");
    aTextA.setAttribute('position', { x: 1.3, y: 0, z: 0.01});
    aTextA.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    A.appendChild(aTextA);
    
    
    
    var aTexta = document.createElement('a-text');
    aTexta.setAttribute('class','minuscolea');
    aTexta.setAttribute('value', 'a');
    aTexta.setAttribute('visible', false);
    aTexta.setAttribute('color', "#ffffff");
    aTexta.setAttribute('position', { x: 1.3, y: 0, z: 0.01});
    aTexta.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    A.appendChild(aTexta);
    
    
    // lettera B
    //@ B e' il ring contenente il simbolo b o B
    
var B = document.createElement('a-ring');
    B.setAttribute('id', "B");
    B.setAttribute('radius-inner', 1.205 );
    B.setAttribute('radius-outer', 1.6 );
    B.setAttribute('segments-theta', 500);
    B.setAttribute('theta-length', 12.4);
    B.setAttribute('theta-start', -18.6); 
    B.setAttribute('material', this.defaultmaterial);
    B.setAttribute('position', {x: 0, y: 2.5, z: -5});
    B.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    B.addEventListener('mouseenter', function () {
        B.setAttribute('color', '#fff');
      });
    B.addEventListener('mouseleave', function () {
        B.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(B);
    
    /**@aTextB = contiene il valore B della tastiera
      @aTextb = contiene il valore b della tastiera
    **/
    
    var aTextB = document.createElement('a-text');
    aTextB.setAttribute('class','maiuscoleb');
    aTextB.setAttribute('value', 'B');
    aTextB.setAttribute('color', "#ffffff");
    aTextB.setAttribute('position', { x: 1.29, y: -0.29, z: 0.01});
    aTextB.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    B.appendChild(aTextB);

    
    var aTextb = document.createElement('a-text');
    aTextb.setAttribute('class','minuscoleb');
    aTextb.setAttribute('value', 'b');
    aTextb.setAttribute('visible', false);
    aTextb.setAttribute('color', "#ffffff");
    aTextb.setAttribute('position', { x: 1.29, y: -0.29, z: 0.01});
    aTextb.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
      
    B.appendChild(aTextb);
    
    //lettera C
    //@C e' il ring contenente il simbolo c o C
    
var C = document.createElement('a-ring');
    C.setAttribute('id', "C");
    C.setAttribute('radius-inner', 1.205 );
    C.setAttribute('radius-outer', 1.6 );
    C.setAttribute('segments-theta', 500);
    C.setAttribute('theta-length', 12.4);
    C.setAttribute('theta-start', -31); 
    C.setAttribute('material', this.defaultmaterial);
    C.setAttribute('position', {x: 0, y: 2.5, z: -5});
    C.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    C.addEventListener('mouseenter', function () {
        C.setAttribute('color', '#fff');
      });
    C.addEventListener('mouseleave', function () {
        C.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(C);
    
    /**@aTextC = contiene il valore C della tastiera
      @aTextc = contiene il valore c della tastiera
    **/
    
    var aTextC = document.createElement('a-text');
    aTextC.setAttribute('class','maiuscolec');
    aTextC.setAttribute('value', 'C');
    aTextC.setAttribute('color', "#ffffff");
    aTextC.setAttribute('position', { x: 1.19, y: -0.57, z: 0.01});
    aTextC.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    C.appendChild(aTextC);
    
    
    var aTextc = document.createElement('a-text');
    aTextc.setAttribute('class','minuscolec');
    aTextc.setAttribute('value', 'c');
    aTextc.setAttribute('visible', false);
    aTextc.setAttribute('color', "#ffffff");
    aTextc.setAttribute('position', { x: 1.19, y: -0.57, z: 0.01});
    aTextc.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    C.appendChild(aTextc);
    
     //lettera D
    //@D e' il ring contenente il simbolo d o D
    
var D = document.createElement('a-ring');
    D.setAttribute('id', "D");
    D.setAttribute('radius-inner', 1.205 );
    D.setAttribute('radius-outer', 1.6 );
    D.setAttribute('segments-theta', 500);
    D.setAttribute('theta-length', 12.4);
    D.setAttribute('theta-start', -43.4); 
    D.setAttribute('material', this.defaultmaterial);
    D.setAttribute('position', {x: 0, y: 2.5, z: -5});
    D.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    D.addEventListener('mouseenter', function () {
        D.setAttribute('color', '#fff');
      });
    D.addEventListener('mouseleave', function () {
        D.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(D);
    
    
    /**@aTextD = contiene il valore D della tastiera
      @aTextd = contiene il valore d della tastiera
    **/
    
    var aTextD = document.createElement('a-text');
    aTextD.setAttribute('class','maiuscoled');
    aTextD.setAttribute('value', 'D');
    aTextD.setAttribute('color', "#ffffff");
    aTextD.setAttribute('position', { x: 1.04, y: -0.84, z: 0.01});
    aTextD.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
      
    D.appendChild(aTextD);
    
    
    var aTextd = document.createElement('a-text');
    aTextd.setAttribute('class','minuscoled');
    aTextd.setAttribute('value', 'd');
    aTextd.setAttribute('color', "#ffffff");
    aTextd.setAttribute('visible', false);
    aTextd.setAttribute('position', { x: 1.04, y: -0.84, z: 0.01});
    aTextd.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
      
    D.appendChild(aTextd);
    
    //lettera E
    //@E e' il ring contenente il simbolo e o E
    
var E = document.createElement('a-ring');
    E.setAttribute('id', "E");
    E.setAttribute('radius-inner', 1.205 );
    E.setAttribute('radius-outer', 1.6 );
    E.setAttribute('segments-theta', 500);
    E.setAttribute('theta-length', 12.4);
    E.setAttribute('theta-start', -55.8); 
    E.setAttribute('material', this.defaultmaterial);
    E.setAttribute('position', {x: 0, y: 2.5, z: -5});
    E.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    E.addEventListener('mouseenter', function () {
        E.setAttribute('color', '#fff');
      });
    E.addEventListener('mouseleave', function () {
        E.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(E);
    
    /**@aTextE = contiene il valore E della tastiera
      @aTexte = contiene il valore e della tastiera
    **/
    
    var aTextE = document.createElement('a-text');
    aTextE.setAttribute('class','maiuscolee');
    aTextE.setAttribute('value', 'E');
    aTextE.setAttribute('color', "#ffffff");
    aTextE.setAttribute('position', { x: 0.85, y: -1.06, z: 0.01});
    aTextE.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});

    E.appendChild(aTextE);
    
    
    var aTexte = document.createElement('a-text');
    aTexte.setAttribute('class','minuscolee');
    aTexte.setAttribute('value', 'e');
    aTexte.setAttribute('visible', false);
    aTexte.setAttribute('color', "#ffffff");
    aTexte.setAttribute('position', { x: 0.85, y: -1.06, z: 0.01});
    aTexte.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});

    E.appendChild(aTexte);
    
    
    //lettera F
    //@F e' il ring contenente il simbolo f o F
    
var F = document.createElement('a-ring');
    F.setAttribute('id', "F");
    F.setAttribute('radius-inner', 1.205 );
    F.setAttribute('radius-outer', 1.6 );
    F.setAttribute('segments-theta', 500);
    F.setAttribute('theta-length', 12.4);
    F.setAttribute('theta-start', -68.2); 
    F.setAttribute('material', this.defaultmaterial);
    F.setAttribute('position', {x: 0, y: 2.5, z: -5});
    F.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    F.addEventListener('mouseenter', function () {
        F.setAttribute('color', '#fff');
      });
    F.addEventListener('mouseleave', function () {
        F.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(F);
    
    /**@aTextF = contiene il valore F della tastiera
      @aTextf = contiene il valore f della tastiera
    **/
    
    var aTextF = document.createElement('a-text');
    aTextF.setAttribute('class','maiuscolef');
    aTextF.setAttribute('value', 'F');
    aTextF.setAttribute('color', "#ffffff");
    aTextF.setAttribute('position', { x: 0.6, y: -1.24, z: 0.01});
    aTextF.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
   
    F.appendChild(aTextF);
    
    
    
    var aTextf = document.createElement('a-text');
    aTextf.setAttribute('class','minuscolef');
    aTextf.setAttribute('value', 'f');
    aTextf.setAttribute('color', "#ffffff");
    aTextf.setAttribute('visible', false);
    aTextf.setAttribute('position', { x: 0.6, y: -1.24, z: 0.01});
    aTextf.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
      
    F.appendChild(aTextf);
    
    
    //lettera G
    //@G e' il ring contenente il simbolo g o G
    
var G = document.createElement('a-ring');
    G.setAttribute('id', "G");
    G.setAttribute('radius-inner', 1.205 );
    G.setAttribute('radius-outer', 1.6 );
    G.setAttribute('segments-theta', 500);
    G.setAttribute('theta-length', 12.4);
    G.setAttribute('theta-start', -80.6); 
    G.setAttribute('material', this.defaultmaterial);
    G.setAttribute('position', {x: 0, y: 2.5, z: -5});
    G.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    G.addEventListener('mouseenter', function () {
        G.setAttribute('color', '#fff');
      });
    G.addEventListener('mouseleave', function () {
        G.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(G);
    
    /**@aTextG = contiene il valore G della tastiera
      @aTextg = contiene il valore g della tastiera
    **/
    
    var aTextG = document.createElement('a-text');
    aTextG.setAttribute('class','maiuscoleg');
    aTextG.setAttribute('value', 'G');
    aTextG.setAttribute('color', "#ffffff");
    aTextG.setAttribute('position', { x: 0.3, y: -1.35, z: 0.01});
    aTextG.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    G.appendChild(aTextG);
    
    
    
    var aTextg = document.createElement('a-text');
    aTextg.setAttribute('class','minuscoleg');
    aTextg.setAttribute('value', 'g');
    aTextg.setAttribute('color', "#ffffff");
    aTextg.setAttribute('visible', false);
    aTextg.setAttribute('position', { x: 0.3, y: -1.35, z: 0.01});
    aTextg.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
 
    G.appendChild(aTextg);
    //------------------------------------------------------------
    
    //lettera H
    //@H e' il ring contenente il simbolo h o H
    
var H = document.createElement('a-ring');
    H.setAttribute('id', "H");
    H.setAttribute('radius-inner', 1.205 );
    H.setAttribute('radius-outer', 1.6 );
    H.setAttribute('segments-theta', 500);
    H.setAttribute('theta-length', 12.4);
    H.setAttribute('theta-start', -93); 
    H.setAttribute('material', this.defaultmaterial);
    H.setAttribute('position', {x: 0, y: 2.5, z: -5});
    H.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    H.addEventListener('mouseenter', function () {
        H.setAttribute('color', '#fff');
      });
    H.addEventListener('mouseleave', function () {
        H.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(H);
    
    /**@aTextH = contiene il valore H della tastiera
      @aTexth = contiene il valore h della tastiera
    **/
    
    var aTextH = document.createElement('a-text');
    aTextH.setAttribute('class','maiuscoleh');
    aTextH.setAttribute('value', 'H');
    aTextH.setAttribute('color', "#ffffff");
    aTextH.setAttribute('position', { x: 0.02, y: -1.39, z: 0.01});
    aTextH.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    H.appendChild(aTextH);
    
    
    
    var aTexth = document.createElement('a-text');
    aTexth.setAttribute('class','minuscoleh');
    aTexth.setAttribute('value', 'h');
    aTexth.setAttribute('color', "#ffffff");
    aTexth.setAttribute('visible', false);
    aTexth.setAttribute('position', { x: 0.02, y: -1.39, z: 0.01});
    aTexth.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    H.appendChild(aTexth);
    
    
    
    
    //lettera I
    //@I e' il ring contenente il simbolo i o I
    
var I = document.createElement('a-ring');
    I.setAttribute('id', "I");
    I.setAttribute('radius-inner', 1.205 );
    I.setAttribute('radius-outer', 1.6 );
    I.setAttribute('segments-theta', 500);
    I.setAttribute('theta-length', 12.4);
    I.setAttribute('theta-start', -105.4); 
    I.setAttribute('material', this.defaultmaterial);
    I.setAttribute('position', {x: 0, y: 2.5, z: -5});
    I.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    I.addEventListener('mouseenter', function () {
        I.setAttribute('color', '#fff');
      });
    I.addEventListener('mouseleave', function () {
        I.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(I);
    
    /**@aTextI = contiene il valore I della tastiera
      @aTexti = contiene il valore i della tastiera
    **/
    
    var aTextI = document.createElement('a-text');
    aTextI.setAttribute('class','maiuscolei');
    aTextI.setAttribute('value', 'I');
    aTextI.setAttribute('color', "#ffffff");
    aTextI.setAttribute('position', { x:-0.25 ,y:-1.362, z: 0.01});
    aTextI.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
      
    I.appendChild(aTextI);

    
    var aTexti = document.createElement('a-text');
    aTexti.setAttribute('class','minuscolei');
    aTexti.setAttribute('value', 'i');
    aTexti.setAttribute('color', "#ffffff");
    aTexti.setAttribute('visible', false);
    aTexti.setAttribute('position', { x: -0.25, y: -1.362, z: 0.01});
    aTexti.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    I.appendChild(aTexti);
    
    
    
    //lettera J
    //@J e' il ring contenente il simbolo j o J
    
var J = document.createElement('a-ring');
    J.setAttribute('id', "J");
    J.setAttribute('radius-inner', 1.205 );
    J.setAttribute('radius-outer', 1.6 );
    J.setAttribute('segments-theta', 500);
    J.setAttribute('theta-length', 12.4);
    J.setAttribute('theta-start', -117.8); 
    J.setAttribute('material', this.defaultmaterial);
    J.setAttribute('position', {x: 0, y: 2.5, z: -5});
    J.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    J.addEventListener('mouseenter', function () {
        J.setAttribute('color', '#fff');
      });
    J.addEventListener('mouseleave', function () {
        J.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(J);
    
    /**@aTextJ = contiene il valore J della tastiera
      @aTextj = contiene il valore j della tastiera
    **/
    
    var aTextJ = document.createElement('a-text');
    aTextJ.setAttribute('class','maiuscolej');
    aTextJ.setAttribute('value', 'J');
    aTextJ.setAttribute('color', "#ffffff");
    aTextJ.setAttribute('position', { x:-0.58, y: -1.28, z: 0.01});
    aTextJ.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    J.appendChild(aTextJ);
    
    
    
    var aTextj = document.createElement('a-text');
    aTextj.setAttribute('class','minuscolej');
    aTextj.setAttribute('value', 'j');
    aTextj.setAttribute('visible', false);
    aTextj.setAttribute('color', "#ffffff");
    aTextj.setAttribute('position', { x:-0.58, y: -1.28, z: 0.01});
    aTextj.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
      
    J.appendChild(aTextj);
    
    
    
    //lettera K
    //@K e' il ring contenente il simbolo k o K
    
var K = document.createElement('a-ring');
    K.setAttribute('id', "K");
    K.setAttribute('radius-inner', 1.205 );
    K.setAttribute('radius-outer', 1.6 );
    K.setAttribute('segments-theta', 500);
    K.setAttribute('theta-length', 12.4);
    K.setAttribute('theta-start', -130.2); 
    K.setAttribute('material', this.defaultmaterial);
    K.setAttribute('position', {x: 0, y: 2.5, z: -5});
    K.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    K.addEventListener('mouseenter', function () {
        K.setAttribute('color', '#fff');
      });
    K.addEventListener('mouseleave', function () {
        K.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(K);
    
    /**@aTextK = contiene il valore K della tastiera
      @aTextk = contiene il valore k della tastiera
    **/
    
    var aTextK = document.createElement('a-text');
    aTextK.setAttribute('class','maiuscolek');
    aTextK.setAttribute('value', 'K');
    aTextK.setAttribute('color', "#ffffff");
    aTextK.setAttribute('position', { x:-0.84, y: -1.15, z: 0.01});
    aTextK.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
   
    K.appendChild(aTextK);
    
    
    var aTextk = document.createElement('a-text');
    aTextk.setAttribute('class','minuscolek');
    aTextk.setAttribute('value', 'k');
    aTextk.setAttribute('visible', false);
    aTextk.setAttribute('color', "#ffffff");
    aTextk.setAttribute('position', { x:-0.84, y: -1.15, z: 0.01});
    aTextk.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});

    K.appendChild(aTextk);
    
    
    
    //lettera L
    //@L e' il ring contenente il simbolo l o L
    
var L = document.createElement('a-ring');
    L.setAttribute('id', "L");
    L.setAttribute('radius-inner', 1.205 );
    L.setAttribute('radius-outer', 1.6 );
    L.setAttribute('segments-theta', 500);
    L.setAttribute('theta-length', 12.4);
    L.setAttribute('theta-start', -142.6); 
    L.setAttribute('material', this.defaultmaterial);
    L.setAttribute('position', {x: 0, y: 2.5, z: -5});
    L.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    L.addEventListener('mouseenter', function () {
        L.setAttribute('color', '#fff');
      });
    L.addEventListener('mouseleave', function () {
        L.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(L);
    
    /**@aTextL = contiene il valore L della tastiera
      @aTextl = contiene il valore l della tastiera
    **/
    
    var aTextL = document.createElement('a-text');
    aTextL.setAttribute('class','maiuscolel');
    aTextL.setAttribute('value', 'L');
    aTextL.setAttribute('color', "#ffffff");
    aTextL.setAttribute('position', { x: -1.07, y: -0.95, z: 0.01});
    aTextL.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
  
    L.appendChild(aTextL);
    
    
    var aTextl = document.createElement('a-text');
    aTextl.setAttribute('class','minuscolel');
    aTextl.setAttribute('value', 'l');
    aTextl.setAttribute('visible', false);
    aTextl.setAttribute('color', "#ffffff");
    aTextl.setAttribute('position', { x: -1.07, y: -0.95, z: 0.01});
    aTextl.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    L.appendChild(aTextl);
    
    //lettera M
    //@M e' il ring contenente il simbolo m o M
    
var M = document.createElement('a-ring');
    M.setAttribute('id', "M");
    M.setAttribute('radius-inner', 1.205 );
    M.setAttribute('radius-outer', 1.6 );
    M.setAttribute('segments-theta', 500);
    M.setAttribute('theta-length', 12.4);
    M.setAttribute('theta-start', -155); 
    M.setAttribute('material', this.defaultmaterial);
    M.setAttribute('position', {x: 0, y: 2.5, z: -5});
    M.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    M.addEventListener('mouseenter', function () {
        M.setAttribute('color', '#fff');
      });
    M.addEventListener('mouseleave', function () {
        M.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(M);
    
    /**@aTextM = contiene il valore M della tastiera
      @aTextm = contiene il valore m della tastiera
    **/
    
    var aTextM = document.createElement('a-text');
    aTextM.setAttribute('class','maiuscolem');
    aTextM.setAttribute('value', 'M');
    aTextM.setAttribute('color', "#ffffff");
    aTextM.setAttribute('position', { x: -1.29, y: -0.7, z: 0.01});
    aTextM.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
  
    M.appendChild(aTextM);
    
    
    
    var aTextm = document.createElement('a-text');
    aTextm.setAttribute('class','minuscolem');
    aTextm.setAttribute('value', 'm');
    aTextm.setAttribute('visible', false);
    aTextm.setAttribute('color', "#ffffff");
    aTextm.setAttribute('position', { x: -1.29, y: -0.7, z: 0.01});
    aTextm.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
   
    M.appendChild(aTextm);
    
    
    //lettera N
    //@N e' il ring contenente il simbolo n o N
    
var N = document.createElement('a-ring');
    N.setAttribute('id', "N");
    N.setAttribute('radius-inner', 1.205 );
    N.setAttribute('radius-outer', 1.6 );
    N.setAttribute('segments-theta', 500);
    N.setAttribute('theta-length', 12.4);
    N.setAttribute('theta-start', -167.4); 
    N.setAttribute('material', this.defaultmaterial);
    N.setAttribute('position', {x: 0, y: 2.5, z: -5});
    N.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    N.addEventListener('mouseenter', function () {
        N.setAttribute('color', '#fff');
      });
    N.addEventListener('mouseleave', function () {
        N.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(N);
    
    /**@aTextN = contiene il valore N della tastiera
      @aTextn = contiene il valore n della tastiera
    **/
    
    var aTextN = document.createElement('a-text');
    aTextN.setAttribute('class','maiuscolen');
    aTextN.setAttribute('value', 'N');
    aTextN.setAttribute('color', "#ffffff");
    aTextN.setAttribute('position', { x:-1.4, y: -0.43, z: 0.01});
    aTextN.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
   
    N.appendChild(aTextN);

    
    var aTextn = document.createElement('a-text');
    aTextn.setAttribute('class','minuscolen');
    aTextn.setAttribute('value', 'n');
    aTextn.setAttribute('visible', false);
    aTextn.setAttribute('color', "#ffffff");
    aTextn.setAttribute('position', { x:-1.4, y: -0.43, z: 0.01});
    aTextn.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    N.appendChild(aTextn);
    
    
    
    //lettera O
    //@O e' il ring contenente il simbolo o o O
    
var O = document.createElement('a-ring');
    O.setAttribute('id', "O");
    O.setAttribute('radius-inner', 1.205 );
    O.setAttribute('radius-outer', 1.6 );
    O.setAttribute('segments-theta', 500);
    O.setAttribute('theta-length', 12.4);
    O.setAttribute('theta-start', -179.8); 
    O.setAttribute('material', this.defaultmaterial);
    O.setAttribute('position', {x: 0, y: 2.5, z: -5});
    O.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    O.addEventListener('mouseenter', function () {
        O.setAttribute('color', '#fff');
      });
    O.addEventListener('mouseleave', function () {
        O.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(O);
    
    /**@aTextO = contiene il valore O della tastiera
      @aTexto = contiene il valore o della tastiera
    **/
    
    var aTextO = document.createElement('a-text');
    aTextO.setAttribute('class','maiuscoleo');
    aTextO.setAttribute('value', 'O');
    aTextO.setAttribute('color', "#ffffff");
    aTextO.setAttribute('position', { x:-1.46, y: -0.14, z: 0.01});
    aTextO.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
   
    O.appendChild(aTextO);
    

    var aTexto = document.createElement('a-text');
    aTexto.setAttribute('class','minuscoleo');
    aTexto.setAttribute('value', 'o');
    aTexto.setAttribute('color', "#ffffff");
    aTexto.setAttribute('visible', false);
    aTexto.setAttribute('position',{ x:-1.46, y: -0.14, z: 0.01});
    aTexto.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
 
    O.appendChild(aTexto);
    
    
    
    //lettera P
    //@P e' il ring contenente il simbolo p o P
    
var P = document.createElement('a-ring');
    P.setAttribute('id', "P");
    P.setAttribute('radius-inner', 1.205 );
    P.setAttribute('radius-outer', 1.6 );
    P.setAttribute('segments-theta', 500);
    P.setAttribute('theta-length', 12.4);
    P.setAttribute('theta-start', -192.2); 
    P.setAttribute('material', this.defaultmaterial);
    P.setAttribute('position', {x: 0, y: 2.5, z: -5});
    P.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    P.addEventListener('mouseenter', function () {
        P.setAttribute('color', '#fff');
      });
    P.addEventListener('mouseleave', function () {
        P.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(P);
    
    /**@aTextP = contiene il valore P della tastiera
      @aTextp = contiene il valore p della tastiera
    **/
    
    var aTextP = document.createElement('a-text');
    aTextP.setAttribute('class','maiuscolep');
    aTextP.setAttribute('value', 'P');
    aTextP.setAttribute('color', "#ffffff");
    aTextP.setAttribute('position', { x:-1.45, y: 0.14, z: 0.01});
    aTextP.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    P.appendChild(aTextP);
    
    
    
    var aTextp = document.createElement('a-text');
    aTextp.setAttribute('class','minuscolep');
    aTextp.setAttribute('value', 'p');
    aTextp.setAttribute('color', "#ffffff");
    aTextp.setAttribute('visible', false);
    aTextp.setAttribute('position',{ x:-1.45, y: 0.14, z: 0.01});
    aTextp.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    aTextp.addEventListener('mouseenter', function () {
        P.setAttribute('color', '#fff');
      });
    aTextp.addEventListener('mouseleave', function () {
        P.setAttribute('color', '#000');
      });
      
    P.appendChild(aTextp);
    
    
    
    //lettera Q
    //@Q e' il ring contenente il simbolo q o Q
    
var Q = document.createElement('a-ring');
    Q.setAttribute('id', "Q");
    Q.setAttribute('radius-inner', 1.205 );
    Q.setAttribute('radius-outer', 1.6 );
    Q.setAttribute('segments-theta', 500);
    Q.setAttribute('theta-length', 12.4);
    Q.setAttribute('theta-start', -204.6); 
    Q.setAttribute('material', this.defaultmaterial);
    Q.setAttribute('position', {x: 0, y: 2.5, z: -5});
    Q.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    Q.addEventListener('mouseenter', function () {
        Q.setAttribute('color', '#fff');
      });
    Q.addEventListener('mouseleave', function () {
        Q.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(Q);
    
    /**@aTextQ = contiene il valore Q della tastiera
      @aTextq = contiene il valore q della tastiera
    **/
    
    var aTextQ = document.createElement('a-text');
    aTextQ.setAttribute('class','maiuscoleq');
    aTextQ.setAttribute('value', 'Q');
    aTextQ.setAttribute('color', "#ffffff");
    aTextQ.setAttribute('position', { x: -1.4, y: 0.45, z: 0.01});
    aTextQ.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
      
    Q.appendChild(aTextQ);
    
    
    
    var aTextq = document.createElement('a-text');
    aTextq.setAttribute('class','minuscoleq');
    aTextq.setAttribute('value', 'q');
    aTextq.setAttribute('visible', false);
    aTextq.setAttribute('color', "#ffffff");
    aTextq.setAttribute('position',{ x: -1.4, y: 0.45, z: 0.01});
    aTextq.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
    Q.appendChild(aTextq);
    
    
    
    //lettera R
    //@R e' il ring contenente il simbolo r o R
    
var R = document.createElement('a-ring');
    R.setAttribute('id', "R");
    R.setAttribute('radius-inner', 1.205 );
    R.setAttribute('radius-outer', 1.6 );
    R.setAttribute('segments-theta', 500);
    R.setAttribute('theta-length', 12.4);
    R.setAttribute('theta-start', -217); 
    R.setAttribute('material', this.defaultmaterial);
    R.setAttribute('position', {x: 0, y: 2.5, z: -5});
    R.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    R.addEventListener('mouseenter', function () {
        R.setAttribute('color', '#fff');
      });
    R.addEventListener('mouseleave', function () {
        R.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(R);
    
    /**@aTextR = contiene il valore R della tastiera
      @aTextr = contiene il valore r della tastiera
    **/
    
    var aTextR = document.createElement('a-text');
    aTextR.setAttribute('class','maiuscoler');
    aTextR.setAttribute('value', 'R');
    aTextR.setAttribute('color', "#ffffff");
    aTextR.setAttribute('position', { x:-1.25, y: 0.73, z: 0.01});
    aTextR.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
      
    R.appendChild(aTextR);
    
    
    
    var aTextr = document.createElement('a-text');
    aTextr.setAttribute('class','minuscoler');
    aTextr.setAttribute('value', 'r');
    aTextr.setAttribute('color', "#ffffff");
    aTextr.setAttribute('visible', false);
    aTextr.setAttribute('position', { x:-1.25, y: 0.73, z: 0.01});
    aTextr.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
   
    R.appendChild(aTextr);
    
    
    
    
    //lettera S
    //@S e' il ring contenente il simbolo s o S
    
var S = document.createElement('a-ring');
    S.setAttribute('id', "S");
    S.setAttribute('radius-inner', 1.205 );
    S.setAttribute('radius-outer', 1.6 );
    S.setAttribute('segments-theta', 500);
    S.setAttribute('theta-length', 12.4);
    S.setAttribute('theta-start', -229.4); 
    S.setAttribute('material', this.defaultmaterial);
    S.setAttribute('position', {x: 0, y: 2.5, z: -5});
    S.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    S.addEventListener('mouseenter', function () {
        S.setAttribute('color', '#fff');
      });
    S.addEventListener('mouseleave', function () {
        S.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(S);
    
    /**@aTextS = contiene il valore S della tastiera
      @aTexts = contiene il valore s della tastiera
    **/
    
    var aTextS = document.createElement('a-text');
    aTextS.setAttribute('class','maiuscoles');
    aTextS.setAttribute('value', 'S');
    aTextS.setAttribute('color', "#ffffff");
    aTextS.setAttribute('position', { x:-1.08, y: 0.95, z: 0.01});
    aTextS.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
      
    S.appendChild(aTextS);
    
    
    
    var aTexts = document.createElement('a-text');
    aTexts.setAttribute('class','minuscoles');
    aTexts.setAttribute('value', 's');
    aTexts.setAttribute('visible', false);
    aTexts.setAttribute('color', "#ffffff");
    aTexts.setAttribute('position',{ x:-1.08, y: 0.95, z: 0.01});
    aTexts.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
  
      
    S.appendChild(aTexts);
    
    
    
    //lettera T
    //@T e' il ring contenente il simbolo t o T
    
var T = document.createElement('a-ring');
    T.setAttribute('id', "T");
    T.setAttribute('radius-inner', 1.205 );
    T.setAttribute('radius-outer', 1.6 );
    T.setAttribute('segments-theta', 500);
    T.setAttribute('theta-length', 12.4);
    T.setAttribute('theta-start', -241.8); 
    T.setAttribute('material', this.defaultmaterial);
    T.setAttribute('position', {x: 0, y: 2.5, z: -5});
    T.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    T.addEventListener('mouseenter', function () {
        T.setAttribute('color', '#fff');
      });
    T.addEventListener('mouseleave', function () {
        T.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(T);
    
    /**@aTextT = contiene il valore T della tastiera
      @aTextt = contiene il valore t della tastiera
    **/
    
    var aTextT = document.createElement('a-text');
    aTextT.setAttribute('class','maiuscolet');
    aTextT.setAttribute('value', 'T');
    aTextT.setAttribute('color', "#ffffff");
    aTextT.setAttribute('position', { x:-0.84, y: 1.15, z: 0.01});
    aTextT.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
  
    T.appendChild(aTextT);
    
    
    
    var aTextt = document.createElement('a-text');
    aTextt.setAttribute('class','minuscolet');
    aTextt.setAttribute('value', 't');
    aTextt.setAttribute('visible', false);
    aTextt.setAttribute('color', "#ffffff");
    aTextt.setAttribute('position',  { x:-0.84, y: 1.15, z: 0.01});
    aTextt.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
      
    T.appendChild(aTextt);
    
    
    
    //lettera U
    //@U e' il ring contenente il simbolo u o U
    
var U = document.createElement('a-ring');
    U.setAttribute('id', "M");
    U.setAttribute('radius-inner', 1.205 );
    U.setAttribute('radius-outer', 1.6 );
    U.setAttribute('segments-theta', 500);
    U.setAttribute('theta-length', 12.4);
    U.setAttribute('theta-start', -254.2); 
    U.setAttribute('material', this.defaultmaterial);
    U.setAttribute('position', {x: 0, y: 2.5, z: -5});
    U.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    U.addEventListener('mouseenter', function () {
        U.setAttribute('color', '#fff');
      });
    U.addEventListener('mouseleave', function () {
        U.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(U);
    
    /**@aTextU = contiene il valore U della tastiera
      @aTextu = contiene il valore u della tastiera
    **/
    
    var aTextU = document.createElement('a-text');
    aTextU.setAttribute('class','maiuscoleu');
    aTextU.setAttribute('value', 'U');
    aTextU.setAttribute('color', "#ffffff");
    aTextU.setAttribute('position', { x: -0.59, y: 1.3, z: 0.01});
    aTextU.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
  
    U.appendChild(aTextU);
    
    
    
    var aTextu = document.createElement('a-text');
    aTextu.setAttribute('class','minuscoleu');
    aTextu.setAttribute('value', 'u');
    aTextu.setAttribute('color', "#ffffff");
    aTextu.setAttribute('visible', false);
    aTextu.setAttribute('position', { x: -0.59, y: 1.3, z: 0.01});
    aTextu.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
      
    U.appendChild(aTextu);
    
    
    
    //lettera V
    //@V e' il ring contenente il simbolo v o V
    
var V = document.createElement('a-ring');
    V.setAttribute('id', "V");
    V.setAttribute('radius-inner', 1.205 );
    V.setAttribute('radius-outer', 1.6 );
    V.setAttribute('segments-theta', 500);
    V.setAttribute('theta-length', 12.4);
    V.setAttribute('theta-start', -266.6); 
    V.setAttribute('material', this.defaultmaterial);
    V.setAttribute('position', {x: 0, y: 2.5, z: -5});
    V.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    V.addEventListener('mouseenter', function () {
        V.setAttribute('color', '#fff');
      });
    V.addEventListener('mouseleave', function () {
        V.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(V);
    
    /**@aTextV = contiene il valore V della tastiera
      @aTextv = contiene il valore v della tastiera
    **/
    
    var aTextV = document.createElement('a-text');
    aTextV.setAttribute('class','minuscolav');
    aTextV.setAttribute('value', 'V');
    aTextV.setAttribute('color', "#ffffff");
    aTextV.setAttribute('position', { x:-0.29, y: 1.38, z: 0.01});
    aTextV.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
   
    V.appendChild(aTextV);
    
    
    
    var aTextv = document.createElement('a-text');
    aTextv.setAttribute('class','minuscolen');
    aTextv.setAttribute('value', 'v');
    aTextv.setAttribute('visible', false);
    aTextv.setAttribute('color', "#ffffff");
    aTextv.setAttribute('position', { x:-0.29, y: 1.38, z: 0.01});
    aTextv.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
  
    V.appendChild(aTextv);
    
    
    
    //lettera W
    //@W e' il ring contenente il simbolo w o W
    
var W = document.createElement('a-ring');
    W.setAttribute('id', "W");
    W.setAttribute('radius-inner', 1.205 );
    W.setAttribute('radius-outer', 1.6 );
    W.setAttribute('segments-theta', 500);
    W.setAttribute('theta-length', 12.4);
    W.setAttribute('theta-start', -279); 
    W.setAttribute('material', this.defaultmaterial);
    W.setAttribute('position', {x: 0, y: 2.5, z: -5});
    W.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    W.addEventListener('mouseenter', function () {
        W.setAttribute('color', '#fff');
      });
    W.addEventListener('mouseleave', function () {
        W.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(W);
    
    /**@aTextW = contiene il valore W della tastiera
      @aTextw = contiene il valore w della tastiera
    **/
    
    var aTextW = document.createElement('a-text');
    aTextW.setAttribute('class','maiuscoleW');
    aTextW.setAttribute('value', 'W');
    aTextW.setAttribute('color', "#ffffff");
    aTextW.setAttribute('position', { x:-0.03, y: 1.41, z: 0.01});
    aTextW.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
 
    W.appendChild(aTextW);
    
    
    
    var aTextw = document.createElement('a-text');
    aTextw.setAttribute('class','minuscolew');
    aTextw.setAttribute('value', 'w');
    aTextw.setAttribute('visible', false);
    aTextw.setAttribute('color', "#ffffff");
    aTextw.setAttribute('position',{ x:-0.03, y: 1.41, z: 0.01});
    aTextw.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
    
   
    W.appendChild(aTextw);
    
    
    
    //lettera X
    //@X e' il ring contenente il simbolo x o X
    
var X = document.createElement('a-ring');
    X.setAttribute('id', "X");
    X.setAttribute('radius-inner', 1.205 );
    X.setAttribute('radius-outer', 1.6 );
    X.setAttribute('segments-theta', 500);
    X.setAttribute('theta-length', 12.4);
    X.setAttribute('theta-start', -291.4); 
    X.setAttribute('material', this.defaultmaterial);
    X.setAttribute('position', {x: 0, y: 2.5, z: -5});
    X.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    X.addEventListener('mouseenter', function () {
        X.setAttribute('color', '#fff');
      });
    X.addEventListener('mouseleave', function () {
        X.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(X);
    
    /**@aTextX = contiene il valore X della tastiera
      @aTextx = contiene il valore x della tastiera
    **/
    
    var aTextX = document.createElement('a-text');
    aTextX.setAttribute('class','maiuscolep');
    aTextX.setAttribute('value', 'X');
    aTextX.setAttribute('color', "#ffffff");
    aTextX.setAttribute('position', { x:0.3, y: 1.35, z: 0.01});
    aTextX.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
 
    X.appendChild(aTextX);
    
    
    
    var aTextx = document.createElement('a-text');
    aTextx.setAttribute('class','minuscolep');
    aTextx.setAttribute('value', 'x');
    aTextx.setAttribute('visible', false);
    aTextx.setAttribute('color', "#ffffff");
    aTextx.setAttribute('position',{ x:0.3, y: 1.35, z: 0.01});
    aTextx.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
   
    X.appendChild(aTextx);
    
    
    
    //lettera Y
    //@Y e' il ring contenente il simbolo y o Y
    
var Y = document.createElement('a-ring');
    Y.setAttribute('id', "Y");
    Y.setAttribute('radius-inner', 1.205 );
    Y.setAttribute('radius-outer', 1.6 );
    Y.setAttribute('segments-theta', 500);
    Y.setAttribute('theta-length', 12.4);
    Y.setAttribute('theta-start', -303.8); 
    Y.setAttribute('material', this.defaultmaterial);
    Y.setAttribute('position', {x: 0, y: 2.5, z: -5});
    Y.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    Y.addEventListener('mouseenter', function () {
        Y.setAttribute('color', '#fff');
      });
    Y.addEventListener('mouseleave', function () {
        Y.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(Y);
    
    /**@aTextY = contiene il valore Y della tastiera
      @aTexty = contiene il valore y della tastiera
    **/
    
    var aTextY = document.createElement('a-text');
    aTextY.setAttribute('class','maiuscoleY');
    aTextY.setAttribute('value', 'Y');
    aTextY.setAttribute('color', "#ffffff");
    aTextY.setAttribute('position', { x: 0.63, y: 1.23, z: 0.01});
    aTextY.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});

    Y.appendChild(aTextY);
    
    
    
    var aTexty = document.createElement('a-text');
    aTexty.setAttribute('class','minuscoley');
    aTexty.setAttribute('value', 'y');
    aTexty.setAttribute('visible', false);
    aTexty.setAttribute('color', "#ffffff");
    aTexty.setAttribute('position',{ x: 0.63, y: 1.23, z: 0.01});
    aTexty.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
 
    Y.appendChild(aTexty);
    
    
    
    //lettera Z
    //@Z e' il ring contenente il simbolo z o Z
    
var Z = document.createElement('a-ring');
    Z.setAttribute('id', "Z");
    Z.setAttribute('radius-inner', 1.205 );
    Z.setAttribute('radius-outer', 1.6 );
    Z.setAttribute('segments-theta', 500);
    Z.setAttribute('theta-length', 12.4);
    Z.setAttribute('theta-start', -316.2); 
    Z.setAttribute('material', this.defaultmaterial);
    Z.setAttribute('position', {x: 0, y: 2.5, z: -5});
    Z.setAttribute('scale', { x: 2, y: 2, z: 2});
    
    Z.addEventListener('mouseenter', function () {
        Z.setAttribute('color', '#fff');
      });
    Z.addEventListener('mouseleave', function () {
        Z.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(Z);
    
    /**@aTextZ = contiene il valore Z della tastiera
      @aTextz = contiene il valore z della tastiera
    **/
    
    var aTextZ = document.createElement('a-text');
    aTextZ.setAttribute('class','maiuscoleZ');
    aTextZ.setAttribute('value', 'Z');
    aTextZ.setAttribute('color', "#ffffff");
    aTextZ.setAttribute('position', { x:0.85, y: 1.07, z: 0.01});
    aTextZ.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});
      
    Z.appendChild(aTextZ);
    
    
    
    var aTextz = document.createElement('a-text');
    aTextz.setAttribute('class','minuscolez');
    aTextz.setAttribute('value', 'z');
    aTextz.setAttribute('visible', false);
    aTextz.setAttribute('color', "#ffffff");
    aTextz.setAttribute('position', { x:0.85, y: 1.07, z: 0.01});
    aTextz.setAttribute('scale', { x: 0.8, y: 0.8, z: 0.1});

    Z.appendChild(aTextz);
    
    /******************************************************************/
    /***********************Immagini****************************/
    /******************************************************************/
    
    /**@ringCapsLock = contiene il modo per utilizzare le maiuscole o le minuscole
    della tastiera
    **/
    
    var ringCapsLock = document.createElement('a-ring');
    ringCapsLock.setAttribute('id', "capslock");
    ringCapsLock.setAttribute('segments-theta', 500);
    ringCapsLock.setAttribute('theta-length', 12.6);
    ringCapsLock.setAttribute('theta-start', -328.8);
    ringCapsLock.setAttribute('material', this.defaultmaterial);
    ringCapsLock.setAttribute('radius-inner', 1.205);
    ringCapsLock.setAttribute('radius-outer', 1.6);
    ringCapsLock.setAttribute('position', {x: 0,y: 2.5,z: -5});
    ringCapsLock.setAttribute('scale', {x: 2,y: 2,z: 2 });
    
    ringCapsLock.addEventListener('mouseenter', function () {
        ringCapsLock.setAttribute('color', '#fff');
      });
    ringCapsLock.addEventListener('mouseleave', function () {
        ringCapsLock.setAttribute('color', '#000');
      });
    
    ringCapsLock.addEventListener('click', function () {
        Mem.setAttribute('visible', false );
        Mem.setAttribute('scale', {x: -1, y: -1, z: -1});
        ringCapsLock.setAttribute('visible', false);
        ringCapsLock.setAttribute('scale', {x: -1, y: -1, z: -1});
        meM.setAttribute('visible', true);
        meM.setAttribute('scale', {x: 0.5, y: 0.4, z: 0.1});
        capslock1.setAttribute('visible', true);
        capslock1.setAttribute('scale', {x:2, y:2, z:2});
        aTextA.setAttribute('visible', false);
        aTextB.setAttribute('visible', false);
        aTextC.setAttribute('visible', false);
        aTextD.setAttribute('visible', false);
        aTextE.setAttribute('visible', false);
        aTextF.setAttribute('visible', false);
        aTextG.setAttribute('visible', false);
        aTextH.setAttribute('visible', false);
        aTextI.setAttribute('visible', false);
        aTextJ.setAttribute('visible', false);
        aTextK.setAttribute('visible', false);
        aTextL.setAttribute('visible', false);
        aTextM.setAttribute('visible', false);
        aTextN.setAttribute('visible', false);
        aTextO.setAttribute('visible', false);
        aTextP.setAttribute('visible', false);
        aTextQ.setAttribute('visible', false);
        aTextR.setAttribute('visible', false);
        aTextS.setAttribute('visible', false);
        aTextT.setAttribute('visible', false);
        aTextU.setAttribute('visible', false);
        aTextV.setAttribute('visible', false);
        aTextW.setAttribute('visible', false);
        aTextX.setAttribute('visible', false);
        aTextY.setAttribute('visible', false);
        aTextZ.setAttribute('visible', false);
      
        aTexta.setAttribute('visible', true);
        aTextb.setAttribute('visible', true);
        aTextc.setAttribute('visible', true);
        aTextd.setAttribute('visible', true);
        aTexte.setAttribute('visible', true);
        aTextf.setAttribute('visible', true);
        aTextg.setAttribute('visible', true);
        aTexth.setAttribute('visible', true);
        aTexti.setAttribute('visible', true);
        aTextj.setAttribute('visible', true);
        aTextk.setAttribute('visible', true);
        aTextl.setAttribute('visible', true);
        aTextm.setAttribute('visible', true);
        aTextn.setAttribute('visible', true);
        aTexto.setAttribute('visible', true);
        aTextp.setAttribute('visible', true);
        aTextq.setAttribute('visible', true);
        aTextr.setAttribute('visible', true);
        aTexts.setAttribute('visible', true);
        aTextt.setAttribute('visible', true);
        aTextu.setAttribute('visible', true);
        aTextv.setAttribute('visible', true);
        aTextw.setAttribute('visible', true);
        aTextx.setAttribute('visible', true);
        aTexty.setAttribute('visible', true);
        aTextz.setAttribute('visible', true);
      
    });
    entityTastiera.appendChild(ringCapsLock);
    
    var capslock1 = document.createElement('a-ring');
    capslock1.setAttribute('id', "capslock1");
    capslock1.setAttribute('segments-theta', 500);
    capslock1.setAttribute('theta-length', 12.6);
    capslock1.setAttribute('visible', false);
    capslock1.setAttribute('theta-start', -328.8);
    capslock1.setAttribute('material', this.defaultmaterial);
    capslock1.setAttribute('radius-inner', 1.205);
    capslock1.setAttribute('radius-outer', 1.6);
    capslock1.setAttribute('position', {x: 0,y: 2.5,z: -5});
    capslock1.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    capslock1.addEventListener('mouseenter', function () {
        capslock1.setAttribute('color', '#fff');
      });
    capslock1.addEventListener('mouseleave', function () {
        capslock1.setAttribute('color', '#000');
      });
        
    capslock1.addEventListener('click', function () {
        meM.setAttribute('visible', false );
        meM.setAttribute('scale', {x: -1, y: -1, z: -1});
        capslock1.setAttribute('visible', false);
        capslock1.setAttribute('scale', {x: -1, y: -1, z: -1});
        Mem.setAttribute('visible', true);
        Mem.setAttribute('scale', {x: 0.5, y: 0.4, z: 0.1});
        ringCapsLock.setAttribute('visible', true);
        ringCapsLock.setAttribute('scale', {x:2, y:2, z:2});
        aTextA.setAttribute('visible', true);
        aTextB.setAttribute('visible', true);
        aTextC.setAttribute('visible', true);
        aTextD.setAttribute('visible', true);
        aTextE.setAttribute('visible', true);
        aTextF.setAttribute('visible', true);
        aTextG.setAttribute('visible', true);
        aTextH.setAttribute('visible', true);
        aTextI.setAttribute('visible', true);
        aTextJ.setAttribute('visible', true);
        aTextK.setAttribute('visible', true);
        aTextL.setAttribute('visible', true);
        aTextM.setAttribute('visible', true);
        aTextN.setAttribute('visible', true);
        aTextO.setAttribute('visible', true);
        aTextP.setAttribute('visible', true);
        aTextQ.setAttribute('visible', true);
        aTextR.setAttribute('visible', true);
        aTextS.setAttribute('visible', true);
        aTextT.setAttribute('visible', true);
        aTextU.setAttribute('visible', true);
        aTextV.setAttribute('visible', true);
        aTextW.setAttribute('visible', true);
        aTextX.setAttribute('visible', true);
        aTextY.setAttribute('visible', true);
        aTextZ.setAttribute('visible', true);
      
        aTexta.setAttribute('visible', false);
        aTextb.setAttribute('visible', false);
        aTextc.setAttribute('visible', false);
        aTextd.setAttribute('visible', false);
        aTexte.setAttribute('visible', false);
        aTextf.setAttribute('visible', false);
        aTextg.setAttribute('visible', false);
        aTexth.setAttribute('visible', false);
        aTexti.setAttribute('visible', false);
        aTextj.setAttribute('visible', false);
        aTextk.setAttribute('visible', false);
        aTextl.setAttribute('visible', false);
        aTextm.setAttribute('visible', false);
        aTextn.setAttribute('visible', false);
        aTexto.setAttribute('visible', false);
        aTextp.setAttribute('visible', false);
        aTextq.setAttribute('visible', false);
        aTextr.setAttribute('visible', false);
        aTexts.setAttribute('visible', false);
        aTextt.setAttribute('visible', false);
        aTextu.setAttribute('visible', false);
        aTextv.setAttribute('visible', false);
        aTextw.setAttribute('visible', false);
        aTextx.setAttribute('visible', false);
        aTexty.setAttribute('visible', false);
        aTextz.setAttribute('visible', false);
      
    });
    entityTastiera.appendChild(capslock1);
    
    var ringDelete = document.createElement('a-ring');
    ringDelete.setAttribute('id', "delete");
    ringDelete.setAttribute('segments-theta', 500);
    ringDelete.setAttribute('theta-length', 12.6);
    ringDelete.setAttribute('theta-start', -341.4);
    ringDelete.setAttribute('material', this.defaultmaterial);
    ringDelete.setAttribute('radius-inner', 1.205);
    ringDelete.setAttribute('radius-outer', 1.6);
    ringDelete.setAttribute('position', {x: 0,y: 2.5, z: -5 });
    ringDelete.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    ringDelete.addEventListener('mouseenter', function () {
        ringDelete.setAttribute('color', '#fff');
      });
    ringDelete.addEventListener('mouseleave', function () {
        ringDelete.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(ringDelete);
    
    var indietrotastiera = document.createElement('a-ring');
    indietrotastiera.setAttribute('id', "indietrotastiera");
    indietrotastiera.setAttribute('segments-theta', 500);
    indietrotastiera.setAttribute('theta-length', 12.4);
    indietrotastiera.setAttribute('theta-start', -353.8);
    indietrotastiera.setAttribute('material', this.defaultmaterial);
    indietrotastiera.setAttribute('radius-inner', 1.205);
    indietrotastiera.setAttribute('radius-outer', 1.6);
    indietrotastiera.setAttribute('position', {x: 0,y: 2.5,z: -5});
    indietrotastiera.setAttribute('scale', {x: 2,y: 2,z: 2});
    
    indietrotastiera.addEventListener('mouseenter', function () {
        indietrotastiera.setAttribute('color', '#fff');
      });
    indietrotastiera.addEventListener('mouseleave', function () {
        indietrotastiera.setAttribute('color', '#000');
      });
    indietrotastiera.addEventListener('click', function () {
        entityTastiera.setAttribute('visible', false);
        entityTastiera.setAttribute('scale', {x:-1, y:-1, z:-1});
        entity.setAttribute('visible', true);
        entity.setAttribute('scale', {x:2, y:2, z:2});
      });
    
    entityTastiera.appendChild(indietrotastiera);
    
    var Mem = document.createElement('a-image');
    Mem.setAttribute('id', "Mem");
    Mem.setAttribute('src', "https://cdn.glitch.com/ea4cbc17-1f9a-4d66-a022-282536131071%2Fmaiuscolo.png?1523352542260")
    Mem.setAttribute('position', {x: 2.23,y: 4.28,z: -5});
    Mem.setAttribute('scale', {x: 0.5,y: 0.4,z: 0.1});
    
    Mem.addEventListener('mouseenter', function () {
        ringCapsLock.setAttribute('color', '#fff');
      });
    Mem.addEventListener('mouseleave', function () {
        ringCapsLock.setAttribute('color', '#000');
      });
    Mem.addEventListener('click', function(){
        Mem.setAttribute('visible', false);
        Mem.setAttribute('scale', {x: -1, y: -1, z: -1});
        ringCapsLock.setAttribute('visible', false);
        ringCapsLock.setAttribute('scale', {x: -1, y: -1, z: -1});
        meM.setAttribute('visible', true);
        meM.setAttribute('scale', {x: 0.5, y: 0.4, z: 0.1});
        capslock1.setAttribute('visible', true);
        capslock1.setAttribute('scale', {x:2, y:2, z:2});
        aTextA.setAttribute('visible', false);
        aTextB.setAttribute('visible', false);
        aTextC.setAttribute('visible', false);
        aTextD.setAttribute('visible', false);
        aTextE.setAttribute('visible', false);
        aTextF.setAttribute('visible', false);
        aTextG.setAttribute('visible', false);
        aTextH.setAttribute('visible', false);
        aTextI.setAttribute('visible', false);
        aTextJ.setAttribute('visible', false);
        aTextK.setAttribute('visible', false);
        aTextL.setAttribute('visible', false);
        aTextM.setAttribute('visible', false);
        aTextN.setAttribute('visible', false);
        aTextO.setAttribute('visible', false);
        aTextP.setAttribute('visible', false);
        aTextQ.setAttribute('visible', false);
        aTextR.setAttribute('visible', false);
        aTextS.setAttribute('visible', false);
        aTextT.setAttribute('visible', false);
        aTextU.setAttribute('visible', false);
        aTextV.setAttribute('visible', false);
        aTextW.setAttribute('visible', false);
        aTextX.setAttribute('visible', false);
        aTextY.setAttribute('visible', false);
        aTextZ.setAttribute('visible', false);
      
        aTexta.setAttribute('visible', true);
        aTextb.setAttribute('visible', true);
        aTextc.setAttribute('visible', true);
        aTextd.setAttribute('visible', true);
        aTexte.setAttribute('visible', true);
        aTextf.setAttribute('visible', true);
        aTextg.setAttribute('visible', true);
        aTexth.setAttribute('visible', true);
        aTexti.setAttribute('visible', true);
        aTextj.setAttribute('visible', true);
        aTextk.setAttribute('visible', true);
        aTextl.setAttribute('visible', true);
        aTextm.setAttribute('visible', true);
        aTextn.setAttribute('visible', true);
        aTexto.setAttribute('visible', true);
        aTextp.setAttribute('visible', true);
        aTextq.setAttribute('visible', true);
        aTextr.setAttribute('visible', true);
        aTexts.setAttribute('visible', true);
        aTextt.setAttribute('visible', true);
        aTextu.setAttribute('visible', true);
        aTextv.setAttribute('visible', true);
        aTextw.setAttribute('visible', true);
        aTextx.setAttribute('visible', true);
        aTexty.setAttribute('visible', true);
        aTextz.setAttribute('visible', true);
      
    });
        
    
    entityTastiera.appendChild(Mem);
    
    var meM = document.createElement('a-image');
    meM.setAttribute('id', "meM");
    meM.setAttribute('src', "https://cdn.glitch.com/139ee8c7-446d-4951-9618-bc54db61f22e%2Fcapslockoff.png?1522226623082")
    meM.setAttribute('visible', "false");
    meM.setAttribute('position', {x: 2.23,y: 4.28,z: -5});
    meM.setAttribute('scale', {x: 0.5,y: 0.4,z: 0.1});
    
    meM.addEventListener('mouseenter', function () {
        capslock1.setAttribute('color', '#fff');
      });
    meM.addEventListener('mouseleave', function () {
        capslock1.setAttribute('color', '#000');
      });
    meM.addEventListener('click', function(){
        meM.setAttribute('visible', false);
        meM.setAttribute('scale', {x: -1, y: -1, z: -1});
        capslock1.setAttribute('visible', false);
        capslock1.setAttribute('scale', {x: -1, y: -1, z: -1});
        Mem.setAttribute('visible', true);
        Mem.setAttribute('scale', {x: 0.5, y: 0.4, z: 0.1});
        ringCapsLock.setAttribute('visible', true);
        ringCapsLock.setAttribute('scale', {x: 2, y: 2, z: 2});
        aTextA.setAttribute('visible', true);
        aTextB.setAttribute('visible', true);
        aTextC.setAttribute('visible', true);
        aTextD.setAttribute('visible', true);
        aTextE.setAttribute('visible', true);
        aTextF.setAttribute('visible', true);
        aTextG.setAttribute('visible', true);
        aTextH.setAttribute('visible', true);
        aTextI.setAttribute('visible', true);
        aTextJ.setAttribute('visible', true);
        aTextK.setAttribute('visible', true);
        aTextL.setAttribute('visible', true);
        aTextM.setAttribute('visible', true);
        aTextN.setAttribute('visible', true);
        aTextO.setAttribute('visible', true);
        aTextP.setAttribute('visible', true);
        aTextQ.setAttribute('visible', true);
        aTextR.setAttribute('visible', true);
        aTextS.setAttribute('visible', true);
        aTextT.setAttribute('visible', true);
        aTextU.setAttribute('visible', true);
        aTextV.setAttribute('visible', true);
        aTextW.setAttribute('visible', true);
        aTextX.setAttribute('visible', true);
        aTextY.setAttribute('visible', true);
        aTextZ.setAttribute('visible', true);
      
        aTexta.setAttribute('visible', false);
        aTextb.setAttribute('visible', false);
        aTextc.setAttribute('visible', false);
        aTextd.setAttribute('visible', false);
        aTexte.setAttribute('visible', false);
        aTextf.setAttribute('visible', false);
        aTextg.setAttribute('visible', false);
        aTexth.setAttribute('visible', false);
        aTexti.setAttribute('visible', false);
        aTextj.setAttribute('visible', false);
        aTextk.setAttribute('visible', false);
        aTextl.setAttribute('visible', false);
        aTextm.setAttribute('visible', false);
        aTextn.setAttribute('visible', false);
        aTexto.setAttribute('visible', false);
        aTextp.setAttribute('visible', false);
        aTextq.setAttribute('visible', false);
        aTextr.setAttribute('visible', false);
        aTexts.setAttribute('visible', false);
        aTextt.setAttribute('visible', false);
        aTextu.setAttribute('visible', false);
        aTextv.setAttribute('visible', false);
        aTextw.setAttribute('visible', false);
        aTextx.setAttribute('visible', false);
        aTexty.setAttribute('visible', false);
        aTextz.setAttribute('visible', false);
      
    });
    entityTastiera.appendChild(meM);
    
    var del = document.createElement('a-image');
    del.setAttribute('id', "delete");
    del.setAttribute('src', "https://cdn.glitch.com/22a8740c-4a57-4c05-a185-7c56c11270af%2Fea4cbc17-1f9a-4d66-a022-282536131071%252Fdelete.png?1526731594268")
    del.setAttribute('position', {x: 2.5, y: 3.73,z: -5});
    del.setAttribute('scale', {x: 0.45,y: 0.45,z: 0.1});
    
    del.addEventListener('mouseenter', function () {
        ringDelete.setAttribute('color', '#fff');
      });
    del.addEventListener('mouseleave', function () {
        ringDelete.setAttribute('color', '#000');
      });
    
    entityTastiera.appendChild(del);
    
    var backt = document.createElement('a-image');
    backt.setAttribute('id', "indietro");
    backt.setAttribute('src', "https://cdn.glitch.com/ea4cbc17-1f9a-4d66-a022-282536131071%2FBack.png?1523344569179")
    backt.setAttribute('opacity', 0.8);
    backt.setAttribute('position', {x: 2.65, y: 3.1, z: -4.9});
    backt.setAttribute('scale', {x: 0.4, y: 0.3, z: 0.1});
    
    backt.addEventListener('mouseenter', function () {
        ringDelete.setAttribute('color', '#fff');
      });
    backt.addEventListener('mouseleave', function () {
        ringDelete.setAttribute('color', '#000');
      });
    
    backt.addEventListener('click', function () {
        entityTastiera.setAttribute('visible', false);
        entityTastiera.setAttribute('scale', {x:-1, y:-1, z:-1});
        entity.setAttribute('visible', true);
        entity.setAttribute('scale', {x:2, y:2, z:2});
      }); 
    
    entityTastiera.appendChild(backt);
  }
});