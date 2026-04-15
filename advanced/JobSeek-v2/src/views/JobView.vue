<script setup>
import { onMounted } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";

import { jobService } from "@/api/jobService";
import { useApi } from "@/composables/useApi";
import BackButton from "@/components/BackButton.vue";
import { PulseLoader } from "vue-spinner";
import { useToast } from "vue-toastification";

const route = useRoute();
const jobId = route.params.id;

const {
  data: job,
  isLoading,
  error,
  execute: fetchJob,
} = useApi(jobService.getById);

const {
  isLoading: isDeleting,
  error: deleteError,
  execute: deleteJobApi,
} = useApi(jobService.delete);

const handleDeleteRequest = async () => {
  await deleteJobApi(jobId);
};

onMounted(() => fetchJob(jobId));
</script>

<template>
  <BackButton />
  <div v-if="job">
    <section v-if="!isLoading" class="bg-green-50">
      <div class="container m-auto py-10 px-6">
        <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div class="text-gray-500 mb-4">{{ job.type }}</div>
              <h1 class="text-3xl font-bold mb-4">{{ job.title }}</h1>
              <div
                class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <i class="pi pi-map-marker text-xl text-orange-700 mr-2"></i>
                <p class="text-orange-700">{{ job.location }}</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-green-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p class="mb-4">
                {{ job.description }}
              </p>

              <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

              <p class="mb-4">{{ job.salary }} / Year</p>
            </div>
          </main>

          <!-- Sidebar -->
          <aside>
            <!-- Company Info -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-6">Company Info</h3>

              <h2 class="text-2xl">{{ job.company.name }}</h2>

              <p class="my-2">
                {{ job.company.description }}
              </p>

              <hr class="my-4" />

              <h3 class="text-xl">Contact Email:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold">
                {{ job.company.contactEmail }}
              </p>

              <h3 class="text-xl">Contact Phone:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold">
                {{ job.company.contactPhone }}
              </p>
            </div>

            <!-- Manage -->
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-xl font-bold mb-6">Manage Job</h3>
              <RouterLink
                :to="`/jobs/edit/${job.id}`"
                class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</RouterLink
              >
              <button
                :disabled="isDeleting"
                @click="handleDeleteRequest"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <div v-else class="text-center text-gray-500 py-6">
      <PulseLoader />
    </div>
  </div>
</template>
