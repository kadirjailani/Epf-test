<template>
  <div>
        <!-- Top header -->
    <div class="header">
      <img src="./assets/epf-test-logo.svg" class="logo-test" alt="test logo"/>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div
          class="
            col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8
            offset-0 offset-sm-0 offset-md-0 offset-lg-1 offset-xl-2
          "
        >
          <div class="searchbar">
            <div class="main-title">
              <h3>Branch Locator</h3>
              <h5>List of offices</h5>
            </div>
            <div class="filter">
              <form class="filter-search-container">
                <input
                  type="text"
                  class="form-control filter-search"
                  v-model="searchLocation"
                  placeholder="Search location"
                />
                <i class="fa fa-search icon" aria-hidden="true"></i>
              </form>
              <button
                class="filter-states-button"
                v-on:click="showSelectSeach = !showSelectSeach"
              >
                <i class="fa fa-filter icon"></i>
              </button>

              <!-- States Selector slide in -->
              <div
                class="state-select-container"
                v-bind:class="showSelectSeach ? 'active' : ''"
              >
                <div class="filter-select">
                  <select class="form-control" v-model="selectLocation">
                    <option disabled value="">Please select state</option>
                    <option
                      v-for="state in statesCode"
                      v-bind:key="state.key"
                      v-bind:value="state.key"
                    >
                      <span v-if="state.value !== 'All states'">
                        {{ state.value }}
                      </span>
                    </option>
                  </select>
                  <i class="fa fa-chevron-down icon" aria-hidden="true"></i>
                </div>
                <button
                  class="filter-states-button"
                  v-on:click="closeSelectStateContainer()"
                >
                  <i class="fa fa-times icon" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          <table v-if="filteredData.length > 0" class="table table-style">
            <thead>
              <th cope="col">No</th>
              <th cope="col" class="clickable" v-on:click="sort('ste')">
                State<i class="fa fa-sort icon"></i>
              </th>
              <th cope="col" class="clickable" v-on:click="sort('nam')">
                Name<i class="fa fa-sort icon"></i>
              </th>
              <th cope="col">Address</th>
              <th cope="col" class="clickable" v-on:click="sort('distance')">
                Distance<i class="fa fa-sort icon"></i>
              </th>
            </thead>

            <tbody>
              <tr
                v-for="(location, index) in filteredData"
                v-bind:key="location.key"
              >
                <td class="text-center">{{ index + 1 }}</td>
                <td class="text-center">{{ location.stateName }}</td>
                <td class="text-center clickable" v-on:click="openModal(location)">{{ location.nam }}</td>
                <td>{{ location.ads }}</td>
                <td class="text-center">
                  {{ location.distance
                  }}<span v-if="location.distance < 1">m</span
                  ><span v-else>km</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else class="no-data">
            <h3>Sorry data not found</h3>
          </div>

        </div>
      </div>
    </div>

    <!-- Modal Component -->
    <Modal v-bind:showModalData="currentModalDetails" v-on:close="currentModalDetails.show = false"></Modal>

    <MyContact></MyContact>
  </div>
</template>

<script>
//Test data
import testData from "./js/layout/testData";
import statesCode from "./js/layout/statesCode";

//component
import Modal from './component/layout/Modal.vue';
import MyContact from './component/layout/MyContact.vue'

export default {
    components: {
      'Modal': Modal,
      'MyContact': MyContact
    
  },
  data() {
    return {
      data: testData,
      statesCode: statesCode,
      searchLocation: "",
      selectLocation: "",
      currentSort: "name",
      currentSortDir: "asc",
      userLatitude: "",
      userLongitude: "",
      showSelectSeach: false,
      showModal: false,
      currentModalDetails: {
        show: false,
        ads: '',
        efd: '',
        fax: '',
        key: '',
        lat: '',
        lon: '',
        nam: '',
        stateName: '',
        ste: ''
      },
    };
  },

  methods: {

    getDistance: function (lat1, lon1, lat2, lon2, unit) {
      if (lat1 == lat2 && lon1 == lon2) {
        return 0;
      } else {
        var radlat1 = (Math.PI * lat1) / 180;
        var radlat2 = (Math.PI * lat2) / 180;
        var theta = lon1 - lon2;
        var radtheta = (Math.PI * theta) / 180;
        var dist =
          Math.sin(radlat1) * Math.sin(radlat2) +
          Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
          dist = dist * 1.609344;
        }
        if (unit == "N") {
          dist = dist * 0.8684;
        }
        return dist;
      }
    },

    processLocationDetails: function(position) {
      this.userLatitude = position.coords.latitude;
      this.userLongitude = position.coords.longitude;

      for (let data of this.data[0].lis) {
        let calculatedDistance = this.getDistance(data.lat, data.lon, this.userLatitude, this.userLongitude, "k");
        data.distance = calculatedDistance.toFixed(1);
      }

      this.$forceUpdate();
    },

    processLocationError: function() {
      
    },

    getLocation: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position, error) => {
          this.processLocationDetails(position);
          if(error) {
            console.log(error);
          }
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    },

    getStateName: function() {
      
      for (let eachData of this.data[0].lis) {
        for (let states of this.statesCode) {
          if (eachData.ste === states.key && eachData.ste !== "16") {
            eachData.stateName = states.value;
          } else if (
            eachData.ste === "16" &&
            eachData.ads.includes("putrajaya")
          ) {
            eachData.stateName = "W.Persekutuan (Putrajaya)";
          } else if (eachData.ste === "16" && eachData.ads.includes("labuan")) {
            eachData.stateName = "W.Persekutuan (Labuan)";
          }
        }
      }
    },

    sort: function (col) {
      if (this.currentSort == col) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      } else {
        this.currentSort = col;
      }
    },

    closeSelectStateContainer: function () {
      this.selectLocation = "";
      this.showSelectSeach = false;
    },

    openModal: function (currentData) {
      this.currentModalDetails.ads = currentData.ads,
      this.currentModalDetails.efd = currentData.efd,
      this.currentModalDetails.fax = currentData.fax,
      this.currentModalDetails.key = currentData.key,
      this.currentModalDetails.lat = currentData.lat,
      this.currentModalDetails.lon = currentData.lon,
      this.currentModalDetails.nam = currentData.nam,
      this.currentModalDetails.stateName = currentData.stateName,
      this.currentModalDetails.ste = currentData.ste,
      this.currentModalDetails.show = true;
    },
    
    closeModal: function () {
      console.log('jalan');
      this.currentModalDetails.ads = '',
      this.currentModalDetails.efd = '',
      this.currentModalDetails.fax = '',
      this.currentModalDetails.key = '',
      this.currentModalDetails.lat = '',
      this.currentModalDetails.lon = '',
      this.currentModalDetails.nam = '',
      this.currentModalDetails.stateName = '',
      this.currentModalDetails.ste = '',
      this.currentModalDetails.show = false;
    },

    fetchData() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ ios: "100", lan: "EN", ver: "100" }),
      };

    fetch("https://secure.kwsp.gov.my/m2/postBranchLocation", requestOptions)
    .then((res) => {
      let receivedData = res.json();
      this.data = receivedData;

      this.getStateName();
      this.getLocation();

    });
    }
  },

  computed: {
    filteredData: function () {
      let currentList = this.data[0].lis;

      // by Search
      if (this.searchLocation != "" || this.searchLocation) {
        currentList = this.data[0].lis.filter((data) => {
          return data.ads
            .toLowerCase()
            .match(this.searchLocation.toLowerCase());
        });
      }

      // by Select
      if (this.selectLocation != "" || this.selectLocation) {
        console.log(this.selectLocation);
        if (this.selectLocation.toLowerCase() === "00") {
          this.selectLocation = "";
        }
        currentList = this.data[0].lis.filter((data) => {
          return data.ste.match(this.selectLocation);
        });
      }

      currentList.sort((a, b) => {
        if (this.currentSortDir === "asc") {
          return a[this.currentSort] >= b[this.currentSort];
        }
        return a[this.currentSort] <= b[this.currentSort];
      });

      return currentList;
    },
  },

  created() {
    // this.fetchData();

    this.getStateName();
    this.getLocation();
  }
};
</script>


