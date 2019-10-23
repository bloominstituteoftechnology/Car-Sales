const ADD_FEATURES = 'ADD_FEATURES';
const REMOVE_FEATURES = 'REMOVE_FEATURES';

const removeFeatures =()=>{
   return{
      type: REMOVE_FEATURES
   };
}

const addFeatures = ()=>{
   return{
      type: ADD_FEATURES
   };
}