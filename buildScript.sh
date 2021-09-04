#!/usr/bin/bash
build_project () {
  # Build the project
  echo "Building project..."
  cd android && ./gradlew assembleRelease
  cd ..
  echo 'Builded'
}
gen_apk () {
  # Generate the apk
  echo "Generating apk..."
  java -jar "C:\Users\mrejp\Documents\dev\bundletool-all-1.8.0.jar" build-apks --bundle="C:\Users\mrejp\Documents\dev\inpimacaMobileApp\android\app\build\outputs\bundle\release\app-release.aab" --output="C:\Users\mrejp\Documents\dev\inpimacaMobileApp\android\app\build\outputs\bundle\release\releaseapk.apks" --mode=universal --ks="C:\Users\mrejp\Documents\dev\inpimacaMobileApp\android\app\inpimaca-app.keystore" --ks-key-alias=inpimaca-app
  echo 'Generated'
} 
echo "Starting build..."
build_project
gen_apk
echo "Build finished"