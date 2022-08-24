
<script setup>
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
let highlightjs = hljsVuePlugin.component
let algos = ['aes', 'rsa', 'ecdsa', 'hash', 'hmac']
let options2 = ['google', 'facebook']
let options3 = ['google', 'facebook']
let algo_seleted = $ref(null)
let model2 = $ref(null)
let model3 = $ref(null)

function after_algo_seleted () {
    console.log(algo_seleted);
}
let code = $ref(`
console.log('Hello World');
`)
let rows = $ref([
  { name: 'Cupcake', calories: 305 },
  { name: 'Jelly bean', calories: 375 },
])
// let rows = $ref([
//     ['aaa', 123],
//     ['bbb', 321],
// ])
let columns = $ref([
    { name: 'name', label: 'name', align: 'left', field: row => row['name'], sortable: true },
    { name: 'calories', label: 'Calories', align: 'left', field: row => row['calories'], sortable: true },
])
</script>

<template>
    <q-select outlined v-model="algo_seleted" :options="algos" label="algo" @update:model-value="after_algo_seleted" />
    <q-table title="Treats" :rows="rows" :columns="columns" row-key="name">
    
        <!-- make col name to show properly -->
        <template v-slot:header="props">
            
            <q-tr :props="props">
                <q-th auto-width />
                <q-th v-for="col in props.cols" :key="col.name" :props="props">
                    {{ col.label }}
                </q-th>
            </q-tr>
        </template>

        <template v-slot:body="props">
            <q-tr :props="props">
                <q-td auto-width>
                    <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand"
                        :icon="props.expand ? 'remove' : 'add'" />
                </q-td>
                <q-td v-for="col in props.cols" :key="col.name" :props="props">
                    {{ col.value }}
                </q-td>
            </q-tr>
            <q-tr v-show="props.expand" :props="props">
                <q-td colspan="100%">
                    <div class="text-left">This is expand slot for row above: {{ props.row['name'] }}.</div>
                    <highlightjs language="js" :code="code" />
                </q-td>
            </q-tr>
        </template>
    </q-table>


    

</template>

<style scoped>
</style>
