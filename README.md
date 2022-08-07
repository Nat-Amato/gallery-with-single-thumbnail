# gallery-with-single-thumbnail


I modified an existing code to get an openable gallery from a single thumbnail. You can customize the css style, so colors, size, position etc...

![8sLJtic](https://user-images.githubusercontent.com/48321178/183284894-0341c9e4-b72e-413a-85a9-8e5048523339.gif)

Il codice originale proviene da questo topic: https://stackoverflow.com/questions/62608061/modal-image-gallery-slider-fullscreen

Io ho inserito l'attributo HTML hidden <p hidden></p> per nascondere le altre miniature della galleria.

In fine, questa riga di codice esterna alla classe div, permette di modificare la miniatura da mostrare indipendentemente dal contenuto della gallery.

img src="" style="width:50%" onclick="openModalAA()" class="hover-shadowAA cursor"
