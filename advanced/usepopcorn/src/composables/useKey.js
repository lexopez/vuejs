import { onMounted, onUnmounted } from "vue";

export const useKey = (key, action) => {
  // Function to handle the global key press
  const handleGlobalEnter = (event) => {
    if (event.key === key) {
      action();
      // Optional: Select the text if there's already something inside
      // searchBox.value.select();
    }
  };

  // Add the listener when the component "lives"
  onMounted(() => {
    window.addEventListener("keydown", handleGlobalEnter);
  });

  // Clean up when the component is destroyed to prevent memory leaks
  onUnmounted(() => {
    window.removeEventListener("keydown", handleGlobalEnter);
  });
};
