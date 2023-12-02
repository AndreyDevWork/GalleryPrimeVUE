<template>
  <div>
    <Galleria
        v-model:activeIndex="activeIndex"
        v-model:visible="displayCustom"
        :value="images"
        :numVisible="7"
        containerStyle="max-width: 100%; padding-left: 70px; padding-right: 70px;"
        :circular="true"
        :fullScreen="true"
        :showItemNavigators="true"
        :showThumbnails="false"
    >
      <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
      </template>
      <template>
        <img style="display: block" />
      </template>
    </Galleria>

    <div class="wrapper">
      <div class="title">Фотографии</div>
      <div class="grid">
        <div v-for="(image, index) of images" :key="index" class="photo">
          <img
              class="object-fit"
              :src="image.itemImageSrc"
              style="cursor: pointer"
              @click="imageClick(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
  data() {
    return {
      images: null,
      activeIndex: 0,
      displayCustom: false,
    };
  },
  mounted() {
    PhotoService.getImages().then((data) => (this.images = data));
  },
  methods: {
    imageClick(index) {
      this.activeIndex = index;
      this.displayCustom = true;
    },
  },
};
</script>


<style lang="scss" scoped>
  .wrapper {
    padding: 25px 30px 40px 30px;
    background: #FFF;
    border-radius: 20px;
  }
  .grid {
    width: 100%;
    display: grid;
    column-gap: 20px;
    row-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
  }
  .photo {
    aspect-ratio: 343/288;
    img {
      border-radius: 8px;
    }
  }
  .title {
    color: #4C535F;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 20px;
  }
  .object-fit {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>