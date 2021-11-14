<template>
  <div>
      <div style="height: 100px; padding: 16px 200px">
          logo
      </div>
      <v-divider></v-divider>
    <Tourism />
  </div>
</template>
<script>
  import Tourism from "../components/TouristAttraction/tourism";
  export default {
    name: "App",

    components: {
      Tourism,
    },

    data: () => ({
      //
    }),
  };
</script>
