<template>
    <div class="tw-flex" style="padding: 44px 200px">
    <div style="width: 248px">
      首頁 / 景點

      <div>你正在搜尋</div>
      <v-divider></v-divider>
      <div>縮小搜尋範圍 <v-btn text>清除條件</v-btn></div>
      <div>地理區域 <v-select label="Standard"></v-select></div>
      <div class="tw-flex tw-flex-col">
        <span>景點主題</span>
        <v-btn v-for="x of 5" :key="x" class="tw-mb-4">花海漫遊</v-btn>
      </div>
    </div>
    <div class="tw-flex tw-flex-col tw-flex-1 tw-p-4">
      <div class="tw-flex">
        <v-text-field
          label="Solo"
          placeholder="Placeholder"
          solo
        ></v-text-field>
        排序方式
        <v-select label="Standard"></v-select>
      </div>
      <div class="tw-grid tw-grid-cols-3 tw-gap-4">
        <v-card v-for="x of 10" :key="x">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          ></v-img>
          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle>
            <v-icon>mdi-google-maps</v-icon>
            1,000 miles of wonder
            <v-icon>mdi-heart-outline</v-icon>
            <v-icon>mdi-heart</v-icon>
          </v-card-subtitle>
        </v-card>
      </div>
    </div>
  </div>
</template>