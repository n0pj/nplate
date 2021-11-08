import { series } from './Constants.ts'
import Server from './Server.ts'
import ServerWatch from './ServerWatch.ts'
import { Tasks } from './Tasks.ts'
import NextServer from './NextServer.ts'

exports.StartServer = series(Tasks, Server)

exports.StartWatch = series(Tasks, ServerWatch)

exports.StartBuild = series(Tasks)
