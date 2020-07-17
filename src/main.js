import 'fork-awesome/css/fork-awesome.css'
import {mount, register} from 'riot'
import Mainpage from './mainPage.riot'

register('mainpage', Mainpage)

mount('mainpage')