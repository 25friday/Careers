<template>
  <div>
    <div class="tweet">
      <div class="box">
        <article class="list">
          <div class="list-left">
            <figure class="image is-64x64">
              <img :src="item.img" alt="Image">
            </figure>
          </div>
          <div class="list-content">
            <div class="content">
              <p>
                <strong>{{item.title}}</strong> <small> {{item.hashtags}}</small>
                <br>
                {{item.shortDescription}}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div> 
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DynamicList extends Vue {
   @Prop() private item!: object;
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.item {
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 15px;
}

.box {
  margin-bottom: 0;
  border-radius: 0;
  }

.content small {
  color: #00d1b2;
}

img {
  border-radius: 30px;
  width: 150px;
}

.level-item {
  padding-left: 10px;
  color: #00d1b2;
}

input:focus {
  border-color: #00d1b2;  
}

input {
  font-weight: bold;
}

.items-move {
  transition: transform 1s;
}

</style>
