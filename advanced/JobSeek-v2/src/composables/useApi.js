import { ref } from "vue";
import { useToast } from "vue-toastification";

export function useApi(apiCall) {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  const execute = async (...args) => {
    isLoading.value = true;
    error.value = null;
    try {
      data.value = await apiCall(...args);
      return data.value; // Return for immediate use if needed
    } catch (err) {
      error.value = err.message || "An unexpected error occurred";
      throw err; // Re-throw so the component can handle specific logic if it wants
    } finally {
      isLoading.value = false;
    }
  };

  return { data, error, isLoading, execute };
}
