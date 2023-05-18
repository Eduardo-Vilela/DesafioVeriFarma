<template>
    <div class="field">
  
      <div class="control has-icons-left has-icons-right  group">
        <input
          :class="['input', isDanger ? 'is-danger' : '']"
          type="text"
          :value="modelValue"
          @input="(e) => $emit('update:modelValue', e.target.value)"
          v-bind="$attrs"
        />
        <!-- <span class="icon is-small is-left">
          <i :class="['fas', icon]"></i>
        </span> -->
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="label">{{ label }}</label>

      </div>
      <p class="help is-danger">{{ errorMessage }}</p>
    </div>
  </template>
  <style>
  .group {
  position: relative;
  margin-top: 10px;
  background: #333;
  }

  .input {
    font-size: 14px;
    padding: 16px 20px 0;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
    height: 50px;
  }

  .input:focus {
    outline: none;
  }

  label {
    color: #999;
    font-size: 14px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 15px;
    top: 20px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .input:focus ~ label{
    top: -1px;
    font-size: 14px;
    color: white;
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;
  }

  .bar:before, .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: white;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }

  .input:focus ~ .bar:before, .input:focus ~ .bar:after {
    width: 50%;
  }

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

.input:focus ~ .highlight {
 animation: inputHighlighter 0.3s ease;
}

@keyframes inputHighlighter {
  from {
    background: #5264AE;
  }

  to {
    width: 0;
    background: transparent;
  }
}
   .help{
    color: #C0B05E;
    font-size: 14px;
   }
   .label{
    color: white !important;
   }
   input{
    color: white;
   }
  </style>
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "Input",
    components: {},
    props: {
      modelValue: String,
      label: String,
      icon: String,
      errorMessage: String,
      isDanger: Boolean,
    },
  });
  </script>