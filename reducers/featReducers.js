export var initialState =  {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };
  
  
  
  export const reducer = (state, action) => {
  
  var caR=state.car
  var addi=state.additionalFeatures
  var adp=state.additionalPrice
       switch (action.type) {
         case 'ADD':
           for(var g=0; g<addi.length;g++){
             if(addi[g].id===action.id){
               adp+=addi[g].price
                caR.features.push(addi[g])
                addi.splice(g,1);
                
              }
  
           }
           return {
             ...state,
              car:caR,
             additionalFeatures:addi,
             additionalPrice:adp
  
           };
        case 'REM':
          console.log(caR.features)
          for(var h=0; h<caR.features.length;h++){
            if(caR.features[h].id===action.id){
              adp-=caR.features[h].price
               addi.push(caR.features[h])
               caR.features.splice(h,1);
              }
          }
          console.log(caR.features)
          return {
            ...state,
             car:caR,
            additionalFeatures:addi,
            additionalPrice:adp
  
          };
  
        case 'NEW_PRICE':
          
          return state
       
       default:
          return state;
        }}
      
  
     
      