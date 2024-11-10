// ES modülü kullanarak yapılandırma
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js', // Giriş dosyası
  output: {
    path: path.resolve(__dirname, 'dist'), // Çıktı dizini
    filename: 'bundle.js', // Çıktı dosya adı
  },
  mode: 'development', // Geliştirme modu
  devServer: {
    static: './dist', // Sunucu için statik dosya yolu
    open: true, // Tarayıcıyı otomatik aç
    port: 3000, // Port numarası
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // JS ve JSX dosyaları için kural
        exclude: /node_modules/, // node_modules dışındaki dosyalar
        use: {
          loader: 'babel-loader', // Babel kullanarak dönüştürme
        },
      },
      {
        test: /\.css$/, // CSS dosyaları için kural
        use: ['style-loader', 'css-loader'], // CSS ve stil yükleyicileri
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Uzantılar
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML şablonu
    }),
  ],
};
