import { onMounted, ref, watch } from "vue";

export const useLocalStorageState = (initialState, key) => {
  // 1. Use ref instead of reactive for easier reassignment
  const movies = ref(initialState);

  onMounted(() => {
    const storedValue = localStorage.getItem(key);
    // console.log(storedValue);
    if (storedValue) {
      // 2. Update .value so the component sees the change
      movies.value = JSON.parse(storedValue);
    }
  });

  // 3. Use deep: true so Vue watches items inside the array
  watch(
    movies,
    (newVal) => {
      localStorage.setItem(key, JSON.stringify(newVal));
    },
    { deep: true },
  );

  return movies;
};
