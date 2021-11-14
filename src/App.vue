<template>
  <v-app>
    <v-main>
      <TouristAttraction />
    </v-main>
  </v-app>
</template>

<script>
  import TouristAttraction from "./views/TouristAttraction";

  export default {
    name: "App",

    components: {
      TouristAttraction,
    },

    data: () => ({
      //
    }),
  };
</script>
