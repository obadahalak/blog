<template>

  <input
    v-model="search"
    type="text"
  >
  <div
    v-for="(item, index) in resultQuery"
    :key="index"
    class="m-3"
  >
    <div
      class="card col-6 offset-3"
      style="width: 40%"
    >
      <img
        class="card-img-top"
        :src="item.avatar"
        alt="Card image"
        width="70"
        height="200"
      >
      <div class="card-body">
        <h4 class="card-title">
          {{ item.name }}
        </h4>
        <p class="card-text">
          {{ item.title }}
        </p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
      </div>
    </div>
  </div>

    <!-- modal -->


  <!-- Modal -->
  <div
    id="exampleModal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="exampleModalLabel"
            class="modal-title"
          >
            Modal title
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- ////////// -->
</template>



<script>
  import axios from "axios";
  export default {
    name: "PostComponent",
    data() {
      return {
        posts: [],
        search: "",
      };
    },

    computed: {
      resultQuery() {
        if (this.search) {
          return this.posts.filter((item) => {
            return this.search
              .toLowerCase()
              .split(" ")
              .every((v) => item.name.toLowerCase().includes(v));
          });
        } else {
          return this.posts;
        }
      },
    },
    async created() {
      await axios
        .get("https://62fdeb76a85c52ee482baba4.mockapi.io/listCourses/posts")
        .then((response) => {
          this.posts = response.data;
          console.log(this.posts);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //   updated(){
    //     console.log('updated');
    //  if(this.search.length)

    //           this.posts+=this.posts.filter((data) => data.name == this.search);
    //   },
    methods: {
      //    searchName() {
      // //  if(this.search.length)
      // //   this.posts=this.posts.filter((data) => data.name == this.search);
      // },
    },
  };
</script>
<style scoped>
  .container2 {
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  button {
    width: 200px;
    font-size: 2rem;
  }
</style>
