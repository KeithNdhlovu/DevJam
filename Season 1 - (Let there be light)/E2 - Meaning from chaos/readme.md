## CSS - Cascading Stylesheets

### Inline:
``` html
<img 
    src="./ems-logo.jpg" 
    style="border: 1px solid black;"
     />
```

Advantages:
    its quick

Disadvantages:
its not maintainable, 50 x tags

### Internal embedded:

1. define you style tag, in that style tag you can create your css classes
``` css
<style>
    

    /* Style by tag name */
    img {
        border: 1px solid black;
    }

    /* 
        Style by class name 
        A Dot represents a Class on your HTML
    */
    .image-holder {
        border: 1px solid black;
    }

    /* Style by id, an ID on tag is represented by a # (Hash) */
    #profile-image {
        border: 1px solid black;
    }

</style>
```

### Inline styles always take preference over class defined styles

## Complete Example

``` html
<!DOCTYPE HTML>
<html>
    <head>
        <title>Keith Ndhlovu</title>
        <meta charset="utf-8">
        <style>
    
            body, html {
                height: 100%;
                width: 100%;
            }

            body {
                background-color: aqua;
                background: url("./june-16.jpg");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }

            /* Style by tag name */
            img {
                /* border: 1px dashed black;
                float: right; */
            }
        
            /* 
                Style by class name 
                A Dot represents a Class on your HTML
            */
            .image-holder {
                border: 1px dashed black;
                height: 50px;
                width: 50px;
            }
        
            /* Style by id, an ID on tag is represented by a # (Hash) */
            #profile-image {
                border: 1px solid red;
                height: 50px;
                width: 50px;
            }
        
            .white-text {
                color: white;
            }
            
            .text-container {
                padding: 15px;
                width: 200px;
                background-color: rgba(0, 0, 0, 0.7);
            }

        </style>
    </head>
    <body>
        <div class="text-container">
            <h1 class="white-text">Hello Keith Ndhlovu!</h1>
            <p class="white-text">Its new Beginning</p>

            <h5 class="white-text">A nice picture of myself</h5>
        </div>

        <img 
            src="./ems-logo.jpg" 
            height="100" 
            width="100"/>
        <img 
            src="./ems-logo.jpg" 
            height="100" 
            width="100"/>
        <img 
            src="./ems-logo.jpg" 
            id="profile-image"/>
        <img 
            src="./ems-logo.jpg" 
            height="100" 
            width="100"
            class="image-holder"/>
        <img 
            src="./ems-logo.jpg" 
            height="100" 
            width="100"/>
        <img 
            src="./ems-logo.jpg" 
            height="100" 
            width="100"/>
        <img 
            src="./ems-logo.jpg" 
            height="100" 
            width="100"/>
        <img 
            src="./ems-logo.jpg"
            class="image-holder"/>

    </body>
</html>
```

For some more information on the different types of usages of CSS, check this link out
https://www.hostpapa.ca/knowledgebase/understanding-external-internal-inline-css-styles
