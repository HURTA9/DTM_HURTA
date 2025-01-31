# 軽量なウェブサーバーのベースイメージを使用
FROM nginx:alpine

# 作業ディレクトリを設定
WORKDIR /usr/share/nginx/html

# プロジェクトの内容をコンテナにコピー
COPY . .

# デフォルトでNginxが起動します
EXPOSE 80
