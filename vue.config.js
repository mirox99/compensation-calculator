const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/scss/_variables.scss";
                                 @import "@/assets/scss/_reset.scss";
                                  @import "@/assets/scss/_utilities.scss";
                                  @import "@/assets/scss/_typography.scss";`
            }
        }
    }
})
