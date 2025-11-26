<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { jsPDF } from 'jspdf' // Corrected import for jsPDF
import RedAlert from '@/components/Red-alert.vue'
import GreenAlert from '@/components/Green-alert.vue'
const images = ref([])
const isConverting = ref(false)
const conversionProgress = ref(0)
const conversionStatus = ref('')
const imageIdCounter = ref(0)
const fileInput = ref(null)
const dragOver = ref(false)
const show = ref(false)
const successAlert = ref(false)
const successMessage = ref('')
const errorAlert = ref(false)
const errorMessage = ref('')

let counter = 0
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

const goBack = () => {
  window.history.back()
}

const triggerFileInput = () => {
  fileInput.value.click() // Access ref using .value
}

const handleFileSelect = (event) => {
  showAlert('Add Image File', 'success')
  const files = Array.from(event.target.files)
  processFiles(files)
}

const handleDrop = (event) => {
  dragOver.value = false
  const files = Array.from(event.dataTransfer.files)
  processFiles(files)
}

const onDragEnter = () => {
  counter++
  show.value = true
}

const onDragLeave = () => {
  counter--
  if (counter === 0) show.value = false
}

const onDragOver = (e) => e.preventDefault()

const onWindowDrop = (e) => {
  e.preventDefault()
  counter = 0
  show.value = false
  showAlert('Add Image File', 'success')
}

onMounted(() => {
  window.addEventListener('dragenter', onDragEnter)
  window.addEventListener('dragleave', onDragLeave)
  window.addEventListener('dragover', onDragOver)
  window.addEventListener('drop', onWindowDrop)
})

const processFiles = (files) => {
  const imageFiles = files.filter((file) => file.type.startsWith('image/'))

  if (imageFiles.length === 0) {
    showAlert('Please select valid image files.', 'error')
    return
  }

  imageFiles.forEach((file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      images.value.push({
        id: imageIdCounter.value++,
        file: file,
        url: e.target.result,
        name: file.name,
        size: file.size,
        type: file.type,
      })
    }
    reader.readAsDataURL(file)
  })
}

const removeImage = (index) => {
  images.value.splice(index, 1)
}

const moveUp = (index) => {
  if (index > 0) {
    const temp = images.value[index]
    images.value.splice(index, 1)
    images.value.splice(index - 1, 0, temp)
  }
}

const moveDown = (index) => {
  if (index < images.value.length - 1) {
    const temp = images.value[index]
    images.value.splice(index, 1)
    images.value.splice(index + 1, 0, temp)
  }
}

const clearAll = () => {
  images.value = []
  if (fileInput.value) {
    fileInput.value.value = ''
  }
  showAlert('Selected Files Cleared!', 'error')
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const generatePDF = async () => {
  if (images.value.length === 0) {
    showAlert('Please add some images first.', 'error')
    return
  }

  isConverting.value = true
  conversionProgress.value = 0
  conversionStatus.value = 'Initializing PDF document...'

  try {
    const pdf = new jsPDF()
    const totalImages = images.value.length

    for (let i = 0; i < totalImages; i++) {
      const image = images.value[i]
      conversionStatus.value = `Processing image ${i + 1} of ${totalImages}: ${image.name}`
      conversionProgress.value = Math.round((i / totalImages) * 100)

      await addImageToPDF(pdf, image, i > 0)

      // Small delay for smooth progress animation
      await new Promise((resolve) => setTimeout(resolve, 50)) // Reduced delay
    }

    conversionStatus.value = 'Finalizing PDF...'
    conversionProgress.value = 95

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-')
    const filename = `converted-images-${timestamp}.pdf`

    // Save the PDF
    pdf.save(filename)

    conversionProgress.value = 100
    conversionStatus.value = 'Conversion completed successfully!'

    showAlert('PDF generated successfully!', 'success')

    // Reset after a delay
    setTimeout(() => {
      isConverting.value = false
      conversionProgress.value = 0
      conversionStatus.value = ''
    }, 2000)
  } catch (error) {
    console.error('PDF generation error:', error)
    showAlert('Error generating PDF. Please try again.', 'error')
    isConverting.value = false
    conversionProgress.value = 0
    conversionStatus.value = ''
  }
}

const addImageToPDF = async (pdf, image, addPage) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      try {
        if (addPage) {
          pdf.addPage()
        }

        // Calculate dimensions to fit the image properly
        const pageWidth = pdf.internal.pageSize.getWidth()
        const pageHeight = pdf.internal.pageSize.getHeight()
        const margin = 5

        const availableWidth = pageWidth - 2 * margin
        const availableHeight = pageHeight - 2 * margin

        let imgWidth = img.width
        let imgHeight = img.height

        // Calculate scaling to fit the image within available space
        const scaleX = availableWidth / imgWidth
        const scaleY = availableHeight / imgHeight
        const scale = Math.min(scaleX, scaleY, 1) // Don't scale up, only down

        imgWidth *= scale
        imgHeight *= scale

        // Center the image on the page
        const x = (pageWidth - imgWidth) / 2
        const y = (pageHeight - imgHeight) / 2

        // Add the image to PDF
        pdf.addImage(img, image.type === 'image/jpeg' ? 'JPEG' : 'PNG', x, y, imgWidth, imgHeight)

        resolve()
      } catch (error) {
        reject(error)
      }
    }

    img.onerror = () => {
      reject(new Error(`Failed to load image: ${image.name}`))
    }

    img.src = image.url
  })
}

onUnmounted(() => {
  window.removeEventListener('dragenter', onDragEnter)
  window.removeEventListener('dragleave', onDragLeave)
  window.removeEventListener('dragover', onDragOver)
  window.removeEventListener('drop', onWindowDrop)
})
</script>
<template>
  <v-btn @click="goBack" variant="flat" icon="mdi-arrow-left"
    class="btn-css text-primary-emphasis bg-primary-subtle border border-primary-subtle"></v-btn>
  <GreenAlert v-model:successAlert="successAlert" :successMessage="successMessage" />
  <RedAlert v-model:errorAlert="errorAlert" :errorMessage="errorMessage" />
  <v-container>
    <div
      class="text-h5 mb-3 p-3 text-center text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-4">
      Convert Images to PDF
    </div>
    <!-- Upload Zone -->
    <div class="mb-12">
      <div class="upload-zone rounded-4" @dragover.prevent @drop.prevent="handleDrop" @click="triggerFileInput()">
        <input ref="fileInput" type="file" multiple accept="image/*" @change="handleFileSelect" class="file-input" />
        <div class="text-center">
          <div class="upload-zone-header">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                  stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg>
            <p>Browse File to upload!</p>
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-slate-800">
            Drop images here or click to browse
          </h3>
          <p class="text-slate-600 mb-4">Supports JPG, PNG, GIF, and WebP formats</p>
          <v-btn variant="outlined"
            class="text-primary-emphasis bg-primary-subtle border-none border-primary-subtle rounded-3">
            Choose Files
          </v-btn>
        </div>
      </div>
      <div id="overlay" v-show="show">
        <div class="icon">📁</div>
      </div>
    </div>
    <!-- Image Gallery -->
    <transition name="slide-up">
      <div v-if="images.length > 0" class="mb-12">
        <div class="flex justify-between items-center mb-6">
          <div
            class="text-h6 font-bold p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
            Uploaded Images <v-icon>mdi-menu-right</v-icon> {{ images.length }}
          </div>
          <div class="d-flex justify-content-start align-content-center mt-4 gap-1 flex-wrap">
            <v-btn variant="outlined" @click="clearAll" append-icon="mdi-window-close"
              class="text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3">
              Clear All
            </v-btn>
            <v-btn append-icon="mdi mdi-file-pdf-box"
              class="text-success-emphasis bg-success-subtle border border-success-subtle rounded-3" variant="outlined"
              @click="generatePDF" :disabled="isConverting || images.length === 0">
              {{ isConverting ? 'Converting...' : 'Download PDF' }}
            </v-btn>
            <v-label
              class="file-btn px-3 py-1 text-center opacity-100 align-content-center text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3"
              text="ADD MORE">
              <input ref="fileInput" type="file" id="fileInput" multiple accept="image/*" @change="handleFileSelect" />
              <v-icon class="ms-1">mdi-plus</v-icon>
            </v-label>
          </div>
        </div>

        <v-row dense>
          <v-col v-for="(image, index) in images" :key="image.id" cols="12" sm="6" md="5" lg="4">
            <v-card class="mx-auto text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-4"
              max-width="400">
              <v-img :src="image.url" :alt="image.name" class="align-end text-white img-thumbnail m-2 rounded-4"
                height="200" contain>
                <v-card-title>
                  <div class="image-controls">
                    <button @click="moveUp(index)" :disabled="index === 0" class="control-btn" title="Move up">
                      <i class="mdi mdi-arrow-up"></i>
                    </button>
                    <button @click="moveDown(index)" :disabled="index === images.length - 1" class="control-btn"
                      title="Move down">
                      <i class="mdi mdi-arrow-down"></i>
                    </button>
                    <button @click="removeImage(index)" class="control-btn" title="Remove">
                      <i class="mdi mdi-close"></i>
                    </button>
                  </div>
                </v-card-title>
              </v-img>
              <v-card-text class="p-2">
                <p class="p-1 m-0">{{ image.name }}</p>
              </v-card-text>
              <v-card-subtitle class="bg-info d-flex justify-content-center align-items-center">
                <p class="text-white m-0 p-2">{{ formatFileSize(image.size) }}</p>
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </transition>

    <!-- Progress Section -->
    <transition name="fade">
      <div class="card" v-if="isConverting">
        <div class="tools">
          <div class="circle">
            <span class="red box"></span>
          </div>
          <div class="circle">
            <span class="yellow box"></span>
          </div>
          <div class="circle">
            <span class="green box"></span>
          </div>
        </div>
        <div class="card-content p-3">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-semibold text-slate-800">Converting to PDF...</h3>
            <span class="text-sm text-slate-600">{{ conversionProgress }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-3">
            <div class="bg-gradient-to-r from-teal-500 to-amber-500 h-3 rounded-full transition-all duration-300"
              :style="{ width: conversionProgress + '%' }"></div>
          </div>
          <p class="text-sm text-slate-600 mt-2">{{ conversionStatus }}</p>
        </div>
      </div>
    </transition>
  </v-container>
</template>
<style>
#fileInput {
  display: none;
  /* hides original file selector + filename */
}

.file-btn {
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: inline-block;
}

#overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  pointer-events: none;
}

.icon {
  font-size: 70px;
  color: white;
}

.file-input {
  display: none;
}

.card {
  width: 100%;
  height: 300px;
  margin: 0 auto;
  background-color: #011522 !important;
  color: white !important;
  border-radius: 8px;
  z-index: 1;
}

.tools {
  display: flex;
  align-items: center;
  padding: 9px;
}

.circle {
  padding: 0 4px;
}

.box {
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
}

.red {
  background-color: #ff605c;
}

.yellow {
  background-color: #ffbd44;
}

.green {
  background-color: #00ca4e;
}

.btn-css {
  border-start-start-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  border-top-right-radius: 0% !important;
}

.upload-zone-header svg {
  height: 100px;
}

.upload-zone {
  border: 3px dashed royalblue;
  padding: 35px 40px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.upload-zone:hover {
  border-color: var(--bs-primary-border-subtle) !important;
  color: var(--bs-primary-text-emphasis) !important;
  background-color: rgb(207 226 255) !important;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.image-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: white;
}

.image-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.image-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.image-controls {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
}

.control-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.control-btn:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.1);
}

.progress-container {
  background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
}

.feature-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.gradient-text {
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.btn-primary {
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(13, 148, 136, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(13, 148, 136, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }

  .upload-zone {
    padding: 40px 20px;
  }
}
</style>
