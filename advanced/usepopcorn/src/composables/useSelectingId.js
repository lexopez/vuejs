import { provide, ref } from "vue";

export const useSelectingId = () => {
  const selectedId = ref(null);

  const updateSelectedId = (id) => {
    selectedId.value = id;
  };
  provide("selectingId", {
    selectedId,
    updateSelectedId,
  });

  return selectedId;
};
