import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/Screens/IndexScreen";
import { Provider as BlogProvider } from './src/context/BlogContext'
import ShowScreen from "./src/Screens/ShowScreen";
import CreateScreen from "./src/Screens/CreateScreen";
import EditScreen from "./src/Screens/EditScreen";
import { Feather } from '@expo/vector-icons'


const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen,

}, {
  initialRouteName: "Index",
  defaultNavigationOptions: {
    title: 'Tommy Blog',
  }
})




const App = createAppContainer(navigator)

export default () => <BlogProvider><App /></BlogProvider>