<template>
    <section class="zipCodeChecker">
        <label>Zip Code</label>
        <input type="text" @blur="checkZipCode">
        <router-link class="home" to="/">Ver tarefas</router-link>
    </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    checkZipCode ($event) {
      let value = $event.target.value
      this.$http.get('http://api.postmon.com.br/v1/cep/' + value).then((res) => {
        this.address = res.body
        console.log(res)
      }, (res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less">
.home{
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 5px;
  text-align: center;
}
.zipCodeChecker{
  margin: 20px 0;
  text-align: center;
  label{
    display: block;
  }
  input{
    margin: 20px;
    height: 2em;
    padding: 2px;
  }
}
</style>
