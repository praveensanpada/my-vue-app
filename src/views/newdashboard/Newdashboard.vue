<template>
  <div class="row">
    <div class="col">
      <div class="row mt-1">
        <div class="col">
          <TablesWidget1
            widget-classes="card-xl-stretch mb-xl-8"
          ></TablesWidget1>
        </div>
        <!--
              <button type="button" class="btn btn-secondary m-2 h-50px">
                <i class="fab fa-ethereum text-danger fab-3x mr-5"></i>$3.01
              </button>
              <button type="button" class="btn btn-secondary m-2 h-50px">
                <i class="fab fa-ethereum text-primary fab-3x mr-5"></i>$3.01
              </button>
              <button type="button" class="btn btn-secondary m-2 h-50px">
                <i class="fab fa-ethereum text-success fab-3x mr-5"></i>$3.01
              </button>
              <button type="button" class="btn btn-secondary m-2 h-50px">
                <i class="fab fa-ethereum text-info fab-3x mr-5"></i>$3.01
              </button>
              <button type="button" class="btn btn-secondary m-2 h-50px">
                <i class="fab fa-ethereum text-warning fab-3x mr-5"></i>$3.01
              </button>
              <button type="button" class="btn btn-secondary m-2 h-50px">
                <i class="fab fa-ethereum text-danger fab-3x mr-5"></i>$3.01
              </button>
              <button type="button" class="btn btn-secondary m-2 h-50px">
                <i class="fab fa-ethereum text-primary fab-3x mr-5"></i>$3.01
              </button>
              <button type="button" class="btn btn-secondary m-2 h-50px">
                <i class="fab fa-ethereum text-success fab-3x mr-5"></i>$3.01
              </button>
              <button type="button" class="btn btn-secondary m-2 h-50px">
                <i class="fab fa-ethereum text-info fab-3x mr-5"></i>$3.01
              </button>
              <button type="button" class="btn btn-secondary m-2 h-50px">
                <i class="fab fa-ethereum text-danger fab-3x mr-5"></i>$3.01
              </button>
              <button type="button" class="btn btn-secondary m-2 h-50px">
                <i class="fab fa-ethereum text-primary fab-3x mr-5"></i>$3.01
              </button>
              <button type="button" class="btn btn-secondary m-2 h-50px">
                <i class="fab fa-ethereum text-info fab-3x mr-5"></i>$3.01
              </button>
              <button type="button" class="btn btn-secondary m-2 h-50px">
                <i class="fab fa-ethereum text-success fab-3x mr-5"></i>$3.01
              </button>-->
        <div class="col">
          <div class="row">
            <div class="col mt-5">
              <StatisticsWidget5
                widget-classes="card-xl-stretch mb-xl-8"
                svg-icon="media/icons/duotune/general/gen032.svg"
                color="info"
                icon-color="primary"
                :title="balance"
                description="Total Balance"
              ></StatisticsWidget5>
            </div>
          </div>
          <div class="row mx-3">
            <div class="col p-5">
              <div class="card p-2">
                <div class="d-flex align-items-center position-relative my-1">
                  <span class="svg-icon svg-icon-1 position-absolute ms-6">
                    <inline-svg src="media/icons/duotune/general/gen021.svg" />
                  </span>
                  <input
                    type="text"
                    v-model="search"
                    @input="searchItems()"
                    class="form-control form-control-solid ps-15"
                    placeholder="Search"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-body pt-0">
                  <center>
                    <section v-if="!loading" class="p-5">
                      <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </section>
                  </center>
                  <section v-if="loading">
                    <Datatable
                      :table-data="arrayList"
                      :table-header="tableHeader"
                      :enable-items-per-page-dropdown="true"
                    >
                      <template v-slot:cell-rank="{ row: arrayList }">
                        <i class="fas fa-star text-warning fab-3x mr-5"></i
                        >{{ arrayList.__v }}
                      </template>
                      <template v-slot:cell-address="{ row: arrayList }">
                        {{ arrayList.address }}
                      </template>
                      <template v-slot:cell-balance="{ row: arrayList }">
                        <a
                          href="#"
                          class="text-gray-600 text-hover-primary mb-1"
                        >
                          ${{ arrayList.balance }}
                        </a>
                      </template>
                      <template v-slot:cell-iotx="{ row: arrayList }">
                        <button
                          type="button"
                          class="btn btn-info er fs-6 px-8 py-4 w-250px"
                          data-bs-toggle="modal"
                          :data-bs-target="`#A${arrayList.address}`"
                        >
                          Chains
                        </button>
                        <div
                          class="modal fade"
                          :id="`A${arrayList.address}`"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <!--begin::Modal dialog-->
                          <div class="modal-dialog mw-900px">
                            <!--begin::Modal content-->
                            <div class="modal-content">
                              <!--begin::Modal header-->
                              <div
                                class="modal-header pb-0 border-0 justify-content-end"
                              >
                                <!--begin::Close-->
                                <div
                                  class="btn btn-sm btn-icon btn-active-color-primary"
                                  data-bs-dismiss="modal"
                                >
                                  <span class="svg-icon svg-icon-1">
                                    <inline-svg
                                      src="media/icons/duotune/arrows/arr061.svg"
                                    />
                                  </span>
                                </div>
                                <!--end::Close-->
                              </div>
                              <!--begin::Modal header-->

                              <!--begin::Modal body-->
                              <div
                                class="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15"
                              >
                                <!--begin::Heading-->
                                <div class="w-750px h-500px">
                                  <div class="d-flex flex-wrap">
                                    <button
                                      type="button"
                                      class="btn btn-info m-2 h-50px"
                                    >
                                      <i
                                        class="fab fa-ethereum text-danger fab-3x mr-5"
                                      ></i
                                      >AETH ${{ arrayList.aeth }}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-danger m-2 h-50px"
                                    >
                                      <i
                                        class="fab fa-ethereum text-primary fab-3x mr-5"
                                      ></i
                                      >PALM ${{ arrayList.palm }}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-secondary m-2 h-50px"
                                    >
                                      <i
                                        class="fab fa-ethereum text-success fab-3x mr-5"
                                      ></i
                                      >RBTC ${{ arrayList.rbtc }}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-danger m-2 h-50px"
                                    >
                                      <i
                                        class="fab fa-ethereum text-info fab-3x mr-5"
                                      ></i
                                      >BNB ${{ arrayList.bnb }}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-info m-2 h-50px"
                                    >
                                      <i
                                        class="fab fa-ethereum text-warning fab-3x mr-5"
                                      ></i
                                      >AVAX ${{ arrayList.avax }}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-info m-2 h-50px"
                                    >
                                      <i
                                        class="fab fa-ethereum text-danger fab-3x mr-5"
                                      ></i
                                      >ETH ${{ arrayList.eth }}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-success m-2 h-50px"
                                    >
                                      <i
                                        class="fab fa-ethereum text-primary fab-3x mr-5"
                                      ></i
                                      >FTM ${{ arrayList.ftm }}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-info m-2 h-50px"
                                    >
                                      <i
                                        class="fab fa-ethereum text-success fab-3x mr-5"
                                      ></i
                                      >GLMR ${{ arrayList.glmr }}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-danger m-2 h-50px"
                                    >
                                      <i
                                        class="fab fa-ethereum text-info fab-3x mr-5"
                                      ></i
                                      >HT ${{ arrayList.ht }}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-secondary m-2 h-50px"
                                    >
                                      <i
                                        class="fab fa-ethereum text-danger fab-3x mr-5"
                                      ></i
                                      >IOTX ${{ arrayList.iotx }}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-warning m-2 h-50px"
                                    >
                                      <i
                                        class="fab fa-ethereum text-primary fab-3x mr-5"
                                      ></i
                                      >KLAY ${{ arrayList.klay }}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-success m-2 h-50px"
                                    >
                                      <i
                                        class="fab fa-ethereum text-info fab-3x mr-5"
                                      ></i
                                      >MATIC ${{ arrayList.matic }}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-secondary m-2 h-50px"
                                    >
                                      <i
                                        class="fab fa-ethereum text-success fab-3x mr-5"
                                      ></i
                                      >MOVR ${{ arrayList.movr }}
                                    </button>
                                  </div>
                                  <div class="card p-1 overflow-auto h-350px">
                                    <table class="table table-striped">
                                      <thead>
                                        <tr class="table-active text-center">
                                          <th scope="col">Contract Name</th>
                                          <th scope="col">Contract Address</th>
                                          <th scope="col">Balance</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr
                                          v-for="(item, i) in arrayList.tokens"
                                          :key="i"
                                        >
                                          <td>{{ item.contract_name }}</td>
                                          <td>
                                            {{ item.contract_address }}
                                          </td>
                                          <td>${{ item.balance }}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--end::Menu item-->
                                </div>
                                <!--end::Notice-->
                              </div>
                              <!--end::Modal body-->
                            </div>
                            <!--end::Modal content-->
                          </div>
                          <!--end::Modal dialog-->
                        </div>
                      </template>
                    </Datatable>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="d-flex flex-wrap justify-content-around">
              <div>
                <div class="d-flex flex-wrap py-2 mr-3">
                  <section v-if="minValue != 1">
                    <button
                      @click="pageButtonClick(1)"
                      class="btn btn-icon btn-lg btn-info border-0 mr-2 my-1"
                    >
                      First
                    </button>
                    <button class="btn btn-icon btn-lg border-0 mr-2 my-1">
                      . . .
                    </button>
                  </section>
                  <button
                    :ref="pagebtn1"
                    @click="pageButtonClick(pagebtn1)"
                    class="btn btn-lg border-0 mr-2 my-1"
                  >
                    {{ pagebtn1 }}
                  </button>
                  <button
                    :ref="pagebtn2"
                    @click="pageButtonClick(pagebtn2)"
                    class="btn btn-lg border-0 mr-2 my-1"
                  >
                    {{ pagebtn2 }}
                  </button>
                  <button
                    :ref="pagebtn3"
                    @click="pageButtonClick(pagebtn3)"
                    class="btn btn-lg border-0 mr-2 my-1"
                  >
                    {{ pagebtn3 }}
                  </button>
                  <button
                    :ref="pagebtn4"
                    @click="pageButtonClick(pagebtn4)"
                    class="btn btn-lg border-0 mr-2 my-1"
                  >
                    {{ pagebtn4 }}
                  </button>
                  <button
                    :ref="pagebtn5"
                    @click="pageButtonClick(pagebtn5)"
                    class="btn btn-lg border-0 mr-2 my-1"
                  >
                    {{ pagebtn5 }}
                  </button>
                  <button
                    :ref="pagebtn6"
                    @click="pageButtonClick(pagebtn6)"
                    class="btn btn-icon btn-lg border-0 mr-2 my-1"
                  >
                    {{ pagebtn6 }}
                  </button>
                  <section v-if="maxvalue != pages">
                    <button class="btn btn-icon btn-lg border-0 mr-2 my-1">
                      . . .
                    </button>
                    <button
                      @click="pageButtonClick(pages)"
                      class="btn btn-icon btn-lg btn-info border-0 mr-2 my-1"
                    >
                      Last
                    </button>
                  </section>
                </div>
              </div>
              <div class="p-5">
                <button class="btn btn-info">
                  Current Page:&nbsp;{{ currentValue }}
                </button>
              </div>
              <div class="p-5">
                <button class="btn btn-info">
                  Total Pages:&nbsp;{{ pages }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, toRef } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import customers from "@/core/data/dashboardDatatableData";
import { ICustomer } from "@/core/data/dashboardDatatableData";
import axios from "axios";
import TablesWidget1 from "@/components/widgets/tables/Widget1.vue";
import StatisticsWidget5 from "@/components/widgets/statsistics/Widget5.vue";
export default defineComponent({
  name: "newDashboard",
  components: {
    Datatable,
    TablesWidget1,
    StatisticsWidget5,
  },
  data() {
    return {
      mainData: {},
      addresses: [],
      chains: [],
      balance: 0,
      arrayList: [undefined],
      loading: false,
      visibility: 0,

      pagebtn1: 1,
      pagebtn2: 2,
      pagebtn3: 3,
      pagebtn4: 4,
      pagebtn5: 5,
      pagebtn6: 6,
      currentValue: 1,
      minValue: 1,
      maxvalue: 6,
      pages: 6,

    };
  },
  methods: {
    pageButtonClick: function (clickValue) {
      this.currentValue = clickValue;
      console.log("clickValue", clickValue);
      if (clickValue == this.minValue && this.minValue != 1) {
        console.log("minValue", this.minValue);
        this.pagebtn1 = this.maxvalue - 10;
        console.log("pagebtn1", this.pagebtn1);
        this.pagebtn2 = this.maxvalue - 9;
        this.pagebtn3 = this.maxvalue - 8;
        this.pagebtn4 = this.maxvalue - 7;
        this.pagebtn5 = this.maxvalue - 6;
        this.pagebtn6 = this.maxvalue - 5;
        this.maxvalue = this.pagebtn6;
        this.minValue = this.pagebtn1;
        console.log("minvalue", this.minValue);
      } else if (clickValue == this.maxvalue && this.maxvalue < this.pages) {
        this.pagebtn1 = this.maxvalue;
        this.pagebtn2 = this.maxvalue + 1;
        this.pagebtn3 = this.maxvalue + 2;
        this.pagebtn4 = this.maxvalue + 3;
        this.pagebtn5 = this.maxvalue + 4;
        this.pagebtn6 = this.maxvalue + 5;
        this.maxvalue = this.pagebtn6;
        this.minValue = this.pagebtn1;
      } else if (clickValue == this.pages) {
        this.maxvalue = this.pages;
        this.pagebtn6 = this.maxvalue;
        this.pagebtn5 = this.maxvalue - 1;
        this.pagebtn4 = this.maxvalue - 2;
        this.pagebtn3 = this.maxvalue - 3;
        this.pagebtn2 = this.maxvalue - 4;
        this.pagebtn1 = this.maxvalue - 5;
        this.minValue = this.pagebtn1;
      } else if (clickValue == 1) {
        this.maxvalue = 6;
        this.pagebtn6 = 6;
        this.pagebtn5 = 5;
        this.pagebtn4 = 4;
        this.pagebtn3 = 3;
        this.pagebtn2 = 2;
        this.pagebtn1 = 1;
        this.minValue = this.pagebtn1;
      }
    },
  },
  setup() {
    const checkedCustomers = ref([]);
    const tableHeader = ref([
      {
        name: "#",
        key: "__v",
      },
      {
        name: "Address",
        key: "address",
        sortable: true,
      },
      {
        name: "Balance",
        key: "balance",
        sortable: true,
      },
      {
        name: "Chains",
        key: "iotx",
      },
    ]);
    const tableData = ref<Array<ICustomer>>(customers);
    const initCustomers = ref<Array<ICustomer>>([]);
    onMounted(() => {
      setCurrentPageBreadcrumbs("Customers Listing", ["Apps", "Customers"]);
      initCustomers.value.splice(0, tableData.value.length, ...tableData.value);
    });
    const deleteFewCustomers = () => {
      checkedCustomers.value.forEach((item) => {
        deleteCustomer(item);
      });
      checkedCustomers.value.length = 0;
    };
    const deleteCustomer = (id) => {
      for (let i = 0; i < tableData.value.length; i++) {
        if (tableData.value[i].id === id) {
          tableData.value.splice(i, 1);
        }
      }
    };
    const search = ref<string>("");
    const searchItems = () => {
      tableData.value.splice(0, tableData.value.length, ...initCustomers.value);
      if (search.value !== "") {
        let results: Array<ICustomer> = [];
        for (let j = 0; j < tableData.value.length; j++) {
          if (searchingFunc(tableData.value[j], search.value)) {
            results.push(tableData.value[j]);
          }
        }
        tableData.value.splice(0, tableData.value.length, ...results);
      }
    };
    const searchingFunc = (obj, value): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            return true;
          }
        }
      }
      return false;
    };
    return {
      tableData,
      tableHeader,
      deleteCustomer,
      search,
      searchItems,
      checkedCustomers,
      deleteFewCustomers,
    };
  },
  mounted() {
    axios
      .get(
        `http://localhost:8080/api/v1/leads?page=${this.currentValue}&sort=asc&query=&size=10`
      )
      .then((data) => {
        this.addresses = data.data.addresses;
        this.chains = data.data.chains;
        this.balance = data.data.chains[0].total_balance;
        this.arrayList = data.data.addresses;
        this.pages = data.data.pages;
        this.loading = true;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {
    currentValue: function (newVal, oldVal) {
      this.loading = false;
      // watch it
      axios
        .get(
          `http://localhost:8080/api/v1/leads?page=${newVal}&sort=asc&query=&size=10`
        )
        .then((data) => {
          console.log("Data", data.data);
          this.addresses = data.data.addresses;
          this.chains = data.data.chains;
          this.balance = data.data.chains[0].total_balance;
          this.arrayList = data.data.addresses;
          this.loading = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>