/**
*** Registro un nuovo componente di A-FRAME chiamato suono, che conterrà
*** varie opzioni per poter modificare gli oggetti all'interno della scena.
**/ 

AFRAME.registerComponent('suono', {
  schema: {
    script_back:{
      type:'string',default:'none'
    },
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
    entity.setAttribute('id', "suono");
    
    if(questa.getAttribute('suono').positioning_scene ){
    scene.appendChild(entity);}
    else{
    camer1.appendChild(entity);}

    /*controllo per l'src dell pulsante indietro*/
    if(questa.getAttribute('suono').script_back != 'none'){
    var script_indietro= document.createElement('script')
    document.head.appendChild(script_indietro);
    var src_script= questa.getAttribute('suono').script_back;
    script_indietro.setAttribute('src', src_script);
    }
    
  
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
     //entitySuono.setAttribute('scale',{x:-1, y:-1, z:-1});
    // entitySuono.setAttribute('visible',false);
     entitySuono.setAttribute('visible',true);
     entitySuono.setAttribute('scale',{x: 2, y:2, z:2});


    
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
        //entity.setAttribute('visible', true );
        //entity.setAttribute('scale', {x: 2,y: 2,z: 2 });
      });
     
    
    var imgfrecciaindietro= document.createElement('a-image');
    entitySuono.appendChild(imgfrecciaindietro);
    imgfrecciaindietro.setAttribute( 'id','back1');
    imgfrecciaindietro.setAttribute( 'src','https://cdn.glitch.com/ea330562-3dce-4b4d-9299-9a5940832bd0%2FindietroSmall.png?1526368911662');
    imgfrecciaindietro.setAttribute('position',{x:1.96,y:2.5,z:-4.9});
    imgfrecciaindietro.setAttribute('scale',{x:0.5,y:0.45,z:1});

    imgfrecciaindietro.addEventListener('click', function () {
        entitySuono.setAttribute('visible', false );
        entitySuono.setAttribute('scale', {x: -1,y: -1,z: -1});
        //entity.setAttribute('visible', true );
        //entity.setAttribute('scale', {x: 2,y: 2,z: 2 });
      });
    imgfrecciaindietro.addEventListener('mouseenter', function () {
        ringback.setAttribute('color', '#fff');
      });
    imgfrecciaindietro.addEventListener('mouseleave', function () {
        ringback.setAttribute('color', '#000');
      });
    
      

    var ringesterno= document.createElement('a-ring');
    entitySuono.appendChild(ringesterno);
    ringesterno.setAttribute('segments-theta', 500);
    ringesterno.setAttribute('theta-length',270);
    ringesterno.setAttribute('theta-start',45);
    ringesterno.setAttribute('material',this.defaultmaterial);
    ringesterno.setAttribute('position',{x:0, y:2.5,z:-5});
    ringesterno.setAttribute('scale',{x:2, y:2,z:2});
    
     

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
    
    
  }
});