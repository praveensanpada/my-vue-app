<template>
  <!--begin::Tables Widget 1-->
  <div :class="widgetClasses" class="card h-300px">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Chains</span>

        <span class="text-muted fw-bold fs-7">Total 13 chains</span>
      </h3>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body overflow-auto py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table class="table align-middle gs-0 gy-5">
          <!--begin::Table head-->
          <thead>
            <tr>
              <th class="p-0 w-50px"></th>
              <th class="p-0 min-w-200px"></th>
              <th class="p-0 min-w-200px"></th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in items" :key="index">
              <tr>
                <th>
                  <div class="symbol symbol-50px me-2">
                    <span class="symbol-label">
                      <img
                        :src="item.image"
                        class="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                </th>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                    >{{ item.info.title }}</a
                  >
                  <span class="text-muted fw-bold d-block fs-7">{{
                    item.info.description
                  }}</span>
                </td>

                <td>
                  <div class="d-flex flex-column w-100 me-2">
                    <div class="d-flex flex-stack mb-2">
                      <span class="text-muted me-2 fs-7 fw-bold">
                        {{ item.progress.value }}
                      </span>
                    </div>

                    <div class="h-6px w-100 text-dark">
                      $ {{ item.progress.balance }}
                    </div>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
  </div>
  <!--endW::Tables Widget 1-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "kt-widget-1",
  components: {},
  props: {
    widgetClasses: String,
  },
  data() {
    return {
      mainData: {},
      addresses: [],
      chains: [
        {
          total_aeth: 0,
          total_avax: 0,
          total_balance: 0,
          total_bnb: 0,
          total_eth: 0,
          total_ftm: 0,
          total_glmr: 0,
          total_ht: 0,
          total_iotx: 0,
          total_klay: 0,
          total_matic: 0,
          total_movr: 0,
          total_palm: 0,
          total_rbtc: 2542.06893174,
        },
      ],
      balance: 0,
      items: [
        {
          image: "media/svg/brand-logos/plurk.svg",
          info: {
            title: "AETH",
            description: "Successful Fellas",
          },
          progress: {
            value: "Balance",
            balance: 0,
          },
        },

        {
          image: "media/svg/brand-logos/telegram.svg",
          info: {
            title: "AVAX",
            description: "Most Successful",
          },
          progress: {
            value: "Balance",
            balance: 0,
          },
        },
        {
          image: "media/svg/brand-logos/telegram.svg",
          info: {
            title: "BNB",
            description: "Most Successful",
          },
          progress: {
            value: "Balance",
            balance: 0,
          },
        },
        {
          image: "media/svg/brand-logos/telegram.svg",
          info: {
            title: "ETH",
            description: "Most Successful",
          },
          progress: {
            value: "Balance",
            balance: 0,
          },
        },
        {
          image: "media/svg/brand-logos/telegram.svg",
          info: {
            title: "FTM",
            description: "Most Successful",
          },
          progress: {
            value: "Balance",
            balance: 0,
          },
        },
        {
          image: "media/svg/brand-logos/telegram.svg",
          info: {
            title: "GLMR",
            description: "Most Successful",
          },
          progress: {
            value: "Balance",
            balance: 0,
          },
        },
        {
          image: "media/svg/brand-logos/telegram.svg",
          info: {
            title: "HT",
            description: "Most Successful",
          },
          progress: {
            value: "Balance",
            balance: 0,
          },
        },
        {
          image: "media/svg/brand-logos/telegram.svg",
          info: {
            title: "IOTX",
            description: "Most Successful",
          },
          progress: {
            value: "Balance",
            balance: 0,
          },
        },
        {
          image: "media/svg/brand-logos/telegram.svg",
          info: {
            title: "KLAY",
            description: "Most Successful",
          },
          progress: {
            value: "Balance",
            balance: 0,
          },
        },

        {
          image: "media/svg/brand-logos/vimeo.svg",
          info: {
            title: "MATIC",
            description: "Awesome Users",
          },
          progress: {
            value: "Balance",
            balance: 0,
          },
        },

        {
          image: "media/svg/brand-logos/bebo.svg",
          info: {
            title: "MOVR",
            description: "Best Customers",
          },
          progress: {
            value: "Balance",
            balance: 0,
          },
        },

        {
          image: "media/svg/brand-logos/kickstarter.svg",
          info: {
            title: "PALM",
            description: "Amazing Templates",
          },
          progress: {
            value: "Balance",
            balance: 0,
          },
        },
        {
          image: "media/svg/brand-logos/kickstarter.svg",
          info: {
            title: "RBTC",
            description: "Amazing Templates",
          },
          progress: {
            value: "Balance",
            balance: 0,
          },
        },
      ],
    };
  },

  mounted() {
    axios
      .get("http://localhost:8080/api/v1/leads")
      .then((data) => {
        console.log("data", data.data);
        this.addresses = data.data.addresses;
        this.chains = data.data.chains[0];
        this.balance = data.data.chains[0].total_balance;
        this.items[0].progress.balance = data.data.chains[0].total_aeth;
        this.items[1].progress.balance = data.data.chains[0].total_avax;
        this.items[2].progress.balance = data.data.chains[0].total_bnb;
        this.items[3].progress.balance = data.data.chains[0].total_eth;
        this.items[4].progress.balance = data.data.chains[0].total_ftm;
        this.items[5].progress.balance = data.data.chains[0].total_glmr;
        this.items[6].progress.balance = data.data.chains[0].total_ht;
        this.items[7].progress.balance = data.data.chains[0].total_iotx;
        this.items[8].progress.balance = data.data.chains[0].total_klay;
        this.items[9].progress.balance = data.data.chains[0].total_matic;
        this.items[10].progress.balance = data.data.chains[0].total_movr;
        this.items[11].progress.balance = data.data.chains[0].total_palm;
        this.items[12].progress.balance = data.data.chains[0].total_rbtc;
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
</script>
