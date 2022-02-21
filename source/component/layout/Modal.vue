<template>
  <Transition name="modal">
    <div v-if="showModalData.show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <!-- icon -->
            <div class="icon-circle">
              <i class="fa fa-map icon" aria-hidden="true"></i>
            </div>
            <h2>{{ showModalData.nam }} branch</h2>
          </div>

          <div class="modal-body">
            <h4>{{ showModalData.ads }}</h4>
            <ul>
              <li>
                <h5>Fax: {{ showModalData.fax }}</h5>
              </li>
              <li>
                <h5>Key: {{ showModalData.key }}</h5>
              </li>
              <li>
                <h5>Nam: {{ showModalData.nam }}</h5>
              </li>
              <li>
                <h5>Ste: {{ showModalData.ste }}</h5>
              </li>
            </ul>
            <button class="location-button" v-on:click.prevent="viewOnMap()">
              <h5>Map: <span class="location">{{ showModalData.lon }}, {{ showModalData.lat }}</span></h5>
            </button>

            <!-- <p>{{ showModalData }}</p> -->
          </div>

          <div class="modal-footer">
            <button class="modal-default-button" v-on:click="$emit('close')">
              Close <i class="fa fa-times icon" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    showModalData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    viewOnMap: function () {
      let coordinates = `${this.showModalData.lat}, ${this.showModalData.lon}`;
      let url = "https://www.google.com/maps/search/" + coordinates;
      window.open(url, "_blank");
    },
  },
};
</script>