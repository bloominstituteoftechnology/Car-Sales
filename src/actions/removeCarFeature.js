export const REMOVE_CAR_FEATURE = "REMOVE_CAR_FEATURE"


export const removeFeature = item => {

    return {
      type: 'REMOVE_CAR_FEATURE',
      payload: item
    }

  }