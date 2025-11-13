<script setup>
import { ref, reactive, watch, nextTick } from 'vue'
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import backgroundImage from '@/assets/Picture/IMCA.jpeg';

const studentForm = ref(null)
const form = reactive({
  fname: '',
  course: '',
})

const courses = [
  'Window Server administrator/IT Support Specialist',
  'Web Developer',
  'Cloud Engineer/Cloud Solution Architect',
  'Web & API Development Specialist',
  'Python for Computer Vision: Theory and Project'
]

const loading = ref(false)
const dialog = ref(false);
const pdfUrl = ref('');

const generatePdf = async () => {
  console.time('generatePdf execution');
  loading.value = true;
  const cardElement = document.getElementById('profile-card-container');
  await nextTick(); // Ensure DOM is updated before capturing
  if (cardElement) {
    console.time('html2canvas rendering');
    const canvas = await html2canvas(cardElement, { backgroundColor: null, useCORS: true });
    console.timeEnd('html2canvas rendering');
    const cardImgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(backgroundImage, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    const cardWidth = pdfWidth;
    const cardHeight = (canvas.height * cardWidth) / canvas.width;
    const x = (pdfWidth - cardWidth) / 2;
    const y = (pdfHeight - cardHeight) / 2;
    pdf.addImage(cardImgData, 'PNG', x, y, cardWidth, cardHeight);
    console.time('jsPDF output');
    const blob = pdf.output('blob');
    console.timeEnd('jsPDF output');
    pdfUrl.value = URL.createObjectURL(blob) + '#toolbar=0';
    dialog.value = true;
  }
  loading.value = false;
  console.timeEnd('generatePdf execution');
};

const downloadPdf = () => {
  const a = document.createElement('a');
  a.href = pdfUrl.value;
  a.download = `${form.course}.pdf`;
  a.click();
};

// Revoke the object URL to prevent memory leaks when the dialog is closed
watch(dialog, (newValue) => {
  if (!newValue && pdfUrl.value) {
    URL.revokeObjectURL(pdfUrl.value);
  }
});
</script>
<template>
  <v-btn to="/project" variant="flat" color="info" icon="mdi-arrow-left" class="btn-css"></v-btn>
  <div class="profile-card-for-pdf">
    <div id="profile-card-container">
      <p class="certi_name">{{ form.fname }}</p>
      <p class="certi_course">
        {{ form.course }}
      </p>
    </div>
  </div>
  <v-container>
    <!-- Student Form -->
    <v-card>
      <v-card-title class="text-h4 text-wrap text-center bg-primary text-white pa-4">
        Student Certificate
      </v-card-title>
      <v-card-text>
        <v-form ref="studentForm">
          <v-row>
            <v-col cols="12">
              <h3 class="text-h6 mt-4 text-lg-start text-md-start text-center">Personal Details</h3>
              <v-divider class="my-3"></v-divider>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.fname" :rules="[v => !!v || 'Full Name is required']" label="Full Name"
                variant="outlined" name="fname" id="fname" rounded="2" aria-required="true"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select v-model="form.course" :items="courses" :rules="[v => !!v || 'Course is required']"
                label="Course" variant="outlined" name="course" id="course" rounded="2"></v-select>
            </v-col>
          </v-row>
          <v-row class="mt-5 justify-content-center">
            <v-col cols="12" md="3" class="d-flex justify-center">
              <v-tooltip text="Preview and Download the certificate" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" @click="generatePdf" color="primary" text="Certificate"
                    prepend-icon="mdi-file-certificate-outline" size="large"></v-btn>
                </template>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>

  <!-- PDF Preview Dialog -->
  <v-dialog v-model="dialog" max-width="900">
    <v-card>
      <v-card-title class="p-0 d-flex justify-space-between align-center">
        <v-btn color="primary" @click="downloadPdf" text="Download" prepend-icon="mdi-download" :loading="loading"
          variant="text"></v-btn>
        <v-btn icon="mdi-close" @click="dialog = false" variant="text"></v-btn>
      </v-card-title>
      <embed :src="pdfUrl" style="width: 100%; height: 500px;" frameborder="0" allowfullscreen></embed>
    </v-card>
  </v-dialog>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.profile-card-for-pdf {
  position: absolute;
  left: -9999px;
  top: -9999px;
  width: 1123px;
  /* A4 width in pixels at 96 DPI for landscape */
  height: 794px;
  /* A4 height in pixels at 96 DPI for landscape */
}

#profile-card-container {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.certi_name {
  font-family: "Inter", sans-serif;
  width: 100%;
  text-align: center;
  font-size: 72px;
  margin-top: 240px;
  font-weight: 800;
  color: black;
  padding: 0;
  line-height: 1;
}

.certi_course {
  font-family: "Inter", sans-serif;
  width: 100%;
  text-align: center;
  font-size: 35px;
  letter-spacing: 0;
  font-weight: 800;
  margin-top: 132px;
  color: black;
  padding: 0;
  line-height: 1;
}

.btn-css {
  border-start-start-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  border-top-right-radius: 0% !important;
}
</style>
