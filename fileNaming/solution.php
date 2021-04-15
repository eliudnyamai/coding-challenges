<?php
function fileNaming($names) {
 for($i=1; $i<count($names); $i++){
     $prev_names=array_slice($names,0,$i);//Get all the previous names
     if(in_array($names[$i],$prev_names)){ //Check if the name exists in previous names
         $j=1;
        $y=$names[$i].'('.$j.')'; // if it exists append '(1)' to it
         while(in_array($y,$prev_names)){// if after appending there exists the same name
             $j++;//increment
             $y=$names[$i].'('.$j.')';//and keep appending
         }
         $names[$i]=$y;// when we change the name to be unique compared to previous names
         //now change it in names array
     }
 }
 return $names;
}