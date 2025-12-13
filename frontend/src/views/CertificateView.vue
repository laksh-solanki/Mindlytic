<script setup>
import { ref, reactive, onMounted } from 'vue'
import html2pdf from 'html2pdf.js/dist/html2pdf.min.js'
import RedAlert from '@/components/Red-alert.vue'
import GreenAlert from '@/components/Green-alert.vue'

const studentForm = ref(null)
const form = reactive({
  fname: '',
  course: '',
})

const courses = ref([])

const fetchCourses = async () => {
  try {
    const response = await fetch('https://mindlytic.onrender.com/project/certificate')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    courses.value = await response.json()
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
    showAlert('Failed to load courses.', 'error')
  }
}

onMounted(() => {
  fetchCourses()
})

const loading = ref(false)
const dialog = ref(false)
const pdfSection = ref(null)
const successAlert = ref(false)
const successMessage = ref('')
const errorAlert = ref(false)
const errorMessage = ref('')

let successTimeout = null
let errorTimeout = null

const showAlert = (message, type) => {
  if (type === 'success') {
    successMessage.value = message
    successAlert.value = true
    clearTimeout(successTimeout)
    successTimeout = setTimeout(() => {
      successAlert.value = false
    }, 4000)
  } else {
    errorMessage.value = message
    errorAlert.value = true
    clearTimeout(errorTimeout)
    errorTimeout = setTimeout(() => {
      errorAlert.value = false
    }, 4000)
  }
}

const previewCertificate = async () => {
  const { valid } = await studentForm.value.validate()
  if (!valid) {
    showAlert('Please fill in all required fields.', 'error')
    return
  }

  loading.value = true
  setTimeout(() => {
    // Simulate loading
    loading.value = false
    dialog.value = true
  }, 1000)
}

const generatePdf = () => {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    dialog.value = false
    showAlert('Certificate downloaded successfully!', 'success')
  }, 1000)

  if (pdfSection.value) {
    html2pdf(pdfSection.value, {
      margin: 0,
      filename: form.course + '.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 7, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    })
  }
}

const goBack = () => {
  window.history.back()
}
</script>
<template>
  <v-btn
    @click="goBack"
    variant="flat"
    icon="mdi-arrow-left"
    class="btn-css text-primary-emphasis bg-primary-subtle border border-primary-subtle"
  ></v-btn>
  <GreenAlert v-model:successAlert="successAlert" :successMessage="successMessage" />
  <RedAlert v-model:errorAlert="errorAlert" :errorMessage="errorMessage" />
  <v-container>
    <div
      class="text-h5 mb-3 p-3 text-center text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-4"
    >
      Student Certificate
    </div>
    <v-card
      class="text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-4"
      elevation="3"
    >
      <v-card-text>
        <v-form ref="studentForm">
          <v-row>
            <v-col cols="12">
              <h3 class="text-h6 mt-4 text-lg-start text-md-start text-center">Personal Details</h3>
              <v-divider class="my-3"></v-divider>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.fname"
                :rules="[(v) => !!v || 'Full Name is required']"
                label="Full Name"
                variant="outlined"
                name="fname"
                id="fname"
                rounded="2"
                aria-required="true"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="form.course"
                :items="courses"
                :rules="[(v) => !!v || 'Course is required']"
                label="Course"
                variant="outlined"
                name="course"
                id="course"
                rounded="2"
              ></v-select>
            </v-col>
          </v-row>
          <v-row class="mt-5 justify-content-center">
            <v-col cols="12" md="3" class="d-flex justify-center">
              <v-tooltip text="Preview and Download the certificate" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    @click="previewCertificate"
                    text="Certificate"
                    :loading="loading"
                    prepend-icon="mdi-file-certificate-outline"
                    class="text-primary-emphasis bg-primary-subtle border-3 border-primary-subtle rounded-3"
                    size="large"
                  ></v-btn>
                </template>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
    <v-card
      class="text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-4 mt-4"
      elevation="3"
    >
      <v-card-text>
        <div>
          Note: Please ensure that you have filled in your full name and selected the correct course
          before generating the certificate. The certificate will be generated in PDF format, which
          you can
          <div
            class="text-no-wrap bg-secondary rounded-4 p-1"
            style="width: 8.2rem; display: inline-flex"
          >
            Download For Free
          </div>
          .
        </div>
        <div class="mt-2">Certificates: The 10 courses available for certificate generation.</div>
      </v-card-text>
    </v-card>
  </v-container>

  <v-dialog v-model="dialog" max-width="840">
    <v-card>
      <v-card-title class="p-0 d-flex justify-space-between">
        <v-btn
          @click="generatePdf"
          text="Download"
          style="
            border-top-right-radius: 0;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 10px;
          "
          prepend-icon="mdi-download"
          :loading="loading"
          variant="text"
          class="text-primary-emphasis bg-primary-subtle border border-primary-subtle"
          height="45"
        ></v-btn>
        <v-btn
          icon="mdi-close"
          class="text-primary-emphasis bg-primary-subtle border border-primary-subtle"
          style="
            border-top-right-radius: 0;
            border-top-left-radius: 0;
            border-bottom-right-radius: 0;
          "
          @click="dialog = false"
          variant="text"
        ></v-btn>
      </v-card-title>
      <div>
        <div ref="pdfSection" class="certificate">
          <div class="logo">
            <div class="partnerLogo commonLogo">
              <div class="figure">
                <img src="/src/assets/Picture/sk.jfif" alt="" />
              </div>
            </div>
            <div class="figure eduTechLogo commonLogo">
              <img src="/src/assets/Picture/L&T EduTech.png" alt="" />
            </div>
          </div>
          <p class="certificateHeading text-center">
            Certificate of Course <br />
            Pathway Completion
          </p>
          <div class="nameContent">
            <p>{{ form.fname }}</p>
          </div>
          <div class="content">
            <p>
              has completed the Course pathway titled
              <br />
              <span>{{ form.course }}</span>
              <br />
              which covers
              <br />
              <em>7</em>
              courses and
              <em>13</em>
              learning hours
            </p>
          </div>
          <footer style="display: block">
            <div class="sign">
              <div class="left profLogo">
                <div class="figure">
                  <img src="/src/assets/Picture/profSignature.png" alt="" />
                </div>
                <p class="ceoName">Prof. (Dr.) Prafulkumar Udani</p>
                <p class="ceo">
                  Provost
                  <span>Sankalchand Patel University</span>
                </p>
              </div>
              <div class="right">
                <div class="figure">
                  <img src="/src/assets/Picture/febinsign.png" alt="" />
                </div>
                <p class="ceoName">M.F.Febin</p>
                <p class="ceo">Head <span>L&T EduTech</span></p>
              </div>
            </div>
            <div class="lnt">
              <div class="borderr">
                <div></div>
              </div>
              <div class="figure">
                <img src="/src/assets/Picture/LnT.png" alt="" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap');

.figure {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
  unicode-bidi: isolate;
  margin: 0;
}

.inside {
  width: 22cm !important;
  overflow-y: hidden;
}

.certificate {
  background-image: url(/src/assets/Picture/CoursePathway_BG.jpg);
  padding: 0;
  margin: 0;
  width: 100%;
  height: 1120px !important;
  overflow: hidden;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.logo {
  margin: 155px 0 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo .partnerLogo {
  padding-right: 30px;
  margin-right: 30px;
  position: relative;
}

.logo .partnerLogo:before {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 100px;
  background-color: #707070;
  opacity: 0.5;
}

.logo .partnerLogo .figure {
  width: auto;
  height: 85px;
}

.logo .commonLogo img {
  width: 100%;
  height: 100% 85px;
  object-fit: contain;
  object-position: left;
}

img,
picture {
  outline: 0;
  max-width: 100%;
  border-style: none;
}

.logo .eduTechLogo {
  width: 175px;
  position: relative;
  height: 85px;
}

.logo .commonLogo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
}

.certificateHeading {
  font-family:
    Open Sans,
    sans-serif;
  font-size: 34px;
  font-weight: 700;
  color: #222;
  line-height: 38px;
  text-transform: uppercase !important;
  margin: 50px auto 0;
  letter-spacing: 0 !important;
  text-align: center;
  width: 16cm;
}

.nameContent {
  width: 16cm;
  margin: 50px auto 40px;
  border-top: 2px solid #222222;
  border-bottom: 2px solid #222222;
  letter-spacing: 0;
}

.nameContent p {
  font-family: Poppins, sans-serif;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  line-height: 46px;
  text-transform: uppercase;
  margin: 17px 0;
  letter-spacing: 1px;
}

.content {
  width: 18cm;
  margin: 0 auto 60px;
}

.content p {
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-align: center;
  display: inline-block;
  width: 100%;
  margin: 0;
}

.content p span {
  font-weight: 800;
}

.content p em {
  font-style: normal;
  font-weight: 800;
}

.sign {
  width: 16cm;
  margin: 30px auto 0;
  align-items: flex-end;
}

.sign,
.lnt {
  display: flex;
  justify-content: space-between;
}

.sign .left.profLogo {
  width: auto;
}

.sign .left {
  width: 125px;
}

.sign .left.profLogo .figure {
  width: 135px;
  margin: 0 auto;
}

.sign .left.profLogo .ceoName {
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: #222;
  line-height: normal;
  margin: 0;
  text-align: center;
}

.sign .left p {
  font-family:
    Open Sans,
    sans-serif;
  font-size: 12px;
  font-weight: 800;
  color: #222;
  line-height: normal;
  margin: 0;
  text-align: center;
}

.sign .left.profLogo .ceo {
  font-family: Poppins, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  border-top: 1px solid #222222;
  text-align: center;
  margin: 3px 0 0;
  padding-top: 6px;
}

.sign .left p {
  font-family:
    Open Sans,
    sans-serif;
  font-size: 12px;
  font-weight: 800;
  color: #222;
  line-height: normal;
  margin: 0;
  text-align: center;
}

.sign .left.profLogo .ceo span {
  display: block;
  font-weight: 700;
}

.sign .right .figure {
  width: 135px;
  margin: 0 auto;
}

.sign .right .figure img {
  width: 100%;
}

.sign .right .ceoName {
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: #222;
  line-height: normal;
  margin: 0;
  text-align: center;
}

.sign .right .ceo {
  font-family: Poppins, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  border-top: 1px solid #222222;
  text-align: center;
  margin: 3px 0 0;
  padding-top: 6px;
}

.sign .right .ceo span {
  display: block;
  font-weight: 700;
}

.figure {
  margin: 0;
}

.lnt {
  width: 17cm;
  margin: 40px auto;
  align-items: center;
}

.sign,
.lnt {
  display: flex;
  justify-content: space-between;
}

.lnt .borderr {
  width: calc(100% - 75px);
}

.lnt .borderr > div {
  border: 1px solid #222222;
  width: 100%;
  display: block;
}

.lnt .figure {
  width: 60px;
  margin: 0 0 0 20px;
}

.lnt .figure img {
  width: 100%;
}

.btn-css {
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-start-start-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  border-top-right-radius: 0% !important;
}
</style>
