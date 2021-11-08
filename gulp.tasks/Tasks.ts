import { parallel } from './Constants'

import DeleteBuild from './DeleteBuild'
import CreateDirectory from './CreateDirectory'
import Vendor from './Vendor'
import Image from './Image'
import Style from './Style'
import Script from './Script'
import Laravel from './Laravel'
import PHP from './PHP'
import EJS from './EJS'
import HTML from './HTML'
import WordPress from './WordPress'
import Htaccess from './Htaccess'
import Next from './Next'
import Audio from './Audio'

export const Tasks = [
  DeleteBuild,
  CreateDirectory,
  Next,
  parallel(
    Vendor,
    Audio,
    Image,
    Style,
    Script,
    Laravel,
    PHP,
    EJS,
    HTML,
    WordPress,
    Htaccess
  )
]
