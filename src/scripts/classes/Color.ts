// python のやつを ts にしたやつ
class Color {
  static BLACK: string = '\u001b[30m' // (文字)黒
  static RED: string = '\u001b[31m' // (文字)赤
  static GREEN: string = '\u001b[32m' // (文字)緑
  static YELLOW: string = '\u001b[33m' // (文字)黄
  static BLUE: string = '\u001b[34m' // (文字)青
  static MAGENTA: string = '\u001b[35m' // (文字)マゼンタ
  static CYAN: string = '\u001b[36m' // (文字)シアン
  static WHITE: string = '\u001b[37m' // (文字)白
  static COLOR_DEFAULT: string = '\u001b[39m' // 文字色をデフォルトに戻す
  static BOLD: string = '\u001b[1m' // 太字
  static UNDERLINE: string = '\u001b[4m' // 下線
  static INVISIBLE: string = '\u001b[08m' // 不可視
  static REVERCE: string = '\u001b[07m' // 文字色と背景色を反転
  static BG_BLACK: string = '\u001b[40m' // (背景)黒
  static BG_RED: string = '\u001b[41m' // (背景)赤
  static BG_GREEN: string = '\u001b[42m' // (背景)緑
  static BG_YELLOW: string = '\u001b[43m' // (背景)黄
  static BG_BLUE: string = '\u001b[44m' // (背景)青
  static BG_MAGENTA: string = '\u001b[45m' // (背景)マゼンタ
  static BG_CYAN: string = '\u001b[46m' // (背景)シアン
  static BG_WHITE: string = '\u001b[47m' // (背景)白
  static BG_DEFAULT: string = '\u001b[49m' // 背景色をデフォルトに戻す
  static RESET: string = '\u001b[0m' // 全てリセット

  static green = (string: string): string => {
    return `${Color.GREEN}${string}${Color.RESET}`
  }

  static magenta = (string: string): string => {
    return `${Color.MAGENTA}${string}${Color.RESET}`
  }

  static cyan = (string: string): string => {
    return `${Color.CYAN}${string}${Color.RESET}`
  }

  static red = (string: string): string => {
    return `${Color.RED}${string}${Color.RESET}`
  }
}
// class Color:
//     BLACK = '\033[30m'  # (文字)黒
//     RED = '\033[31m'  # (文字)赤
//     GREEN = '\033[32m'  # (文字)緑
//     YELLOW = '\033[33m'  # (文字)黄
//     BLUE = '\033[34m'  # (文字)青
//     MAGENTA = '\033[35m'  # (文字)マゼンタ
//     CYAN = '\033[36m'  # (文字)シアン
//     WHITE = '\033[37m'  # (文字)白
//     COLOR_DEFAULT = '\033[39m'  # 文字色をデフォルトに戻す
//     BOLD = '\033[1m'  # 太字
//     UNDERLINE = '\033[4m'  # 下線
//     INVISIBLE = '\033[08m'  # 不可視
//     REVERCE = '\033[07m'  # 文字色と背景色を反転
//     BG_BLACK = '\033[40m'  # (背景)黒
//     BG_RED = '\033[41m'  # (背景)赤
//     BG_GREEN = '\033[42m'  # (背景)緑
//     BG_YELLOW = '\033[43m'  # (背景)黄
//     BG_BLUE = '\033[44m'  # (背景)青
//     BG_MAGENTA = '\033[45m'  # (背景)マゼンタ
//     BG_CYAN = '\033[46m'  # (背景)シアン
//     BG_WHITE = '\033[47m'  # (背景)白
//     BG_DEFAULT = '\033[49m'  # 背景色をデフォルトに戻す
//     RESET = '\033[0m'  # 全てリセット

//     def __init__(self) -> None:
//         pass

//     @classmethod
//     def green(cls, string) -> str:
//         return f'{cls.GREEN}{string}{cls.RESET}'

//     @classmethod
//     def magenta(cls, string) -> str:
//         return f'{cls.MAGENTA}{string}{cls.RESET}'

//     @classmethod
//     def cyan(cls, string) -> str:
//         return f'{cls.CYAN}{string}{cls.RESET}'

//     @classmethod
//     def red(cls, string) -> str:
//         return f'{cls.RED}{string}{cls.RESET}'

export default Color
