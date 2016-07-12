# bhasha-js

This is a multi-lingual word processor in javascript, which can be embedded in a web-page. It supports 3 languages: Bengali, Hindi and English.

____________________________________________
To Build
____________________________________________

(refer to https://developers.google.com/closure/library/docs/closurebuilder)

Calculating dependencies:

closure-library/closure/bin/build/closurebuilder.py \
  --root=closure-library/ \
  --root=js/ \
  --namespace="bhasha.indic.attachEditor"
  
  
  To generate compiled js:
  
closure-library/closure/bin/build/closurebuilder.py   --root=closure-library/   --root=js/   --namespace="bhasha.indic.attachEditor" --output_mode=compiled   --compiler_jar=closure-library/compiler.jar > bhasha-compiled.js
  
  