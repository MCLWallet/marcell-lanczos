<template>
  <form name="contact-form"
          method="post"
          @submit.prevent="handleSubmitAJAX"
          action="/contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field">
    <!-- Hidden Honeypot Field -->
    <input type="hidden" name="form-name" :value="name"/>
    <p hidden>
      <label>
        Don't fill this out: <input name="bot-field"/>
      </label>
    </p>
    <div class="sender-info">
      <!-- Name -->
      <div
        label="Vor- & Nachname der Ansprechperson:"
        :label-for="'name'">
        Name<span class="stern">*</span>:
        <input :id="'name'"
                        type="text" 
                        name="name"
                        v-model="formData.name"
                        required/>
      </div>
      <!-- E-Mail Address -->
      <div
        label="E-Mail Adresse:"
        :label-for="'email'">
        Email<span class="stern">*</span>:
        <input :id="'email'"
                        type="email" 
                        name="email"
                        v-model="formData.email"
                        required/>

      </div>
      <!-- Phone number -->
      <div
        label="Telefonnummer:"
        :label-for="'phone-number'">
        Phone:
        <input :id="'phone-number'"
                        type="tel" 
                        name="phonenumber"
                        v-model="formData.phonenumber"/>
      </div>
      
    </div>

    <!-- Message -->
    <div 
      label="Nachricht (optional):"
      :label-for="'message'">
      Message<span class="stern">*</span>:
      <textarea
        :id="'message'"
        name="message"
        v-model="formData.message"
        required></textarea>
    </div>
    <!-- Submit Button -->
    <button type="submit" pill variant="secondary">
      SEND
    </button>
  </form>
</template>


<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phonenumber: '',
        message: '',
      },
    }
  },
  props: {
    name: String
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    async handleSubmitAJAX($event) {
      const form = $event.target
      const body = new URLSearchParams(new FormData(form))
      try {
        const res = await fetch(form.action, {method: 'POST', body})
        if (res.ok) {
          this.$bvModal.show('modal-success')
          console.log("Success");
        } else {
          console.log("Not OK");
          this.$bvModal.show('modal-error')
          throw res
        }
      }
      catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  text-align: center;
}
button {
  font-family: JetBrainsMono-Regular;
  border-radius: 0;
  padding: 20px;
  border: none;
  font-size: 24px;
  background-color: palegreen;
  width: 100%;
  height: 110px;
  &:hover {
    background-color: tomato;
  }
}
input, textarea {
  width: 260px;
  font-family: JetBrainsMono-Regular;
  display: block;
  text-align: center;
  margin: auto;
  border-style: dashed;
  border-width: 2px;
}
input[type="text"],
input[type="email"],
input[type="tel"] {
  height: 24px;
}

textarea {
  height: 210px;
}
.stern {
  color:deeppink;
}
</style>