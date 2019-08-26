<template>
  <div class="container">
    <table>
      <tr>
        <th>Variable Name</th>
        <th>Value</th>
      </tr>
      <tr v-for="(elm2, k2) in ProdSkin" :key="k2">
        <td>{{ k2 }}</td>
        <td>
          <label>
            <input
              type="checkbox"
              checked="checked"
              v-if="typeof elm2 == 'boolean'"
              v-model="ProdSkin[k2]"
            />
            <span></span>
          </label>
          <input
            v-if="typeof elm2 == 'string'"
            type="text"
            v-model="ProdSkin[k2]"
          />
          <input
            v-if="typeof elm2 == 'number'"
            type="number"
            v-model="ProdSkin[k2]"
          />
        </td>
      </tr>
      <tr v-for="(elm, k, i) in skinProps.LayoutProps" :key="i">
        <td>{{ k }}</td>
        <td>
          <label>
            <input
              type="checkbox"
              checked="checked"
              v-if="typeof elm == 'boolean'"
              v-model="skinProps.LayoutProps[k]"
            />
            <span></span>
          </label>
          <input
            v-if="typeof elm == 'string'"
            type="text"
            v-model="skinProps.LayoutProps[k]"
          />
          <input
            v-if="typeof elm == 'number'"
            type="number"
            v-model="skinProps.LayoutProps[k]"
          />
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
  name: "inputs",

  data() {
    return {
      skinProps,
      ProdSkin
    };
  }
};
</script>
