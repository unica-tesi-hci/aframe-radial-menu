AFRAME.registerComponent('menudynamic', {
  schema: {
    //posizione del menu all'interno della scena o della camera
    positioning_scene: {
    type: 'boolean', default: true},
    //numero di settori all'interno del primo ring
    sectorsRingInternal: {
    type: 'number', default: 1},
    //numero di settori all'interno del secondo ring
    sectorsRingExternal: {
    type: 'number', default: 0},
    
    },
      defaultmaterialDynamic: {color: '#000',opacity: 0.8},
      geometryCircle:{primitive: 'circle',segments: 500,radius: 0.8},
  
  init: function(){
    var scene = document.querySelector('a-scene');
    var camer1 = document.querySelector('a-camera');
    var entitaMenu = document.querySelector('#menu');
    var entity = document.createElement('a-entity');
    entity.setAttribute('id', "bg");
    
    var lista_url= document.querySelectorAll('[src_sectormenu]');
    
    if(entitaMenu.getAttribute('menudynamic').positioning_scene ){
    scene.appendChild(entity);}
    else{
    camer1.appendChild(entity);}
     var angoloinizio=0
   
      var start= 0;
      for(var i=1;i<=entitaMenu.getAttribute('menudynamic').sectorsRingInternal;i++){
      
        var ring = document.createElement('a-ring');
        entity.appendChild(ring);
        entity.setAttribute ("scale",{x:0.7,y:0.7,z:1});
        ring.setAttribute('segments-theta', 500);
        ring.setAttribute('id','ring'+ i);
        ring.setAttribute('theta-length', 360/entitaMenu.getAttribute('menudynamic').sectorsRingInternal);
        ring.setAttribute('theta-start', start);
        start = start + (360/entitaMenu.getAttribute('menudynamic').sectorsRingInternal);
        ring.setAttribute('material', this.defaultmaterialDynamic);
        ring.setAttribute('position', {x: 0,y: 3.2,z: -5});
        ring.setAttribute('scale', { x: 2, y: 2, z: 2});
        
        
        var ringetto = document.querySelector("#ring"+ i);
        if(ringetto != null){
         ringetto.addEventListener('mouseenter', function(event){
            event.target.setAttribute('material', {color: '#fff'} );
         }); 
          
          ringetto.addEventListener('mouseleave', function(event){
            event.target.setAttribute('material', {color: '#000'} );
          });
        }
       
        
        /* se la lista dei componenti per script e icone e' diversa da null, oppure ha almeno un elemento
        allora cicla gli elementi al suo interno, per ogni elemento seleziona l'id al ring a cui si riferisce
        e controlla che l'elemento si riferisca al ring che si sta creando al momento, se si allora inserisci 
        l'icona come immagine*/
       
        if(lista_url != null || lista_url.length >= 1){
               var angoloAggiunto=360/entitaMenu.getAttribute('menudynamic').sectorsRingInternal;
              
          for(var j=0; j< lista_url.length;j++){
              var ring_id= lista_url[j].getAttribute('src_sectormenu').id_ring.replace('ring','');
              if(ring_id == i){
                
                var prova=document.createElement('a-entity');
                prova.setAttribute('id',i);
                entity.appendChild(prova);
                  var url_icona= lista_url[j].getAttribute('src_sectormenu').url_icon;
              
                      var image = document.createElement('a-image');
                      image.setAttribute('id','imageRing'+ i);
                      entity.appendChild(image);
                
                  /*---------------------------Algoritmo di posizionamento delle icone-----------------------------------*/
                     //mettiamo che siamo al ring con id 3, facendo i-1 abbaimo 2, lo moltiplichiamo per la lunghezza in gradi
                    // di 1 settore e otteniamo l'angolo di inizio del settore 3 a questo punto sommiamo metà della lunghezza
                    // di un angolo e otteniamo così l'angolo esatto a metà del terzo settore
                
                    var xa =  (1.4 * Math.cos((((i-1)*angoloAggiunto)+angoloAggiunto/2)* 3.14159/180));
                    var ya = 3.2+ (1.4* Math.sin((((i-1)*angoloAggiunto)+angoloAggiunto/2)* 3.14159/180));
                    var xb = (2.5 * Math.cos((((i-1)*angoloAggiunto)+angoloAggiunto/2)* 3.14159/180));
                    var yb = 3.2+ (2.5 * Math.sin((((i-1)*angoloAggiunto)+angoloAggiunto/2)* 3.14159/180));
                
                   var xm = (xa + xb)/2;
                   var ym = (ya + yb)/2;
            
                   if (url_icona !='none' ){
                     
                      image.setAttribute('src', url_icona);
                      image.setAttribute('opacity',0.8);
                   }
                  image.setAttribute('position',{x: xm, y: ym, z: -4.9});
                  image.setAttribute('scale',{x: 0.5, y:0.5, z: 0.5});
                 /*--------------------------------------------------------------------------------------------------*/
                    
                    
                   if(image != null){
                      image.addEventListener('mouseenter', function(event){
                        var id = event.target.getAttribute("id").replace("imageRing", "");
                        document.querySelector("#ring" + id).setAttribute('material', {color: '#fff'} );
                       }); 
          
                      image.addEventListener('mouseleave', function(event){
                        var id = event.target.getAttribute("id").replace("imageRing", "");
                        document.querySelector("#ring" + id).setAttribute('material', {color: '#000'} );
                        
                      });
                    }  
                    
                 
              
              //script per ring
              var url_script= lista_url[j].getAttribute('src_sectormenu').url_script;
              if (url_script !=null ){
              var script = document.createElement('script');
              script.setAttribute('id','scriptRing'+ i);
              document.head.appendChild(script);
              script.setAttribute('src', url_script);
              }
          }else{
              angoloinizio+=angoloAggiunto;
          }
            
          }
angoloinizio+=angoloAggiunto;
        }
        
      }
    
      
      var start= 0;
      for(var i=1;i<=entitaMenu.getAttribute('menudynamic').sectorsRingExternal;i++){
       
        var ringesterno = document.createElement('a-ring');
        ringesterno.setAttribute('radius-inner', 1.205);
        ringesterno.setAttribute('radius-outer', 1.6 );
        ringesterno.setAttribute('segments-theta', 500);
        ringesterno.setAttribute('id','ringesterno'+ i);
        entity.appendChild(ringesterno);
        
        ringesterno.setAttribute('theta-length', 360/entitaMenu.getAttribute('menudynamic').sectorsRingExternal);
        
        ringesterno.setAttribute('theta-start', start);
        start = start + (360/entitaMenu.getAttribute('menudynamic').sectorsRingExternal);
        ringesterno.setAttribute('material', this.defaultmaterialDynamic);
        ringesterno.setAttribute('position', {x: 0,y: 3.2,z: -5});
        ringesterno.setAttribute('scale', { x: 2, y: 2, z: 2});
        
       
        var ringetto = document.querySelector("#ringesterno"+ i);
        if(ringetto != null){
         ringetto.addEventListener('mouseenter', function(event){
            event.target.setAttribute('material', {color: '#fff'} );
         }); 
          
          ringetto.addEventListener('mouseleave', function(event){
            event.target.setAttribute('material', {color: '#000'} );
          });
        }
        
      
        /* se la lista dei componenti per script e icone e' diversa da null, oppure ha almeno un elemento
        allora cicla gli elementi al suo interno, per ogni elemento seleziona l'id al ring a cui si riferisce
        e controlla che l'elemento si riferisco al ring che si sta creando al momento, se si allora inserisci 
        l'icona come immagine*/
        
      if(lista_url != null || lista_url.length >= 1){
         var angoloAggiunto=360/entitaMenu.getAttribute('menudynamic').sectorsRingExternal;

        for(var j=0; j< lista_url.length;j++){
            var ring_id= lista_url[j].getAttribute('src_sectormenu').id_ring;
            if(ring_id == 'ringesterno'+i){
              var image = document.createElement('a-image');
              image.setAttribute('id','imageRingesterno'+ i);
              entity.appendChild(image);
              var url= lista_url[j].getAttribute('src_sectormenu').url_icon;
              
              
              /*---------------------------Algoritmo di posizionamento delle icone-----------------------------------*/
                     //mettiamo che siamo al ring con id 3, facendo i-1 abbaimo 2, lo moltiplichiamo per la lunghezza in gradi
                    // di 1 settore e otteniamo l'angolo di inizio del settore 3 a questo punto sommiamo metà della lunghezza
                    // di un angolo e otteniamo così l'angolo esatto a metà del terzo settore
                
                    var xa =  (2.2 * Math.cos((((i-1)*angoloAggiunto)+angoloAggiunto/2)* 3.14159/180));
                    var ya =  3.2+ (2.2* Math.sin((((i-1)*angoloAggiunto)+angoloAggiunto/2)* 3.14159/180));
                    var xb = (3.2 * Math.cos((((i-1)*angoloAggiunto)+angoloAggiunto/2)* 3.14159/180));
                    var yb = 3.2+ (3.2 * Math.sin((((i-1)*angoloAggiunto)+angoloAggiunto/2)* 3.14159/180));
                
                   var xm = (xa + xb)/2;
                   var ym = (ya + yb)/2;
            
                   if (url_icona !='none' ){
                     
                      image.setAttribute('src', url_icona);
                      image.setAttribute('opacity',0.8);
                   }
                  image.setAttribute('position',{x: xm, y: ym, z: -4.9});
                  image.setAttribute('scale',{x: 0.5, y:0.5, z: 0.5});

                 /*--------------------------------------------------------------------------------------------------*/
                    
                    
                   if(image != null){
                      image.addEventListener('mouseenter', function(event){
                        var id = event.target.getAttribute("id").replace("imageRingesterno", "");
                        document.querySelector("#ringesterno" + id).setAttribute('material', {color: '#fff'} );
                       }); 
          
                      image.addEventListener('mouseleave', function(event){
                        var id = event.target.getAttribute("id").replace("imageRingesterno", "");
                        document.querySelector("#ringesterno" + id).setAttribute('material', {color: '#000'} );
                        
                      });
                    }  
              
            }
              //script per ring
              var url_script= lista_url[j].getAttribute('src_sectormenu').url_script;
              if (url_script !=null ){
              var script = document.createElement('script');
              script.setAttribute('id','scriptRingesterno'+ i);
              document.head.appendChild(script);
              script.setAttribute('src', url_script);
              script.setAttribute('opacity',0.8);
              }
          }
       }
     }
  }
  
});

AFRAME.registerComponent('src_sectormenu', {
  
  schema: {
    id_ring:{//l'id del ring su cui agire
    type: 'string',default:'none'}, 
    url_icon: {
    type: 'string',default:'none'},
    //url per lo script
    url_script: {
    type: 'string'},
    },
      
});


