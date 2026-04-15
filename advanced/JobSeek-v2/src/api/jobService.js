import client from "./client";
import { useToast } from "vue-toastification"; // or your toast library import
import router from "@/router"; // Import router to navigate after deletion if needed
import DeleteConfirm from "@/components/DeleteConfirm.vue";

const toast = useToast();

export const jobService = {
  async getById(id) {
    try {
      const data = await client.get(`/jobs/${id}`).then((res) => res.data);
      return data;
    } catch (error) {
      console.error(error);
      toast.error(`Failed to fetch job with ID: ${id}`);
      throw error;
    }
  },
  async getAll() {
    try {
      const data = await client.get("/jobs").then((res) => res.data);
      return data;
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch jobs");
      throw error;
    }
  },
  async create(data) {
    try {
      const result = await client.post("/jobs", data).then((res) => res.data);
      toast.success("Job created successfully");
      router.push(`/jobs/${result.id}`);
    } catch (error) {
      toast.error("Failed to create job");
      throw error;
    }
  },
  async update(id, data) {
    try {
      await client.put(`/jobs/${id}`, data).then((res) => res.data);
      toast.success("Job updated successfully");
      router.push("/jobs"); // Navigate to the updated job's detail page
    } catch (error) {
      toast.error("Failed to update job");
      throw error;
    }
  },
  async delete(id) {
    try {
      // throw new Error("my error");
      await new Promise((resolve) => {
        toast.warning(
          {
            component: DeleteConfirm,
            props: {
              onDelete: resolve,
            },
          },
          {
            timeout: false,
            closeOnClick: true,
            draggable: false,
            icon: "trash-icon-here",
            position: "top-center",
          },
        );
      });

      await client.delete(`/jobs/${id}`).then((res) => res.data);
      toast.success("Job deleted successfully");
      router.push("/jobs");
    } catch (error) {
      console.error("error", error);
      toast.error("Failed to delete job");
      throw error;
    }
  },
};
