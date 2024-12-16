/*the ts file of vue*/
declare module "*.vue" {
  import { DefineComponent } from "vue"

  interface ComponentCustomProperties {
    getName: () => string
  }

  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module "vue" {
//   interface ComponentCustomProperties {
//     getName: () => string
//   }
// }
