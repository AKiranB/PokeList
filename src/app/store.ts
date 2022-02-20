import { configureStore } from "@reduxjs/toolkit"
import { loadState } from "./browser-storage-"
import { pokemonReducer } from "./reducer"

export const store = configureStore({
    devTools: true,
    reducer: {
        pokemon: pokemonReducer,
    },
    preloadedState: loadState()
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch