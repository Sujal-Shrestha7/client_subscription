<template>
  <div class="client-wrapper">
    <div class="title">
      <h2></h2>
    </div>
    <div class="client-header">
      <h2>Clients</h2>
    </div>
    <div class="wrapper">
      <div class="subscription">
        <div class="btn-span">Within a week</div>
        <div class="btn-span">within a month</div>
        <div class="btn-span">In a year</div>
      </div>
      <div class="client-list-iterate">
        <div class="client-header-inside">
          <div class="table-header-inside serial">S.N.</div>
          <div class="table-header-inside org">Name</div>
          <div class="table-header-inside name">Contact</div>
          <div class="table-header-inside subs">Subscription</div>
        </div>
        <div v-for="(client, index) in getClients" class="client-details">
          <div class="table-data serial">{{ index + 1 }}</div>
          <div class="table-data org">{{ client.name }}</div>
          <div class="table-data name">{{ client.contact }}</div>
          <div class="table-data subs">{{ client.expiryDate }}</div>
          <div>
            <button type="button" @click="editClient(client)">edit</button>
          </div>
          <div>
            <button type="button" @click="deleteCLient(client)">delete</button>
          </div>
        </div>
      </div>

      <div class="aside">
        <div class="subs-details">
          <div class="title">
            <h2>Client Name</h2>
            <p class="client-org">ABC Orgainzation</p>
          </div>
          <div class="subs-status">Hello</div>
        </div>
      </div>
    </div>
    <div>
      <button type="button" @click="fetchCLient()">Demo</button>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
  background: rgb(226, 237, 250);
  .subscription {
    margin-top: 60px;
    margin-right: 0;
    .btn-span {
      border-bottom: 1px solid #fff;
      padding: 5px;
      padding: 8px 20px;

      font-size: small;
      &:active,
      &:hover {
        background: #fff;
        transition: 0.2s ease-in;
        cursor: pointer;
      }
    }
  }
}

.client-wrapper {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(90deg, #46dcf8, #2250e4);
  margin: 0;
  .client-header {
    width: 100%;
    background: #2250e4;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 20px;
    border: none;
    box-shadow: 3px 3px 7px 1px rgba(100, 97, 97, 0.5);
    // margin-top: 50px;
    .table-header {
      text-align: start;
      margin-left: 3px;
    }
    .serial {
      width: 10%;
    }
  }

  .client-list-iterate {
    // height: 100%;
    width: 60%;
    background: #fff;
    padding: 40px;
    position: relative;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
  }
}

.client-header-inside {
  display: flex;
  flex-direction: row;
  // background: linear-gradient(90deg, #46dcf8, #2250e4);
  padding: 10px;
  color: #000;
  width: 100%;
  border-top: 2px solid rgb(182, 190, 196);
  border-bottom: 2px solid rgb(182, 190, 196);
  border-radius: 1px;
}
.table-header-inside {
  font-size: small;
  font-weight: 900;
}
.serial {
  width: 9%;
  overflow: hidden;
}
.name {
  width: 15%;
  overflow: hidden;
}
.org {
  width: 22%;
  overflow: hidden;
}
.subs {
  width: auto;
  overflow: hidden;
}

.client-details {
  @extend .client-header-inside;
  background: rgb(226, 237, 250);
  border: none;
  padding: 8px;
  font-size: small;
  width: 100%;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: rgb(181, 212, 249);
    cursor: pointer;
  }
}

.aside {
  margin: 50px auto 50px;
  background: #2250e4;
  height: 30%;
  padding: 50px;
  border-radius: 5px 10px;
  color: #fff;

  .subs-details {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      iterate: 5,
    };
  },
  computed: {
    ...mapGetters('modules/clients', ['getClients']),
    // computedValue() {
    //   console.log(this.$store.getters.getClients);
    //   console.log('computed value has been hit');

    //   debugger;
    //   // return this.$store.getters.getClients;
    // },
  },
  async mounted() {
    await this.getClientsAction();
  },

  methods: {
    ...mapActions('modules/clients', [
      'getClientsAction',
      'editClientAction',
      'deleteClientAction',
    ]),

    async fetchCLient() {
      await this.getClientsAction();
    },

    async editClient(client) {
      await this.editClientAction(client);
    },

    async deleteClient(client) {
      await this.deleteClientAction(client);
    },
  },
};
</script>
