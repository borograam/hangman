import {mount, register} from 'riot'
import Game from './game.riot'
import Test from './test.riot'

register('test', Test)
register('game', Game)

mount('test, game')