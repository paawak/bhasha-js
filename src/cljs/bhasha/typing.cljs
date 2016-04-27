(ns bhasha.typing
  (:require [domina.core :refer [by-id value set-value!]]
            [domina.events :refer [listen!]]
			[domina.events :refer [dispatch!]]
))
			
(enable-console-print!)			

(defn setText [evt]
  (  
  let [
		text (value (by-id "bhashaTextArea"))
		keyChar (:charCode evt)
		keyCode (:keyCode evt)
       ]
	   (comment
			set-value! (by-id "bhashaTextArea") 
			( 
				-> (+ text '--monkey--')
            )
		)
		(println "bhasha textArea keyPressed! keyChar: " keyChar ", keyCode: " keyCode)
		
		;;(set! (.-charCode evt) +65)
		
		;;new KeyEvent(keyCode, charCode, repeat, browserEvent)
		
		;;(dispatch! (by-id "bhashaTextArea") :KeyEvent {:keyCode keyCode, :charCode 65, :repeat (:repeat evt), :browserEvent (:browserEvent evt)})
		
	)
	
	
)

(defn ^:export init []
	(if (
			and js/document (.-getElementById js/document)
		)
		(listen! (by-id "bhashaTextArea") :keypress setText)
	)
)
