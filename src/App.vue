<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>

export default { 
  
}
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems);
//   });


</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style >
.multiselect__input { display: block; opacity: 1;margin: 0 !important;  padding: 0 !important; height: auto !important;  } .multiselect__input:focus{ border: transparent !important; box-shadow: none !important; margin-bottom: 15px; } .multiselect__input:focus::-webkit-input-placeholder { font-size: 14px; } .multiselect__input:focus::-moz-placeholder { font-size: 14px; } .multiselect__input:focus:-ms-input-placeholder { font-size: 14px; } .multiselect__input:focus::placeholder { font-size: 14px; } .multiselect__placeholder { margin-bottom: 5px; }
body, html{ background: #f3f3f3; }
.brand {background-color: #2962ff !important}
.container-wrap-1{width:90%; margin: auto; max-width: 1400px;}
.container-wrap-2{width:96%; margin: auto; max-width: 1400px;}
.mb0{margin-bottom:0px !important}
.btn-circle-xs { color: #333; margin: 0 2px; height: 25px; width: 25px; text-align: center; line-height: 28px; border-radius: 50%; }
.btn-circle-xs:hover{background: #f4f4f4}
.m0{margin:0px}
.mr10{margin-right:10px}
.mb10{margin-bottom: 10px !important}
/* form box */
.fb-title { padding: 25px 0; position: relative; }
.fb-title span{font-size: 1.286rem;font-weight: 700; color:#333}
.fb-title:after, .fb-title:before{position:absolute;width: 100%; height: 1px;left: 0; background: #cacaca;content: ""}
.fb-title:after{bottom:15px}
.fb-title:before{bottom:17px}
.cm-field input:not(.multiselect__input){ border: 1px solid #9e9e9e !important; padding: 0 10px !important; width: calc(100% - 20px) !important; border-radius: 2px !important; line-height: 40px !important; height: 40px !important; font-size: 14px; }
.cm-field label{line-height: 40px;font-size:14px; color:#333;font-weight: 600; top: -11px !important; margin-left: 10px;}
.cm-field > label:not(.label-icon).active { -webkit-transform: translate(-10px, -17px) scale(0.9) !important; transform: translate(-10px, -17px) scale(0.9) !important; -webkit-transform-origin: 0 0; transform-origin: 0 0; }
.cm-field { position: relative; margin-top: 1rem; margin-bottom: 1.5rem !important; }
.cm-field .multiselect__tags { min-height: 40px; display: block; padding: 8px 40px 0 8px; border-radius: 2px; border: 1px solid #9e9e9e; background: #fff; font-size: 14px; }
.cm-field .typo__label {font-size:1rem !important; position: absolute; z-index: 1; left: 0; transform: translateY(-20px) scale(0.9); font-size: 13px; }
.cm-field .datetime-picker{width:100%}
.cm-field .datetime-picker input{margin-bottom:0px !important}
.block{display: block}
.helper-text-radio { font-size: 12px; color: #333; line-height: 15px; margin-left: 45px; margin-bottom: 20px !important; }
.cm-field [type="radio"]:not(:checked) + span, .cm-field [type="radio"]:checked + span {color: #333; font-size: 14px; font-weight: 600;}
.cm-field textarea { height: auto !important; border: 1px solid #9e9e9e; border-radius: 2px; }
.db-container { width: 100%; background: #fefefe; height: calc(100vh - 105px); overflow-y: auto; scrollbar-width: thin; position: relative; }
.card.material-table{box-shadow: none; margin: 0px}
.card.material-table .table-footer { position: fixed; bottom: 0; width: 100%; background: #fff; box-shadow: 0 0 7px -3px gray; }
.card.material-table table{margin-bottom: 56px;}
.card.material-table table th { font-size: 14px; font-weight: 600;}
.card.material-table table thead{background: #fcfcfc;}
.line-slect .multiselect__tags { min-height: 40px; display: block; padding: 8px 40px 0 8px; border-radius: 0; border: none; background: transparent; font-size: 14px; border-bottom: 1px solid #9e9e9e; margin-top: 8px; }


</style>