import { createStore } from "vuex";
import theme from "./modules/theme";
import projects from "./modules/projects";
export default createStore({
  modules: {
    theme: theme,
    projects: projects,
  },
});
