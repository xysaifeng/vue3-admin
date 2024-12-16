import globals from "globals"
import pluginJs from "@eslint/js" // 推荐的校验js语法规范
import tseslint from "typescript-eslint" // 推荐的ts规范
import pluginVue from "eslint-plugin-vue" // 推荐的vue规范
import prettierRecommended from "eslint-plugin-prettier/recommended"

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] }, // 指定校验哪些文件
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } }, // 添加全局变量
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"], // 校验vue中的ts代码
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  {
    // 指定哪些文件不去校验
    ignores: ["dist", "node_modules", ".css", "*.d.ts"]
  },
  {
    // 自定义校验规则,根据需要增加
    rules: {
      "no-console": "warn",
      "no-debugger": "warn",
      "no-unused-vars": "error",
      "vue/no-unused-components": "warn",
      semi: ["error"], // error:末尾要加分号
      "vue/multi-word-component-names": ["off"]
    }
  },
  prettierRecommended // 当eslint和prettier冲突时，以prettier为准
]

// eslint 主要是校验代码规范的 prettier 是格式化代码的
