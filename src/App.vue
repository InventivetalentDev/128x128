<template>
    <div class="page-container" id="app">
        <md-app>
            <md-app-content>
                <ImageResizer/>

                <md-snackbar md-position="center" :md-duration="2000" :md-active.sync="snackbarVisible" md-persistent>
                    <span>{{ snackbarMessage }}</span>
                </md-snackbar>
                <md-dialog-alert
                        :md-active.sync="alertVisible"
                        :md-title="alertTitle || 'Alert'"
                        :md-content="alertMessage"
                        :md-confirm-text="alertConfirmText || 'Okay!'"/>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    import ImageResizer from "./components/ImageResizer";

    export default {
        components: {ImageResizer},
        data: () => ({
            snackbarVisible: false,
            snackbarMessage: '',
            alertVisible: false,
            alertTitle: '',
            alertMessage: '',
            alertConfirmText: 'Okay!'
        }),
        methods: {
            showSnackbar(msg) {
                this.snackbarMessage = msg;
                this.snackbarVisible = true;
            },
            showAlert(msgOrOptions) {
                window.console.log("showAlert");
                window.console.log(msgOrOptions)
                if (typeof msgOrOptions === "string") {
                    this.alertMessage = msgOrOptions;
                } else {
                    this.alertTitle = msgOrOptions.title || 'Alert!';
                    this.alertMessage = msgOrOptions.msg || msgOrOptions.message || "";
                    this.alertConfirmText = msgOrOptions.confirm || "Okay!"
                }
                this.alertVisible = true;
            }
        }
    }
</script>

<style>
    .md-app-container {
        overflow-x: hidden !important;
    }
</style>
