<template>
  <div>
    <div class="form-group">
      <label for="firstname">FirstName</label>
      <input
        type="text"
        class="form-control"
        id="firstname"
        :value="cFirstName"
        @input="changeName(true, $event)"
      />
    </div>
    <div class="form-group">
      <label for="lastName">LastName</label>
      <input
        type="text"
        class="form-control"
        id="lastName"
        :value="cLastName"
        @input="changeName(false, $event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      default:"deneme demen"
    },
  },
  data() {
    return {};
  },
  computed: {
    cFirstName() {
      return this.value.split(" ")[0];
    },
    cLastName() {
      return this.value.split(" ")[1]; 
    },
  },
  methods: {
    changeName(val, e) {
      let full = "";
      if (val) {
        full = e.target.value + " " + this.cLastName;
      } else {
        full = this.cFirstName + " " + e.target.value;
      }
      this.$emit("input", full);
    },
  },
};
</script>
