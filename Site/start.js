   function Color_inc(sElemId, bBackward)
     {
         document.getElementById(sElemId).style['background'] = bBackward
     }
	 
   function tst_img_change() 
	 {
         document.getElementById('cell_with_img').innerHTML = '<IMG WIDTH="32" onclick="Show_Hide(this.id)" id="simple_test" HEIGHT="32" src="data:image/ico;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3b0EQt3BAXLNsPLeyazrlsms677JrO+myazvftG08qbdwQEi4ckIKAAAAAAAAAAAAAAAAAAAAAAAAAADKhFYgxn9Rh794St++eEr5wHpL/795Sv+9d0n/vnZJ/753Sfe/eUvTw3xPcMaAVRQAAAAAAAAAAAAAAADWkWYixYBYobFrSfevaUn/sm1L/7dwTf/Ff1b/z4ld/9CKXf/OiF3/y4Za/8yGW+/OiF6H045kEgAAAADmongO1JBoh6tjSPmuZ03/vXVV/4MwIP9/NSn/iDgn/4xDMv+HQjP/hT8w/8eCXv/YlGv/15Nq7dqVbWbin3cE66iARtKNauGeUj3/1I5s/8uAXf96NS3/jHN0/4U9Mf+raFb/hWhp/24vLP/Mh2b/5aF6/+Kdd//jnnjH5KF7NvCuh4/Zk3H9n086/92Wdf/RhGL/hklA/62urv+OTUH/uXxp/6ukov98Qj3/wXlb/+6qhP/qp4H/6qeC8euog4X1so7D6KOB/6NTPP/NhGb/2I1s/4lLQf+2tbT/kU9D/7t+a/+0qqn/jUtA/51LNP/dl3b/9LGM//Guivvxrou/97WT1fi2k//BdFn/qlpC/9GEZf+OT0X/wsHA/7uno//GtrH/qouH/6laQ//GeV7/tGRM//KvjP/4tZP/9rOR1fq4ltP9u5r/7KmJ/6pZQv+hSjP/klNJ/9HOzf/Hurf/0cbD/7SQif+sWED/662M/7dpUP/WjnH//r6c//q3ltP9u5q5/bua//6/nv/gnX//mUEr/6JlWf/j4N//mFRI/8SHdP/fw7n/pU84/+Olhv/alHf/xHhe//29m/n+vJuz/7ybfP+9nP3/waH//sip/9OOcv+4f3H/7unp/9W7tv/oz8j/5MS5/6VQOf/mq4//7K+U/8Z9Zf/5upnr/8GfcP+8mjT/vZzR/8Sm///Rtv/krJT/rWtc/82sp//ZwL3/1bKr/7dvW//Fg27/9suz/+Cpk//Vknn//b2cs/+/nSb/u5gG/8KjaP/Fqe3/0rv/67yp/61lUv+uaFX/r2lX/6xlUv+6eWf/3rGi/+O4qf/irZj/8rib2//IqEoAAAAAAAAAAP/XwxL/ya6B/8yz6//Wwv/93s3//ODP//zg0P/63s//+NrL//TSwv/0xrT/+seu2//JrWL/1sAIAAAAAAAAAAAAAAAA/9jFEP/LsmD/zLXB/8649f/Uv///18T//9fD///Tvv3/z7fv/822r//Otkr/39MIAAAAAAAAAAAAAAAAAAAAAAAAAAD/2skE/9G8KP/MtWD/xq2V/8Wqr//Eq6v/yK6N/8y1VP/Svx4AAAAAAAAAAAAAAAAAAAAA+B8AAOAPAADAAwAAgAMAAIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAACAAQAAwAMAAMAHAADwDwAA/D8AAA==">'
	 }

    function Show_Hide(p_element_name) // показывает/скрывает переданный ей элемент
	 {  
	     if ( (document.getElementById(p_element_name).style.display.toUpperCase() == 'none'.toUpperCase()) || (document.getElementById(p_element_name).style.display.length == 0)  ) {document.getElementById(p_element_name).style.display = 'inline'}
			   else {    document.getElementById(p_element_name).style.display = 'none' }
	 }
	 
   function Color_dec(sElemId, bBackward)
     {
         document.getElementById(sElemId).style['background'] = bBackward     
     }
	 
   function Set_Style(sElemId, cStyle_name)
     {
         document.getElementById(sElemId).className = cStyle_name
     }

  function RetTranText()
     {
		 lc_text = (document.getElementById('test_edit_box_id').value);
		 document.getElementById('test_edit_box_id_1').value = lc_text.replace( /\t| {3,10}|\r\n|\n\r|\r|\n/g, "" );
     }	 
   
   function yandex_change(sElemId)
   {
		document.getElementById('wikisearch').value = document.getElementById(sElemId).value ;
   }
   
   function wiki_change(sElemId)
   {
		document.getElementById('yasearch').value = document.getElementById(sElemId).value ;
   }   
   
   
   
   function rand( min, max ) {	// Generate a random integer
	if( max ) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	} else {
		return Math.floor(Math.random() * (min + 1));
	}
}

   function SetBodyBGImage()
    { 
	  ln_rn = rand(2,2);
	  if(ln_rn==2)
	    {document.body.background="data:image/bmp;base64,R0lGODlhGwAbAIAAAABqKQAJTSH5BAAAAAAALAAAAAAbABsAAAIsjI+pCu0Po5yUrotP3bzPDDLeSH7hGZTqip7rO7YhTG8yWOfSnem+w8P8fgUAOw==";}
	}		