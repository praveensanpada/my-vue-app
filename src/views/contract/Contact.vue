<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg src="media/icons/duotune/general/gen021.svg" />
          </span>
          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Customers"
          />
        </div>
        <!--end::Search-->
      </div>
    </div>
    <div class="card-body pt-0">
      <section v-if="loading">
        <Datatable
          :table-data="arrayList"
          :table-header="tableHeader"
          :enable-items-per-page-dropdown="true"
        >
          <template v-slot:cell-__v="{ row: arrayList }">
            <i class="fas fa-star text-warning fab-3x mr-5"></i
            >{{ arrayList.__v }}
          </template>
          <template v-slot:cell-contract_address="{ row: arrayList }">
            {{ arrayList.contract_address }}
          </template>
          <template v-slot:cell-contract_name="{ row: arrayList }">
            {{ arrayList.contract_name }}
          </template>
          <template v-slot:cell-logo_url="{ row: arrayList }">
            <div class="symbol symbol-50px me-2">
              <span class="symbol-label">
                <img
                  :src="arrayList.logo_url"
                  class="h-50 align-self-center"
                  alt=""
                />
              </span>
            </div>
            <!-- {{ arrayList.logo_url }} -->
          </template>
          <template v-slot:cell-balance="{ row: arrayList }">
            <a href="#" class="text-gray-600 text-hover-primary mb-1">
              {{ arrayList.balance }}
            </a>
          </template>
          <template v-slot:cell-action="{ row: arrayList }">
            <button
              type="button"
              class="btn btn-info er bg-info fs-6 px-8 py-4 w-250px"
              data-bs-toggle="modal"
              :data-bs-target="`#A${arrayList.address}`"
            >
              Actions
            </button>
          </template>
        </Datatable>
      </section>
    </div>
  </div>

  <ExportCustomerModal></ExportCustomerModal>
  <AddCustomerModal></AddCustomerModal>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import ExportCustomerModal from "@/components/modals/forms/ExportCustomerModal.vue";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import customers from "@/core/data/customers";
import { ICustomer } from "@/core/data/customers";
import axios from "axios";

export default defineComponent({
  name: "contact",
  components: {
    Datatable,
    ExportCustomerModal,
    AddCustomerModal,
  },
  data() {
    return {
      mainData: {},
      addresses: [],
      chains: [],
      balance: 0,
      arrayList: [undefined],
      arrayList1: [undefined],
      loading: false,
      visibility: 0,
      logo: "",
      url:"http://localhost:8080/api/v1/leads?page=2&sort=asc&query=&size=25",
    };
  },
  methods: {
    toggleVisibility: function (msg) {
      if (this.visibility == 0) {
        this.visibility = msg;
      } else {
        this.visibility = 0;
      }
    },
  },

  // "http://localhost:8080/api/v1/leads?page=2&sort=asc&query=&size=25"

  mounted() {

    console.log("url:-", this.url )
    axios
      .get("http://localhost:8080/api/v1/leads?page=1&sort=asc&query=&size=30")
      .then((data) => {
        console.log("data", data.data);
        this.addresses = data.data.addresses;
        console.log("T:- ", data.data.addresses[0].tokens);
        this.chains = data.data.chains;
        this.logo = data.data.addresses[0].tokens[0].logo_url;
        console.log("l:- ", this.logo);
        this.balance = data.data.chains[0].total_balance;

        for (let index = 0; index < data.data.addresses.length; index++) {
          data.data.addresses[index].tokens.forEach((item) => {
            this.arrayList.push(item);
          });
        }

        // data.data.addresses[0].tokens.forEach((item) => {
        //   this.arrayList.push(item);
        // });

        // data.data.addresses.forEach((item) => {
        //   // this.arrayList1.push(item[0].tokens);

        //   console.log("i:",item.tokens);
        // });

        console.log(this.arrayList1);
        this.arrayList.shift();
        this.loading = true;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setup() {
    const checkedCustomers = ref([]);
    const tableHeader = ref([
      {
        name: "#",
        key: "__v",
      },
      {
        name: "Contact Address",
        key: "contract_address",
        sortable: true,
      },
      {
        name: "Contact Name",
        key: "contract_name",
        sortable: true,
      },
      {
        name: "Contact Symbol",
        key: "logo_url",
        sortable: true,
      },
      {
        name: "Balance",
        key: "balance",
        sortable: true,
      },
      {
        name: "Actions",
        key: "action",
      },
    ]);

    const tableData = ref<Array<ICustomer>>(customers);
    const initCustomers = ref<Array<ICustomer>>([]);

    onMounted(() => {
      setCurrentPageBreadcrumbs("Addresses List", ["Apps", "Customers"]);
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
});
</script>
