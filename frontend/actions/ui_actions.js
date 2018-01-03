
export const OPEN_MODAL1 = "OPEN_MODAL1";
export const OPEN_MODAL2 = "OPEN_MODAL2";
export const CLOSE_MODALS = "CLOSE_MODALS";

export const openModal1 = (modal1) => ({
  type: OPEN_MODAL1,
  modal1
});

export const openModal2 = (modal2) => ({
  type: OPEN_MODAL2,
  modal2
});

export const closeModals = () => ({
  type: CLOSE_MODALS,
  modal1: false,
  modal2: false
});
