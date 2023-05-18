<template >
  <div class="body">
    <div class="contenedorForm">
      <NuxtLink class="navbar-img" href="#"><img class="logoInicio" src="/img/logoWhite.png" alt="LogoNetflix"/></NuxtLink>
        <div>
            <h1 class="tituloForm">Inicia sesión</h1>
            <form class="boxForm" autocomplete="off">
                <Input
                  label="Username"
                  icon="fa-user"
                  v-model="username.value"
                  :ref="username.ref"
                  :is-danger="!!username.error"
                  :error-message="username.error && username.error.message"
                />
                <Input
                  label="Password"
                  type="password"
                  icon="fa-key"
                  v-model="password.value"
                  :ref="password.ref"
                  :is-danger="!!password.error"
                  :error-message="password.error && password.error.message"
                />
                <Input
                  label="Confirm Password"
                  type="password"
                  icon="fa-key"
                  v-model="confirmedPassword.value"
                  :ref="confirmedPassword.ref"
                  :is-danger="!!confirmedPassword.error"
                  :error-message="
                    confirmedPassword.error && confirmedPassword.error.message
                  "
                />
                <NuxtLink href="/home" class="button is-link" @click="onSubmit">Submit</NuxtLink>
                <div class="boxAyuda">
                  <div class="boxCheck">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                  <p class="labelCheckBox">Recuerdame</p>
                  </div>
                <div>
                  <a class="ayudaLink">¿Necesitas ayuda?</a>
                </div>
                </div>
            </form>
        </div>
        <div class="boxMasInformacion">
          <div class="boxAyuda">
            <p class="subtitulo">¿Primera vez en Netflix?</p><p class="susbrite">Suscríbete ahora.</p>
          </div>
          <p class="subtituloInformacion">Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. <b class="textBlue">Más info.</b></p>
        </div>
    </div>
  </div>
    
</template>


<script>
import { defineComponent } from "vue";
import Input from "../components/Input.vue";
import { useForm } from "vue-hooks-form";



export default defineComponent({
  name: "Demo",
  components: {
    Input,
  },
  props: {
    modelValue: String,
  },
  setup() {
    const { useField, errors, values, handleSubmit } = useForm({
      defaultValues: {
        username: "",
      },
    });
    const username = useField("username", {
      rule: { required: true },
    });
    const password = useField("password", {
      rule: {
        required: true,
        min: 6,
        max: 10,
      },
    });
    const confirmedPassword = useField("confirmedPassword", {
      rule: {
        required: true,
        validator(rule, value) {
          if (!value || value !== values.password) {
            return new Error(
              "The two passwords that you entered do not match!"
            );
          }
          return true;
        },
      },
    });
    const onSubmit = (data) => console.log(data);
    return {
      username,
      password,
      confirmedPassword,
      onSubmit: handleSubmit(onSubmit),
      errors,
      values,
    };
  },
});
</script>


<style scope>
  .body{
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #1F094A;
    /* background-image: url(../public/img/FondoHome2.jpg); */
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  .navbar-img{
    position: absolute;
    top: 15px;
    left: 15px;
  }
  .logoInicio{
        width: 130px;
        height: auto;
    }
    @media only screen and (min-width:320px) and (max-width: 765px)  {
      .logoInicio{
        width: 80px;
        height: auto;
        padding-left: 10px;
    }
    }
  .contenedorForm{
    background-color: rgba(0,0,0,.75);
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    row-gap: 35px;
    margin: 0;
    min-height: 515px;
    width: 450px;
    padding: 60px 68px 40px;
  }
  .tituloForm{
    color: white;
    font-size: 32px;
  }
  form{
    width: 100%;
    height: 310px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
  
.button{
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    color: white;
    margin: 24px 0 12px;
    line-height: 3em;
    background: #C0B05E;
    border: 0px;
    text-decoration: none !important;
    text-align: center;
}
.boxMasInformacion{
  width: 100%;
  height: 250px;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 25px;
}
.subtitulo{
  color: #737373;
    font-size: 16px;
    font-weight: 400;
}
.subtituloInformacion{
  color: #8c8c8c;
    font-size: 13px;
}
.labelCheckBox{
  color: #b3b3b3;
    font-size: 13px;
    font-weight: 400;
}
.ayudaLink{
  color: #b3b3b3;
    font-size: 13px;
    font-weight: 400;
}
.boxAyuda{
  display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}
.boxCheck{
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
}
p{
   padding: 0;
   margin: 0;
}
.susbrite{
  font-size: 16px;
    font-weight: 400;
    color: white;
}
.textBlue{
  color: #0071eb;

}
@media only screen and (max-width: 765px)  {
  body{
    background-color: #1F094A!important;
    /* background-image: none; */
  }
  .contenedorForm{
    padding: 0px 10%;
    margin-top: 45px;
    width: auto;
    background-color: #1F094A;
  }
  .susbrite{
    font-size: 14px;
  }
  .subtitulo{
     font-size: 14px;
  }
}
</style>