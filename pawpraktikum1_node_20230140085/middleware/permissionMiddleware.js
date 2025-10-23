 	exports.addUserData = (req, res, next) => {
 	  console.log('Middleware: Menambahkan data user dummy...');
 	  req.user = {
 	    id: 123,
 	    nama: 'User Karyawan',
 	    role: 'admin'
 	  };
 	  next(); 
 	};
 	
 	
