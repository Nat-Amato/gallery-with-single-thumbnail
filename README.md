# Gallery with single thumbnail

##### I modified an existing code to get an openable gallery from a single thumbnail. You can customize the css style, so colors, size, position etc...

The original code came from this topic: https://stackoverflow.com/questions/62608061/modal-image-gallery-slider-fullscreen

I inserted the HTML attribute hidden to hide the other gallery thumbnails.

```
<p hidden></p>
```

In the end, this line of code external to the div class, allows you to change the thumbnail to show regardless of the gallery content.

```
<img src="" style="width:50%" onclick="openModalAA()" class="hover-shadowAA cursor">
```

![8sLJtic](https://user-images.githubusercontent.com/48321178/183284894-0341c9e4-b72e-413a-85a9-8e5048523339.gif)
