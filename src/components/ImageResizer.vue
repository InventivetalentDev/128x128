<template>
    <div class="md-layout md-gutter">
        <div class="md-layout-item md-size-10"></div>
        <div class="md-layout-item">
            <md-card class="image-resizer-card">
                <md-card-header>
                    <div class="md-headline">128x128</div>
                    <div class="md-subheading">Upload an Image to see how it would look with the EU's 128x128 size restrictions applied</div>
                </md-card-header>

                <md-card-content>

                    <div v-show="hasImage">
                        <div class="image-display inline" v-for="(size, index) in sizes" v-bind:key="index">
                            <div class="image-background" v-bind:style="{width:size+'px', height: size+'px'}">
                                <span class="image-helper" style="display: inline-block; height: 100%; vertical-align: middle;"></span>
                                <img class="image-preview" :src="imageUrl" :width=size :height=size>
                            </div>
                            <br/>
                            <span v-if="size===imageMaxDimension">Original Dimensions ({{ hasImage ? imageInfo.orgWidth: 0 }}x{{ hasImage ? imageInfo.orgHeight: 0 }} pixels)</span>
                            <span v-else>{{ size }}x{{ size }} pixels</span>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <image-uploader
                                :debug="1"
                                :maxWidth="128"
                                :maxHeight="128"
                                :quality="0.9"
                                :autoRotate=true
                                outputFormat="verbose"
                                :preview=false
                                :className="['fileInput', { 'fileinput--loaded' : hasImage }]"
                                :capture=true
                                accept="video/*,image/*"
                                doNotResize="['gif', 'svg']"
                                @input="setImage"
                                @onUpload="startImageResize"
                                @onComplete="endImageResize">
                        </image-uploader>
                    </div>
                    <br/>
                    <span style="color: #777777;">Made by <a href="https://inventivetalent.org" target="_blank">inventivetalent</a></span>

                </md-card-content>

            </md-card>
        </div>
        <div class="md-layout-item md-size-10"></div>
    </div>
</template>

<script>
    const defaultSizes = [128, 256, 512];

    export default {
        name: 'ImageResizer',
        data() {
            return {
                hasImage: false,
                image: null,
                imageUrl: null,
                imageInfo: null,
                imageMaxDimension: 0,
                sizes: defaultSizes
            }
        },
        methods: {
            setImage(output) {
                this.sizes = defaultSizes.slice();


                window.console.log("setImage");
                this.hasImage = true;
                this.image = output;
                this.imageUrl = output.dataUrl;
                this.imageInfo = output.info;
                window.console.log(output)
                window.console.log(output.dataUrl)
                window.console.log(output.info)
                window.console.log(output.exif)

                this.imageMaxDimension = Math.max(output.info.orgWidth, output.info.orgHeight);

                this.sizes.push(this.imageMaxDimension);
                this.sizes.sort((a, b) => a - b);
            },
            startImageResize() {
                window.console.log("startImageResize")
            },
            endImageResize() {
                window.console.log("endImageResize")
            }
        }
    }
</script>

<style>
    .inline {
        display: inline-block;
        margin: 10px;
    }

    .image-background {
        background-color: lightgray;
    }
</style>
