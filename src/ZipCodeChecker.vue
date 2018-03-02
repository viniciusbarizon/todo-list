<template>
    <section class="zipCodeChecker">
        <label>Zip Code</label>
        <input type="text" @blur="checkZipCode">
        <router-link class="home" to="/">Ver tarefas</router-link>
        <div v-if="hasAddress()">
          <p>Rua: {{address.logradouro}}</p>
          <p>Bairro: {{address.bairro}}</p>
          <p>Cidade: {{address.cidade}}</p>
          <p>Estado: {{address.estado}}</p>
        </div>
    </section>
</template>

<script>
export default {
  data () {
    return {
      address: {}
    }
  },
  methods: {
    checkZipCode ($event) {
      let zipcode = $event.target.value
      this.$http.get('http://api.postmon.com.br/v1/cep/' + zipcode).then((res) => {
        this.address = res.body
      }, (res) => {
        console.log(res)
      })
    },
    hasAddress () {
      return Object.keys(this.address).length > 0
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
