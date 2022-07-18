import Vue from 'vue'
import elements from 'element-plus'
console.log(elements);
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Autocomplete)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Checkbox)
Vue.use(Dialog)
Vue.use(Popover)
Vue.use(Tree)
Vue.use(Upload)
Vue.use(Scrollbar)
Vue.use(Tag)
Vue.use(Loading.directive)

Vue.prototype.$message = ElMessage;
Vue.prototype.$msgbox = ElMessageBox;
Vue.prototype.$loading = Loading.service;
Vue.prototype.$confirm = MessageBox.confirm;