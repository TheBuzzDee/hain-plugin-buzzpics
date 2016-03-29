'use strict'

module.exports = (pluginContext) => {
  const shell = pluginContext.shell

  function search (query, res) {
    const query_trim = query.trim()

    if (query_trim.length === 0) {
      return
    }

    res.add({
      id: query_trim,
      payload: 'images',
      title: query_trim,
	  icon: "#fa fa-picture-o",
      desc: 'searching images on buzzpics.de'
    })
	
	res.add({
    id: query_trim,
    payload: 'albums',
    title: query_trim,
    icon: "#fa fa-folder-o",
    desc: 'searching albums on buzzpics.de'
    });
	
	res.add({
    id: query_trim,
    payload: 'users',
    title: query_trim,
    icon: "#fa fa-user",
    desc: 'searching users on buzzpics.de'
    });
	
	
  }

  function execute (id, payload) {
  
        if (payload == 'images') {
            shell.openExternal(`http://www.buzzpics.de/search/images/?q=${id}`);
            return;
        }
        
		if (payload == 'albums') {
            shell.openExternal(`http://www.buzzpics.de/search/albums/?q=${id}`);
            return;
        } 
        
		if (payload == 'users') {
            shell.openExternal(`http://www.buzzpics.de/search/users/?q=${id}`);
            return;
        } 
  
  
    
    
  }

  return { search, execute }
}
