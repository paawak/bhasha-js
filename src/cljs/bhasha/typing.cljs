(ns bhasha.typing
  (:require [domina.core :refer [by-id value set-value!]]
            [domina.events :refer [listen!]]))
			
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

	)
	
	
)

(defn ^:export init []
	(if (
			and js/document (.-getElementById js/document)
		)
		(listen! (by-id "bhashaTextArea") :keypress setText)
	)
)
