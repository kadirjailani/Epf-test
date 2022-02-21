<template>
  <div>
    <div>
      <div>
        <h2>Branch Locator</h2>
      </div>
      <input
        type="text"
        class="form-control"
        v-model="searchLocation"
        placeholder="Search location"
      />
      <select
        class="form-control"
        v-model="selectLocation"
      >
      <option disabled value="">Please select state</option>
        <option v-for="state in statesCode" v-bind:key="state.key" v-bind:value= "state.key">
          <span v-if="state.value !== 'All states'">
          {{ state.value }}
          </span>
        </option>
      </select>
    </div>

<div v-if="filteredData === null"> nooooo</div>
    <table class="table table-style">
      <thead>
        <th cope="col">No</th>
        <th cope="col" v-on:click="sort('ste')">State</th>
        <th cope="col" v-on:click="sort('nam')">Name</th>
        <th cope="col">Address</th>
        <th cope="col" v-on:click="sort('distance')">Distance</th>
      </thead>

      <tbody>
        <tr v-for="(location, index) in filteredData" v-bind:key="location.key">
          <td class="text-center">{{ index + 1 }}</td>
          <td class="text-center">{{ location.stateName }}</td>
          <td class="text-center">{{ location.nam }}</td>
          <td>{{ location.ads }}</td>
          <td class="text-center">
            {{ location.distance }}<span v-if="location.distance < 1">m</span
            ><span v-else>km</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import testData from "./js/layout/testData";
import statesCode from "./js/layout/statesCode";

export default {
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
    };
  },

  methods: {
    getLocation: function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          // this.userLatitude = position.coords.latitude;
          // this.userLongitude = position.coords.longitude;

          this.userLatitude = 1.4618927579396137;
          this.userLongitude = 103.75910913499924;

          for (let data of this.data[0].lis) {
            let calculatedDistance = this.getDistance(
              data.lat,
              data.lon,
              this.userLatitude,
              this.userLongitude,
              "k"
            );
            data.distance = calculatedDistance.toFixed(2);
          }
          this.$forceUpdate();
        });
      } else {
        console.log("Nope");
      }
    },

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

    sort: function (col) {
      if (this.currentSort == col) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      } else {
        this.currentSort = col;
      }
    },
  },

  computed: {
    filteredData: function () {
      let currentList = this.data[0].lis;
      
      // by Search
      if(this.searchLocation != "" || this.searchLocation){
        currentList = this.data[0].lis.filter((data) => {
          return data.ads
            .toLowerCase()
            .match(this.searchLocation.toLowerCase());
        })
        .sort((a, b) => {
          if (this.currentSortDir === "asc") {
            return a[this.currentSort] >= b[this.currentSort];
          }
          return a[this.currentSort] <= b[this.currentSort];
        });
      };

      // by Select
      if(this.selectLocation != "" || this.selectLocation) {
        console.log(this.selectLocation);
        if(this.selectLocation.toLowerCase() === '00') {
          this.selectLocation = '';
        }
        currentList = this.data[0].lis.filter((data) => {
          return data.ste.match(this.selectLocation);
        })
      }

        return currentList;
    },
  },

  created: function () {
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    //   body: JSON.stringify({ ios: "100", lan: "EN", ver: "100" }),
    // };

    // fetch("http://localhost:8080/", requestOptions)
    // .then((res) => {
    //   res.json();
    //   // console.log(res);
    // });
    // this.getLocation();

    for (let eachData of this.data[0].lis) {
      for (let states of this.statesCode) {

        if (eachData.ste === states.key && eachData.ste !== "16") {
          eachData.stateName = states.value;
        }else if (eachData.ste === "16" && eachData.ads.includes("putrajaya")) {
          eachData.stateName = "W.Persekutuan (Putrajaya)";
        } else if (eachData.ste === "16" && eachData.ads.includes("labuan")) {
          eachData.stateName = "W.Persekutuan (Labuan)";
        }

      }
    }
  },
};
</script>




