export const Types = {
  ADD_IMAGE: 'checklist/ADD_IMAGE',
  SET_INITIAL_DATA: 'checklist/SET_INITIAL_DATA',
  SET_INITIAL_HRN: 'checklist/SET_INITIAL_HRN',
  SET_REDUCTION: 'checklist/SET_REDUCTION',
  SET_FINAL_HRN: 'checklist/SET_FINAL_HRN',
  ADD_DANGER_ZONE: 'checklist/ADD_DANGER_ZONE',
};

const initialState = {
  dangerZones: [],
  initialData: {},
  initialHrn: {},
  reduction: {},
  finalhrn: {},
  images: [],
}
export default function checklist(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_IMAGE:
      return { ...state, images: [...state.images, action.payload.image] };
    case Types.SET_INITIAL_DATA:
      let newData = {
        ...action.payload.data,
        images: state.images,
      }
      return { ...state, initialData: newData, images: [] };
    case Types.SET_INITIAL_HRN:
      return { ...state, initialHrn: action.payload.data };
    case Types.SET_REDUCTION:
      return { ...state, reduction: action.payload.data };
    case Types.SET_FINAL_HRN:
      return { ...state, finalhrn: action.payload.data };
    case Types.ADD_DANGER_ZONE:
      const newDangerZone = {
        initialData: state.initialData,
        initialHrn: state.initialHrn,
        reduction: state.reduction,
        finalhrn: state.finalhrn,
      }
      return { ...state, dangerZones: [...state.dangerZones, newDangerZone] };
    default:
      return { ...state };
  }
}
export const Creators = {
  addImage: image => ({
    type: Types.ADD_IMAGE,
    payload: { image },
  }),
  setInitialData: data => ({
    type: Types.SET_INITIAL_DATA,
    payload: { data },
  }),
  setInitialHrn: data => ({
    type: Types.SET_INITIAL_HRN,
    payload: { data },
  }),
  setReduction: data => ({
    type: Types.SET_REDUCTION,
    payload: { data },
  }),
  setFinalHrn: data => ({
    type: Types.SET_FINAL_HRN,
    payload: { data },
  }),
  addDangerZone: () => ({
    type: Types.ADD_DANGER_ZONE,
  })
}
