#!/bin/bash
cd android
./gradlew bundleRelease
java -jar /home/edjopima/Documentos/proyectos/inpimacaMobileApp/android/bundletool-all-1.4.0.jar build-apks --bundle=/home/edjopima/Documentos/proyectos/inpimacaMobileApp/android/app/build/outputs/bundle/release/app-release.aab --output=/home/edjopima/Documentos/proyectos/inpimacaMobileApp/android/app/build/outputs/bundle/release/inpimaca.apks --ks=/home/edjopima/Documentos/proyectos/inpimacaMobileApp/inpimaca.keystore --ks-key-alias=inpimaca
