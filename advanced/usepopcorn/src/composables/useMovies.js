import { onMounted, ref, watch } from "vue";

const KEY = "f84fc31d";

export const useMovies = (query) => {
  const movies = ref([]);
  const loading = ref(false);
  const error = ref("");

  watch(
    query,
    async (query) => {
      const controller = new AbortController();
      try {
        loading.value = true;
        error.value = "";

        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}"}`, {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        movies.value = data.Search;

        //   console.log(movies.value[0].Title);
        error.value = "";
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err.message);
          error.value = err.message;
        }
      } finally {
        loading.value = false;
      }
    },
    { immediate: true },
  );

  //   onMounted(async () => {
  //     const controller = new AbortController();
  //     try {
  //       loading.value = false;
  //       error.value = "";

  //       const res = await fetch(
  //         `http://www.omdbapi.com/?apikey=${KEY}&s=${query ? query : "interstellar"}`,
  //         { signal: controller.signal },
  //       );

  //       if (!res.ok) throw new Error("Something went wrong with fetching movies");

  //       const data = await res.json();
  //       if (data.Response === "False") throw new Error("Movie not found");

  //       movies.value = data.Search;
  //       error.value = "";
  //     } catch (err) {
  //       if (err.name !== "AbortError") {
  //         console.log(err.message);
  //         error.value = err.message;
  //       }
  //     } finally {
  //       loading.value = false;
  //     }
  //   });

  return { loading, error, movies };
};
