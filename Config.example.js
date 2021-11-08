export default {
  build_name: 'public',
  resource_directory: 'src',
  server_settings: {
    // php を xampp, mamp 等を使用せずに nplate のみで動かす場合は、host, port を設定する
    host: 'localhost', // wordpress の場合、localhost のみ
    // php を使用する場合、port が php サーバーになり、host には localhost + port を合うように入力する
    port: 80,
    browsersync_port: 4000,
    proxy_port: 3003, // next.js の設定、設定例は src/dode_tips/nplate_tips/how_to_use_nextjs.js を参照
    use: {
      proxy: false,
      htaccess: false
    }
  },
  ecmascript_settings: {
    ecmascript_directory: 'scripts',
    use: {
      react: false,
      next: false,
      ejs: false,
      vue: false,
      ts: false,
      tsx: false,
      minify: true,
      compiler: true,
      esbuild: true // webpack の代わりとして実行される、react 系であれば瀑速で build される
      // vue 非対応
    }
  },
  style_settings: {
    style_directory: 'styles',
    use: {
      entry: true,
      minify: false
    }
  },
  php_settings: {
    use: {
      php: false,
      laravel: false,
      blade_template: false
    },
    php_bin:
      'C:/UserApps/Apps/laragon/bin/php/php-7.4.9-Win32-vc15-x64/php.exe',
    php_ini: 'C:/UserApps/Apps/laragon/bin/php/php-7.4.9-Win32-vc15-x64/php.ini'
  },
  vendor_settings: {
    use: {
      vendors_directory: true
    }
  },
  audio_settings: {
    use: {
      audios_directory: false
    }
  },
  wordpress_settings: {
    use: {
      as_wordpress_theme: false
    }
  }
}
