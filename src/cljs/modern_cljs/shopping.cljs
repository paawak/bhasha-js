(ns modern-cljs.shopping
  (:require [domina.core :refer [by-id value set-value!]]
            [domina.events :refer [listen!]]))

(defn setText []
  (let [
		text (value (by-id "bhashaTextArea"))
       ]
    (set-value! (by-id "bhashaTextArea") (-> (+ text '--monkey--')
                                    ))))

(defn ^:export init []
  (if (and js/document
           (.-getElementById js/document))
    (listen! (by-id "bhashaTextArea") :click setText)))
