import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(router)

app.mount("#app")

app.config.globalProperties.getNames = function (key: string) {
  return key
}

app.config.errorHandler = (err, vm, info) => {
  console.log(err, vm, info, "-------errorHandler")
}
