import {createStackNavigator, createAppContainer} from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

const SearchStackNavigator = createStackNavigator({
  Search:{
    screen:Search,
    navigationOptions:{
      title:'Recherche'
    }
  },
  FilmDetail:{
    screen:FilmDetail,
    navigationOptions:{
      title:'Description'
    }
  }

})

export default createAppContainer(SearchStackNavigator)
