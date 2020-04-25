<script type="text/javascript">


jQuery(document).ready(function( $ ){
  if ( $(".woocommerce-product-gallery__image").length ) {    //make sure the link element exists on the page
    $( ".woocommerce-product-gallery__image a" ).click(function( event ) {
      event.preventDefault();     //cancel the onclick action
    });
  }
});

</script>