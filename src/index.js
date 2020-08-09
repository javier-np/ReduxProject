import store from './store'
import { bugAdded } from './actions/bugActions'

store.subscribe( () => {
    console.log("Store changed: ", store.getState())
})

store.dispatch(bugAdded("Bug 1"))

console.log(store.getState())