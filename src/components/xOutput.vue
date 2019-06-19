<template>
  <div class="container">
    <h3>Outputs</h3>
    <table>
      <tr>
        <th>Name</th>
        <th>Value</th>
      </tr>
      <tr v-for="(elm, k, i) in output" :key="i">
        <td>{{ k }}</td>
        <td>
          {{ elm }}
        </td>
      </tr>
    </table>

    <div class="row">
      <span
        class="btn blue right"
        @click="$emit('updtLvl', { lvl: 'Products' })"
        >Back</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "outputs",
  props: {
    output: Object
  }
};
</script>
