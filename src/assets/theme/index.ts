const theme = {
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848a',
    borderColor: '#eee'
  },
  textColor: {
    primaryColor: '#484848',
    secondaryColor: '#222'
  },
  mixin: {
    boxShadow: `
	    transition: box-shadow 0.2s ease;
	    &:hover {
 		    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    	}
		`,

    multi: `
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		`
  }
}
export default theme
