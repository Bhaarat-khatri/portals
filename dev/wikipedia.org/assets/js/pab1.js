if ( window.wmTest.abtest1 ) {
	document.body.removeChild( document.getElementById( 'search-container' ) );
	document.getElementById( 'search-container-pab1' ).style.display = 'block';
	document.getElementById( 'searchInput' ).focus();
} else {
	document.body.removeChild( document.getElementById( 'search-container-pab1' ) );
}