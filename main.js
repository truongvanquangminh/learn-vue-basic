const app = Vue.createApp({
    template: `<h1>Test {{name}} and {{!isHello ? firstName + " " + lastName : ""}}</h1>
        <!-- <button v-on:click="onChangeName">Change Name</button> -->
        <button @click="onChangeName">Change Name But Shorter</button> <!-- Shorthand @ = v-on: -->
        <div class="modal" v-if="isShowModal">
            <h1>Modal New</h1>
        </div>`,
    data() {
        return {
            name: "Quang Minh",
            firstName: 'Trương',
            lastName: 'Minh',
            isHello: false,
            isShowModal: false
        }
    },
    methods: {
        onChangeName() {
            this.isShowModal = !this.isShowModal
        }
    }
});

app.mount("#contact");