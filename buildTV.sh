#!/bin/bash

npm run build
cp build/index.html build/index.stc.html 
cp build/index.html build/index.jawwy.html

rm -rf ../intigral-webtv/platforms/tizen-jawwy/.sign
rm -rf ../intigral-webtv/platforms/tizen-jawwy/.manifest.tmp
rm -rf ../intigral-webtv/platforms/tizen-jawwy/author-signature.xml
rm -rf ../intigral-webtv/platforms/tizen-jawwy/www
mkdir ../intigral-webtv/platforms/tizen-jawwy/www
touch ../intigral-webtv/platforms/tizen-jawwy/www/.info.txt

rm -rf ../intigral-webtv/platforms/tizen-stc/.sign
rm -rf ../intigral-webtv/platforms/tizen-stc/.manifest.tmp
rm -rf ../intigral-webtv/platforms/tizen-stc/author-signature.xml
rm -rf ../intigral-webtv/platforms/tizen-stc/www
mkdir ../intigral-webtv/platforms/tizen-stc/www
touch ../intigral-webtv/platforms/tizen-stc/www/.info.txt

rm -rf ../intigral-webtv/platforms/webos-jawwy/www
mkdir ../intigral-webtv/platforms/webos-jawwy/www
touch ../intigral-webtv/platforms/webos-jawwy/www/.info.txt

rm -rf ../intigral-webtv/platforms/webos-stc/www
mkdir ../intigral-webtv/platforms/webos-stc/www
touch ../intigral-webtv/platforms/webos-stc/www/.info.txt


cp -r build/* ../intigral-webtv/platforms/tizen-jawwy/www
cp -r build/* ../intigral-webtv/platforms/tizen-stc/www
cp -r build/* ../intigral-webtv/platforms/webos-jawwy/www
cp -r build/* ../intigral-webtv/platforms/webos-stc/www


rm  ~/workspace/BasicProject/www/* -r
cp -r  build/*  ~/workspace/BasicProject/www/


# cd platforms/webos-jawwy
# rm ./*.ipk
# ares-package .
# ares-install ./*.ipk
# cd ../../

cd ../intigral-webtv/platforms/webos-stc
rm ./*.ipk
ares-package .
ares-install ./*.ipk
cd ../../



# ares-launch com.stc.intigral.webtv
# ares-launch com.jawwy.intigral.webtv

# ares-inspect com.intigral.webtv --open