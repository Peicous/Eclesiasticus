const locations = [
	{
		name: "Castell de Fornils",
		type: "desconegut", 
		coordinates: [42.0201463, 2.5149485],
		description: [
			"<h2><b>Castell de Fornils</b></h2>",
			"<small>Divisió administrativa: El Far; Susqueda; Selva; Comarques gironines; Catalunya</small><br/><br/>",
			"Queda pendent d'explorar."
		]
	},
	{
		type: "area",
		radi: 500,
		coordinates: [42.0201463, 2.5149485]
	},
	{
		name: "Cementiri dels moros de Sant Roc",
		type: "desconegut", 
		coordinates: [42.018650, 2.659538],
		description: [
			"<h2><b>Cementiri dels moros de Sant Roc</b></h2>",
			"<small>Divisió administrativa: La Barroca; Sant Aniol de Finestres; Garrotxa; Comarques gironines; Catalunya</small><br/><br/>",
			"Queda pendent d'explorar."
		]
	},
	{
		type: "area",
		radi: 500,
		coordinates: [42.018650, 2.659538]
	},
	{
		name: "Creu dels carlins de Vilanna",
		type: "memorial",
		coordinates: [41.9748951, 2.7046024],
		description: [
			"<h2>Creu dels carlins de Vilanna</h2>",
			"<small>Divisió administrativa: Vilanna; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Creu_dels_carlins_de_Vilanna_%28vista_de_migjorn%29.jpg/320px-Creu_dels_carlins_de_Vilanna_%28vista_de_migjorn%29.jpg'/><br/>",
			"Creu de terme al poble de Vilanna, al terme municipal de Bescanó. Instal·lada el 14 de setembre de 1913.",
			"<br/><a href='#creu_dels_carlins_de_vilanna'>Veure més informació</a>"
		],
		visited: true
	},
	{
		name: "Nostra Senyora de la Pietat del Pedreguet",
		type: "esglesia",
		coordinates: [42.00604025, 2.60475809],
		description: [
			"<h2>Nostra Senyora de la Pietat del Pedreguet</h2>",
			"<small>Divisió administrativa: Amer; Amer; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Mare_de_D%C3%A9u_de_la_Pietat_del_Pedreguet_%28vista_nord%29.jpg/640px-Mare_de_D%C3%A9u_de_la_Pietat_del_Pedreguet_%28vista_nord%29.jpg'/><br/>",
			"Capella al terme municipal d'Amer. Construïda al segle <span style='font-variant: small-caps'>xvii</span> i renovada el 1844."
		],
		visited: true
	},
	{
		name: "Sant Agustí de Lloret Salvatge",
		type: "esglesia",
		coordinates: [41.98570795, 2.5812852],
		description: [
			"<h2>Sant Agustí de Lloret Salvatge</h2>",
			"<small>Divisió administrativa: Lloret Salvatge; Amer; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sant_Agust%C3%AD_de_Lloret_Salvatge_%28vista_general%29.jpg/640px-Sant_Agust%C3%AD_de_Lloret_Salvatge_%28vista_general%29.jpg'/><br/>",
			"Antiga església parroquial del veïnat de Lloret Salvatge, al terme municipal d'Amer. Se'n té constància des del 860."
		],
		visited: true
	},
	{
		name: "Sant Genís Sacosta",
		type: "esglesia",
		coordinates: [42.0372257, 2.5624435],
		description: [
			"<h2>Sant Genís Sacosta</h2>",
			"<small>Divisió administrativa: Sant Genís Sacosta; Amer; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Sant_Gen%C3%ADs_Sacosta_%28fa%C3%A7ana_principal%29.jpg/320px-Sant_Gen%C3%ADs_Sacosta_%28fa%C3%A7ana_principal%29.jpg'/><br/>",
			"Antiga església parroquial del veïnat de Sant Genís, al terme municipal d'Amer. Se'n té constància des del 899.",
			"<br/><a href='#sant_genis_sacosta'>Veure més informació</a>"
		],
		visited: true
	},
	{
		name: "Sant Marçal del Colomer",
		type: "esglesia",
		coordinates: [42.0255267, 2.57920165],
		description: [
			"<h2>Sant Marçal del Colomer</h2>",
			"<small>Divisió administrativa: El Colomer; Amer; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"Ermita del veïnat del Colomer, al terme municipal d'Amer. Construïda al segle <span style='font-variant: small-caps'>xi</span>."
		],
		visited: true
	},
	{
		name: "Santa Brígida",
		type: "esglesia",
		coordinates: [42.02069575, 2.610472],
		description: [
			"<h2>Santa Brígida</h2>",
			"<small>Divisió administrativa: La Costa; Amer; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"Ermita del veïnat de la Costa, al terme municipal d'Amer. Es creu que va ser construïda al segle <span style='font-variant: small-caps'>xvii</span>."
		]
	},
	{
		name: "Sant Amanç",
		type: "esglesia",
		coordinates: [41.93190715, 2.63810162],
		description: [
			"<h2>Sant Amanç</h2>",
			"<small>Divisió administrativa: Sant Amanç; Anglès; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"Antiga església parroquial del veïnat de Sant Amanç, al terme municipal d'Anglès. Se'n té constància des del 1019."
		]
	},
	{
		name: "Sant Pere Sestronques",
		type: "esglesia",
		coordinates: [41.9398607, 2.66199665],
		description: [
			"<h2>Sant Pere Sestronques</h2>",
			"<small>Divisió administrativa: Sant Pere Sestronques; Anglès; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"Ermita del veïnat de Sant Pere Sestronques, al terme municipal d'Anglès. Es creu que va ser construïda al segle <span style='font-variant: small-caps'>ix</span>."
		]
	},
	{
		name: "Santa Bàrbara",
		type: "esglesia",
		coordinates: [41.9261143, 2.6180023],
		description: [
			"<h2>Santa Bàrbara</h2>",
			"<small>Divisió administrativa: Santa Bàrbara; Anglès; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"Ermita del veïnat de Santa Bàrbara, al terme municipal d'Anglès. Es creu que va ser construïda al segle <span style='font-variant: small-caps'>xiii</span>."
		]
	},
	{
		name: "Nostra Senyora de la Concepció",
		type: "esglesia",
		coordinates: [41.9688308, 2.7305196],
		description: [
			"<h2>Nostra Senyora de la Concepció</h2>",
			"<small>Divisió administrativa: Bescanó; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"Capella adossada al Palau dels comtes de Berenguer, al terme municipal de Bescanó. Construïda a finals del segle <span style='font-variant: small-caps'>xix</span>."
		]
	},
	{
		name: "Sant Bartomeu d'Estanyol",
		type: "esglesia",
		coordinates: [41.9366246, 2.73506882],
		description: [
			"<h2>Sant Bartomeu d'Estanyol</h2>",
			"<small>Divisió administrativa: Estanyol; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Bartomeu de Trullars",
		type: "esglesia",
		coordinates: [41.95946425, 2.66843254],
		description: [
			"<h2>Sant Bartomeu de Trullars</h2>",
			"<small>Divisió administrativa: Trullars; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Parròquia de Sant Andreu d'Estanyol; Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"Capella del llogarret de Trullars, al terme municipal de Bescanó. Se'n té constància des del 1118, però es creu d'origen preromànic."
		]
	},
	{
		name: "Sant Martí de Ca n'Amat Gros",
		type: "esglesia",
		coordinates: [41.96987575, 2.6975462],
		description: [
			"<h2>Sant Martí de Ca n'Amat Gros</h2>",
			"<small>Divisió administrativa: Vilanna; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Parròquia de Sant Mateu de Vilanna; Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"Capella del mas Amat Gros, al terme municipal de Bescanó. Construïda al segle <span style='font-variant: small-caps'>x</span>."
		]
	},
	{
		name: "Sant Pere",
		type: "esglesia",
		coordinates: [41.94319385, 2.72814921],
		description: [
			"<h2>Sant Pere</h2>",
			"<small>Divisió administrativa: Estanyol; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Sebastià de Bescanó",
		type: "esglesia",
		coordinates: [41.9665699, 2.74783833],
		description: [
			"<h2>Sant Sebastià de Bescanó</h2>",
			"<small>Divisió administrativa: Bescanó; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Sant_Sebasti%C3%A0_de_Bescan%C3%B3_%28vista_de_xaloc%29.jpg/640px-Sant_Sebasti%C3%A0_de_Bescan%C3%B3_%28vista_de_xaloc%29.jpg'/><br/>",
			"Capella de la vila de Bescanó, al terme municipal homònim. Inscripció del 1610.",
			"<br/><a href='#sant_sebastia_de_bescano'>Veure més informació</a>"
		],
		visited: true
	},
	{
		name: "Santa Anna de Bescanó",
		type: "esglesia",
		coordinates: [41.96577085, 2.74984326],
		description: [
			"<h2>Santa Anna de Bescanó</h2>",
			"<small>Divisió administrativa: Montfullà; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona - Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"Ermita de la vila de Montfullà, al terme municipal de Bescanó. Es creu que va ser construïda al segle <span style='font-variant: small-caps'>xvii</span>."
		]
	},
	{
		name: "Santa Margarida de Bescanó",
		type: "esglesia",
		coordinates: [41.961952, 2.7294616],
		description: [
			"<h2>Santa Margarida de Bescanó</h2>",
			"<small>Divisió administrativa: Bescanó; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Parròquia de Sant Llorenç de Bescanó; Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Santa_Margarida_de_Bescan%C3%B3_%28vista_general%29.jpg/640px-Santa_Margarida_de_Bescan%C3%B3_%28vista_general%29.jpg?uselang=ca'/><br/>",
			"Capella del Mas Viader de la vila de Bescanó, al terme municipal homònim. Se'n té constància des del 1378.",
			"<br/><a href='#santa_margarida_de_bescano'>Veure més informació</a>"
		],
		visited: true
	},
	{
		name: "Santa Maria Assumpta de Bescanó",
		type: "esglesia",
		coordinates: [41.96556325, 2.73945117],
		description: [
			"<h2>Santa Maria Assumpta de Bescanó</h2>",
			"<small>Divisió administrativa: Bescanó; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Parròquia de Sant Llorenç de Bescanó; Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"Església parroquial de la vila de Bescanó, al terme municipal homònim. Construïda el 1959."
		]
	},
	{
		name: "Mare de Déu de Serrallonga",
		type: "esglesia",
		coordinates: [41.8836476, 2.69934568],
		description: [
			"<h2>Mare de Déu de Serrallonga</h2>",
			"<small>Divisió administrativa: Brunyola i Sant Martí Sapresa; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Romà",
		type: "esglesia",
		coordinates: [41.92798235, 2.6980011],
		description: [
			"<h2>Sant Romà</h2>",
			"<small>Divisió administrativa: Brunyola i Sant Martí Sapresa; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santuari de la Mare de Déu de la Tosca",
		type: "esglesia",
		coordinates: [41.7795493, 2.0767714],
		description: [
			"<h2>Santuari de la Mare de Déu de la Tosca</h2>",
			"<small>Divisió administrativa: Marfà; Castellcir; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santuari de Santa Maria del Pla",
		type: "esglesia",
		coordinates: [41.6660267, 1.68377485],
		description: [
			"<h2>Santuari de Santa Maria del Pla</h2>",
			"<small>Divisió administrativa: Castellfollit del Boix; Castellfollit del Boix; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Convent de les Germanes Carmelites",
		type: "monestir",
		coordinates: [41.96873525, 2.62120261],
		description: [
			"<h2>Convent de les Germanes Carmelites</h2>",
			"<small>Divisió administrativa: La Cellera de Ter; La Cellera de Ter; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Convent_de_les_Germanes_Carmelites_de_la_Cellera_de_Ter_%28fa%C3%A7ana_principal%29.jpg/320px-Convent_de_les_Germanes_Carmelites_de_la_Cellera_de_Ter_%28fa%C3%A7ana_principal%29.jpg'/><br/>",
			"Antic convent carmelità a la vila de la Cellera de Ter, al terme municipal homònim. Construït entre 1876 i 1884."
		],
		visited: true
	},
	{
		name: "Oratori de Sant Benet de Palerm",
		type: "oratori",
		coordinates: [41.9735898, 2.6183135],
		description: [
			"<h2>Oratori de Sant Benet de Palerm</h2>",
			"<small>Divisió administrativa: La Cellera de Ter; La Cellera de Ter; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Oratori_de_Sant_Benet_de_Palerm_de_la_Cellera_de_Ter_%28vista_frontal%29.jpg/320px-Oratori_de_Sant_Benet_de_Palerm_de_la_Cellera_de_Ter_%28vista_frontal%29.jpg'/><br/>",
			"Oratori a la vila de la Cellera de Ter, al terme municipal homònim. Construït el 1854."
		],
		visited: true
	},
	{
		name: "Oratori de Sant Pelegrí",
		type: "oratori",
		coordinates: [41.970385, 2.6174136],
		description: [
			"<h2>Oratori de Sant Pelegrí</h2>",
			"<small>Divisió administrativa: La Cellera de Ter; La Cellera de Ter; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Oratori_de_Sant_Pelegr%C3%AD_de_la_Cellera_de_Ter_%28oratori%29.jpg/320px-Oratori_de_Sant_Pelegr%C3%AD_de_la_Cellera_de_Ter_%28oratori%29.jpg'/><br/>",
			"Oratori a la vila de la Cellera de Ter, al terme municipal homònim. Construït el 1789."
		],
		visited: true
	},
	{
		name: "Sants Just i Pastor de la Cellera de Ter",
		type: "esglesia",
		coordinates: [41.98313245, 2.62078756],
		description: [
			"<h2>Sants Just i Pastor de la Cellera de Ter</h2>",
			"<small>Divisió administrativa: La Cellera de Ter; La Cellera de Ter; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sants_Just_i_Pastor_de_la_Cellera_de_Ter_%28fa%C3%A7ana_principal%29.jpg/320px-Sants_Just_i_Pastor_de_la_Cellera_de_Ter_%28fa%C3%A7ana_principal%29.jpg'/><br/>",
			"Ermita del veïnat de Plademunt, al terme municipal de la Cellera de Ter. Es creu que va ser construïda al segle <span style='font-variant: small-caps'>xii</span>."
		],
		visited: true
	},
	{
		name: "Santuari de la Mare de Déu del Grau",
		type: "esglesia",
		coordinates: [41.75003885, 1.70880646],
		description: [
			"<h2>Santuari de la Mare de Déu del Grau</h2>",
			"<small>Divisió administrativa: Fals; Fonollosa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santuari de la Mare de Déu de l'Ecologia",
		type: "esglesia",
		coordinates: [41.68804055, 2.11138449],
		description: [
			"<h2>Santuari de la Mare de Déu de l'Ecologia</h2>",
			"<small>Divisió administrativa: Gallifa; Gallifa; Vallès Occidental; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santuari de la Cova de Sant Ignasi",
		type: "esglesia",
		coordinates: [41.7214048, 1.83143201],
		description: [
			"<h2>Santuari de la Cova de Sant Ignasi</h2>",
			"<small>Divisió administrativa: Manresa; Manresa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Nostra Senyora de l'Esperança",
		type: "esglesia",
		coordinates: [42.2046092, 2.49255031],
		description: [
			"<h2>Nostra Senyora de l'Esperança</h2>",
			"<small>Divisió administrativa: La Canya; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Sebastià",
		type: "esglesia",
		coordinates: [42.1755656, 2.4918338],
		description: [
			"<h2>Sant Sebastià</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu dels Desemparats",
		type: "esglesia",
		coordinates: [42.1765739, 2.47826474],
		description: [
			"<h2>Mare de Déu dels Desemparats</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "La Salut de la Moixina",
		type: "esglesia",
		coordinates: [42.1687632, 2.48675895],
		description: [
			"<h2>La Salut de la Moixina</h2>",
			"<small>Divisió administrativa: Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Oratori de la Sagrada Família",
		type: "esglesia",
		coordinates: [42.1673551, 2.5226095],
		description: [
			"<h2>Oratori de la Sagrada Família</h2>",
			"<small>Divisió administrativa: Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sagrat Cor de Maria d'Olot",
		type: "esglesia",
		coordinates: [42.1829413, 2.4886511],
		description: [
			"<h2>Sagrat Cor de Maria d'Olot</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Bernat d'Olot",
		type: "esglesia",
		coordinates: [42.1851009, 2.4923743],
		description: [
			"<h2>Sant Bernat d'Olot</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Ferriol d'Olot",
		type: "esglesia",
		coordinates: [42.1813447, 2.4854837],
		description: [
			"<h2>Sant Ferriol d'Olot</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Francesc d'Olot",
		type: "esglesia",
		coordinates: [42.1872205, 2.48846618],
		description: [
			"<h2>Sant Francesc d'Olot</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Magdalena d'Olot",
		type: "esglesia",
		coordinates: [42.1820304, 2.4931715],
		description: [
			"<h2>Santa Magdalena d'Olot</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santuari de la Mare de Déu del Tura",
		type: "esglesia",
		coordinates: [42.1823433, 2.4915892],
		description: [
			"<h2>Santuari de la Mare de Déu del Tura</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Verge del Portal",
		type: "esglesia",
		coordinates: [42.1837333, 2.4906899],
		description: [
			"<h2>Verge del Portal</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Capella de Sant Roc",
		type: "esglesia",
		coordinates: [42.17316865, 2.47310266],
		description: [
			"<h2>Capella de Sant Roc</h2>",
			"<small>Divisió administrativa: Sant Roc; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Església de la Casa Batlló",
		type: "esglesia",
		coordinates: [42.1809507, 2.4864467],
		description: [
			"<h2>Església de la Casa Batlló</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Convent del Carme",
		type: "esglesia",
		coordinates: [42.183555, 2.4922536],
		description: [
			"<h2>Convent del Carme</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Església dels Pares Caputxins",
		type: "esglesia",
		coordinates: [42.1790523, 2.4891267],
		description: [
			"<h2>Església dels Pares Caputxins</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "La Trinitat de Batet",
		type: "esglesia",
		coordinates: [42.1737399, 2.5284925],
		description: [
			"<h2>La Trinitat de Batet</h2>",
			"<small>Divisió administrativa: Batet; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Ermita de l'Àngel de les Planes d'Hostoles",
		type: "esglesia",
		coordinates: [42.05900445, 2.53366446],
		description: [
			"<h2>Ermita de l'Àngel de les Planes d'Hostoles</h2>",
			"<small>Divisió administrativa: Les Planes d'Hostoles; Les Planes d'Hostoles; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pelegrí de les Planes d'Hostoles",
		type: "esglesia",
		coordinates: [42.07538545, 2.54201861],
		description: [
			"<h2>Sant Pelegrí de les Planes d'Hostoles</h2>",
			"<small>Divisió administrativa: Les Planes d'Hostoles; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere Sacosta",
		type: "esglesia",
		coordinates: [42.0516055, 2.51575445],
		description: [
			"<h2>Sant Pere Sacosta</h2>",
			"<small>Divisió administrativa: Les Planes d'Hostoles; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Salvador de Puig-alder",
		type: "esglesia",
		coordinates: [42.0977762, 2.53371],
		description: [
			"<h2>Sant Salvador de Puig-alder</h2>",
			"<small>Divisió administrativa: Les Planes d'Hostoles; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu de Núria de les Encies",
		type: "esglesia",
		coordinates: [42.0369528, 2.5784308],
		description: [
			"<h2>Mare de Déu de Núria de les Encies</h2>",
			"<small>Divisió administrativa: Les Encies; Les Planes d'Hostoles; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mare_de_D%C3%A9u_de_N%C3%BAria_de_les_Encies_%28fa%C3%A7ana_de_ponent%29.jpg/640px-Mare_de_D%C3%A9u_de_N%C3%BAria_de_les_Encies_%28fa%C3%A7ana_de_ponent%29.jpg'/><br/>",
			"Capella annexa a l'Hostal del Fang, al veïnat de les Encies, al terme municipal de les Planes d'Hostoles. Beneïda pel rector de les Encies Lluís Conill el 5 d'abril de 1891.",
			"<br/><a href='#mare_de_deu_de_nuria_de_les_encies'>Veure més informació</a>"
		],
		visited: true
	},
	{
		name: "Santa Margarida de les Planes d'Hostoles",
		type: "esglesia",
		coordinates: [42.04600535, 2.5489083],
		description: [
			"<h2>Santa Margarida de les Planes d'Hostoles</h2>",
			"<small>Divisió administrativa: Dusol; Les Planes d'Hostoles; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Santa_Margarida_de_les_Planes_d%27Hostoles_%28fa%C3%A7ana_de_gregal%29.jpg/640px-Santa_Margarida_de_les_Planes_d%27Hostoles_%28fa%C3%A7ana_de_gregal%29.jpg'/><br/>",
			"Ermita prop de la colònia Dusol, al terme municipal de les Planes d'Hostoles. Se'n té constància des del 1187."
		],
		visited: true
	},
	{
		name: "Sant Martí del Corb",
		type: "esglesia",
		coordinates: [42.1395366, 2.4915208],
		description: [
			"<h2>Sant Martí del Corb</h2>",
			"<small>Divisió administrativa: Les Preses; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel del Corb",
		type: "esglesia",
		coordinates: [42.1439231, 2.4849697],
		description: [
			"<h2>Sant Miquel del Corb</h2>",
			"<small>Divisió administrativa: Les Preses; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "La Salut",
		type: "esglesia",
		coordinates: [42.062957, 2.49603384],
		description: [
			"<h2>La Salut</h2>",
			"<small>Divisió administrativa: La Salut; Sant Feliu de Pallerols; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu del Roser",
		type: "esglesia",
		coordinates: [42.075351, 2.50659696],
		description: [
			"<h2>Mare de Déu del Roser</h2>",
			"<small>Divisió administrativa: Sant Feliu de Pallerols; Sant Feliu de Pallerols; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Marc",
		type: "esglesia",
		coordinates: [42.0675453, 2.513317],
		description: [
			"<h2>Sant Marc</h2>",
			"<small>Divisió administrativa: Sant Feliu de Pallerols; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Sebastià",
		type: "esglesia",
		coordinates: [42.07742305, 2.51001699],
		description: [
			"<h2>Sant Sebastià</h2>",
			"<small>Divisió administrativa: Sant Feliu de Pallerols; Sant Feliu de Pallerols; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Cecília",
		type: "esglesia",
		coordinates: [42.09451595, 2.48843329],
		description: [
			"<h2>Santa Cecília</h2>",
			"<small>Divisió administrativa: Sant Feliu de Pallerols; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santuari de la Mare de Déu de Joncadella",
		type: "esglesia",
		coordinates: [41.7660052, 1.79498909],
		description: [
			"<h2>Santuari de la Mare de Déu de Joncadella</h2>",
			"<small>Divisió administrativa: Joncadella; Sant Joan de Vilatorrada; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere Màrtir de Sant Julià del Llor",
		type: "oratori",
		coordinates: [41.974089, 2.6405228],
		description: [
			"<h2>Sant Pere Màrtir de Sant Julià del Llor</h2>",
			"<small>Divisió administrativa: Sant Julià del Llor; Sant Julià del Llor i Bonmatí; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Sant_Pere_M%C3%A0rtir_de_Sant_Juli%C3%A0_del_Llor_%28fa%C3%A7ana_principal%29.jpg/320px-Sant_Pere_M%C3%A0rtir_de_Sant_Juli%C3%A0_del_Llor_%28fa%C3%A7ana_principal%29.jpg'/><br/>",
			"Oratori en el disseminat de la vila de Sant Julià del Llor, al terme municipal de Sant Julià del Llor i Bonmatí. Construït el segle <span style='font-variant: small-caps'>xx</span>."
		],
		visited: true
	},
	{
		name: "Santuari de la Mare de Déu de Castellet",
		type: "esglesia",
		coordinates: [41.6639357, 1.85081505],
		description: [
			"<h2>Santuari de la Mare de Déu de Castellet</h2>",
			"<small>Divisió administrativa: Sant Vicenç de Castellet; Sant Vicenç de Castellet; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu de Farners",
		type: "esglesia",
		coordinates: [41.8600556, 2.6328991],
		description: [
			"<h2>Mare de Déu de Farners</h2>",
			"<small>Divisió administrativa: Santa Coloma de Farners; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Marçal",
		type: "esglesia",
		coordinates: [41.85265935, 2.69292116],
		description: [
			"<h2>Sant Marçal</h2>",
			"<small>Divisió administrativa: Santa Coloma de Farners; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Salvi de Cladells",
		type: "esglesia",
		coordinates: [41.8722392, 2.57585707],
		description: [
			"<h2>Sant Salvi de Cladells</h2>",
			"<small>Divisió administrativa: Santa Coloma de Farners; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Sebastià",
		type: "esglesia",
		coordinates: [41.8610583, 2.66769271],
		description: [
			"<h2>Sant Sebastià</h2>",
			"<small>Divisió administrativa: Santa Coloma de Farners; Santa Coloma de Farners; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Iscle i Santa Victòria de Sauleda",
		type: "esglesia",
		coordinates: [41.8516095, 2.60097297],
		description: [
			"<h2>Sant Iscle i Santa Victòria de Sauleda</h2>",
			"<small>Divisió administrativa: Santa Coloma de Farners; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu de les Olletes",
		type: "esglesia",
		coordinates: [42.1344506, 2.3952656],
		description: [
			"<h2>Mare de Déu de les Olletes</h2>",
			"<small>Divisió administrativa: La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Antoni de Puigpardines",
		type: "esglesia",
		coordinates: [42.13724165, 2.42722475],
		description: [
			"<h2>Sant Antoni de Puigpardines</h2>",
			"<small>Divisió administrativa: Puigpardines; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Jaume",
		type: "esglesia",
		coordinates: [42.0746218, 2.4453518],
		description: [
			"<h2>Sant Jaume</h2>",
			"<small>Divisió administrativa: Pujolriu; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Joan dels Balbs",
		type: "esglesia",
		coordinates: [42.17208775, 2.4260713],
		description: [
			"<h2>Sant Joan dels Balbs</h2>",
			"<small>Divisió administrativa: La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Mateu de Joanetes",
		type: "esglesia",
		coordinates: [42.1150944, 2.40053385],
		description: [
			"<h2>Sant Mateu de Joanetes</h2>",
			"<small>Divisió administrativa: La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel de Castelló",
		type: "esglesia",
		coordinates: [42.102054, 2.43125547],
		description: [
			"<h2>Sant Miquel de Castelló</h2>",
			"<small>Divisió administrativa: La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Falgars",
		type: "esglesia",
		coordinates: [42.08582695, 2.43850764],
		description: [
			"<h2>Sant Pere de Falgars</h2>",
			"<small>Divisió administrativa: La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Quintí d'en Bas",
		type: "esglesia",
		coordinates: [42.1163592, 2.44180335],
		description: [
			"<h2>Sant Quintí d'en Bas</h2>",
			"<small>Divisió administrativa: La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Simplici",
		type: "esglesia",
		coordinates: [42.0978028, 2.4590315],
		description: [
			"<h2>Sant Simplici</h2>",
			"<small>Divisió administrativa: La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Magdalena del Mont",
		type: "esglesia",
		coordinates: [42.13349625, 2.39893971],
		description: [
			"<h2>Santa Magdalena del Mont</h2>",
			"<small>Divisió administrativa: La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria Assumpta d'Agullana",
		type: "parroquia",
		coordinates: [42.39417815, 2.84670024],
		description: [
			"<h2>Santa Maria Assumpta d'Agullana</h2>",
			"<small>Divisió administrativa: Agullana; Agullana; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere d'Albanyà",
		type: "parroquia",
		coordinates: [42.30452655, 2.71999531],
		description: [
			"<h2>Sant Pere d'Albanyà</h2>",
			"<small>Divisió administrativa: Albanyà; Albanyà; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Sadurní d'Arenys d'Empordà",
		type: "parroquia",
		coordinates: [42.16601685, 2.95347277],
		description: [
			"<h2>Sant Sadurní d'Arenys d'Empordà</h2>",
			"<small>Divisió administrativa: Arenys d'Empordà; Garrigàs; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve d'Avinyonet de Puigventós",
		type: "parroquia",
		coordinates: [42.24956835, 2.91440845],
		description: [
			"<h2>Sant Esteve d'Avinyonet de Puigventós</h2>",
			"<small>Divisió administrativa: Avinyonet de Puigventós; Avinyonet de Puigventós; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Iscle i Santa Victòria de Bàscara",
		type: "parroquia",
		coordinates: [42.1606101, 2.91013361],
		description: [
			"<h2>Sant Iscle i Santa Victòria de Bàscara</h2>",
			"<small>Divisió administrativa: Bàscara; Bàscara; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Biure",
		type: "parroquia",
		coordinates: [42.337961, 2.89501651],
		description: [
			"<h2>Sant Esteve de Biure</h2>",
			"<small>Divisió administrativa: Biure; Biure; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Cecília de Boadella d'Empordà",
		type: "parroquia",
		coordinates: [42.3297609, 2.85624701],
		description: [
			"<h2>Santa Cecília de Boadella d'Empordà</h2>",
			"<small>Divisió administrativa: Boadella d'Empordà; Boadella i les Escaules; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Andreu de Borrassà",
		type: "parroquia",
		coordinates: [42.2231056, 2.92637238],
		description: [
			"<h2>Sant Andreu de Borrassà</h2>",
			"<small>Divisió administrativa: Borrassà; Borrassà; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Coloma de Cabanelles",
		type: "parroquia",
		coordinates: [42.23093715, 2.81973601],
		description: [
			"<h2>Santa Coloma de Cabanelles</h2>",
			"<small>Divisió administrativa: Cabanelles; Cabanelles; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Cabanes",
		type: "parroquia",
		coordinates: [42.3072317, 2.97762001],
		description: [
			"<h2>Sant Vicenç de Cabanes</h2>",
			"<small>Divisió administrativa: A; A; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Calabuig",
		type: "parroquia",
		coordinates: [42.1520009, 2.92505745],
		description: [
			"<h2>Sant Feliu de Calabuig</h2>",
			"<small>Divisió administrativa: Calabuig; Bàscara; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Cantallops",
		type: "parroquia",
		coordinates: [42.4225246, 2.9250546],
		description: [
			"<h2>Sant Esteve de Cantallops</h2>",
			"<small>Divisió administrativa: Cantallops; Cantallops; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Àgata de Campmany",
		type: "parroquia",
		coordinates: [42.37264015, 2.92098686],
		description: [
			"<h2>Santa Àgata de Campmany</h2>",
			"<small>Divisió administrativa: Campmany; Campmany; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria i Sant Sadurní de Cistella",
		type: "parroquia",
		coordinates: [42.2686224, 2.84834339],
		description: [
			"<h2>Santa Maria i Sant Sadurní de Cistella</h2>",
			"<small>Divisió administrativa: Cistella; Cistella; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Darnius",
		type: "parroquia",
		coordinates: [42.3689551, 2.83153401],
		description: [
			"<h2>Santa Maria de Darnius</h2>",
			"<small>Divisió administrativa: Darnius; Darnius; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Tours del Far d'Empordà",
		type: "parroquia",
		coordinates: [42.251912, 2.99626015],
		description: [
			"<h2>Sant Martí de Tours del Far d'Empordà</h2>",
			"<small>Divisió administrativa: El Far d'Empordà; El Far d'Empordà; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria d'Ermedàs",
		type: "parroquia",
		coordinates: [42.18654155, 2.93826686],
		description: [
			"<h2>Santa Maria d'Ermedàs</h2>",
			"<small>Divisió administrativa: Ermedàs; Garrigàs; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Llorenç d'Espinavessa",
		type: "parroquia",
		coordinates: [42.18888585, 2.8446758],
		description: [
			"<h2>Sant Llorenç d'Espinavessa</h2>",
			"<small>Divisió administrativa: Espinavessa; Cabanelles; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Jaume d'Espolla",
		type: "parroquia",
		coordinates: [42.3924439, 3.00103058],
		description: [
			"<h2>Sant Jaume d'Espolla</h2>",
			"<small>Divisió administrativa: Espolla; Espolla; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Figueres",
		type: "parroquia",
		coordinates: [42.2678624, 2.9602002],
		description: [
			"<h2>Sant Pere de Figueres</h2>",
			"<small>Divisió administrativa: Figueres; Figueres; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "La Immaculada Concepció i Sant Pau de Figueres",
		type: "parroquia",
		coordinates: [42.2634326, 2.96281356],
		description: [
			"<h2>La Immaculada Concepció i Sant Pau de Figueres</h2>",
			"<small>Divisió administrativa: Figueres; Figueres; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Bon Pastor de Figueres",
		type: "parroquia",
		coordinates: [42.2653259, 2.9501322],
		description: [
			"<h2>Bon Pastor de Figueres</h2>",
			"<small>Divisió administrativa: Figueres; Figueres; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sagrada Família de Figueres",
		type: "parroquia",
		coordinates: [42.2713940, 2.9672922],
		description: [
			"<h2>Sagrada Família de Figueres</h2>",
			"<small>Divisió administrativa: Figueres; Figueres; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Figueres",
		type: "parroquia",
		coordinates: [42.2613388, 2.9556778],
		description: [
			"<h2>Santa Maria de Figueres</h2>",
			"<small>Divisió administrativa: Figueres; Figueres; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Joan Baptista de Vilatenim",
		type: "parroquia",
		coordinates: [42.27121825, 2.99485885],
		description: [
			"<h2>Sant Joan Baptista de Vilatenim</h2>",
			"<small>Divisió administrativa: Vilatenim; Figueres; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Julià i Santa Basilissa de Fortià",
		type: "parroquia",
		coordinates: [42.24199835, 3.04100688],
		description: [
			"<h2>Sant Julià i Santa Basilissa de Fortià</h2>",
			"<small>Divisió administrativa: Fortià; Fortià; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel de Garrigàs",
		type: "parroquia",
		coordinates: [42.1977217, 2.95013439],
		description: [
			"<h2>Sant Miquel de Garrigàs</h2>",
			"<small>Divisió administrativa: Garrigàs; Garrigàs; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eulàlia de Garriguella",
		type: "parroquia",
		coordinates: [42.3423286, 3.0648689],
		description: [
			"<h2>Santa Eulàlia de Garriguella</h2>",
			"<small>Divisió administrativa: Garriguella; Garriguella; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de la Jonquera",
		type: "parroquia",
		coordinates: [42.4173036, 2.87352626],
		description: [
			"<h2>Santa Maria de la Jonquera</h2>",
			"<small>Divisió administrativa: La Jonquera; La Jonquera; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de la Vajol",
		type: "parroquia",
		coordinates: [42.40402225, 2.80006789],
		description: [
			"<h2>Sant Martí de la Vajol</h2>",
			"<small>Divisió administrativa: La Vajol; La Vajol; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de les Escaules",
		type: "parroquia",
		coordinates: [42.32055325, 2.88251331],
		description: [
			"<h2>Sant Martí de les Escaules</h2>",
			"<small>Divisió administrativa: Les Escaules; Boadella i les Escaules; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Lledó",
		type: "parroquia",
		coordinates: [42.24783475, 2.8135433],
		description: [
			"<h2>Santa Maria de Lledó</h2>",
			"<small>Divisió administrativa: Lledó d'Empordà; Lledó d'Empordà; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Julià i Santa Basilissa de Llers",
		type: "parroquia",
		coordinates: [42.2914001, 2.91139372],
		description: [
			"<h2>Sant Julià i Santa Basilissa de Llers</h2>",
			"<small>Divisió administrativa: Llers; Llers; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Maçanet de Cabrenys",
		type: "parroquia",
		coordinates: [42.3861413, 2.74784637],
		description: [
			"<h2>Sant Martí de Maçanet de Cabrenys</h2>",
			"<small>Divisió administrativa: Maçanet de Cabrenys; Maçanet de Cabrenys; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Masarac",
		type: "parroquia",
		coordinates: [42.35140525, 2.97283495],
		description: [
			"<h2>Sant Martí de Masarac</h2>",
			"<small>Divisió administrativa: Masarac; Masarac; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cebrià de Mollet de Peralada",
		type: "parroquia",
		coordinates: [42.36062165, 2.99977185],
		description: [
			"<h2>Sant Cebrià de Mollet de Peralada</h2>",
			"<small>Divisió administrativa: Mollet de Peralada; Mollet de Peralada; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Navata",
		type: "parroquia",
		coordinates: [42.2174064, 2.86715199],
		description: [
			"<h2>Sant Pere de Navata</h2>",
			"<small>Divisió administrativa: Navata; Navata; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Julià i Santa Basilissa d'Ordis",
		type: "parroquia",
		coordinates: [42.21864125, 2.90700111],
		description: [
			"<h2>Sant Julià i Santa Basilissa d'Ordis</h2>",
			"<small>Divisió administrativa: Ordis; Ordis; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Genís d'Orriols",
		type: "parroquia",
		coordinates: [42.1243887, 2.90692039],
		description: [
			"<h2>Sant Genís d'Orriols</h2>",
			"<small>Divisió administrativa: Orriols; Bàscara; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eulàlia de Palau",
		type: "parroquia",
		coordinates: [42.1734081, 2.96474302],
		description: [
			"<h2>Santa Eulàlia de Palau</h2>",
			"<small>Divisió administrativa: Palau de Santa Eulàlia; Palau de Santa Eulàlia; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Joan Baptista de Palau-saverdera",
		type: "parroquia",
		coordinates: [42.3067941, 3.14594914],
		description: [
			"<h2>Sant Joan Baptista de Palau-saverdera</h2>",
			"<small>Divisió administrativa: Palau-saverdera; Palau-saverdera; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Llogaia de Parets",
		type: "parroquia",
		coordinates: [42.1668156, 2.88909078],
		description: [
			"<h2>Santa Llogaia de Parets</h2>",
			"<small>Divisió administrativa: Parets d'Empordà; Vilademuls; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Pau",
		type: "parroquia",
		coordinates: [42.3158814, 3.11661833],
		description: [
			"<h2>Sant Martí de Pau</h2>",
			"<small>Divisió administrativa: Pau; Pau; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Pedret i Marzà",
		type: "parroquia",
		coordinates: [42.3064345, 3.08278146],
		description: [
			"<h2>Sant Esteve de Pedret i Marzà</h2>",
			"<small>Divisió administrativa: Pedret i Marzà; Pedret i Marzà; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Peralada",
		type: "parroquia",
		coordinates: [42.3083374, 3.00840806],
		description: [
			"<h2>Sant Martí de Peralada</h2>",
			"<small>Divisió administrativa: Peralada; Peralada; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Pont de Molins",
		type: "parroquia",
		coordinates: [42.31571135, 2.92146663],
		description: [
			"<h2>Santa Maria de Pont de Molins</h2>",
			"<small>Divisió administrativa: Pont de Molins; Pont de Molins; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Tours de Pontós",
		type: "parroquia",
		coordinates: [42.1868098, 2.91720025],
		description: [
			"<h2>Sant Martí de Tours de Pontós</h2>",
			"<small>Divisió administrativa: Pontós; Pontós; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Queixàs",
		type: "parroquia",
		coordinates: [42.21414325, 2.79811312],
		description: [
			"<h2>Sant Martí de Queixàs</h2>",
			"<small>Divisió administrativa: Queixàs; Cabanelles; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Julià i Santa Basilissa de Rabós",
		type: "parroquia",
		coordinates: [42.3789862, 3.02871393],
		description: [
			"<h2>Sant Julià i Santa Basilissa de Rabós</h2>",
			"<small>Divisió administrativa: Rabós d'Empordà; Rabós d'Empordà; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Mamet de Riumors",
		type: "parroquia",
		coordinates: [42.227461, 3.04227821],
		description: [
			"<h2>Sant Mamet de Riumors</h2>",
			"<small>Divisió administrativa: Riumors; Riumors; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Emeteri i Celdoni de Romanyà d'Empordà",
		type: "parroquia",
		coordinates: [42.1766265, 2.89468865],
		description: [
			"<h2>Sant Emeteri i Celdoni de Romanyà d'Empordà</h2>",
			"<small>Divisió administrativa: Romanyà d'Empordà; Pontós; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Climent Sescebes",
		type: "parroquia",
		coordinates: [42.3688108, 2.98016972],
		description: [
			"<h2>Sant Climent Sescebes</h2>",
			"<small>Divisió administrativa: Sant Climent Sescebes; Sant Climent Sescebes; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Llorenç de la Muga",
		type: "parroquia",
		coordinates: [42.32013585, 2.79016838],
		description: [
			"<h2>Sant Llorenç de la Muga</h2>",
			"<small>Divisió administrativa: Sant Llorenç de la Muga; Sant Llorenç de la Muga; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí Sesserres",
		type: "parroquia",
		coordinates: [42.25982965, 2.77471254],
		description: [
			"<h2>Sant Martí Sesserres</h2>",
			"<small>Divisió administrativa: Sant Martí Sesserres; Cabanelles; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel de Fluvià",
		type: "parroquia",
		coordinates: [42.1718354, 2.99191316],
		description: [
			"<h2>Sant Miquel de Fluvià</h2>",
			"<small>Divisió administrativa: Sant Miquel de Fluvià; Sant Miquel de Fluvià; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Llogaia d'Àlguema",
		type: "parroquia",
		coordinates: [42.23327615, 2.95215923],
		description: [
			"<h2>Santa Llogaia d'Àlguema</h2>",
			"<small>Divisió administrativa: Santa Llogaia d'Àlguema; Santa Llogaia d'Àlguema; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Coloma de Siurana",
		type: "parroquia",
		coordinates: [42.20948065, 2.99461822],
		description: [
			"<h2>Santa Coloma de Siurana</h2>",
			"<small>Divisió administrativa: Siurana; Siurana; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Llorenç de Sous",
		type: "parroquia",
		coordinates: [42.25462015, 2.715146],
		description: [
			"<h2>Sant Llorenç de Sous</h2>",
			"<small>Divisió administrativa: Sous; Albanyà; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Taravaus",
		type: "parroquia",
		coordinates: [42.2447437, 2.88989945],
		description: [
			"<h2>Sant Martí de Taravaus</h2>",
			"<small>Divisió administrativa: Taravaus; Vilanant; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Cecília de Terrades",
		type: "parroquia",
		coordinates: [42.3102195, 2.8398446],
		description: [
			"<h2>Santa Cecília de Terrades</h2>",
			"<small>Divisió administrativa: Terrades; Terrades; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Vila-sacra",
		type: "parroquia",
		coordinates: [42.26614605, 3.0183937],
		description: [
			"<h2>Sant Esteve de Vila-sacra</h2>",
			"<small>Divisió administrativa: Vila-sacra; Vila-sacra; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Vilabertran",
		type: "parroquia",
		coordinates: [42.28209825, 2.97912537],
		description: [
			"<h2>Santa Maria de Vilabertran</h2>",
			"<small>Divisió administrativa: Vilabertran; Vilabertran; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Mateu de Vilademires",
		type: "parroquia",
		coordinates: [42.22899715, 2.79425227],
		description: [
			"<h2>Sant Mateu de Vilademires</h2>",
			"<small>Divisió administrativa: Vilademires; Cabanelles; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cebrià de Vilafant",
		type: "parroquia",
		coordinates: [42.2470767, 2.9378011],
		description: [
			"<h2>Sant Cebrià de Vilafant</h2>",
			"<small>Divisió administrativa: Vilafant; Vilafant; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Vilajuïga",
		type: "parroquia",
		coordinates: [42.3250944, 3.0929952],
		description: [
			"<h2>Sant Feliu de Vilajuïga</h2>",
			"<small>Divisió administrativa: Vilajuïga; Vilajuïga; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Vilamalla",
		type: "parroquia",
		coordinates: [42.2186005, 2.97040375],
		description: [
			"<h2>Sant Vicenç de Vilamalla</h2>",
			"<small>Divisió administrativa: Vilamalla; Vilamalla; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Gil de Vilamaniscle",
		type: "parroquia",
		coordinates: [42.3739543, 3.06899529],
		description: [
			"<h2>Sant Gil de Vilamaniscle</h2>",
			"<small>Divisió administrativa: Vilamaniscle; Vilamaniscle; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Vilanant",
		type: "parroquia",
		coordinates: [42.2547582, 2.88909238],
		description: [
			"<h2>Santa Maria de Vilanant</h2>",
			"<small>Divisió administrativa: Vilanant; Vilanant; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eulàlia de Vilanova de la Muga",
		type: "parroquia",
		coordinates: [42.28011675, 3.04270393],
		description: [
			"<h2>Santa Eulàlia de Vilanova de la Muga</h2>",
			"<small>Divisió administrativa: Vilanova de la Muga; Peralada; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Vilarig",
		type: "parroquia",
		coordinates: [42.2863724, 2.83366066],
		description: [
			"<h2>Sant Martí de Vilarig</h2>",
			"<small>Divisió administrativa: Vilarig; Cistella; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Vilarnadal",
		type: "parroquia",
		coordinates: [42.34125715, 2.95305564],
		description: [
			"<h2>Sant Pere de Vilarnadal</h2>",
			"<small>Divisió administrativa: Vilarnadal; Masarac; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de l'Estela",
		type: "parroquia",
		coordinates: [42.2832311, 2.78249211],
		description: [
			"<h2>Santa Maria de l'Estela</h2>",
			"<small>Divisió administrativa: L'Estela; Cabanelles; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Maurici de Sant Mori",
		type: "parroquia",
		coordinates: [42.15375765, 2.99108444],
		description: [
			"<h2>Sant Maurici de Sant Mori</h2>",
			"<small>Divisió administrativa: Sant Mori; Sant Mori; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Interior; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Cadaqués",
		type: "parroquia",
		coordinates: [42.2881782, 3.2756285],
		description: [
			"<h2>Santa Maria de Cadaqués</h2>",
			"<small>Divisió administrativa: Cadaqués; Cadaqués; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Castelló d'Empúries",
		type: "parroquia",
		coordinates: [42.2594985, 3.07625974],
		description: [
			"<h2>Santa Maria de Castelló d'Empúries</h2>",
			"<small>Divisió administrativa: Castelló d'Empúries; Castelló d'Empúries; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel de Colera",
		type: "parroquia",
		coordinates: [42.399405, 3.09488754],
		description: [
			"<h2>Sant Miquel de Colera</h2>",
			"<small>Divisió administrativa: Colera; Colera; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu de les Neus del Port de la Selva",
		type: "parroquia",
		coordinates: [42.33800605, 3.20479593],
		description: [
			"<h2>Mare de Déu de les Neus del Port de la Selva</h2>",
			"<small>Divisió administrativa: El Port de la Selva; El Port de la Selva; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí d'Empúries",
		type: "parroquia",
		coordinates: [42.13994715, 3.11838059],
		description: [
			"<h2>Sant Martí d'Empúries</h2>",
			"<small>Divisió administrativa: Sant Martí d'Empúries; L'Escala; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Tours de l'Armentera",
		type: "parroquia",
		coordinates: [42.1721806, 3.07500841],
		description: [
			"<h2>Sant Martí de Tours de l'Armentera</h2>",
			"<small>Divisió administrativa: L'Armentera; L'Armentera; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de l'Escala",
		type: "parroquia",
		coordinates: [42.12466325, 3.13310221],
		description: [
			"<h2>Sant Pere de l'Escala</h2>",
			"<small>Divisió administrativa: L'Escala; L'Escala; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de la Selva de Mar",
		type: "parroquia",
		coordinates: [42.3246013, 3.18682383],
		description: [
			"<h2>Sant Esteve de la Selva de Mar</h2>",
			"<small>Divisió administrativa: La Selva de Mar; La Selva de Mar; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Llançà",
		type: "parroquia",
		coordinates: [42.3630283, 3.15162678],
		description: [
			"<h2>Sant Vicenç de Llançà</h2>",
			"<small>Divisió administrativa: Llançà; Llançà; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Sadurní de Montiró",
		type: "parroquia",
		coordinates: [42.15462825, 3.06984704],
		description: [
			"<h2>Sant Sadurní de Montiró</h2>",
			"<small>Divisió administrativa: Montiró; Ventalló; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Portbou",
		type: "parroquia",
		coordinates: [42.4261565, 3.15790865],
		description: [
			"<h2>Santa Maria de Portbou</h2>",
			"<small>Divisió administrativa: Portbou; Portbou; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria Assumpta de Roses",
		type: "parroquia",
		coordinates: [42.26768645, 3.17010727],
		description: [
			"<h2>Santa Maria Assumpta de Roses</h2>",
			"<small>Divisió administrativa: Roses; Roses; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eugènia de Saldet",
		type: "parroquia",
		coordinates: [42.1711304, 3.0626824],
		description: [
			"<h2>Santa Eugènia de Saldet</h2>",
			"<small>Divisió administrativa: Saldet; Ventalló; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere Pescador",
		type: "parroquia",
		coordinates: [42.1883904, 3.08213924],
		description: [
			"<h2>Sant Pere Pescador</h2>",
			"<small>Divisió administrativa: Sant Pere Pescador; Sant Pere Pescador; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Tomàs de Fluvià",
		type: "parroquia",
		coordinates: [42.18104455, 3.00960644],
		description: [
			"<h2>Sant Tomàs de Fluvià</h2>",
			"<small>Divisió administrativa: Sant Tomàs de Fluvià; Torroella de Fluvià; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cebrià de Torroella de Fluvià",
		type: "parroquia",
		coordinates: [42.1739947, 3.04505577],
		description: [
			"<h2>Sant Cebrià de Torroella de Fluvià</h2>",
			"<small>Divisió administrativa: Torroella de Fluvià; Torroella de Fluvià; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Valveralla",
		type: "parroquia",
		coordinates: [42.16131215, 3.03665086],
		description: [
			"<h2>Sant Vicenç de Valveralla</h2>",
			"<small>Divisió administrativa: Valveralla; Ventalló; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel de Ventalló",
		type: "parroquia",
		coordinates: [42.14912535, 3.02651213],
		description: [
			"<h2>Sant Miquel de Ventalló</h2>",
			"<small>Divisió administrativa: Ventalló; Ventalló; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Andreu de Vila-robau",
		type: "parroquia",
		coordinates: [42.1645448, 3.00912025],
		description: [
			"<h2>Sant Andreu de Vila-robau</h2>",
			"<small>Divisió administrativa: Vila-robau; Ventalló; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Vilacolum",
		type: "parroquia",
		coordinates: [42.19465255, 3.03713435],
		description: [
			"<h2>Sant Esteve de Vilacolum</h2>",
			"<small>Divisió administrativa: Vilacolum; Torroella de Fluvià; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Viladamat",
		type: "parroquia",
		coordinates: [42.133335, 3.07531363],
		description: [
			"<h2>Sant Feliu de Viladamat</h2>",
			"<small>Divisió administrativa: Viladamat; Viladamat; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Assumpció de la Mare de Déu de Vilamacolum",
		type: "parroquia",
		coordinates: [42.19502885, 3.05842516],
		description: [
			"<h2>Assumpció de la Mare de Déu de Vilamacolum</h2>",
			"<small>Divisió administrativa: Vilamacolum; Vilamacolum; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Fruitós de la Vall de la Santa Creu",
		type: "parroquia",
		coordinates: [42.33586835, 3.16660958],
		description: [
			"<h2>Sant Fruitós de la Vall de la Santa Creu</h2>",
			"<small>Divisió administrativa: La Vall de la Santa Creu; El Port de la Selva; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Empordà Marina; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria d'Argelaguer",
		type: "parroquia",
		coordinates: [42.21322535, 2.64178207],
		description: [
			"<h2>Santa Maria d'Argelaguer</h2>",
			"<small>Divisió administrativa: Argelaguer; Argelaguer; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Batet",
		type: "parroquia",
		coordinates: [42.1811614, 2.516639],
		description: [
			"<h2>Santa Maria de Batet</h2>",
			"<small>Divisió administrativa: Batet; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cristòfol de Beget",
		type: "parroquia",
		coordinates: [42.32112565, 2.48013556],
		description: [
			"<h2>Sant Cristòfol de Beget</h2>",
			"<small>Divisió administrativa: Beget; Camprodon; Ripollès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eulàlia de Mèrida de Begudà",
		type: "parroquia",
		coordinates: [42.1958038, 2.54605244],
		description: [
			"<h2>Santa Eulàlia de Mèrida de Begudà</h2>",
			"<small>Divisió administrativa: Begudà; Sant Joan les Fonts; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Besalú",
		type: "parroquia",
		coordinates: [42.1996283, 2.69842285],
		description: [
			"<h2>Sant Vicenç de Besalú</h2>",
			"<small>Divisió administrativa: Besalú; Besalú; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Silvestre del Mor i Ossinyà",
		type: "parroquia",
		coordinates: [42.1816786, 2.65469787],
		description: [
			"<h2>Sant Silvestre del Mor i Ossinyà</h2>",
			"<small>Divisió administrativa: El Mor; Sant Ferriol; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Fares",
		type: "parroquia",
		coordinates: [42.1865535, 2.7356246],
		description: [
			"<h2>Santa Maria de Fares</h2>",
			"<small>Divisió administrativa: Fares; Sant Ferriol; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Beuda",
		type: "parroquia",
		coordinates: [42.2370451, 2.70974913],
		description: [
			"<h2>Sant Feliu de Beuda</h2>",
			"<small>Divisió administrativa: Beuda; Beuda; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Bolós",
		type: "parroquia",
		coordinates: [42.30279305, 2.42184967],
		description: [
			"<h2>Santa Maria de Bolós</h2>",
			"<small>Divisió administrativa: Bolós; Camprodon; Ripollès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Capsec i la Vall del Bac",
		type: "parroquia",
		coordinates: [42.23304515, 2.4719465],
		description: [
			"<h2>Sant Martí de Capsec i la Vall del Bac</h2>",
			"<small>Divisió administrativa: Capsec; La Vall de Bianya; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santíssim Salvador de Castellfollit de la Roca",
		type: "parroquia",
		coordinates: [42.2190174, 2.5469928],
		description: [
			"<h2>Santíssim Salvador de Castellfollit de la Roca</h2>",
			"<small>Divisió administrativa: Castellfollit de la Roca; Castellfollit de la Roca; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Dosquers",
		type: "parroquia",
		coordinates: [42.1951859, 2.75348203],
		description: [
			"<h2>Sant Martí de Dosquers</h2>",
			"<small>Divisió administrativa: Dosquers; Maià de Montcal; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Bartomeu del Mallol",
		type: "parroquia",
		coordinates: [42.1496925, 2.439316],
		description: [
			"<h2>Sant Bartomeu del Mallol</h2>",
			"<small>Divisió administrativa: El Mallol; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç del Sallent",
		type: "parroquia",
		coordinates: [42.15437105, 2.61479741],
		description: [
			"<h2>Sant Vicenç del Sallent</h2>",
			"<small>Divisió administrativa: El Sallent; Santa Pau; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria dels Hostalets d'en Bas",
		type: "parroquia",
		coordinates: [42.1015151, 2.4495421],
		description: [
			"<h2>Santa Maria dels Hostalets d'en Bas</h2>",
			"<small>Divisió administrativa: Els Hostalets d'en Bas; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Romà de Joanetes",
		type: "parroquia",
		coordinates: [42.1216092, 2.4200291],
		description: [
			"<h2>Sant Romà de Joanetes</h2>",
			"<small>Divisió administrativa: Joanetes; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Josep Obrer de la Canya",
		type: "parroquia",
		coordinates: [42.2059263, 2.4931188],
		description: [
			"<h2>Sant Josep Obrer de la Canya</h2>",
			"<small>Divisió administrativa: La Canya; Sant Joan les Fonts; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel Sacot",
		type: "parroquia",
		coordinates: [42.139207, 2.5321551],
		description: [
			"<h2>Sant Miquel Sacot</h2>",
			"<small>Divisió administrativa: La Cot; Santa Pau; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel de la Miana",
		type: "parroquia",
		coordinates: [42.17992205, 2.6314432],
		description: [
			"<h2>Sant Miquel de la Miana</h2>",
			"<small>Divisió administrativa: La Miana; Sant Ferriol; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de la Pinya",
		type: "parroquia",
		coordinates: [42.1741754, 2.44367539],
		description: [
			"<h2>Santa Maria de la Pinya</h2>",
			"<small>Divisió administrativa: La Pinya; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de les Preses",
		type: "parroquia",
		coordinates: [42.1409867, 2.46112423],
		description: [
			"<h2>Sant Pere de les Preses</h2>",
			"<small>Divisió administrativa: Les Preses; Les Preses; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Lligordà",
		type: "parroquia",
		coordinates: [42.21925455, 2.70751422],
		description: [
			"<h2>Sant Pere de Lligordà</h2>",
			"<small>Divisió administrativa: Lligordà; Beuda; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Maià de Montcal",
		type: "parroquia",
		coordinates: [42.22235945, 2.74229831],
		description: [
			"<h2>Sant Vicenç de Maià de Montcal</h2>",
			"<small>Divisió administrativa: Maià de Montcal; Maià de Montcal; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Montagut",
		type: "parroquia",
		coordinates: [42.23017605, 2.59648078],
		description: [
			"<h2>Sant Pere de Montagut</h2>",
			"<small>Divisió administrativa: Montagut; Montagut i Oix; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Llorenç d'Oix",
		type: "parroquia",
		coordinates: [42.2714299, 2.52896322],
		description: [
			"<h2>Sant Llorenç d'Oix</h2>",
			"<small>Divisió administrativa: Oix; Montagut i Oix; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve d'Olot",
		type: "parroquia",
		coordinates: [42.18231785, 2.48857838],
		description: [
			"<h2>Sant Esteve d'Olot</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere Màrtir d'Olot",
		type: "parroquia",
		coordinates: [42.18220895, 2.47821146],
		description: [
			"<h2>Sant Pere Màrtir d'Olot</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Roc d'Olot",
		type: "parroquia",
		coordinates: [42.17316865, 2.47310266],
		description: [
			"<h2>Sant Roc d'Olot</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cristòfol les Fonts d'Olot",
		type: "parroquia",
		coordinates: [42.16861125, 2.49986286],
		description: [
			"<h2>Sant Cristòfol les Fonts d'Olot</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Puigpardines",
		type: "parroquia",
		coordinates: [42.1395717, 2.428724],
		description: [
			"<h2>Santa Maria de Puigpardines</h2>",
			"<small>Divisió administrativa: Puigpardines; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Riudaura",
		type: "parroquia",
		coordinates: [42.18761775, 2.40871606],
		description: [
			"<h2>Santa Maria de Riudaura</h2>",
			"<small>Divisió administrativa: Riudaura; Riudaura; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Rocabruna",
		type: "parroquia",
		coordinates: [42.33811285, 2.450528],
		description: [
			"<h2>Sant Feliu de Rocabruna</h2>",
			"<small>Divisió administrativa: Rocabruna; Camprodon; Ripollès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Cecília de Sadernes",
		type: "parroquia",
		coordinates: [42.27006145, 2.59610202],
		description: [
			"<h2>Santa Cecília de Sadernes</h2>",
			"<small>Divisió administrativa: Sadernes; Sales de Llierca; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Sales de Llierca",
		type: "parroquia",
		coordinates: [42.2357302, 2.64969288],
		description: [
			"<h2>Sant Martí de Sales de Llierca</h2>",
			"<small>Divisió administrativa: Sales de Llierca; Sales de Llierca; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve d'en Bas",
		type: "parroquia",
		coordinates: [42.1184757, 2.45916496],
		description: [
			"<h2>Sant Esteve d'en Bas</h2>",
			"<small>Divisió administrativa: Sant Esteve d'en Bas; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Jaume de Llierca",
		type: "parroquia",
		coordinates: [42.2128003, 2.60875558],
		description: [
			"<h2>Sant Jaume de Llierca</h2>",
			"<small>Divisió administrativa: Sant Jaume de Llierca; Sant Jaume de Llierca; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Joan Baptista de Sant Joan les Fonts",
		type: "parroquia",
		coordinates: [42.2133003, 2.50901508],
		description: [
			"<h2>Sant Joan Baptista de Sant Joan les Fonts</h2>",
			"<small>Divisió administrativa: Sant Joan les Fonts; Sant Joan les Fonts; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí del Clot",
		type: "parroquia",
		coordinates: [42.2399046, 2.43452167],
		description: [
			"<h2>Sant Martí del Clot</h2>",
			"<small>Divisió administrativa: Sant Martí del Clot; La Vall de Bianya; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere Despuig",
		type: "parroquia",
		coordinates: [42.2136836, 2.4262264],
		description: [
			"<h2>Sant Pere Despuig</h2>",
			"<small>Divisió administrativa: Sant Pere Despuig; La Vall de Bianya; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Privat d'en Bas",
		type: "parroquia",
		coordinates: [42.1494814, 2.40785275],
		description: [
			"<h2>Sant Privat d'en Bas</h2>",
			"<small>Divisió administrativa: Sant Privat d'en Bas; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Salvador de Bianya",
		type: "parroquia",
		coordinates: [42.24713415, 2.40098056],
		description: [
			"<h2>Sant Salvador de Bianya</h2>",
			"<small>Divisió administrativa: Sant Salvador de Bianya; La Vall de Bianya; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Margarida de Bianya",
		type: "parroquia",
		coordinates: [42.20755515, 2.44464909],
		description: [
			"<h2>Santa Margarida de Bianya</h2>",
			"<small>Divisió administrativa: Santa Margarida de Bianya; La Vall de Bianya; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria Assumpta de Santa Pau",
		type: "parroquia",
		coordinates: [42.1442645, 2.57172193],
		description: [
			"<h2>Santa Maria Assumpta de Santa Pau</h2>",
			"<small>Divisió administrativa: Santa Pau; Santa Pau; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Segueró",
		type: "parroquia",
		coordinates: [42.2417463, 2.74838984],
		description: [
			"<h2>Santa Maria de Segueró</h2>",
			"<small>Divisió administrativa: Segueró; Beuda; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Tortellà",
		type: "parroquia",
		coordinates: [42.2330475, 2.62974772],
		description: [
			"<h2>Santa Maria de Tortellà</h2>",
			"<small>Divisió administrativa: Tortellà; Tortellà; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Andreu del Coll",
		type: "parroquia",
		coordinates: [42.1967495, 2.45879592],
		description: [
			"<h2>Sant Andreu del Coll</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de l'Alt Fluvià; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Llorenç d'Adri",
		type: "parroquia",
		coordinates: [42.0521468, 2.74096085],
		description: [
			"<h2>Sant Llorenç d'Adri</h2>",
			"<small>Divisió administrativa: Adri; Canet d'Adri; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Biert",
		type: "parroquia",
		coordinates: [42.07993315, 2.70786552],
		description: [
			"<h2>Sant Martí de Biert</h2>",
			"<small>Divisió administrativa: Biert; Canet d'Adri; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Bordils",
		type: "parroquia",
		coordinates: [42.04404355, 2.91136727],
		description: [
			"<h2>Sant Esteve de Bordils</h2>",
			"<small>Divisió administrativa: Bordils; Bordils; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Canet d'Adri",
		type: "parroquia",
		coordinates: [42.0381405, 2.73495759],
		description: [
			"<h2>Sant Vicenç de Canet d'Adri</h2>",
			"<small>Divisió administrativa: Canet d'Adri; Canet d'Adri; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Cartellà",
		type: "parroquia",
		coordinates: [42.02364365, 2.76634293],
		description: [
			"<h2>Sant Feliu de Cartellà</h2>",
			"<small>Divisió administrativa: Cartellà; Sant Gregori; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Celrà",
		type: "parroquia",
		coordinates: [42.02475095, 2.87931181],
		description: [
			"<h2>Sant Feliu de Celrà</h2>",
			"<small>Divisió administrativa: Celrà; Celrà; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Genís de Cervià de Ter",
		type: "parroquia",
		coordinates: [42.06768495, 2.91004596],
		description: [
			"<h2>Sant Genís de Cervià de Ter</h2>",
			"<small>Divisió administrativa: Cervià de Ter; Cervià de Ter; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Fellines",
		type: "parroquia",
		coordinates: [42.0948068, 2.90383875],
		description: [
			"<h2>Sant Martí de Fellines</h2>",
			"<small>Divisió administrativa: Fellines; Viladasens; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cebrià de Flaçà",
		type: "parroquia",
		coordinates: [42.05022425, 2.95344237],
		description: [
			"<h2>Sant Cebrià de Flaçà</h2>",
			"<small>Divisió administrativa: Flaçà; Flaçà; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Ginestar",
		type: "parroquia",
		coordinates: [42.01496625, 2.71713205],
		description: [
			"<h2>Santa Maria de Ginestar</h2>",
			"<small>Divisió administrativa: Ginestar; Sant Gregori; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Domeny",
		type: "parroquia",
		coordinates: [41.99115375, 2.79708968],
		description: [
			"<h2>Sant Feliu de Domeny</h2>",
			"<small>Divisió administrativa: Domeny; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Granollers de Rocacorba",
		type: "parroquia",
		coordinates: [42.0685371, 2.6519536],
		description: [
			"<h2>Santa Maria de Granollers de Rocacorba</h2>",
			"<small>Divisió administrativa: Granollers de Rocacorba; Sant Martí de Llémena; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Juià",
		type: "parroquia",
		coordinates: [42.0172385, 2.90690426],
		description: [
			"<h2>Sant Pere de Juià</h2>",
			"<small>Divisió administrativa: Juià; Juià; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Andreu de la Barroca",
		type: "parroquia",
		coordinates: [42.0356014, 2.62739112],
		description: [
			"<h2>Sant Andreu de la Barroca</h2>",
			"<small>Divisió administrativa: La Barroca; Sant Aniol de Finestres; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Cecília de les Serres",
		type: "parroquia",
		coordinates: [41.9996422, 2.67168825],
		description: [
			"<h2>Santa Cecília de les Serres</h2>",
			"<small>Divisió administrativa: Les Serres; Sant Martí de Llémena; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Llorà",
		type: "parroquia",
		coordinates: [42.0253941, 2.7052043],
		description: [
			"<h2>Sant Pere de Llorà</h2>",
			"<small>Divisió administrativa: Llorà; Sant Martí de Llémena; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Madremanya",
		type: "parroquia",
		coordinates: [41.9898943, 2.95726945],
		description: [
			"<h2>Sant Esteve de Madremanya</h2>",
			"<small>Divisió administrativa: Madremanya; Madremanya; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Sadurní de Medinyà",
		type: "parroquia",
		coordinates: [42.04941625, 2.86544914],
		description: [
			"<h2>Sant Sadurní de Medinyà</h2>",
			"<small>Divisió administrativa: Medinyà; Sant Julià de Ramis; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Cecília de Montcal",
		type: "parroquia",
		coordinates: [42.0371789, 2.75909628],
		description: [
			"<h2>Santa Cecília de Montcal</h2>",
			"<small>Divisió administrativa: Montcal; Canet d'Adri; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Aniol de Finestres",
		type: "parroquia",
		coordinates: [42.0903564, 2.58695106],
		description: [
			"<h2>Sant Aniol de Finestres</h2>",
			"<small>Divisió administrativa: Sant Aniol de Finestres; Sant Aniol de Finestres; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Llémena",
		type: "parroquia",
		coordinates: [42.0570467, 2.62842229],
		description: [
			"<h2>Sant Esteve de Llémena</h2>",
			"<small>Divisió administrativa: Sant Esteve de Llémena; Sant Aniol de Finestres; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Gregori",
		type: "parroquia",
		coordinates: [41.9890973, 2.7596829],
		description: [
			"<h2>Sant Gregori</h2>",
			"<small>Divisió administrativa: Sant Gregori; Sant Gregori; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Joan de Mollet",
		type: "parroquia",
		coordinates: [42.04587815, 2.94272889],
		description: [
			"<h2>Sant Joan de Mollet</h2>",
			"<small>Divisió administrativa: Sant Joan de Mollet; Sant Joan de Mollet; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Jordi Desvalls",
		type: "parroquia",
		coordinates: [42.0720928, 2.95365861],
		description: [
			"<h2>Sant Jordi Desvalls</h2>",
			"<small>Divisió administrativa: Sant Jordi Desvalls; Sant Jordi Desvalls; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Llémena",
		type: "parroquia",
		coordinates: [42.03628955, 2.64706482],
		description: [
			"<h2>Sant Martí de Llémena</h2>",
			"<small>Divisió administrativa: Sant Martí de Llémena; Sant Martí de Llémena; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Julià i Santa Basilissa de Ramis",
		type: "parroquia",
		coordinates: [42.0342732, 2.8395107],
		description: [
			"<h2>Sant Julià i Santa Basilissa de Ramis</h2>",
			"<small>Divisió administrativa: Sant Julià de Ramis; Sant Julià de Ramis; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí Vell",
		type: "parroquia",
		coordinates: [42.01968735, 2.93088416],
		description: [
			"<h2>Sant Martí Vell</h2>",
			"<small>Divisió administrativa: Sant Martí Vell; Sant Martí Vell; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Medir de Cartellà",
		type: "parroquia",
		coordinates: [42.0271133, 2.77341286],
		description: [
			"<h2>Sant Medir de Cartellà</h2>",
			"<small>Divisió administrativa: Sant Medir; Sant Gregori; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Finestres",
		type: "parroquia",
		coordinates: [42.11190515, 2.59302963],
		description: [
			"<h2>Santa Maria de Finestres</h2>",
			"<small>Divisió administrativa: Santa Maria de Finestres; Sant Aniol de Finestres; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Narcís de Taialà",
		type: "parroquia",
		coordinates: [41.9987835, 2.79182665],
		description: [
			"<h2>Sant Narcís de Taialà</h2>",
			"<small>Divisió administrativa: Taialà; Sant Gregori; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Viladasens",
		type: "parroquia",
		coordinates: [42.0959255, 2.92998907],
		description: [
			"<h2>Sant Vicenç de Viladasens</h2>",
			"<small>Divisió administrativa: Viladasens; Viladasens; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat d'Àngels-Llémena; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria dels Turers de Banyoles",
		type: "parroquia",
		coordinates: [42.1194725, 2.76692],
		description: [
			"<h2>Santa Maria dels Turers de Banyoles</h2>",
			"<small>Divisió administrativa: Banyoles; Banyoles; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Banyoles",
		type: "parroquia",
		coordinates: [42.11227465, 2.76887571],
		description: [
			"<h2>Sant Pere de Banyoles</h2>",
			"<small>Divisió administrativa: Banyoles; Banyoles; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Joan Baptista de Borgonyà",
		type: "parroquia",
		coordinates: [42.10163655, 2.80190711],
		description: [
			"<h2>Sant Joan Baptista de Borgonyà</h2>",
			"<small>Divisió administrativa: Borgonyà; Cornellà de Terri; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Camós",
		type: "parroquia",
		coordinates: [42.0870963, 2.7620208],
		description: [
			"<h2>Sant Vicenç de Camós</h2>",
			"<small>Divisió administrativa: Camós; Camós; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Iscle i Santa Victòria de Centenys",
		type: "parroquia",
		coordinates: [42.1592593, 2.7847952],
		description: [
			"<h2>Sant Iscle i Santa Victòria de Centenys</h2>",
			"<small>Divisió administrativa: Centenys; Esponellà; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Cornellà de Terri",
		type: "parroquia",
		coordinates: [42.08997295, 2.81571479],
		description: [
			"<h2>Sant Pere de Cornellà de Terri</h2>",
			"<small>Divisió administrativa: Cornellà de Terri; Cornellà de Terri; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Julià i Santa Basilissa de Corts",
		type: "parroquia",
		coordinates: [42.09484265, 2.78898088],
		description: [
			"<h2>Sant Julià i Santa Basilissa de Corts</h2>",
			"<small>Divisió administrativa: Corts; Cornellà de Terri; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eulàlia de Crespià",
		type: "parroquia",
		coordinates: [42.1870747, 2.7991163],
		description: [
			"<h2>Santa Eulàlia de Crespià</h2>",
			"<small>Divisió administrativa: Crespià; Crespià; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Andreu del Torn",
		type: "parroquia",
		coordinates: [42.16047115, 2.64555169],
		description: [
			"<h2>Sant Andreu del Torn</h2>",
			"<small>Divisió administrativa: El Torn; Sant Ferriol; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cebrià d'Esponellà",
		type: "parroquia",
		coordinates: [42.17905215, 2.79545765],
		description: [
			"<h2>Sant Cebrià d'Esponellà</h2>",
			"<small>Divisió administrativa: Esponellà; Esponellà; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Falgons",
		type: "parroquia",
		coordinates: [42.108605, 2.66087978],
		description: [
			"<h2>Sant Vicenç de Falgons</h2>",
			"<small>Divisió administrativa: Falgons; Sant Miquel de Campmajor; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Fontcoberta",
		type: "parroquia",
		coordinates: [42.14282225, 2.78988057],
		description: [
			"<h2>Sant Feliu de Fontcoberta</h2>",
			"<small>Divisió administrativa: Fontcoberta; Fontcoberta; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Julià i Santa Basilissa de Galliners",
		type: "parroquia",
		coordinates: [42.1497754, 2.87218193],
		description: [
			"<h2>Sant Julià i Santa Basilissa de Galliners</h2>",
			"<small>Divisió administrativa: Galliners; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Andreu de Mata",
		type: "parroquia",
		coordinates: [42.10731455, 2.78368733],
		description: [
			"<h2>Sant Andreu de Mata</h2>",
			"<small>Divisió administrativa: Mata; Porqueres; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Romà de Miànigues",
		type: "parroquia",
		coordinates: [42.1061411, 2.75683661],
		description: [
			"<h2>Sant Romà de Miànigues</h2>",
			"<small>Divisió administrativa: Miànigues; Porqueres; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Mieres",
		type: "parroquia",
		coordinates: [42.1270641, 2.63908802],
		description: [
			"<h2>Sant Pere de Mieres</h2>",
			"<small>Divisió administrativa: Mieres; Mieres; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí d'Ollers",
		type: "parroquia",
		coordinates: [42.1536924, 2.83361902],
		description: [
			"<h2>Sant Martí d'Ollers</h2>",
			"<small>Divisió administrativa: Ollers; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria d'Orfes",
		type: "parroquia",
		coordinates: [42.1725094, 2.86675566],
		description: [
			"<h2>Santa Maria d'Orfes</h2>",
			"<small>Divisió administrativa: Orfes; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel de Palol de Revardit",
		type: "parroquia",
		coordinates: [42.0697346, 2.79635685],
		description: [
			"<h2>Sant Miquel de Palol de Revardit</h2>",
			"<small>Divisió administrativa: Palol de Revardit; Palol de Revardit; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Porqueres",
		type: "parroquia",
		coordinates: [42.1218069, 2.74866752],
		description: [
			"<h2>Santa Maria de Porqueres</h2>",
			"<small>Divisió administrativa: Porqueres; Porqueres; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eulàlia de Pujals dels Cavallers",
		type: "parroquia",
		coordinates: [42.10556455, 2.81908129],
		description: [
			"<h2>Santa Eulàlia de Pujals dels Cavallers</h2>",
			"<small>Divisió administrativa: Pujals dels Cavallers; Cornellà de Terri; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Pujals dels Pagesos",
		type: "parroquia",
		coordinates: [42.10718405, 2.83382697],
		description: [
			"<h2>Santa Maria de Pujals dels Pagesos</h2>",
			"<small>Divisió administrativa: Pujals dels Pagesos; Cornellà de Terri; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cebrià de Pujarnol",
		type: "parroquia",
		coordinates: [42.1020144, 2.7082429],
		description: [
			"<h2>Sant Cebrià de Pujarnol</h2>",
			"<small>Divisió administrativa: Pujarnol; Porqueres; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cugat de Ravós del Terri",
		type: "parroquia",
		coordinates: [42.07099165, 2.83817345],
		description: [
			"<h2>Sant Cugat de Ravós del Terri</h2>",
			"<small>Divisió administrativa: Ravós del Terri; Cornellà de Terri; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Riudellots de la Creu",
		type: "parroquia",
		coordinates: [42.05731195, 2.81338678],
		description: [
			"<h2>Sant Martí de Riudellots de la Creu</h2>",
			"<small>Divisió administrativa: Riudellots de la Creu; Palol de Revardit; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Rocacorba",
		type: "parroquia",
		coordinates: [42.0672296, 2.6876798],
		description: [
			"<h2>Santa Maria de Rocacorba</h2>",
			"<small>Divisió administrativa: Rocacorba; Cabet d'Adri; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Guialbes",
		type: "parroquia",
		coordinates: [42.1154665, 2.87820153],
		description: [
			"<h2>Sant Esteve de Guialbes</h2>",
			"<small>Divisió administrativa: Sant Esteve de Guialbes; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Llogaia del Terri",
		type: "parroquia",
		coordinates: [42.0835754, 2.8390257],
		description: [
			"<h2>Santa Llogaia del Terri</h2>",
			"<small>Divisió administrativa: Santa Llogaia del Terri; Cornellà de Terri; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Marçal de la Quarantella",
		type: "parroquia",
		coordinates: [42.1254632, 2.86813483],
		description: [
			"<h2>Sant Marçal de la Quarantella</h2>",
			"<small>Divisió administrativa: Sant Marçal de la Quarantella; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Camós",
		type: "parroquia",
		coordinates: [42.0801242, 2.77446636],
		description: [
			"<h2>Santa Maria de Camós</h2>",
			"<small>Divisió administrativa: Camós; Camós; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel de Campmajor",
		type: "parroquia",
		coordinates: [42.13602835, 2.67927768],
		description: [
			"<h2>Sant Miquel de Campmajor</h2>",
			"<small>Divisió administrativa: Sant Miquel de Campmajor; Sant Miquel de Campmajor; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Andreu de Serinyà",
		type: "parroquia",
		coordinates: [42.1689184, 2.74468029],
		description: [
			"<h2>Sant Andreu de Serinyà</h2>",
			"<small>Divisió administrativa: Serinyà; Serinyà; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Sords",
		type: "parroquia",
		coordinates: [42.0886647, 2.82461487],
		description: [
			"<h2>Sant Esteve de Sords</h2>",
			"<small>Divisió administrativa: Sords; Cornellà de Terri; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Terradelles",
		type: "parroquia",
		coordinates: [42.1181261, 2.8888804],
		description: [
			"<h2>Sant Martí de Terradelles</h2>",
			"<small>Divisió administrativa: Terradelles; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cristòfol d'Usall",
		type: "parroquia",
		coordinates: [42.1487343, 2.75713928],
		description: [
			"<h2>Sant Cristòfol d'Usall</h2>",
			"<small>Divisió administrativa: Usall; Porqueres; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Vilademí",
		type: "parroquia",
		coordinates: [42.1524837, 2.8128217],
		description: [
			"<h2>Sant Esteve de Vilademí</h2>",
			"<small>Divisió administrativa: Vilademí; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Joan Baptista de Vilademuls",
		type: "parroquia",
		coordinates: [42.1383047, 2.88760418],
		description: [
			"<h2>Sant Joan Baptista de Vilademuls</h2>",
			"<small>Divisió administrativa: Vilademuls; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Sadurní de Vilafreser",
		type: "parroquia",
		coordinates: [42.084555, 2.88241405],
		description: [
			"<h2>Sant Sadurní de Vilafreser</h2>",
			"<small>Divisió administrativa: Vilafreser; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Vilamarí",
		type: "parroquia",
		coordinates: [42.1124072, 2.85200039],
		description: [
			"<h2>Santa Maria de Vilamarí</h2>",
			"<small>Divisió administrativa: Vilamarí; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Sadurní de Vilavenut",
		type: "parroquia",
		coordinates: [42.13946225, 2.82148668],
		description: [
			"<h2>Sant Sadurní de Vilavenut</h2>",
			"<small>Divisió administrativa: Vilavenut; Fontcoberta; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Vilert",
		type: "parroquia",
		coordinates: [42.17404735, 2.82151517],
		description: [
			"<h2>Santa Maria de Vilert</h2>",
			"<small>Divisió administrativa: Vilert; Esponellà; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de la Mota",
		type: "parroquia",
		coordinates: [42.0518558, 2.78968199],
		description: [
			"<h2>Sant Martí de la Mota</h2>",
			"<small>Divisió administrativa: La Mota; Palol de Revardit; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Briolf",
		type: "parroquia",
		coordinates: [42.16908625, 2.6890789],
		description: [
			"<h2>Sant Esteve de Briolf</h2>",
			"<small>Divisió administrativa: Briolf; Sant Miquel de Campmajor; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de les Olives",
		type: "parroquia",
		coordinates: [42.0986648, 2.87155465],
		description: [
			"<h2>Santa Maria de les Olives</h2>",
			"<small>Divisió administrativa: Olives; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Banyoles; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Begur",
		type: "parroquia",
		coordinates: [41.9543832, 3.20744233],
		description: [
			"<h2>Sant Pere de Begur</h2>",
			"<small>Divisió administrativa: Begur; Begur; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve d'Esclanyà",
		type: "parroquia",
		coordinates: [41.9293689, 3.17641061],
		description: [
			"<h2>Sant Esteve d'Esclanyà</h2>",
			"<small>Divisió administrativa: Esclanyà; Begur; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria Assumpta de Bell-lloc d'Aro",
		type: "parroquia",
		coordinates: [41.83988225, 2.977861],
		description: [
			"<h2>Santa Maria Assumpta de Bell-lloc d'Aro</h2>",
			"<small>Divisió administrativa: Bell-lloc d'Aro; Santa Cristina d'Aro; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Calella de Palafrugell",
		type: "parroquia",
		coordinates: [41.889684, 3.18570138],
		description: [
			"<h2>Sant Pere de Calella de Palafrugell</h2>",
			"<small>Divisió administrativa: Calella de Palafrugell; Palafrugell; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Calonge",
		type: "parroquia",
		coordinates: [41.86241, 3.0730709],
		description: [
			"<h2>Sant Martí de Calonge</h2>",
			"<small>Divisió administrativa: Calonge; Calonge i Sant Antoni; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Fruitós de Llofriu",
		type: "parroquia",
		coordinates: [41.9304924, 3.13203805],
		description: [
			"<h2>Sant Fruitós de Llofriu</h2>",
			"<small>Divisió administrativa: Llofriu; Palafrugell; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Mont-ras",
		type: "parroquia",
		coordinates: [41.9091405, 3.1435114],
		description: [
			"<h2>Sant Esteve de Mont-ras</h2>",
			"<small>Divisió administrativa: Mont-ras; Mont-ras; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Tours de Palafrugell",
		type: "parroquia",
		coordinates: [41.91723885, 3.16414452],
		description: [
			"<h2>Sant Martí de Tours de Palafrugell</h2>",
			"<small>Divisió administrativa: Palafrugell; Palafrugell; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria del Mar de Palamós",
		type: "parroquia",
		coordinates: [41.846981, 3.1285872],
		description: [
			"<h2>Santa Maria del Mar de Palamós</h2>",
			"<small>Divisió administrativa: Palamós; Palamós; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eugènia de Vila-romà",
		type: "parroquia",
		coordinates: [41.85744205, 3.12965845],
		description: [
			"<h2>Santa Eugènia de Vila-romà</h2>",
			"<small>Divisió administrativa: Sant Joan de Palamós; Palamós; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Pals",
		type: "parroquia",
		coordinates: [41.97177805, 3.14384067],
		description: [
			"<h2>Sant Pere de Pals</h2>",
			"<small>Divisió administrativa: Pals; Pals; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Fenals d'Aro",
		type: "parroquia",
		coordinates: [41.8234508, 3.0587049],
		description: [
			"<h2>Santa Maria de Fenals d'Aro</h2>",
			"<small>Divisió administrativa: Fenals d'Aro; Castell d'Aro, Platja d'Aro i s'Agaró; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Regencós",
		type: "parroquia",
		coordinates: [41.9525643, 3.16997786],
		description: [
			"<h2>Sant Vicenç de Regencós</h2>",
			"<small>Divisió administrativa: Regencós; Regencós; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Romanyà de la Selva",
		type: "parroquia",
		coordinates: [41.8536941, 2.98439251],
		description: [
			"<h2>Sant Martí de Romanyà de la Selva</h2>",
			"<small>Divisió administrativa: Romanyà de la Selva; Santa Cristina d'Aro; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Antoni de Calonge",
		type: "parroquia",
		coordinates: [41.84831735, 3.10715311],
		description: [
			"<h2>Sant Antoni de Calonge</h2>",
			"<small>Divisió administrativa: Sant Antoni de Calonge; Calonge i Sant Antoni; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu dels Àngels de Sant Feliu de Guíxols",
		type: "parroquia",
		coordinates: [41.7799719, 3.02666293],
		description: [
			"<h2>Mare de Déu dels Àngels de Sant Feliu de Guíxols</h2>",
			"<small>Divisió administrativa: Sant Feliu de Guíxols; Sant Feliu de Guíxols; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Joan Baptista de Vilartagues",
		type: "parroquia",
		coordinates: [41.7919529, 3.02543858],
		description: [
			"<h2>Sant Joan Baptista de Vilartagues</h2>",
			"<small>Divisió administrativa: Vilartagues; Sant Feliu de Guíxols; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria Assumpta de Sant Feliu de Guíxols",
		type: "parroquia",
		coordinates: [41.7859231, 3.03316331],
		description: [
			"<h2>Santa Maria Assumpta de Sant Feliu de Guíxols</h2>",
			"<small>Divisió administrativa: Sant Feliu de Guíxols; Sant Feliu de Guíxols; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Cristina d'Aro",
		type: "parroquia",
		coordinates: [41.8156467, 3.00344473],
		description: [
			"<h2>Santa Cristina d'Aro</h2>",
			"<small>Divisió administrativa: Santa Cristina d'Aro; Santa Cristina d'Aro; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Agnès de Solius",
		type: "parroquia",
		coordinates: [41.8149238, 2.9618462],
		description: [
			"<h2>Santa Agnès de Solius</h2>",
			"<small>Divisió administrativa: Solius; Santa Cristina d'Aro; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Torrent",
		type: "parroquia",
		coordinates: [41.95205695, 3.12714022],
		description: [
			"<h2>Sant Vicenç de Torrent</h2>",
			"<small>Divisió administrativa: Torrent; Torrent; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Mateu de Vall-llobrega",
		type: "parroquia",
		coordinates: [41.88116145, 3.12562756],
		description: [
			"<h2>Sant Mateu de Vall-llobrega</h2>",
			"<small>Divisió administrativa: Vall-llobrega; Vall-llobrega; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Nativitat de la Mare de Déu de Castell d'Aro",
		type: "parroquia",
		coordinates: [41.8152579, 3.03069885],
		description: [
			"<h2>Nativitat de la Mare de Déu de Castell d'Aro</h2>",
			"<small>Divisió administrativa: Castell d'Aro; Castell d'Aro, Platja d'Aro i s'Agaró; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Costa Brava Centre; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Quirze i Santa Julita d'Arbúcies",
		type: "parroquia",
		coordinates: [41.81623905, 2.51400811],
		description: [
			"<h2>Sant Quirze i Santa Julita d'Arbúcies</h2>",
			"<small>Divisió administrativa: Arbúcies; Arbúcies; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Breda",
		type: "parroquia",
		coordinates: [41.7486772, 2.55757231],
		description: [
			"<h2>Santa Maria de Breda</h2>",
			"<small>Divisió administrativa: Breda; Breda; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Fruitós de Brunyola",
		type: "parroquia",
		coordinates: [41.9045395, 2.68464619],
		description: [
			"<h2>Sant Fruitós de Brunyola</h2>",
			"<small>Divisió administrativa: Brunyola; Brunyola i Sant Martí Sapresa; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Andreu de Castanyet",
		type: "parroquia",
		coordinates: [41.8886034, 2.62374524],
		description: [
			"<h2>Sant Andreu de Castanyet</h2>",
			"<small>Divisió administrativa: Castanyet; Santa Coloma de Farners; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Corneli i Sant Cebrià de Fogars de la Selva",
		type: "parroquia",
		coordinates: [41.7391407, 2.6799772],
		description: [
			"<h2>Sant Corneli i Sant Cebrià de Fogars de la Selva</h2>",
			"<small>Divisió administrativa: Fogars de la Selva; Fogars de la Selva; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Llorenç de Gaserans",
		type: "parroquia",
		coordinates: [41.74936945, 2.59051855],
		description: [
			"<h2>Sant Llorenç de Gaserans</h2>",
			"<small>Divisió administrativa: Gaserans; Sant Feliu de Buixalleu; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Gabriel i Santa Anna de Grions",
		type: "parroquia",
		coordinates: [41.7610625, 2.60853094],
		description: [
			"<h2>Sant Gabriel i Santa Anna de Grions</h2>",
			"<small>Divisió administrativa: Grions; Sant Feliu de Buixalleu; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria dels Socors d'Hostalric",
		type: "parroquia",
		coordinates: [41.74556115, 2.63588731],
		description: [
			"<h2>Santa Maria dels Socors d'Hostalric</h2>",
			"<small>Divisió administrativa: Hostalric; Hostalric; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de l'Esparra",
		type: "parroquia",
		coordinates: [41.826295, 2.65758008],
		description: [
			"<h2>Sant Martí de l'Esparra</h2>",
			"<small>Divisió administrativa: L'Esparra; Riudarenes; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Llorenç de Maçanet de la Selva",
		type: "parroquia",
		coordinates: [41.77756445, 2.73056584],
		description: [
			"<h2>Sant Llorenç de Maçanet de la Selva</h2>",
			"<small>Divisió administrativa: Maçanet de la Selva; Maçanet de la Selva; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Martorell de la Selva",
		type: "parroquia",
		coordinates: [41.76158395, 2.69231799],
		description: [
			"<h2>Sant Pere de Martorell de la Selva</h2>",
			"<small>Divisió administrativa: Martorell de la Selva; Maçanet de la Selva; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Massanes",
		type: "parroquia",
		coordinates: [41.7657928, 2.65158073],
		description: [
			"<h2>Sant Esteve de Massanes</h2>",
			"<small>Divisió administrativa: Massanes; Massanes; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Andreu de Raminyó",
		type: "parroquia",
		coordinates: [41.71223345, 2.60977852],
		description: [
			"<h2>Sant Andreu de Raminyó</h2>",
			"<small>Divisió administrativa: Raminyó; Fogars de la Selva; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Tours de Riells de Montseny",
		type: "parroquia",
		coordinates: [41.77659325, 2.51262565],
		description: [
			"<h2>Sant Martí de Tours de Riells de Montseny</h2>",
			"<small>Divisió administrativa: Riells de Montseny; Riells i Viabrea; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Riudarenes",
		type: "parroquia",
		coordinates: [41.826295, 2.65758008],
		description: [
			"<h2>Sant Martí de Riudarenes</h2>",
			"<small>Divisió administrativa: Riudarenes; Riudarenes; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Salitja",
		type: "parroquia",
		coordinates: [41.90836605, 2.74711299],
		description: [
			"<h2>Santa Maria de Salitja</h2>",
			"<small>Divisió administrativa: Salitja; Vilobí d'Onyar; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Dalmau de Sant Dalmai",
		type: "parroquia",
		coordinates: [41.9148035, 2.73589606],
		description: [
			"<h2>Sant Dalmau de Sant Dalmai</h2>",
			"<small>Divisió administrativa: Sant Dalmai; Vilobí d'Onyar; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Buixalleu",
		type: "parroquia",
		coordinates: [41.7913141, 2.58639989],
		description: [
			"<h2>Sant Feliu de Buixalleu</h2>",
			"<small>Divisió administrativa: Sant Feliu de Buixalleu; Sant Feliu de Buixalleu; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel de Cladells",
		type: "parroquia",
		coordinates: [41.85718725, 2.56372089],
		description: [
			"<h2>Sant Miquel de Cladells</h2>",
			"<small>Divisió administrativa: Sant Miquel de Cladells; Santa Coloma de Farners; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere Cercada",
		type: "parroquia",
		coordinates: [41.8353236, 2.60827126],
		description: [
			"<h2>Sant Pere Cercada</h2>",
			"<small>Divisió administrativa: Sant Pere Cercada; Santa Coloma de Farners; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Coloma de Farners",
		type: "parroquia",
		coordinates: [41.86363315, 2.66297459],
		description: [
			"<h2>Santa Coloma de Farners</h2>",
			"<small>Divisió administrativa: Santa Coloma de Farners; Santa Coloma de Farners; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Sils",
		type: "parroquia",
		coordinates: [41.80586455, 2.74290778],
		description: [
			"<h2>Santa Maria de Sils</h2>",
			"<small>Divisió administrativa: Sils; Sils; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eulàlia de Vallcanera",
		type: "parroquia",
		coordinates: [41.84047645, 2.73812951],
		description: [
			"<h2>Santa Eulàlia de Vallcanera</h2>",
			"<small>Divisió administrativa: Vallcanera; Sils; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Llop i Sant Esteve de Viabrea",
		type: "parroquia",
		coordinates: [41.7468959, 2.54035993],
		description: [
			"<h2>Sant Llop i Sant Esteve de Viabrea</h2>",
			"<small>Divisió administrativa: Viabrea; Riells i Viabrea; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Vidreres",
		type: "parroquia",
		coordinates: [41.78904695, 2.77942353],
		description: [
			"<h2>Santa Maria de Vidreres</h2>",
			"<small>Divisió administrativa: Vidreres; Vidreres; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Vilobí d'Onyar",
		type: "parroquia",
		coordinates: [41.88890395, 2.74269518],
		description: [
			"<h2>Sant Esteve de Vilobí d'Onyar</h2>",
			"<small>Divisió administrativa: Vilobí d'Onyar; Vilobí d'Onyar; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Farners-Montseny; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Catedral - Mare de Déu del Carme",
		type: "parroquia",
		coordinates: [41.9875086, 2.82627354],
		description: [
			"<h2>Catedral - Mare de Déu del Carme</h2>",
			"<small>Divisió administrativa: Girona; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Girona",
		type: "parroquia",
		coordinates: [41.987969, 2.82486355],
		description: [
			"<h2>Sant Feliu de Girona</h2>",
			"<small>Divisió administrativa: Girona; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Susanna del Mercadal",
		type: "parroquia",
		coordinates: [41.9839569, 2.82245194],
		description: [
			"<h2>Santa Susanna del Mercadal</h2>",
			"<small>Divisió administrativa: El Mercadal; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Josep de Girona",
		type: "parroquia",
		coordinates: [41.9740053, 2.8237928],
		description: [
			"<h2>Sant Josep de Girona</h2>",
			"<small>Divisió administrativa: Girona; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eugènia de Ter",
		type: "parroquia",
		coordinates: [41.97349965, 2.8070994],
		description: [
			"<h2>Santa Eugènia de Ter</h2>",
			"<small>Divisió administrativa: Santa Eugènia de Ter; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Salvador d'Horta de Girona",
		type: "parroquia",
		coordinates: [41.9832038, 2.81234375],
		description: [
			"<h2>Sant Salvador d'Horta de Girona</h2>",
			"<small>Divisió administrativa: Girona; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Narcís de Girona",
		type: "parroquia",
		coordinates: [41.9749058, 2.81061399],
		description: [
			"<h2>Sant Narcís de Girona</h2>",
			"<small>Divisió administrativa: Girona; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pau de Girona",
		type: "parroquia",
		coordinates: [41.9700285, 2.81652385],
		description: [
			"<h2>Sant Pau de Girona</h2>",
			"<small>Divisió administrativa: Girona; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel de Palau-sacosta",
		type: "parroquia",
		coordinates: [41.95695235, 2.82226854],
		description: [
			"<h2>Sant Miquel de Palau-sacosta</h2>",
			"<small>Divisió administrativa: Palau-sacosta; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Sadurní de Palol d'Onyar - Vila-roja",
		type: "parroquia",
		coordinates: [41.9563553, 2.85056361],
		description: [
			"<h2>Sant Sadurní de Palol d'Onyar - Vila-roja</h2>",
			"<small>Divisió administrativa: Palol d'Onyar; Quart; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Daniel de Girona",
		type: "parroquia",
		coordinates: [41.9882585, 2.83333769],
		description: [
			"<h2>Sant Daniel de Girona</h2>",
			"<small>Divisió administrativa: Sant Daniel; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu de la Pietat del Pont Major",
		type: "parroquia",
		coordinates: [42.0123417, 2.82539614],
		description: [
			"<h2>Mare de Déu de la Pietat del Pont Major</h2>",
			"<small>Divisió administrativa: Pont Major; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Jaume de Campdorà",
		type: "parroquia",
		coordinates: [42.0129334, 2.8442261],
		description: [
			"<h2>Sant Jaume de Campdorà</h2>",
			"<small>Divisió administrativa: Campdorà; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Joan Baptista d'Aiguaviva",
		type: "parroquia",
		coordinates: [41.93846575, 2.76171733],
		description: [
			"<h2>Sant Joan Baptista d'Aiguaviva</h2>",
			"<small>Divisió administrativa: Aiguaviva; Aiguaviva; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cugat de Fornells de la Selva",
		type: "parroquia",
		coordinates: [41.93131225, 2.81273985],
		description: [
			"<h2>Sant Cugat de Fornells de la Selva</h2>",
			"<small>Divisió administrativa: Fornells de la Selva; Fornells de la Selva; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Montfullà",
		type: "parroquia",
		coordinates: [41.9683824, 2.75958883],
		description: [
			"<h2>Sant Pere de Montfullà</h2>",
			"<small>Divisió administrativa: Montfullà; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona - Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"Església parroquial del poble de Montfullà, al terme municipal de Bescanó. Se'n té constància des del 882."
		]
	},
	{
		name: "Sant Cugat de Salt",
		type: "parroquia",
		coordinates: [41.9746211, 2.78121752],
		description: [
			"<h2>Sant Cugat de Salt</h2>",
			"<small>Divisió administrativa: Salt; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Jaume de Salt",
		type: "parroquia",
		coordinates: [41.97681395, 2.79576019],
		description: [
			"<h2>Sant Jaume de Salt</h2>",
			"<small>Divisió administrativa: Salt; Girona; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pau de Sarrià de Dalt",
		type: "parroquia",
		coordinates: [42.01625635, 2.80880953],
		description: [
			"<h2>Sant Pau de Sarrià de Dalt</h2>",
			"<small>Divisió administrativa: Sarrià de Dalt; Sarrià de Ter; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu de la Misericòrdia de Sarrià de Ter",
		type: "parroquia",
		coordinates: [42.01592965, 2.82363728],
		description: [
			"<h2>Mare de Déu de la Misericòrdia de Sarrià de Ter</h2>",
			"<small>Divisió administrativa: Sarrià de Ter; Sarrià de Ter; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Menna de Vilablareix",
		type: "parroquia",
		coordinates: [41.95679725, 2.77294737],
		description: [
			"<h2>Sant Menna de Vilablareix</h2>",
			"<small>Divisió administrativa: Vilablareix; Vilablareix; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona-Salt; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria Assumpta d'Arenys de Mar",
		type: "parroquia",
		coordinates: [41.58064595, 2.54919409],
		description: [
			"<h2>Santa Maria Assumpta d'Arenys de Mar</h2>",
			"<small>Divisió administrativa: Arenys de Mar; Arenys de Mar; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Maresme; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Tours d'Arenys de Munt",
		type: "parroquia",
		coordinates: [41.6090238, 2.53984101],
		description: [
			"<h2>Sant Martí de Tours d'Arenys de Munt</h2>",
			"<small>Divisió administrativa: Arenys de Munt; Arenys de Munt; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Maresme; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria i Sant Nicolau de Calella",
		type: "parroquia",
		coordinates: [41.6138448, 2.65852968],
		description: [
			"<h2>Santa Maria i Sant Nicolau de Calella</h2>",
			"<small>Divisió administrativa: Calella; Calella; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Maresme; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere i Sant Pau de Canet de Mar",
		type: "parroquia",
		coordinates: [41.58984385, 2.58252345],
		description: [
			"<h2>Sant Pere i Sant Pau de Canet de Mar</h2>",
			"<small>Divisió administrativa: Canet de Mar; Canet de Mar; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Maresme; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Pineda de Mar",
		type: "parroquia",
		coordinates: [41.6288021, 2.68990416],
		description: [
			"<h2>Santa Maria de Pineda de Mar</h2>",
			"<small>Divisió administrativa: Pineda de Mar; Pineda de Mar; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Maresme; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Joan Baptista de Pineda de Mar",
		type: "parroquia",
		coordinates: [41.6186299, 2.6733232],
		description: [
			"<h2>Sant Joan Baptista de Pineda de Mar</h2>",
			"<small>Divisió administrativa: Pineda de Mar; Pineda de Mar; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Maresme; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cebrià de Vallalta",
		type: "parroquia",
		coordinates: [41.61988765, 2.59971418],
		description: [
			"<h2>Sant Cebrià de Vallalta</h2>",
			"<small>Divisió administrativa: Sant Cebrià de Vallalta; Sant Cebrià de Vallalta; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Maresme; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Iscle i Santa Victòria de Vallalta",
		type: "parroquia",
		coordinates: [41.6235331, 2.56941954],
		description: [
			"<h2>Sant Iscle i Santa Victòria de Vallalta</h2>",
			"<small>Divisió administrativa: Sant Iscle de Vallalta; Sant Iscle de Vallalta; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Maresme; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Jaume de Sant Pol de Mar",
		type: "parroquia",
		coordinates: [41.60014915, 2.6204301],
		description: [
			"<h2>Sant Jaume de Sant Pol de Mar</h2>",
			"<small>Divisió administrativa: Sant Pol de Mar; Sant Pol de Mar; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Maresme; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Susanna",
		type: "parroquia",
		coordinates: [41.6354566, 2.70775128],
		description: [
			"<h2>Santa Susanna</h2>",
			"<small>Divisió administrativa: Santa Susanna; Santa Susanna; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Maresme; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cugat d'Albons",
		type: "parroquia",
		coordinates: [42.1042921, 3.08571278],
		description: [
			"<h2>Sant Cugat d'Albons</h2>",
			"<small>Divisió administrativa: Albons; Albons; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Joan de Bellcaire d'Empordà",
		type: "parroquia",
		coordinates: [42.08098165, 3.09430946],
		description: [
			"<h2>Sant Joan de Bellcaire d'Empordà</h2>",
			"<small>Divisió administrativa: Bellcaire d'Empordà; Bellcaire d'Empordà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Cassà de Pelràs",
		type: "parroquia",
		coordinates: [42.0079442, 2.9946775],
		description: [
			"<h2>Sant Martí de Cassà de Pelràs</h2>",
			"<small>Divisió administrativa: Cassà de Pelràs; Corçà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Mateu de Canet de Verges",
		type: "parroquia",
		coordinates: [42.0529815, 3.06816203],
		description: [
			"<h2>Sant Mateu de Canet de Verges</h2>",
			"<small>Divisió administrativa: Canet de la Tallada; La Tallada d'Empordà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Genís de Casavells",
		type: "parroquia",
		coordinates: [41.99983595, 3.03307775],
		description: [
			"<h2>Sant Genís de Casavells</h2>",
			"<small>Divisió administrativa: Casavells; Corçà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Tours de Castell d'Empordà",
		type: "parroquia",
		coordinates: [41.9808389, 3.0520172],
		description: [
			"<h2>Sant Martí de Tours de Castell d'Empordà</h2>",
			"<small>Divisió administrativa: Castell d'Empordà; La Bisbal d'Empordà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Colomers",
		type: "parroquia",
		coordinates: [42.0841237, 2.9873452],
		description: [
			"<h2>Santa Maria de Colomers</h2>",
			"<small>Divisió administrativa: Colomers; Colomers; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Julià i Santa Basilissa de Corçà",
		type: "parroquia",
		coordinates: [41.98944205, 3.01729478],
		description: [
			"<h2>Sant Julià i Santa Basilissa de Corçà</h2>",
			"<small>Divisió administrativa: Corçà; Corçà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eulàlia de Cruïlles",
		type: "parroquia",
		coordinates: [41.9560322, 3.0115403],
		description: [
			"<h2>Santa Eulàlia de Cruïlles</h2>",
			"<small>Divisió administrativa: Cruïlles; Cruïlles, Monells i Sant Sadurní de l'Heura; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Coloma de Fitor",
		type: "parroquia",
		coordinates: [41.90598275, 3.08679099],
		description: [
			"<h2>Santa Coloma de Fitor</h2>",
			"<small>Divisió administrativa: Fitor; Vulpellac, Fonteta i Peratallada; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Joan de Foixà",
		type: "parroquia",
		coordinates: [42.03969805, 2.99682634],
		description: [
			"<h2>Sant Joan de Foixà</h2>",
			"<small>Divisió administrativa: Foixà; Foixà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cristòfol de Fonolleres",
		type: "parroquia",
		coordinates: [42.02103225, 3.05230082],
		description: [
			"<h2>Sant Cristòfol de Fonolleres</h2>",
			"<small>Divisió administrativa: Fonolleres; Parlavà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Fontanilles",
		type: "parroquia",
		coordinates: [42.01191795, 3.10755611],
		description: [
			"<h2>Sant Martí de Fontanilles</h2>",
			"<small>Divisió administrativa: Fontanilles; Fontanilles; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pau de Fontclara",
		type: "parroquia",
		coordinates: [41.9937876, 3.1229787],
		description: [
			"<h2>Sant Pau de Fontclara</h2>",
			"<small>Divisió administrativa: Fontclara; Palau-sator; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Fonteta",
		type: "parroquia",
		coordinates: [41.95035825, 3.057411],
		description: [
			"<h2>Santa Maria de Fonteta</h2>",
			"<small>Divisió administrativa: Fonteta; Vulpellac, Fonteta i Peratallada; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Sadurní de Garrigoles",
		type: "parroquia",
		coordinates: [42.1072742, 3.03058026],
		description: [
			"<h2>Sant Sadurní de Garrigoles</h2>",
			"<small>Divisió administrativa: Garrigoles; Garrigoles; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Gaüses",
		type: "parroquia",
		coordinates: [42.1062175, 2.96620448],
		description: [
			"<h2>Santa Maria de Gaüses</h2>",
			"<small>Divisió administrativa: Gaüses; Vilopriu; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Jafre",
		type: "parroquia",
		coordinates: [42.0726195, 3.01100648],
		description: [
			"<h2>Sant Martí de Jafre</h2>",
			"<small>Divisió administrativa: Jafre; Jafre; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Anna de l'Estartit",
		type: "parroquia",
		coordinates: [42.05539235, 3.19912507],
		description: [
			"<h2>Santa Anna de l'Estartit</h2>",
			"<small>Divisió administrativa: L'Estartit; Torroella de Montgrí; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de la Bisbal d'Empordà",
		type: "parroquia",
		coordinates: [41.9601415, 3.0385913],
		description: [
			"<h2>Santa Maria de la Bisbal d'Empordà</h2>",
			"<small>Divisió administrativa: La Bisbal d'Empordà; La Bisbal d'Empordà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Romà de Llabià",
		type: "parroquia",
		coordinates: [42.01825955, 3.08824497],
		description: [
			"<h2>Sant Romà de Llabià</h2>",
			"<small>Divisió administrativa: Llabià; Fontanilles; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Marenyà",
		type: "parroquia",
		coordinates: [42.09203485, 3.04648142],
		description: [
			"<h2>Sant Esteve de Marenyà</h2>",
			"<small>Divisió administrativa: Marenyà; La Tallada d'Empordà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Joan de Matajudaica",
		type: "parroquia",
		coordinates: [42.00572765, 3.04393075],
		description: [
			"<h2>Sant Joan de Matajudaica</h2>",
			"<small>Divisió administrativa: Matajudaica; Corçà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Genís de Monells",
		type: "parroquia",
		coordinates: [41.97537265, 2.99660152],
		description: [
			"<h2>Sant Genís de Monells</h2>",
			"<small>Divisió administrativa: Monells; Cruïlles, Monells i Sant Sadurní de l'Heura; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Palau-sator",
		type: "parroquia",
		coordinates: [41.9881336, 3.10965713],
		description: [
			"<h2>Sant Pere de Palau-sator</h2>",
			"<small>Divisió administrativa: Palau-sator; Palau-sator; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Parlavà",
		type: "parroquia",
		coordinates: [42.022225, 3.03004093],
		description: [
			"<h2>Sant Feliu de Parlavà</h2>",
			"<small>Divisió administrativa: Parlavà; Parlavà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Andreu de Pedrinyà",
		type: "parroquia",
		coordinates: [42.0094994, 2.96481432],
		description: [
			"<h2>Sant Andreu de Pedrinyà</h2>",
			"<small>Divisió administrativa: Pedrinyà; La Pera; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Peratallada",
		type: "parroquia",
		coordinates: [41.97962265, 3.09052207],
		description: [
			"<h2>Sant Esteve de Peratallada</h2>",
			"<small>Divisió administrativa: Peratallada; Vulpellac, Fonteta i Peratallada; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Púbol",
		type: "parroquia",
		coordinates: [42.01477385, 2.98337491],
		description: [
			"<h2>Sant Pere de Púbol</h2>",
			"<small>Divisió administrativa: Púbol; La Pera; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Rupià",
		type: "parroquia",
		coordinates: [42.0208274, 3.01046875],
		description: [
			"<h2>Sant Vicenç de Rupià</h2>",
			"<small>Divisió administrativa: Rupià; Rupià; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de la Sala",
		type: "parroquia",
		coordinates: [42.03300095, 3.01678473],
		description: [
			"<h2>Santa Maria de la Sala</h2>",
			"<small>Divisió administrativa: La Sala; Foixà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cebrià de Lledó",
		type: "parroquia",
		coordinates: [41.91247125, 2.96684931],
		description: [
			"<h2>Sant Cebrià de Lledó</h2>",
			"<small>Divisió administrativa: Lledó; Cruïlles, Monells i Sant Sadurní de l'Heura; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Climent de Peralta",
		type: "parroquia",
		coordinates: [41.94971565, 3.09529602],
		description: [
			"<h2>Sant Climent de Peralta</h2>",
			"<small>Divisió administrativa: Peralta; Vulpellac, Fonteta i Peratallada; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Boada",
		type: "parroquia",
		coordinates: [41.97377415, 3.12546174],
		description: [
			"<h2>Sant Feliu de Boada</h2>",
			"<small>Divisió administrativa: Sant Feliu de Boada; Palau-sator; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Iscle d'Empordà",
		type: "parroquia",
		coordinates: [42.03226725, 3.05696858],
		description: [
			"<h2>Sant Iscle d'Empordà</h2>",
			"<small>Divisió administrativa: Sant Iscle d'Empordà; Serra de Daró; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Llorenç de les Arenes",
		type: "parroquia",
		coordinates: [42.0611697, 2.97785482],
		description: [
			"<h2>Sant Llorenç de les Arenes</h2>",
			"<small>Divisió administrativa: Sant Llorenç de les Arenes; Foixà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Jaume de Sant Pol de la Bisbal",
		type: "parroquia",
		coordinates: [41.9295363, 3.036196],
		description: [
			"<h2>Sant Jaume de Sant Pol de la Bisbal</h2>",
			"<small>Divisió administrativa: Sant Pol; La Bisbal d'Empordà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Sadurní de l'Heura",
		type: "parroquia",
		coordinates: [41.9563527, 2.99099651],
		description: [
			"<h2>Sant Sadurní de l'Heura</h2>",
			"<small>Divisió administrativa: Sant Sadurní de l'Heura; Cruïlles, Monells i Sant Sadurní de l'Heura; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Pellaia",
		type: "parroquia",
		coordinates: [41.9201884, 2.91718523],
		description: [
			"<h2>Santa Pellaia</h2>",
			"<small>Divisió administrativa: Santa Pellaia; Cruïlles, Monells i Sant Sadurní de l'Heura; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de la Serra de Daró",
		type: "parroquia",
		coordinates: [42.0285908, 3.07228678],
		description: [
			"<h2>Santa Maria de la Serra de Daró</h2>",
			"<small>Divisió administrativa: Serra de Daró; Serra de Daró; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de la Tallada d'Empordà",
		type: "parroquia",
		coordinates: [42.080065, 3.05591842],
		description: [
			"<h2>Santa Maria de la Tallada d'Empordà</h2>",
			"<small>Divisió administrativa: La Tallada d'Empordà; La Tallada d'Empordà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Genís de Torroella de Montgrí",
		type: "parroquia",
		coordinates: [42.0435755, 3.12615477],
		description: [
			"<h2>Sant Genís de Torroella de Montgrí</h2>",
			"<small>Divisió administrativa: Torroella de Montgrí; Torroella de Montgrí; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria d'Ullà",
		type: "parroquia",
		coordinates: [42.0516553, 3.10825846],
		description: [
			"<h2>Santa Maria d'Ullà</h2>",
			"<small>Divisió administrativa: Ullà; Ullà; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere d'Ullastret",
		type: "parroquia",
		coordinates: [42.00049155, 3.06875805],
		description: [
			"<h2>Sant Pere d'Ullastret</h2>",
			"<small>Divisió administrativa: Ullastret; Ullastret; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eulàlia d'Ultramort",
		type: "parroquia",
		coordinates: [42.0362098, 3.03442728],
		description: [
			"<h2>Santa Eulàlia d'Ultramort</h2>",
			"<small>Divisió administrativa: Ultramort; Ultramort; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Mateu de Valldevià",
		type: "parroquia",
		coordinates: [42.12186655, 3.00189514],
		description: [
			"<h2>Sant Mateu de Valldevià</h2>",
			"<small>Divisió administrativa: Valldevià; Vilopriu; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Julià i Santa Basilissa de Verges",
		type: "parroquia",
		coordinates: [42.0608154, 3.04649848],
		description: [
			"<h2>Sant Julià i Santa Basilissa de Verges</h2>",
			"<small>Divisió administrativa: Verges; Verges; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Julià i Santa Basilissa de Vulpellac",
		type: "parroquia",
		coordinates: [41.96001935, 3.05460029],
		description: [
			"<h2>Sant Julià i Santa Basilissa de Vulpellac</h2>",
			"<small>Divisió administrativa: Vulpellac; Vulpellac, Fonteta i Peratallada; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eugènia de Saus",
		type: "parroquia",
		coordinates: [42.13244075, 2.97880564],
		description: [
			"<h2>Santa Eugènia de Saus</h2>",
			"<small>Divisió administrativa: Saus; Saus, Camallera i Llampaies; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Bartomeu de Camallera",
		type: "parroquia",
		coordinates: [42.1227162, 2.96203733],
		description: [
			"<h2>Sant Bartomeu de Camallera</h2>",
			"<small>Divisió administrativa: Camallera; Saus, Camallera i Llampaies; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Llampaies",
		type: "parroquia",
		coordinates: [42.12108425, 2.93673842],
		description: [
			"<h2>Sant Martí de Llampaies</h2>",
			"<small>Divisió administrativa: Llampaies; Saus, Camallera i Llampaies; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Vilopriu",
		type: "parroquia",
		coordinates: [42.10443655, 2.99180805],
		description: [
			"<h2>Sant Pere de Vilopriu</h2>",
			"<small>Divisió administrativa: Vilopriu; Vilopriu; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Vilaür",
		type: "parroquia",
		coordinates: [42.1436751, 2.95487676],
		description: [
			"<h2>Sant Esteve de Vilaür</h2>",
			"<small>Divisió administrativa: Vilaür; Vilaür; Alt Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Gualta",
		type: "parroquia",
		coordinates: [42.02923695, 3.10342642],
		description: [
			"<h2>Santa Maria de Gualta</h2>",
			"<small>Divisió administrativa: Gualta; Gualta; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Isidor de la Pera",
		type: "parroquia",
		coordinates: [42.0203908, 2.97361706],
		description: [
			"<h2>Sant Isidor de la Pera</h2>",
			"<small>Divisió administrativa: La Pera; La Pera; Baix Empordà; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Montgrí-La Bisbal; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Caldes de Malavella",
		type: "parroquia",
		coordinates: [41.8365337, 2.80884147],
		description: [
			"<h2>Sant Esteve de Caldes de Malavella</h2>",
			"<small>Divisió administrativa: Caldes de Malavella; Caldes de Malavella; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Selva; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Quirze i Santa Julita de Campllong",
		type: "parroquia",
		coordinates: [41.8910043, 2.83020333],
		description: [
			"<h2>Sant Quirze i Santa Julita de Campllong</h2>",
			"<small>Divisió administrativa: Campllong; Campllong; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Selva; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Tours de Cassà de la Selva",
		type: "parroquia",
		coordinates: [41.88742115, 2.87453799],
		description: [
			"<h2>Sant Martí de Tours de Cassà de la Selva</h2>",
			"<small>Divisió administrativa: Cassà de la Selva; Cassà de la Selva; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Selva; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
		{
		name: "Sant Martí de Castellar de la Selva",
		type: "parroquia",
		coordinates: [41.94911765, 2.86946964],
		description: [
			"<h2>Sant Martí de Castellar de la Selva</h2>",
			"<small>Divisió administrativa: Castellar de la Selva; Quart; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Selva; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Mateu de Franciac",
		type: "parroquia",
		coordinates: [41.87388045, 2.78566034],
		description: [
			"<h2>Sant Mateu de Franciac</h2>",
			"<small>Divisió administrativa: Franciac; Caldes de Malavella; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Selva; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Llagostera",
		type: "parroquia",
		coordinates: [41.8287143, 2.8923401],
		description: [
			"<h2>Sant Feliu de Llagostera</h2>",
			"<small>Divisió administrativa: Llagostera; Llagostera; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Selva; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
		{
		name: "Sant Cristòfol de Llambilles",
		type: "parroquia",
		coordinates: [41.92102435, 2.85919633],
		description: [
			"<h2>Sant Cristòfol de Llambilles</h2>",
			"<small>Divisió administrativa: Llambilles; Llambilles; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Selva; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Mateu de Montnegre",
		type: "parroquia",
		coordinates: [41.9459437, 2.9033014],
		description: [
			"<h2>Sant Mateu de Montnegre</h2>",
			"<small>Divisió administrativa: Montnegre; Quart; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Selva; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Margarida de Quart",
		type: "parroquia",
		coordinates: [41.9405005, 2.84574399],
		description: [
			"<h2>Santa Margarida de Quart</h2>",
			"<small>Divisió administrativa: Quart; Quart; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Selva; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
		{
		name: "Sant Esteve de Riudellots de la Selva",
		type: "parroquia",
		coordinates: [41.8927056, 2.80364023],
		description: [
			"<h2>Sant Esteve de Riudellots de la Selva</h2>",
			"<small>Divisió administrativa: Riudellots de la Selva; Riudellots de la Selva; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Selva; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Andreu Salou",
		type: "parroquia",
		coordinates: [41.8738873, 2.82535646],
		description: [
			"<h2>Sant Andreu Salou</h2>",
			"<small>Divisió administrativa: Sant Andreu Salou; Sant Andreu Salou; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Selva; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Seclina de Caldes de Malavella",
		type: "parroquia",
		coordinates: [41.79840265, 2.84892413],
		description: [
			"<h2>Santa Seclina de Caldes de Malavella</h2>",
			"<small>Divisió administrativa: Santa Seclina; Caldes de Malavella; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Selva; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria d'Amer",
		type: "parroquia",
		coordinates: [42.0098447, 2.6019394],
		description: [
			"<h2>Santa Maria d'Amer</h2>",
			"<small>Divisió administrativa: Amer; Amer; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Santa_Maria_d%27Amer_%28vista_posterior%29.jpg/640px-Santa_Maria_d%27Amer_%28vista_posterior%29.jpg'/><br/>",
			"Antic monestir al terme municipal d'Amer. Se'n té constància des del 844, quan era una casa propietat del monestir de Sant Medir.<br/>Es consagrà com a monestir de Santa Maria el 9 de novembre del 949, després de les ràtzies hongareses del segle <span style='font-variant: small-caps'>x</span>.<br/>El 1657, durant la Guerra dels Segadors, el monestir va ser destruït parcialment i va haver d'assumir les funcions parroquials després de la destrucció de l'església parroquial de Sant Miquel d'Amer.<br/>El 1835 es va produir l'exclaustració forçosa dels monjos del monestir i va quedar abandonat, fent únicament les funcions d'església parroquial."
		],
		visited: true
	},
	{
		name: "Sant Miquel d'Anglès",
		type: "parroquia",
		coordinates: [41.9564875, 2.63892074],
		description: [
			"<h2>Sant Miquel d'Anglès</h2>",
			"<small>Divisió administrativa: Anglès; Anglès; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Sant_Miquel_d%27Angl%C3%A8s_%28fa%C3%A7ana_principal%29.jpg/320px-Sant_Miquel_d%27Angl%C3%A8s_%28fa%C3%A7ana_principal%29.jpg'/><br/>",
			"Església parroquial de la vila d'Anglès, al terme municipal homònim. Se'n té constància des del segle <span style='font-variant: small-caps'>xiii</span>, quan era una capella del castell d'Anglès dependent de la parròquia de Santa Maria de Sales de la Cellera.<br/>Malgrat alguns intents d'independitzar-se ja des dels segles <span style='font-variant: small-caps'>xvi</span> i <span style='font-variant: small-caps'>xvii</span>, no és fins al 1788 que la parròquia queda independent <i>de facto</i>.<br/>Aquesta independència no serà reconeguda <i>de iure</i> fins al 1859."
		],
		visited: true
	},
	{
		name: "Sant Llorenç de Bescanó",
		type: "parroquia",
		coordinates: [41.9654651, 2.74271562],
		description: [
			"<h2>Sant Llorenç de Bescanó</h2>",
			"<small>Divisió administrativa: Bescanó; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Sant_Lloren%C3%A7_de_Bescan%C3%B3_%28vista_general%29.jpg/640px-Sant_Lloren%C3%A7_de_Bescan%C3%B3_%28vista_general%29.jpg'/><br/>",
			"Església parroquial de la vila de Bescanó, al terme municipal homònim. Se'n té constància des del 1058.",
			"<br/><a href='#sant_llorenc_de_bescano'>Veure més informació</a>"
		],
		visited: true
	},
	{
		name: "Sant Cristòfol de Cogolls",
		type: "parroquia",
		coordinates: [42.08536605, 2.54191419],
		description: [
			"<h2>Sant Cristòfol de Cogolls</h2>",
			"<small>Divisió administrativa: Cogolls; Les Planes d'Hostoles; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Constantins",
		type: "parroquia",
		coordinates: [41.98261475, 2.68992813],
		description: [
			"<h2>Sant Vicenç de Constantins</h2>",
			"<small>Divisió administrativa: Constantins; Sant Gregori; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Andreu d'Estanyol",
		type: "parroquia",
		coordinates: [41.94147005, 2.74083832],
		description: [
			"<h2>Sant Andreu d'Estanyol</h2>",
			"<small>Divisió administrativa: Estanyol; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"Església parroquial del poble d'Estanyol, al terme municipal de Bescanó. Se'n té constància des del 888."
		]
	},
	{
		name: "Santa Maria de Sales de la Cellera de Ter",
		type: "parroquia",
		coordinates: [41.96906665, 2.62103274],
		description: [
			"<h2>Santa Maria de Sales de la Cellera de Ter</h2>",
			"<small>Divisió administrativa: La Cellera de Ter; La Cellera de Ter; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Santa_Maria_de_Sales_de_la_Cellera_de_Ter_%28fa%C3%A7ana_sud%29.jpg/320px-Santa_Maria_de_Sales_de_la_Cellera_de_Ter_%28fa%C3%A7ana_sud%29.jpg'/><br/>",
			"Església parroquial de la vila de la Cellera de Ter, al terme municipal homònim. Se'n té constància des del 860."
		],
		visited: true
	},
	{
		name: "Santa Maria de les Encies",
		type: "parroquia",
		coordinates: [42.0660971, 2.5760723],
		description: [
			"<h2>Santa Maria de les Encies</h2>",
			"<small>Divisió administrativa: Les Encies; Les Planes d'Hostoles; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Pallerols",
		type: "parroquia",
		coordinates: [42.07566645, 2.50787371],
		description: [
			"<h2>Sant Feliu de Pallerols</h2>",
			"<small>Divisió administrativa: Sant Feliu de Pallerols; Sant Feliu de Pallerols; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cristòfol de les Planes d'Hostoles",
		type: "parroquia",
		coordinates: [42.05540395, 2.53682005],
		description: [
			"<h2>Sant Cristòfol de les Planes d'Hostoles</h2>",
			"<small>Divisió administrativa: Les Planes d'Hostoles; Les Planes d'Hostoles; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Climent d'Amer",
		type: "parroquia",
		coordinates: [42.00448425, 2.63707312],
		description: [
			"<h2>Sant Climent d'Amer</h2>",
			"<small>Divisió administrativa: Sant Climent d'Amer; Amer; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Iscle de Colltort",
		type: "parroquia",
		coordinates: [42.11938395, 2.52859964],
		description: [
			"<h2>Sant Iscle de Colltort</h2>",
			"<small>Divisió administrativa: Sant Iscle de Colltort; Sant Feliu de Pallerols; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Julià del Llor",
		type: "parroquia",
		coordinates: [41.9691693, 2.64765435],
		description: [
			"<h2>Sant Julià del Llor</h2>",
			"<small>Divisió administrativa: Sant Julià del Llor; Sant Julià del Llor i Bonmatí; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Ermita_de_Sant_Juli%C3%A0_del_Llor_%28fa%C3%A7ana_principal%29.jpg/320px-Ermita_de_Sant_Juli%C3%A0_del_Llor_%28fa%C3%A7ana_principal%29.jpg'/><br/>",
			"Església parroquial de la vila de Sant Julià del Llor, al terme municipal de Sant Julià del Llor i Bonmatí. Se'n té constància des del 9 de novembre del 949."
		],
		visited: true
	},
	{
		name: "Sant Martí Sapresa",
		type: "parroquia",
		coordinates: [41.9258702, 2.65076857],
		description: [
			"<h2>Sant Martí Sapresa</h2>",
			"<small>Divisió administrativa: Sant Martí Sapresa; Brunyola i Sant Martí Sapresa; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel de Pineda",
		type: "parroquia",
		coordinates: [42.1019487, 2.49407539],
		description: [
			"<h2>Sant Miquel de Pineda</h2>",
			"<small>Divisió administrativa: Sant Miquel de Pineda; Sant Feliu de Pallerols; Garrotxa; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Mateu de Vilanna",
		type: "parroquia",
		coordinates: [41.97590025, 2.70329996],
		description: [
			"<h2>Sant Mateu de Vilanna</h2>",
			"<small>Divisió administrativa: Vilanna; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Sant_Mateu_de_Vilanna_%28vista_general%29.jpg/640px-Sant_Mateu_de_Vilanna_%28vista_general%29.jpg'/><br/>",
			"Església parroquial del poble de Vilanna, al terme municipal de Bescanó. Se'n té constància des del 899."
		],
		visited: true
	},
	{
		name: "Santa Maria de Bonmatí",
		type: "parroquia",
		coordinates: [41.97041145, 2.66350846],
		description: [
			"<h2>Santa Maria de Bonmatí</h2>",
			"<small>Divisió administrativa: Bonmatí; Sant Julià del Llor i Bonmatí; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter-Brugent; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Blanes",
		type: "parroquia",
		coordinates: [41.67591295, 2.79279957],
		description: [
			"<h2>Santa Maria de Blanes</h2>",
			"<small>Divisió administrativa: Blanes; Blanes; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Tordera; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sagrada Família de Blanes",
		type: "parroquia",
		coordinates: [41.6661405, 2.78466881],
		description: [
			"<h2>Sagrada Família de Blanes</h2>",
			"<small>Divisió administrativa: Blanes; Blanes; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Tordera; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Teresa de Blanes",
		type: "parroquia",
		coordinates: [41.6830174, 2.7805187],
		description: [
			"<h2>Santa Teresa de Blanes</h2>",
			"<small>Divisió administrativa: Blanes; Blanes; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Tordera; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eulàlia d'Hortsavinyà",
		type: "parroquia",
		coordinates: [41.6678233, 2.62869088],
		description: [
			"<h2>Santa Eulàlia d'Hortsavinyà</h2>",
			"<small>Divisió administrativa: Hortsavinyà; Tordera; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Tordera; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel de Vallmanya",
		type: "parroquia",
		coordinates: [41.672915, 2.653393],
		description: [
			"<h2>Sant Miquel de Vallmanya</h2>",
			"<small>Divisió administrativa: Hortsavinyà; Tordera; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Tordera; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Romà de Lloret de Mar",
		type: "parroquia",
		coordinates: [41.69968615, 2.84752013],
		description: [
			"<h2>Sant Romà de Lloret de Mar</h2>",
			"<small>Divisió administrativa: Lloret de Mar; Lloret de Mar; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Tordera; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Nicolau de Malgrat de Mar",
		type: "parroquia",
		coordinates: [41.64642915, 2.7424441],
		description: [
			"<h2>Sant Nicolau de Malgrat de Mar</h2>",
			"<small>Divisió administrativa: Malgrat de Mar; Malgrat de Mar; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Tordera; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Palafolls",
		type: "parroquia",
		coordinates: [41.6681724, 2.74938369],
		description: [
			"<h2>Santa Maria de Palafolls</h2>",
			"<small>Divisió administrativa: Palafolls; Palafolls; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Tordera; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Genís de Palafolls",
		type: "parroquia",
		coordinates: [41.6601911, 2.72244843],
		description: [
			"<h2>Sant Genís de Palafolls</h2>",
			"<small>Divisió administrativa: Sant Genís de Palafolls; Palafolls; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Tordera; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Tordera",
		type: "parroquia",
		coordinates: [41.7017954, 2.71883661],
		description: [
			"<h2>Sant Esteve de Tordera</h2>",
			"<small>Divisió administrativa: Tordera; Tordera; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Tordera; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Tossa de Mar",
		type: "parroquia",
		coordinates: [41.71794315, 2.93083686],
		description: [
			"<h2>Sant Vicenç de Tossa de Mar</h2>",
			"<small>Divisió administrativa: Tossa de Mar; Tossa de Mar; Selva; Comarques gironines; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Tordera; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Riu",
		type: "parroquia",
		coordinates: [41.6473028, 2.67771696],
		description: [
			"<h2>Sant Pere de Riu</h2>",
			"<small>Divisió administrativa: Hortsavinyà; Tordera; Maresme; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de la Tordera; Bisbat de Girona; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel de Castelltallat",
		type: "parroquia",
		coordinates: [41.79365565, 1.63297935],
		description: [
			"<h2>Sant Miquel de Castelltallat</h2>",
			"<small>Divisió administrativa: Castelltallat; Sant Mateu de Bages; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Camps",
		type: "parroquia",
		coordinates: [41.7772943, 1.68431734],
		description: [
			"<h2>Santa Maria de Camps</h2>",
			"<small>Divisió administrativa: Camps; Fonollosa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Creu de Fonollosa",
		type: "parroquia",
		coordinates: [41.76328945, 1.66921464],
		description: [
			"<h2>Santa Creu de Fonollosa</h2>",
			"<small>Divisió administrativa: Fonollosa; Fonollosa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Fals",
		type: "parroquia",
		coordinates: [41.74239005, 1.71410014],
		description: [
			"<h2>Sant Vicenç de Fals</h2>",
			"<small>Divisió administrativa: Canet de Fals; Fonollosa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Iscle i Santa Victòria de Rajadell",
		type: "parroquia",
		coordinates: [41.7289245, 1.70631459],
		description: [
			"<h2>Sant Iscle i Santa Victòria de Rajadell</h2>",
			"<small>Divisió administrativa: Rajadell; Rajadell; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Monistrolet",
		type: "parroquia",
		coordinates: [41.72958025, 1.76020259],
		description: [
			"<h2>Santa Maria de Monistrolet</h2>",
			"<small>Divisió administrativa: Monistrolet; Rajadell; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Sadurní de Callús",
		type: "parroquia",
		coordinates: [41.78315655, 1.784281],
		description: [
			"<h2>Sant Sadurní de Callús</h2>",
			"<small>Divisió administrativa: Callús; Callús; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Mateu de Bages",
		type: "parroquia",
		coordinates: [41.79600115, 1.73186799],
		description: [
			"<h2>Sant Mateu de Bages</h2>",
			"<small>Divisió administrativa: Sant Mateu de Bages; Sant Mateu de Bages; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Rocafort",
		type: "parroquia",
		coordinates: [41.71704915, 1.93645236],
		description: [
			"<h2>Santa Maria de Rocafort</h2>",
			"<small>Divisió administrativa: Rocafort de Bages; El Pont de Vilomara i Rocafort; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Magdalena del Pont de Vilomara",
		type: "parroquia",
		coordinates: [41.70413005, 1.87188261],
		description: [
			"<h2>Santa Magdalena del Pont de Vilomara</h2>",
			"<small>Divisió administrativa: El Pont de Vilomara; El Pont de Vilomara i Rocafort; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Cecília de Grevalosa",
		type: "parroquia",
		coordinates: [41.693103, 1.6539785],
		description: [
			"<h2>Santa Cecília de Grevalosa</h2>",
			"<small>Divisió administrativa: Grevalosa; Castellfollit del Boix; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Castellfollit del Boix",
		type: "parroquia",
		coordinates: [41.6696256, 1.70127669],
		description: [
			"<h2>Sant Pere de Castellfollit del Boix</h2>",
			"<small>Divisió administrativa: Castellfollit del Boix; Castellfollit del Boix; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Salvador de Guardiola",
		type: "parroquia",
		coordinates: [41.6729413, 1.76476607],
		description: [
			"<h2>Sant Salvador de Guardiola</h2>",
			"<small>Divisió administrativa: Sant Salvador de Guardiola; Sant Salvador de Guardiola; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Miquel de Castellgalí",
		type: "parroquia",
		coordinates: [41.67624105, 1.8396505],
		description: [
			"<h2>Sant Miquel de Castellgalí</h2>",
			"<small>Divisió administrativa: Castellgalí; Castellgalí; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Castellet",
		type: "parroquia",
		coordinates: [41.6674563, 1.86449545],
		description: [
			"<h2>Sant Vicenç de Castellet</h2>",
			"<small>Divisió administrativa: Sant Vicenç de Castellet; Sant Vicenç de Castellet; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Castellbell",
		type: "parroquia",
		coordinates: [41.6418209, 1.8618177],
		description: [
			"<h2>Sant Vicenç de Castellbell</h2>",
			"<small>Divisió administrativa: Castellbell i el Vilar; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria del Vilar",
		type: "parroquia",
		coordinates: [41.63373185, 1.86056251],
		description: [
			"<h2>Santa Maria del Vilar</h2>",
			"<small>Divisió administrativa: El Vilar; Castellbell i el Vilar; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere i Sant Fermí de Rellinars",
		type: "parroquia",
		coordinates: [41.6399481, 1.91161711],
		description: [
			"<h2>Sant Pere i Sant Fermí de Rellinars</h2>",
			"<small>Divisió administrativa: Rellinars; Rellinars; Vallès Occidental; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Vacarisses",
		type: "parroquia",
		coordinates: [41.60710955, 1.91761648],
		description: [
			"<h2>Sant Pere de Vacarisses</h2>",
			"<small>Divisió administrativa: Vacarisses; Vacarisses; Vallès Occidental; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Bages - Sud; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Sadurní de Salelles",
		type: "parroquia",
		coordinates: [41.7017875, 1.7858891],
		description: [
			"<h2>Sant Sadurní de Salelles</h2>",
			"<small>Divisió administrativa: Sant Salvador de Guardiola; Sant Salvador de Guardiola; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Joan de Vilatorrada",
		type: "parroquia",
		coordinates: [41.74301905, 1.80464166],
		description: [
			"<h2>Sant Joan de Vilatorrada</h2>",
			"<small>Divisió administrativa: Sant Joan de Vilatorrada; Sant Joan de Vilatorrada; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu del Roser de Manresa",
		type: "parroquia",
		coordinates: [41.71525695, 1.80568991],
		description: [
			"<h2>Mare de Déu del Roser de Manresa</h2>",
			"<small>Divisió administrativa: Manresa; Manresa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santuari de la Mare de Déu de la Salut",
		type: "parroquia",
		coordinates: [41.720613, 1.8629232],
		description: [
			"<h2>Santuari de la Mare de Déu de la Salut</h2>",
			"<small>Divisió administrativa: Viladordis; Manresa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu de l'Esperança de Manresa",
		type: "parroquia",
		coordinates: [41.7383492, 1.8214913],
		description: [
			"<h2>Mare de Déu de l'Esperança de Manresa</h2>",
			"<small>Divisió administrativa: Manresa; Manresa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere Apòstol de Manresa",
		type: "parroquia",
		coordinates: [41.7354052, 1.8324074],
		description: [
			"<h2>Sant Pere Apòstol de Manresa</h2>",
			"<small>Divisió administrativa: Manresa; Manresa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Josep de Manresa",
		type: "parroquia",
		coordinates: [41.73352215, 1.82472665],
		description: [
			"<h2>Sant Josep de Manresa</h2>",
			"<small>Divisió administrativa: Manresa; Manresa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Crist Rei de Manresa",
		type: "parroquia",
		coordinates: [41.72846255, 1.82313778],
		description: [
			"<h2>Crist Rei de Manresa</h2>",
			"<small>Divisió administrativa: Manresa; Manresa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sagrada Família de Manresa",
		type: "parroquia",
		coordinates: [41.727308, 1.83824519],
		description: [
			"<h2>Sagrada Família de Manresa</h2>",
			"<small>Divisió administrativa: Manresa; Manresa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Montserrat de Manresa",
		type: "parroquia",
		coordinates: [41.72173735, 1.82409221],
		description: [
			"<h2>Santa Maria de Montserrat de Manresa</h2>",
			"<small>Divisió administrativa: Manresa; Manresa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de la Seu de Manresa",
		type: "parroquia",
		coordinates: [41.7219144, 1.82720071],
		description: [
			"<h2>Santa Maria de la Seu de Manresa</h2>",
			"<small>Divisió administrativa: Manresa; Manresa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Valldaura de Manresa",
		type: "parroquia",
		coordinates: [41.72424461, 1.81888103],
		description: [
			"<h2>Santa Maria de Valldaura de Manresa</h2>",
			"<small>Divisió administrativa: Manresa; Manresa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu de la Mercè de Manresa",
		type: "parroquia",
		coordinates: [41.7241852, 1.8221874],
		description: [
			"<h2>Mare de Déu de la Mercè de Manresa</h2>",
			"<small>Divisió administrativa: Manresa; Manresa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu del Carme de Manresa",
		type: "parroquia",
		coordinates: [41.7245963, 1.82675415],
		description: [
			"<h2>Mare de Déu del Carme de Manresa</h2>",
			"<small>Divisió administrativa: Manresa; Manresa; Bages; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Manresa; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Terrassola",
		type: "parroquia",
		coordinates: [41.89458165, 2.10220793],
		description: [
			"<h2>Sant Feliu de Terrassola</h2>",
			"<small>Divisió administrativa: Sant Feliuet de Terrassola; Santa Maria d'Oló; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de l'Estany",
		type: "parroquia",
		coordinates: [41.86929955, 2.11252284],
		description: [
			"<h2>Santa Maria de l'Estany</h2>",
			"<small>Divisió administrativa: L'Estany; L'Estany; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Rodors",
		type: "parroquia",
		coordinates: [41.8411352, 2.0825465],
		description: [
			"<h2>Sant Feliu de Rodors</h2>",
			"<small>Divisió administrativa: Rodors; Moià; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Ferrerons",
		type: "parroquia",
		coordinates: [41.8290546, 2.12751211],
		description: [
			"<h2>Sant Pere de Ferrerons</h2>",
			"<small>Divisió administrativa: Ferrerons; Moià; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Collsuspina",
		type: "parroquia",
		coordinates: [41.82534195, 2.17481536],
		description: [
			"<h2>Santa Maria de Collsuspina</h2>",
			"<small>Divisió administrativa: Collsuspina; Collsuspina; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Maria de Moià",
		type: "parroquia",
		coordinates: [41.8117736, 2.0986152],
		description: [
			"<h2>Santa Maria de Moià</h2>",
			"<small>Divisió administrativa: Moià; Moià; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Coloma Sasserra",
		type: "parroquia",
		coordinates: [41.79461475, 2.16866578],
		description: [
			"<h2>Santa Coloma Sasserra</h2>",
			"<small>Divisió administrativa: Santa Coloma Sasserra; Castellcir; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Calders",
		type: "parroquia",
		coordinates: [41.7892225, 1.99195319],
		description: [
			"<h2>Sant Vicenç de Calders</h2>",
			"<small>Divisió administrativa: Calders; Calders; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere de Marfà",
		type: "parroquia",
		coordinates: [41.7799672, 2.06963563],
		description: [
			"<h2>Sant Pere de Marfà</h2>",
			"<small>Divisió administrativa: Marfà; Castellcir; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Andreu de Castellcir",
		type: "parroquia",
		coordinates: [41.76010785, 2.16072712],
		description: [
			"<h2>Sant Andreu de Castellcir</h2>",
			"<small>Divisió administrativa: Castellcir; Castellcir; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Monistrol de Calders",
		type: "parroquia",
		coordinates: [41.75978115, 2.01409284],
		description: [
			"<h2>Sant Feliu de Monistrol de Calders</h2>",
			"<small>Divisió administrativa: Monistrol de Calders; Monistrol de Calders; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Fruitós de Castellterçol",
		type: "parroquia",
		coordinates: [41.75177975, 2.12114919],
		description: [
			"<h2>Sant Fruitós de Castellterçol</h2>",
			"<small>Divisió administrativa: Castellterçol; Castellterçol; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Quirze i Santa Julita Safaja",
		type: "parroquia",
		coordinates: [41.7278969, 2.15508659],
		description: [
			"<h2>Sant Quirze i Santa Julita Safaja</h2>",
			"<small>Divisió administrativa: Sant Quirze Safaja; Sant Quirze Safaja; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Granera",
		type: "parroquia",
		coordinates: [41.72541025, 2.05720196],
		description: [
			"<h2>Sant Martí de Granera</h2>",
			"<small>Divisió administrativa: Granera; Granera; Moianès; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Riells del Fai",
		type: "parroquia",
		coordinates: [41.6988595, 2.19850793],
		description: [
			"<h2>Sant Vicenç de Riells del Fai</h2>",
			"<small>Divisió administrativa: Riells del Fai; Bigues i Riells del Fai; Vallès Oriental; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Pere i Sant Feliu de Gallifa",
		type: "parroquia",
		coordinates: [41.6950903, 2.11268826],
		description: [
			"<h2>Sant Pere i Sant Feliu de Gallifa</h2>",
			"<small>Divisió administrativa: Gallifa; Gallifa; Vallès Occidental; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Feliu de Codines",
		type: "parroquia",
		coordinates: [41.6879004, 2.16172879],
		description: [
			"<h2>Sant Feliu de Codines</h2>",
			"<small>Divisió administrativa: Sant Feliu de Codines; Sant Feliu de Codines; Vallès Oriental; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Llorenç Savall",
		type: "parroquia",
		coordinates: [41.6786601, 2.0578365],
		description: [
			"<h2>Sant Llorenç Savall</h2>",
			"<small>Divisió administrativa: Sant Llorenç Savall; Sant Llorenç Savall; Vallès Occidental; Àmbit metropolità de Barcelona; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Moianès; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Granollers de la Plana",
		type: "parroquia",
		coordinates: [41.97660685, 2.27481709],
		description: [
			"<h2>Sant Esteve de Granollers de la Plana</h2>",
			"<small>Divisió administrativa: Granollers de la Plana; Gurb; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Cristòfol de Vespella",
		type: "parroquia",
		coordinates: [41.9691282, 2.20631255],
		description: [
			"<h2>Sant Cristòfol de Vespella</h2>",
			"<small>Divisió administrativa: Vespella de Gaià; Vespella de Gaià; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Andreu de Gurb",
		type: "parroquia",
		coordinates: [41.95538145, 2.22208265],
		description: [
			"<h2>Sant Andreu de Gurb</h2>",
			"<small>Divisió administrativa: Gurb; Gurb; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Julià Sassorba",
		type: "parroquia",
		coordinates: [41.95108675, 2.1837275],
		description: [
			"<h2>Sant Julià Sassorba</h2>",
			"<small>Divisió administrativa: Sant Julià Sassorba; Gurb; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Santa Eulàlia de Riuprimer",
		type: "parroquia",
		coordinates: [41.9103794, 2.18895364],
		description: [
			"<h2>Santa Eulàlia de Riuprimer</h2>",
			"<small>Divisió administrativa: Santa Eulàlia de Riuprimer; Santa Eulàlia de Riuprimer; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Quirze i Santa Julita de Muntanyola",
		type: "parroquia",
		coordinates: [41.8783724, 2.1775929],
		description: [
			"<h2>Sant Quirze i Santa Julita de Muntanyola</h2>",
			"<small>Divisió administrativa: Muntanyola; Muntanyola; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Esteve de Múnter",
		type: "parroquia",
		coordinates: [41.8785098, 2.2132105],
		description: [
			"<h2>Sant Esteve de Múnter</h2>",
			"<small>Divisió administrativa: Múnter; Muntanyola; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Vicenç de Malla",
		type: "parroquia",
		coordinates: [41.887195, 2.23470976],
		description: [
			"<h2>Sant Vicenç de Malla</h2>",
			"<small>Divisió administrativa: Malla; Malla; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Martí de Sentfores",
		type: "parroquia",
		coordinates: [41.9081539, 2.20435209],
		description: [
			"<h2>Sant Martí de Sentfores</h2>",
			"<small>Divisió administrativa: Sentfores; Vic; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu de la Mercè de Calldetenes",
		type: "parroquia",
		coordinates: [41.9259898, 2.2835416],
		description: [
			"<h2>Mare de Déu de la Mercè de Calldetenes</h2>",
			"<small>Divisió administrativa: Calldetenes; Calldetenes; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Nostra Senyora de Lurdes de Vic",
		type: "parroquia",
		coordinates: [41.92190375, 2.25367617],
		description: [
			"<h2>Nostra Senyora de Lurdes de Vic</h2>",
			"<small>Divisió administrativa: Vic; Vic; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu del Remei de Vic",
		type: "parroquia",
		coordinates: [41.9231337, 2.24940963],
		description: [
			"<h2>Mare de Déu del Remei de Vic</h2>",
			"<small>Divisió administrativa: Vic; Vic; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Divina Pastora de Vic",
		type: "parroquia",
		coordinates: [41.93126615, 2.26098793],
		description: [
			"<h2>Divina Pastora de Vic</h2>",
			"<small>Divisió administrativa: Vic; Vic; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Mare de Déu del Carme de Vic",
		type: "parroquia",
		coordinates: [41.93122945, 2.2530011],
		description: [
			"<h2>Mare de Déu del Carme de Vic</h2>",
			"<small>Divisió administrativa: Vic; Vic; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Pietat de Vic",
		type: "parroquia",
		coordinates: [41.92928895, 2.25655726],
		description: [
			"<h2>Pietat de Vic</h2>",
			"<small>Divisió administrativa: Vic; Vic; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Sant Domènec de Vic",
		type: "parroquia",
		coordinates: [41.9277659, 2.2525086],
		description: [
			"<h2>Sant Domènec de Vic</h2>",
			"<small>Divisió administrativa: Vic; Vic; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Catedral Basílica de Sant Pere de Vic",
		type: "parroquia",
		coordinates: [41.92806505, 2.2556061],
		description: [
			"<h2>Catedral Basílica de Sant Pere de Vic</h2>",
			"<small>Divisió administrativa: Vic; Vic; Osona; Comarques centrals; Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Vic; Bisbat de Vic; Província eclesiàstica Tarraconense</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Santa Maria d'Agullana",
		type: "cementiri",
		coordinates: [42.393881, 2.846673],
		description: [
			"<h2>Cementiri Parroquial de Santa Maria d'Agullana</h2>",
			"<small>Divisió administrativa: Agullana; Agullana; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Agullana",
		type: "cementiri",
		coordinates: [42.3892163, 2.8558072],
		description: [
			"<h2>Cementiri Municipal d'Agullana</h2>",
			"<small>Divisió administrativa: Agullana; Agullana; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de l'Estrada",
		type: "cementiri",
		coordinates: [42.3909681, 2.8686394],
		description: [
			"<h2>Cementiri Municipal de l'Estrada</h2>",
			"<small>Divisió administrativa: L'Estrada; Agullana; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Aiguaviva",
		type: "cementiri",
		coordinates: [41.9386234, 2.7615196],
		description: [
			"<h2>Cementiri Municipal d'Aiguaviva</h2>",
			"<small>Divisió administrativa: Aiguaviva; Aiguaviva; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Albanyà",
		type: "cementiri",
		coordinates: [42.3054097, 2.7199962],
		description: [
			"<h2>Cementiri Municipal d'Albanyà</h2>",
			"<small>Divisió administrativa: Albanyà; Albanyà; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Miquel de Bassegoda",
		type: "cementiri",
		coordinates: [42.3117586, 2.6458689],
		description: [
			"<h2>Cementiri Parroquial de Sant Miquel de Bassegoda</h2>",
			"<small>Divisió administrativa: Bassegoda; Albanyà; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Albons",
		type: "cementiri",
		coordinates: [42.1071493, 3.0797711],
		description: [
			"<h2>Cementiri Municipal d'Albons</h2>",
			"<small>Divisió administrativa: Albons; Albons; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal del Far d'Empordà",
		type: "cementiri",
		coordinates: [42.2504523, 3.0053578],
		description: [
			"<h2>Cementiri Municipal del Far d'Empordà</h2>",
			"<small>Divisió administrativa: El Far d'Empordà; El Far d'Empordà; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Alp",
		type: "cementiri",
		coordinates: [42.3774265, 1.8790002],
		description: [
			"<h2>Cementiri Municipal d'Alp</h2>",
			"<small>Divisió administrativa: Alp; Alp; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Climent d'Amer",
		type: "cementiri",
		coordinates: [42.0044571, 2.636859],
		description: [
			"<h2>Cementiri Parroquial de Sant Climent d'Amer</h2>",
			"<small>Divisió administrativa: Sant Climent d'Amer; Amer; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Amer",
		type: "cementiri",
		coordinates: [42.0010295, 2.605994],
		description: [
			"<h2>Cementiri Municipal d'Amer</h2>",
			"<small>Divisió administrativa: Amer; Amer; Selva; Comarques gironines; Catalunya</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Cementiri_Municipal_d%27Amer_%28porta_principal%29.jpg/640px-Cementiri_Municipal_d%27Amer_%28porta_principal%29.jpg'/><br/>",
			"Cementiri de la vila d'Amer, al terme municipal homònim. Inaugurat el 15 de març de 1931."
		],
		visited: true
	},
	{
		name: "Cementiri Nou d'Anglès",
		type: "cementiri",
		coordinates: [41.944287, 2.6428045],
		description: [
			"<h2>Cementiri Nou d'Anglès</h2>",
			"<small>Divisió administrativa: Anglès; Anglès; Selva; Comarques gironines; Catalunya</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cementiri_Municipal_d%27Angl%C3%A8s_%28entrada%29.jpg/640px-Cementiri_Municipal_d%27Angl%C3%A8s_%28entrada%29.jpg'/><br/>",
			"Cementiri nou de la vila d'Anglès, al terme municipal homònim. Construït durant la dècada de 1980 per la falta de capacitat i la impossibilitat d'ampliació del vell."
		],
		visited: true
	},
	{
		name: "Cementiri Vell d'Anglès",
		type: "cementiri",
		coordinates: [41.9546678, 2.6360308],
		description: [
			"<h2>Cementiri Vell d'Anglès</h2>",
			"<small>Divisió administrativa: Anglès; Anglès; Selva; Comarques gironines; Catalunya</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cementiri_vell_d%27Angl%C3%A8s_%28entrada%29.jpg/640px-Cementiri_vell_d%27Angl%C3%A8s_%28entrada%29.jpg'/><br/>",
			"Cementiri vell de la vila d'Anglès, al terme municipal homònim. Construït durant la dècada de 1910-1920 per la impossibilitat d'ampliació i les poques condicions higièniques de l'antic cementiri parroquial."
		],
		visited: true
	},
	{
		name: "Cementiri Municipal d'Arbúcies",
		type: "cementiri",
		coordinates: [41.8251352, 2.5159326],
		description: [
			"<h2>Cementiri Municipal d'Arbúcies</h2>",
			"<small>Divisió administrativa: Arbúcies; Arbúcies; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Joanet",
		type: "cementiri",
		coordinates: [41.8440919, 2.5275996],
		description: [
			"<h2>Cementiri Municipal de Joanet</h2>",
			"<small>Divisió administrativa: Joanet; Arbúcies; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Argelaguer",
		type: "cementiri",
		coordinates: [42.2112634, 2.643814],
		description: [
			"<h2>Cementiri Municipal d'Argelaguer</h2>",
			"<small>Divisió administrativa: Argelaguer; Argelaguer; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de l'Armentera",
		type: "cementiri",
		coordinates: [42.1719376, 3.0693605],
		description: [
			"<h2>Cementiri Municipal de l'Armentera</h2>",
			"<small>Divisió administrativa: L'Armentera; L'Armentera; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Avinyonet de Puigventós",
		type: "cementiri",
		coordinates: [42.2467123, 2.9179845],
		description: [
			"<h2>Cementiri Municipal d'Avinyonet de Puigventós</h2>",
			"<small>Divisió administrativa: Avinyonet de Puigventós; Avinyonet de Puigventós; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Esclanyà",
		type: "cementiri",
		coordinates: [41.9250594, 3.1769084],
		description: [
			"<h2>Cementiri Municipal d'Esclanyà</h2>",
			"<small>Divisió administrativa: Esclanyà; Begur; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Begur",
		type: "cementiri",
		coordinates: [41.9533766, 3.2014494],
		description: [
			"<h2>Cementiri Municipal de Begur</h2>",
			"<small>Divisió administrativa: Begur; Begur; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de la Vajol",
		type: "cementiri",
		coordinates: [42.4023804, 2.7976381],
		description: [
			"<h2>Cementiri Municipal de la Vajol</h2>",
			"<small>Divisió administrativa: La Vajol; La Vajol; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Banyoles",
		type: "cementiri",
		coordinates: [42.1286861, 2.7647096],
		description: [
			"<h2>Cementiri Municipal de Banyoles</h2>",
			"<small>Divisió administrativa: Banyoles; Banyoles; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Bàscara",
		type: "cementiri",
		coordinates: [42.1570577, 2.9202696],
		description: [
			"<h2>Cementiri Municipal de Bàscara</h2>",
			"<small>Divisió administrativa: Bàscara; Bàscara; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Orriols",
		type: "cementiri",
		coordinates: [42.122386, 2.91261],
		description: [
			"<h2>Cementiri Municipal d'Orriols</h2>",
			"<small>Divisió administrativa: Orriols; Bàscara; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Bellcaire d'Empordà",
		type: "cementiri",
		coordinates: [42.0731056, 3.0980302],
		description: [
			"<h2>Cementiri Municipal de Bellcaire d'Empordà</h2>",
			"<small>Divisió administrativa: Bellcaire d'Empordà; Bellcaire d'Empordà; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Besalú",
		type: "cementiri",
		coordinates: [42.2012821, 2.7025924],
		description: [
			"<h2>Cementiri Municipal de Besalú</h2>",
			"<small>Divisió administrativa: Besalú; Besalú; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Bescanó",
		type: "cementiri",
		coordinates: [41.9660103, 2.7478965],
		description: [
			"<h2>Municipal</h2>",
			"<small>Divisió administrativa: Bescanó; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Cementiri_Municipal_de_Bescan%C3%B3_%28entrada%29.jpg/640px-Cementiri_Municipal_de_Bescan%C3%B3_%28entrada%29.jpg'/><br/>",
			"Cementiri de la vila de Bescanó, al terme municipal homònim. Inscripció del 1935.",
			"<br/><a href='#cementiri_municipal_de_bescano'>Veure més informació</a>"
		],
		visited: true
	},
	{
		name: "Cementiri Parroquial de Montfullà",
		type: "cementiri",
		coordinates: [41.968378, 2.7594708],
		description: [
			"<h2>Cementiri Parroquial de Montfullà</h2>",
			"<small>Divisió administrativa: Montfullà; Bescanó; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Estanyol",
		type: "cementiri",
		coordinates: [41.9413212, 2.7406069],
		description: [
			"<h2>Cementiri Municipal d'Estanyol</h2>",
			"<small>Divisió administrativa: Estanyol; Bescanó; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilanna",
		type: "cementiri",
		coordinates: [41.975822, 2.703396],
		description: [
			"<h2>Cementiri Municipal de Vilanna</h2>",
			"<small>Divisió administrativa: Vilanna; Bescanó; Gironès; Comarques gironines; Catalunya</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Cementiri_Municipal_de_Vilanna_%28entrada%29.jpg/640px-Cementiri_Municipal_de_Vilanna_%28entrada%29.jpg'/><br/>",
			"Cementiri municipal de la vila de Vilanna, al terme municipal de Bescanó. Antic cementiri parroquial, municipalitzat el 26 de gener de 1933."
		],
		visited: true
	},
	{
		name: "Cementiri Parroquial de Segueró",
		type: "cementiri",
		coordinates: [42.2417927, 2.7486131],
		description: [
			"<h2>Cementiri Parroquial de Segueró</h2>",
			"<small>Divisió administrativa: Segueró; Beuda; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Lligordà",
		type: "cementiri",
		coordinates: [42.2192686, 2.7075408],
		description: [
			"<h2>Cementiri Parroquial de Lligordà</h2>",
			"<small>Divisió administrativa: Lligordà; Beuda; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Beuda",
		type: "cementiri",
		coordinates: [42.2370578, 2.7099232],
		description: [
			"<h2>Cementiri Parroquial de Beuda</h2>",
			"<small>Divisió administrativa: Beuda; Beuda; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Pol",
		type: "cementiri",
		coordinates: [41.9321399, 3.0312325],
		description: [
			"<h2>Cementiri Municipal de Sant Pol</h2>",
			"<small>Divisió administrativa: Sant Pol; La Bisbal d'Empordà; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de la Bisbal d'Empordà",
		type: "cementiri",
		coordinates: [41.9527492, 3.0493211],
		description: [
			"<h2>Cementiri Municipal de la Bisbal d'Empordà</h2>",
			"<small>Divisió administrativa: La Bisbal d'Empordà; La Bisbal d'Empordà; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Castell d'Empordà",
		type: "cementiri",
		coordinates: [41.983198, 3.0527653],
		description: [
			"<h2>Cementiri Municipal de Castell d'Empordà</h2>",
			"<small>Divisió administrativa: Castell d'Empordà; La Bisbal d'Empordà; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Blanes",
		type: "cementiri",
		coordinates: [41.6793811, 2.7853723],
		description: [
			"<h2>Cementiri Municipal de Blanes</h2>",
			"<small>Divisió administrativa: Blanes; Blanes; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Bolvir",
		type: "cementiri",
		coordinates: [42.4091185, 1.8912954],
		description: [
			"<h2>Cementiri Municipal de Bolvir</h2>",
			"<small>Divisió administrativa: Bolvir; Bolvir; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Bordils",
		type: "cementiri",
		coordinates: [42.0375998, 2.9093225],
		description: [
			"<h2>Cementiri Municipal de Bordils</h2>",
			"<small>Divisió administrativa: Bordils; Bordils; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Borrassà",
		type: "cementiri",
		coordinates: [42.2148356, 2.9272178],
		description: [
			"<h2>Cementiri Municipal de Borrassà</h2>",
			"<small>Divisió administrativa: Borrassà; Borrassà; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Breda",
		type: "cementiri",
		coordinates: [41.7528973, 2.5641015],
		description: [
			"<h2>Cementiri Municipal de Breda</h2>",
			"<small>Divisió administrativa: Breda; Breda; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Martí Sapresa",
		type: "cementiri",
		coordinates: [41.9251255, 2.6505856],
		description: [
			"<h2>Cementiri Municipal de Sant Martí Sapresa</h2>",
			"<small>Divisió administrativa: Sant Martí Sapresa; Brunyola i Sant Martí Sapresa; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Brunyola",
		type: "cementiri",
		coordinates: [41.9044383, 2.6845392],
		description: [
			"<h2>Cementiri Parroquial de Brunyola</h2>",
			"<small>Divisió administrativa: Brunyola; Brunyola i Sant Martí Sapresa; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de les Escaules",
		type: "cementiri",
		coordinates: [42.3161507, 2.8935261],
		description: [
			"<h2>Cementiri Municipal de les Escaules</h2>",
			"<small>Divisió administrativa: Les Escaules; Boadella i les Escaules; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Boadella d'Empordà",
		type: "cementiri",
		coordinates: [42.3321974, 2.859331],
		description: [
			"<h2>Cementiri Municipal de Boadella d'Empordà</h2>",
			"<small>Divisió administrativa: Boadella d'Empordà; Boadella i les Escaules; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Cabanes",
		type: "cementiri",
		coordinates: [42.3062864, 2.9807731],
		description: [
			"<h2>Cementiri Municipal de Cabanes</h2>",
			"<small>Divisió administrativa: Cabanes; Cabanes; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Cabanelles",
		type: "cementiri",
		coordinates: [42.2310866, 2.8198836],
		description: [
			"<h2>Cementiri Municipal de Cabanelles</h2>",
			"<small>Divisió administrativa: Cabanelles; Cabanelles; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilademires",
		type: "cementiri",
		coordinates: [42.2291131, 2.7943658],
		description: [
			"<h2>Cementiri Municipal de Vilademires</h2>",
			"<small>Divisió administrativa: Vilademires; Cabanelles; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Roc de Vilademires",
		type: "cementiri",
		coordinates: [42.2306438, 2.7917668],
		description: [
			"<h2>Cementiri Parroquial de Sant Roc de Vilademires</h2>",
			"<small>Divisió administrativa: Vilademires; Cabanelles; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Queixàs",
		type: "cementiri",
		coordinates: [42.2139086, 2.7979896],
		description: [
			"<h2>Cementiri Municipal de Queixàs</h2>",
			"<small>Divisió administrativa: Queixàs; Cabanelles; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Espinavessa",
		type: "cementiri",
		coordinates: [42.1887705, 2.8447649],
		description: [
			"<h2>Cementiri Municipal d'Espinavessa</h2>",
			"<small>Divisió administrativa: Espinavessa; Cabanelles; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Cadaqués",
		type: "cementiri",
		coordinates: [42.2921125, 3.2839638],
		description: [
			"<h2>Cementiri Parroquial de Cadaqués</h2>",
			"<small>Divisió administrativa: Cadaqués; Cadaqués; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Caldes de Malavella",
		type: "cementiri",
		coordinates: [41.8348589, 2.8158856],
		description: [
			"<h2>Cementiri Municipal de Caldes de Malavella</h2>",
			"<small>Divisió administrativa: Caldes de Malavella; Caldes de Malavella; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Mateu de Franciac",
		type: "cementiri",
		coordinates: [41.8735427, 2.7856156],
		description: [
			"<h2>Cementiri Parroquial de Sant Mateu de Franciac</h2>",
			"<small>Divisió administrativa: Franciac; Caldes de Malavella; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Calonge",
		type: "cementiri",
		coordinates: [41.8594104, 3.0915721],
		description: [
			"<h2>Cementiri Municipal de Calonge</h2>",
			"<small>Divisió administrativa: Calonge; Calonge i Sant Antoni; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Camós",
		type: "cementiri",
		coordinates: [42.0877653, 2.763364],
		description: [
			"<h2>Cementiri Municipal de Camós</h2>",
			"<small>Divisió administrativa: Camós; Camós; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Campdevànol",
		type: "cementiri",
		coordinates: [42.2253517, 2.1638906],
		description: [
			"<h2>Cementiri Municipal de Campdevànol</h2>",
			"<small>Divisió administrativa: Campdevànol; Campdevànol; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal del Baell",
		type: "cementiri",
		coordinates: [42.2789768, 2.1448626],
		description: [
			"<h2>Cementiri Municipal del Baell</h2>",
			"<small>Divisió administrativa: El Baell; Campelles; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Campelles",
		type: "cementiri",
		coordinates: [42.2927919, 2.1319244],
		description: [
			"<h2>Cementiri Municipal de Campelles</h2>",
			"<small>Divisió administrativa: Campelles; Campelles; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Campllong",
		type: "cementiri",
		coordinates: [41.8955106, 2.8380256],
		description: [
			"<h2>Cementiri Municipal de Campllong</h2>",
			"<small>Divisió administrativa: Campllong; Campllong; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Bolós",
		type: "cementiri",
		coordinates: [42.3027712, 2.421847],
		description: [
			"<h2>Cementiri Parroquial de Bolós</h2>",
			"<small>Divisió administrativa: Bolós; Camprodon; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Camprodon",
		type: "cementiri",
		coordinates: [42.3198303, 2.3788068],
		description: [
			"<h2>Cementiri Municipal de Camprodon</h2>",
			"<small>Divisió administrativa: Camprodon; Camprodon; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Beget",
		type: "cementiri",
		coordinates: [42.3178185, 2.4807239],
		description: [
			"<h2>Cementiri Parroquial de Beget</h2>",
			"<small>Divisió administrativa: Beget; Camprodon; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Cavallera",
		type: "cementiri",
		coordinates: [42.2925807, 2.3447058],
		description: [
			"<h2>Cementiri Parroquial de Cavallera</h2>",
			"<small>Divisió administrativa: Cavallera; Camprodon; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Rocabruna",
		type: "cementiri",
		coordinates: [42.3382474, 2.4506875],
		description: [
			"<h2>Cementiri Parroquial de Rocabruna</h2>",
			"<small>Divisió administrativa: Rocabruna; Camprodon; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Montcal",
		type: "cementiri",
		coordinates: [42.0371675, 2.7589425],
		description: [
			"<h2>Cementiri Parroquial de Montcal</h2>",
			"<small>Divisió administrativa: Montcal; Canet d'Adri; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Canet d'Adri",
		type: "cementiri",
		coordinates: [42.038015, 2.7347773],
		description: [
			"<h2>Cementiri Parroquial de Canet d'Adri</h2>",
			"<small>Divisió administrativa: Canet d'Adri; Canet d'Adri; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Rocacorba",
		type: "cementiri",
		coordinates: [42.0673272, 2.6877158],
		description: [
			"<h2>Cementiri Parroquial de Rocacorba</h2>",
			"<small>Divisió administrativa: Rocacorba; Canet d'Adri; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial d'Adri",
		type: "cementiri",
		coordinates: [42.0522436, 2.7409275],
		description: [
			"<h2>Cementiri Parroquial d'Adri</h2>",
			"<small>Divisió administrativa: Adri; Canet d'Adri; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Cantallops",
		type: "cementiri",
		coordinates: [42.4239928, 2.9202983],
		description: [
			"<h2>Cementiri Municipal de Cantallops</h2>",
			"<small>Divisió administrativa: Cantallops; Cantallops; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Campmany",
		type: "cementiri",
		coordinates: [42.3734885, 2.9291119],
		description: [
			"<h2>Cementiri Municipal de Campmany</h2>",
			"<small>Divisió administrativa: Campmany; Campmany; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Fustanyà",
		type: "cementiri",
		coordinates: [42.3418979, 2.1708011],
		description: [
			"<h2>Cementiri Municipal de Fustanyà</h2>",
			"<small>Divisió administrativa: Fustanyà; Queralbs; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Queralbs",
		type: "cementiri",
		coordinates: [42.3483074, 2.161053],
		description: [
			"<h2>Cementiri Municipal de Queralbs</h2>",
			"<small>Divisió administrativa: Queralbs; Queralbs; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Cassà de la Selva",
		type: "cementiri",
		coordinates: [41.8840637, 2.8661807],
		description: [
			"<h2>Cementiri Municipal de Cassà de la Selva</h2>",
			"<small>Divisió administrativa: Cassà de la Selva; Cassà de la Selva; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Castellfollit de la Roca",
		type: "cementiri",
		coordinates: [42.218561, 2.5397277],
		description: [
			"<h2>Cementiri Municipal de Castellfollit de la Roca</h2>",
			"<small>Divisió administrativa: Castellfollit de la Roca; Castellfollit de la Roca; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Castelló d'Empúries",
		type: "cementiri",
		coordinates: [42.2611342, 3.0689309],
		description: [
			"<h2>Cementiri Municipal de Castelló d'Empúries</h2>",
			"<small>Divisió administrativa: Castelló d'Empúries; Castelló d'Empúries; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Castell d'Aro",
		type: "cementiri",
		coordinates: [41.8139015, 3.0425806],
		description: [
			"<h2>Cementiri Municipal de Castell d'Aro</h2>",
			"<small>Divisió administrativa: Castell d'Aro; Castell d'Aro, Platja d'Aro i s'Agaró; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Platja d'Aro",
		type: "cementiri",
		coordinates: [41.8173833, 3.0562223],
		description: [
			"<h2>Cementiri Municipal de Platja d'Aro</h2>",
			"<small>Divisió administrativa: Platja d'Aro; Castell d'Aro, Platja d'Aro i s'Agaró; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Celrà",
		type: "cementiri",
		coordinates: [42.0263198, 2.8860047],
		description: [
			"<h2>Cementiri Municipal de Celrà</h2>",
			"<small>Divisió administrativa: Celrà; Celrà; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Cervià de Ter",
		type: "cementiri",
		coordinates: [42.0678239, 2.9171929],
		description: [
			"<h2>Cementiri Municipal de Cervià de Ter</h2>",
			"<small>Divisió administrativa: Cervià de Ter; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Cistella",
		type: "cementiri",
		coordinates: [42.2649437, 2.8530872],
		description: [
			"<h2>Cementiri Municipal de Cistella</h2>",
			"<small>Divisió administrativa: Cistella; Cistella; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Vilarig",
		type: "cementiri",
		coordinates: [42.2865107, 2.8334802],
		description: [
			"<h2>Cementiri Parroquial de Vilarig</h2>",
			"<small>Divisió administrativa: Vilarig; Cistella; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Siurana",
		type: "cementiri",
		coordinates: [42.2081106, 3.0009757],
		description: [
			"<h2>Cementiri Municipal de Siurana</h2>",
			"<small>Divisió administrativa: Siurana; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Colera",
		type: "cementiri",
		coordinates: [42.4014567, 3.1434131],
		description: [
			"<h2>Cementiri Municipal de Colera</h2>",
			"<small>Divisió administrativa: Colera; Colera; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Colomers",
		type: "cementiri",
		coordinates: [42.087824, 2.9825817],
		description: [
			"<h2>Cementiri Municipal de Colomers</h2>",
			"<small>Divisió administrativa: Colomers; Colomers; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sords",
		type: "cementiri",
		coordinates: [42.0885759, 2.8245961],
		description: [
			"<h2>Cementiri Parroquial de Sords</h2>",
			"<small>Divisió administrativa: Sords; Cornellà del Terri; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Cornellà del Terri",
		type: "cementiri",
		coordinates: [42.094522, 2.8196237],
		description: [
			"<h2>Cementiri Municipal de Cornellà del Terri</h2>",
			"<small>Divisió administrativa: Cornellà del Terri; Cornellà del Terri; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Ravós del Terri",
		type: "cementiri",
		coordinates: [42.0709663, 2.8380537],
		description: [
			"<h2>Cementiri Parroquial de Ravós del Terri</h2>",
			"<small>Divisió administrativa: Ravós del Terri; Cornellà del Terri; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Pujals dels Pagesos",
		type: "cementiri",
		coordinates: [42.1072566, 2.8338379],
		description: [
			"<h2>Cementiri Parroquial de Pujals dels Pagesos</h2>",
			"<small>Divisió administrativa: Pujals dels Pagesos; Cornellà del Terri; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Santa Llogaia del Terri",
		type: "cementiri",
		coordinates: [42.0835476, 2.8391189],
		description: [
			"<h2>Cementiri Parroquial de Santa Llogaia del Terri</h2>",
			"<small>Divisió administrativa: Santa Llogaia del Terri; Cornellà del Terri; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Borgonyà",
		type: "cementiri",
		coordinates: [42.1019582, 2.8037297],
		description: [
			"<h2>Cementiri Parroquial de Borgonyà</h2>",
			"<small>Divisió administrativa: Borgonyà; Cornellà del Terri; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Casavells i Matajudaica",
		type: "cementiri",
		coordinates: [42.0025837, 3.0374394],
		description: [
			"<h2>Cementiri Municipal de Casavells i Matajudaica</h2>",
			"<small>Divisió administrativa: Casavells; Corçà; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Corçà",
		type: "cementiri",
		coordinates: [41.9927327, 3.0156319],
		description: [
			"<h2>Cementiri Municipal de Corçà</h2>",
			"<small>Divisió administrativa: Corçà; Corçà; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Crespià",
		type: "cementiri",
		coordinates: [42.1828757, 2.8008547],
		description: [
			"<h2>Cementiri Municipal de Crespià</h2>",
			"<small>Divisió administrativa: Crespià; Crespià; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Darnius",
		type: "cementiri",
		coordinates: [42.3637726, 2.8374656],
		description: [
			"<h2>Cementiri Municipal de Darnius</h2>",
			"<small>Divisió administrativa: Darnius; Darnius; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sanavastre",
		type: "cementiri",
		coordinates: [42.3851182, 1.8496389],
		description: [
			"<h2>Cementiri Municipal de Sanavastre</h2>",
			"<small>Divisió administrativa: Sanavastre; Das; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Das",
		type: "cementiri",
		coordinates: [42.3581818, 1.866392],
		description: [
			"<h2>Cementiri Municipal de Das</h2>",
			"<small>Divisió administrativa: Das; Das; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Marí de l'Escala",
		type: "cementiri",
		coordinates: [42.1219213, 3.1358876],
		description: [
			"<h2>Cementiri Marí de l'Escala</h2>",
			"<small>Divisió administrativa: L'Escala; L'Escala; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de l'Escala",
		type: "cementiri",
		coordinates: [42.1325726, 3.0958403],
		description: [
			"<h2>Cementiri Municipal de l'Escala</h2>",
			"<small>Divisió administrativa: L'Escala; L'Escala; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Martí d'Empúries",
		type: "cementiri",
		coordinates: [42.1327484, 3.1109289],
		description: [
			"<h2>Cementiri Parroquial de Sant Martí d'Empúries</h2>",
			"<small>Divisió administrativa: Sant Martí d'Empúries; L'Escala; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial d'Espinelves",
		type: "cementiri",
		coordinates: [41.8705124, 2.4175831],
		description: [
			"<h2>Cementiri Parroquial d'Espinelves</h2>",
			"<small>Divisió administrativa: Espinelves; Espinelves; Osona; Comarques centrals; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Espolla",
		type: "cementiri",
		coordinates: [42.3810619, 3.0036278],
		description: [
			"<h2>Cementiri Municipal d'Espolla</h2>",
			"<small>Divisió administrativa: Espolla; Espolla; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial d'Esponellà",
		type: "cementiri",
		coordinates: [42.177982, 2.7953603],
		description: [
			"<h2>Cementiri Parroquial d'Esponellà</h2>",
			"<small>Divisió administrativa: Esponellà; Esponellà; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Centenys",
		type: "cementiri",
		coordinates: [42.1595122, 2.7851613],
		description: [
			"<h2>Cementiri Parroquial de Centenys</h2>",
			"<small>Divisió administrativa: Centenys; Esponellà; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Vilert",
		type: "cementiri",
		coordinates: [42.1736917, 2.8211622],
		description: [
			"<h2>Cementiri Parroquial de Vilert</h2>",
			"<small>Divisió administrativa: Vilert; Esponellà; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilatenim",
		type: "cementiri",
		coordinates: [42.2720069, 2.9903469],
		description: [
			"<h2>Cementiri Municipal de Vilatenim</h2>",
			"<small>Divisió administrativa: Vilatenim; Figueres; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Figueres",
		type: "cementiri",
		coordinates: [42.2641408, 2.9740559],
		description: [
			"<h2>Cementiri Municipal de Figueres</h2>",
			"<small>Divisió administrativa: Figueres; Figueres; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Flaçà",
		type: "cementiri",
		coordinates: [42.0508913, 2.9599694],
		description: [
			"<h2>Cementiri Municipal de Flaçà</h2>",
			"<small>Divisió administrativa: Flaçà; Flaçà; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de la Sala",
		type: "cementiri",
		coordinates: [42.0331331, 3.0165909],
		description: [
			"<h2>Cementiri Parroquial de la Sala</h2>",
			"<small>Divisió administrativa: La Sala; Foixà; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Foixà",
		type: "cementiri",
		coordinates: [42.0412896, 2.9995306],
		description: [
			"<h2>Cementiri Municipal de Foixà</h2>",
			"<small>Divisió administrativa: Foixà; Foixà; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Llorenç de les Arenes",
		type: "cementiri",
		coordinates: [42.0611293, 2.9778438],
		description: [
			"<h2>Cementiri Parroquial de Sant Llorenç de les Arenes</h2>",
			"<small>Divisió administrativa: Sant Llorenç de les Arenes; Foixà; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Queixans",
		type: "cementiri",
		coordinates: [42.3985478, 1.9219297],
		description: [
			"<h2>Cementiri Municipal de Queixans</h2>",
			"<small>Divisió administrativa: Queixans; Fontanals de Cerdanya; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Urtx",
		type: "cementiri",
		coordinates: [42.3879712, 1.9042906],
		description: [
			"<h2>Cementiri Municipal d'Urtx</h2>",
			"<small>Divisió administrativa: Urtx; Fontanals de Cerdanya; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Fontanilles",
		type: "cementiri",
		coordinates: [42.013901, 3.1012501],
		description: [
			"<h2>Cementiri Municipal de Fontanilles</h2>",
			"<small>Divisió administrativa: Fontanilles; Fontanilles; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Llabià",
		type: "cementiri",
		coordinates: [42.0183108, 3.0882267],
		description: [
			"<h2>Cementiri Municipal de Llabià</h2>",
			"<small>Divisió administrativa: Llabià; Fontanilles; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Fontcoberta",
		type: "cementiri",
		coordinates: [42.1278838, 2.803631],
		description: [
			"<h2>Cementiri Municipal de Fontcoberta</h2>",
			"<small>Divisió administrativa: Fontcoberta; Fontcoberta; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Fornells de la Selva",
		type: "cementiri",
		coordinates: [41.9406074, 2.8081197],
		description: [
			"<h2>Cementiri Municipal de Fornells de la Selva</h2>",
			"<small>Divisió administrativa: Fornells de la Selva; Fornells de la Selva; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Fortià",
		type: "cementiri",
		coordinates: [42.2368371, 3.0363056],
		description: [
			"<h2>Cementiri Municipal de Fortià</h2>",
			"<small>Divisió administrativa: Fortià; Fortià; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Garrigàs",
		type: "cementiri",
		coordinates: [42.1974645, 2.9497749],
		description: [
			"<h2>Cementiri Municipal de Garrigàs</h2>",
			"<small>Divisió administrativa: Garrigàs; Garrigàs; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Arenys d'Empordà",
		type: "cementiri",
		coordinates: [42.1669434, 2.9514966],
		description: [
			"<h2>Cementiri Municipal d'Arenys d'Empordà</h2>",
			"<small>Divisió administrativa: Arenys d'Empordà; Garrigàs; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Garrigoles",
		type: "cementiri",
		coordinates: [42.1043115, 3.0168926],
		description: [
			"<h2>Cementiri Municipal de Garrigoles</h2>",
			"<small>Divisió administrativa: Garrigoles; Garrigoles; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Garriguella",
		type: "cementiri",
		coordinates: [42.3366446, 3.0665983],
		description: [
			"<h2>Cementiri Parroquial de Garriguella</h2>",
			"<small>Divisió administrativa: Garriguella; Garriguella; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Ger",
		type: "cementiri",
		coordinates: [42.409698, 1.8528339],
		description: [
			"<h2>Cementiri Municipal de Ger</h2>",
			"<small>Divisió administrativa: Ger; Ger; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Palau-sacosta",
		type: "cementiri",
		coordinates: [41.9571816, 2.8222501],
		description: [
			"<h2>Cementiri Municipal de Palau-sacosta</h2>",
			"<small>Divisió administrativa: Palau-sacosta; Girona; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Santa Eugènia",
		type: "cementiri",
		coordinates: [41.9716555, 2.8040129],
		description: [
			"<h2>Cementiri Municipal de Santa Eugènia</h2>",
			"<small>Divisió administrativa: Santa Eugènia de Ter; Girona; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Campdorà",
		type: "cementiri",
		coordinates: [42.0130029, 2.8441607],
		description: [
			"<h2>Cementiri Parroquial de Campdorà</h2>",
			"<small>Divisió administrativa: Campdorà; Girona; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Daniel",
		type: "cementiri",
		coordinates: [41.9900411, 2.8396764],
		description: [
			"<h2>Cementiri Municipal de Sant Daniel</h2>",
			"<small>Divisió administrativa: Sant Daniel; Girona; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Nou de Girona",
		type: "cementiri",
		coordinates: [41.9689831, 2.8514282],
		description: [
			"<h2>Cementiri Nou de Girona</h2>",
			"<small>Divisió administrativa: Girona; Girona; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Pont Major",
		type: "cementiri",
		coordinates: [42.0069746, 2.8222803],
		description: [
			"<h2>Cementiri Parroquial de Pont Major</h2>",
			"<small>Divisió administrativa: Pont Major; Girona; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Vell de Girona",
		type: "cementiri",
		coordinates: [41.9724101, 2.8371631],
		description: [
			"<h2>Cementiri Vell de Girona</h2>",
			"<small>Divisió administrativa: Girona; Girona; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Gombrèn",
		type: "cementiri",
		coordinates: [42.2470923, 2.0877064],
		description: [
			"<h2>Cementiri Municipal de Gombrèn</h2>",
			"<small>Divisió administrativa: Gombrèn; Gombrèn; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Gualta",
		type: "cementiri",
		coordinates: [42.0194207, 3.1064167],
		description: [
			"<h2>Cementiri Municipal de Gualta</h2>",
			"<small>Divisió administrativa: Gualta; Gualta; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Guils de Cerdanya",
		type: "cementiri",
		coordinates: [42.4480076, 1.8781853],
		description: [
			"<h2>Cementiri Municipal de Guils de Cerdanya</h2>",
			"<small>Divisió administrativa: Guils de Cerdanya; Guils de Cerdanya; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Saneja",
		type: "cementiri",
		coordinates: [42.4412916, 1.9003048],
		description: [
			"<h2>Cementiri Municipal de Saneja</h2>",
			"<small>Divisió administrativa: Saneja; Guils de Cerdanya; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Hostalric",
		type: "cementiri",
		coordinates: [41.7426109, 2.6300895],
		description: [
			"<h2>Cementiri Municipal d'Hostalric</h2>",
			"<small>Divisió administrativa: Hostalric; Hostalric; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial d'Olopte",
		type: "cementiri",
		coordinates: [42.3915024, 1.8133107],
		description: [
			"<h2>Cementiri Parroquial d'Olopte</h2>",
			"<small>Divisió administrativa: Olopte; Isòvol; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Isòvol",
		type: "cementiri",
		coordinates: [42.394132, 1.8315363],
		description: [
			"<h2>Cementiri Municipal d'Isòvol</h2>",
			"<small>Divisió administrativa: All; Isòvol; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial d'Isòvol",
		type: "cementiri",
		coordinates: [42.3788434, 1.8181176],
		description: [
			"<h2>Cementiri Parroquial d'Isòvol</h2>",
			"<small>Divisió administrativa: Isòvol; Isòvol; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de la Jonquera",
		type: "cementiri",
		coordinates: [42.413983, 2.87111],
		description: [
			"<h2>Cementiri Municipal de la Jonquera</h2>",
			"<small>Divisió administrativa: La Jonquera; La Jonquera; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Juià",
		type: "cementiri",
		coordinates: [42.0171353, 2.912871],
		description: [
			"<h2>Cementiri Municipal de Juià</h2>",
			"<small>Divisió administrativa: Juià; Juià; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Lladó",
		type: "cementiri",
		coordinates: [42.2450304, 2.8178518],
		description: [
			"<h2>Cementiri Municipal de Lladó</h2>",
			"<small>Divisió administrativa: Lladó; Lladó; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Llagostera",
		type: "cementiri",
		coordinates: [41.8241292, 2.9025471],
		description: [
			"<h2>Cementiri Municipal de Llagostera</h2>",
			"<small>Divisió administrativa: Llagostera; Llagostera; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Llambilles",
		type: "cementiri",
		coordinates: [41.9210048, 2.8672867],
		description: [
			"<h2>Cementiri Municipal de Llambilles</h2>",
			"<small>Divisió administrativa: Llambilles; Llambilles; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Llanars",
		type: "cementiri",
		coordinates: [42.3259567, 2.3448405],
		description: [
			"<h2>Cementiri Municipal de Llanars</h2>",
			"<small>Divisió administrativa: Llanars; Llanars; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Vell de Llançà",
		type: "cementiri",
		coordinates: [42.3579442, 3.1427551],
		description: [
			"<h2>Cementiri Vell de Llançà</h2>",
			"<small>Divisió administrativa: Llançà; Llançà; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Nou de Llançà",
		type: "cementiri",
		coordinates: [42.3684688, 3.1585868],
		description: [
			"<h2>Cementiri Nou de Llançà</h2>",
			"<small>Divisió administrativa: Llançà; Llançà; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Llers",
		type: "cementiri",
		coordinates: [42.2893035, 2.9136564],
		description: [
			"<h2>Cementiri Municipal de Llers</h2>",
			"<small>Divisió administrativa: Llers; Llers; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Llívia",
		type: "cementiri",
		coordinates: [42.4707869, 1.9757921],
		description: [
			"<h2>Cementiri Municipal de Llívia</h2>",
			"<small>Divisió administrativa: Llívia; Llívia; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Lloret de Mar",
		type: "cementiri",
		coordinates: [41.701854, 2.8359725],
		description: [
			"<h2>Cementiri Municipal de Lloret de Mar</h2>",
			"<small>Divisió administrativa: Lloret de Mar; Lloret de Mar; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Esteve de Vallespirans",
		type: "cementiri",
		coordinates: [42.1771638, 2.142169],
		description: [
			"<h2>Cementiri Parroquial de Sant Esteve de Vallespirans</h2>",
			"<small>Divisió administrativa: Sant Esteve de Vallespirans; Les Llosses; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Sadurní de Sovelles",
		type: "cementiri",
		coordinates: [42.1420111, 2.1604951],
		description: [
			"<h2>Cementiri Parroquial de Sant Sadurní de Sovelles</h2>",
			"<small>Divisió administrativa: Sant Sadurní de Sovelles; Les Llosses; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Vicenç de Maçanós",
		type: "cementiri",
		coordinates: [42.1534477, 2.0674835],
		description: [
			"<h2>Cementiri Parroquial de Sant Vicenç de Maçanós</h2>",
			"<small>Divisió administrativa: Sant Vicenç de Maçanós; Les Llosses; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Santa Maria de les Llosses",
		type: "cementiri",
		coordinates: [42.152328, 2.1045637],
		description: [
			"<h2>Cementiri Parroquial de Santa Maria de les Llosses</h2>",
			"<small>Divisió administrativa: Santa Maria de les Llosses; Les Llosses; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Palmerola",
		type: "cementiri",
		coordinates: [42.1637388, 2.0466653],
		description: [
			"<h2>Cementiri Parroquial de Palmerola</h2>",
			"<small>Divisió administrativa: Palmerola; Les Llosses; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Santa Maria de Matamala",
		type: "cementiri",
		coordinates: [42.1581985, 2.0892955],
		description: [
			"<h2>Cementiri Parroquial de Santa Maria de Matamala</h2>",
			"<small>Divisió administrativa: Santa Maria de Matamala; Les Llosses; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Nou de Madremanya",
		type: "cementiri",
		coordinates: [41.9943988, 2.9545277],
		description: [
			"<h2>Cementiri Nou de Madremanya</h2>",
			"<small>Divisió administrativa: El Pedró; Madremanya; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Vell de Madremanya",
		type: "cementiri",
		coordinates: [41.9896799, 2.9569942],
		description: [
			"<h2>Cementiri Vell de Madremanya</h2>",
			"<small>Divisió administrativa: Madremanya; Madremanya; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Dosquers",
		type: "cementiri",
		coordinates: [42.19517, 2.7533038],
		description: [
			"<h2>Cementiri Municipal de Dosquers</h2>",
			"<small>Divisió administrativa: Dosquers; Maià de Montcal; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Maià de Montcal",
		type: "cementiri",
		coordinates: [42.222451, 2.7419447],
		description: [
			"<h2>Cementiri Municipal de Maià de Montcal</h2>",
			"<small>Divisió administrativa: Maià de Montcal; Maià de Montcal; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Meranges",
		type: "cementiri",
		coordinates: [42.4464485, 1.7867088],
		description: [
			"<h2>Cementiri Municipal de Meranges</h2>",
			"<small>Divisió administrativa: Meranges; Meranges; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial d'El Priorat",
		type: "cementiri",
		coordinates: [42.3517807, 2.9810317],
		description: [
			"<h2>Cementiri Parroquial d'El Priorat</h2>",
			"<small>Divisió administrativa: El Priorat; Masarac; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Masarac",
		type: "cementiri",
		coordinates: [42.3409872, 2.9609007],
		description: [
			"<h2>Cementiri Municipal de Masarac</h2>",
			"<small>Divisió administrativa: Vilarnadal; Masarac; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Massanes",
		type: "cementiri",
		coordinates: [41.764365, 2.6549877],
		description: [
			"<h2>Cementiri Municipal de Massanes</h2>",
			"<small>Divisió administrativa: Massanes; Massanes; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial Sant Pere dels Vilars",
		type: "cementiri",
		coordinates: [42.3675821, 2.7294313],
		description: [
			"<h2>Cementiri Parroquial Sant Pere dels Vilars</h2>",
			"<small>Divisió administrativa: Els Vilars; Maçanet de Cabrenys; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial Sant Briç de Tapis",
		type: "cementiri",
		coordinates: [42.3802018, 2.7013642],
		description: [
			"<h2>Cementiri Parroquial Sant Briç de Tapis</h2>",
			"<small>Divisió administrativa: Tapis; Maçanet de Cabrenys; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Maçanet de Cabrenys",
		type: "cementiri",
		coordinates: [42.3873019, 2.7571623],
		description: [
			"<h2>Cementiri Municipal de Maçanet de Cabrenys</h2>",
			"<small>Divisió administrativa: Maçanet de Cabrenys; Maçanet de Cabrenys; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Martorell",
		type: "cementiri",
		coordinates: [41.7615576, 2.6924495],
		description: [
			"<h2>Cementiri Parroquial de Martorell</h2>",
			"<small>Divisió administrativa: Martorell; Maçanet de la Selva; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Nou de Maçanet de la Selva",
		type: "cementiri",
		coordinates: [41.7856543, 2.7278531],
		description: [
			"<h2>Cementiri Nou de Maçanet de la Selva</h2>",
			"<small>Divisió administrativa: Maçanet de la Selva; Maçanet de la Selva; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Vell de Maçanet de la Selva",
		type: "cementiri",
		coordinates: [41.7811521, 2.7316864],
		description: [
			"<h2>Cementiri Vell de Maçanet de la Selva</h2>",
			"<small>Divisió administrativa: Maçanet de la Selva; Maçanet de la Selva; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Mieres",
		type: "cementiri",
		coordinates: [42.1272494, 2.6391196],
		description: [
			"<h2>Cementiri Parroquial de Mieres</h2>",
			"<small>Divisió administrativa: Mieres; Mieres; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Mollet de Peralada",
		type: "cementiri",
		coordinates: [42.3611833, 3.0016043],
		description: [
			"<h2>Cementiri Municipal de Mollet de Peralada</h2>",
			"<small>Divisió administrativa: Mollet de Peralada; Mollet de Peralada; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Molló",
		type: "cementiri",
		coordinates: [42.3540483, 2.4047471],
		description: [
			"<h2>Cementiri Municipal de Molló</h2>",
			"<small>Divisió administrativa: Molló; Molló; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Miquel de Pera",
		type: "cementiri",
		coordinates: [42.2838669, 2.4948189],
		description: [
			"<h2>Cementiri Parroquial de Sant Miquel de Pera</h2>",
			"<small>Divisió administrativa: Sant Miquel de Pera; Montagut i Oix; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Oix",
		type: "cementiri",
		coordinates: [42.2693806, 2.52387],
		description: [
			"<h2>Cementiri Municipal d'Oix</h2>",
			"<small>Divisió administrativa: Oix; Montagut i Oix; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Montagut",
		type: "cementiri",
		coordinates: [42.2270451, 2.6017971],
		description: [
			"<h2>Cementiri Municipal de Montagut</h2>",
			"<small>Divisió administrativa: Montagut; Montagut i Oix; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Mont-ras",
		type: "cementiri",
		coordinates: [41.9093729, 3.1434418],
		description: [
			"<h2>Cementiri Municipal de Mont-ras</h2>",
			"<small>Divisió administrativa: Mont-ras; Mont-ras; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Navata",
		type: "cementiri",
		coordinates: [42.2183992, 2.859716],
		description: [
			"<h2>Cementiri Municipal de Navata</h2>",
			"<small>Divisió administrativa: Navata; Navata; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Canelles",
		type: "cementiri",
		coordinates: [42.194645, 2.8804993],
		description: [
			"<h2>Cementiri Municipal de Canelles</h2>",
			"<small>Divisió administrativa: Canelles; Navata; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Ogassa",
		type: "cementiri",
		coordinates: [42.2748789, 2.2829905],
		description: [
			"<h2>Cementiri Municipal d'Ogassa</h2>",
			"<small>Divisió administrativa: Ogassa; Ogassa; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Olot",
		type: "cementiri",
		coordinates: [42.1857498, 2.4865702],
		description: [
			"<h2>Cementiri Municipal d'Olot</h2>",
			"<small>Divisió administrativa: Olot; Olot; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Cristòfol les Fonts",
		type: "cementiri",
		coordinates: [42.1689509, 2.4996888],
		description: [
			"<h2>Cementiri Parroquial de Sant Cristòfol les Fonts</h2>",
			"<small>Divisió administrativa: Sant Cristòfol les Fonts; Olot; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Ordis",
		type: "cementiri",
		coordinates: [42.218355, 2.9129022],
		description: [
			"<h2>Cementiri Municipal d'Ordis</h2>",
			"<small>Divisió administrativa: Ordis; Ordis; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Santa Creu d'Horta",
		type: "cementiri",
		coordinates: [41.9158504, 2.583903],
		description: [
			"<h2>Cementiri Parroquial de Santa Creu d'Horta</h2>",
			"<small>Divisió administrativa: Santa Creu d'Horta; Osor; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Osor",
		type: "cementiri",
		coordinates: [41.9460471, 2.5531746],
		description: [
			"<h2>Cementiri Municipal d'Osor</h2>",
			"<small>Divisió administrativa: Osor; Osor; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Calella de Palafrugell",
		type: "cementiri",
		coordinates: [41.8944341, 3.1817249],
		description: [
			"<h2>Cementiri Parroquial de Calella de Palafrugell</h2>",
			"<small>Divisió administrativa: Calella de Palafrugell; Palafrugell; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Palafrugell",
		type: "cementiri",
		coordinates: [41.9187065, 3.1478478],
		description: [
			"<h2>Cementiri Municipal de Palafrugell</h2>",
			"<small>Divisió administrativa: Palafrugell; Palafrugell; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Llofriu",
		type: "cementiri",
		coordinates: [41.9339662, 3.1413085],
		description: [
			"<h2>Cementiri Parroquial de Llofriu</h2>",
			"<small>Divisió administrativa: Llofriu; Palafrugell; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Palamós",
		type: "cementiri",
		coordinates: [41.8503047, 3.1369925],
		description: [
			"<h2>Cementiri Municipal de Palamós</h2>",
			"<small>Divisió administrativa: Palamós; Palamós; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Joan de Palamós",
		type: "cementiri",
		coordinates: [41.8539467, 3.1384412],
		description: [
			"<h2>Cementiri Municipal de Sant Joan de Palamós</h2>",
			"<small>Divisió administrativa: Sant Joan de Palamós; Palamós; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Palau de Santa Eulàlia",
		type: "cementiri",
		coordinates: [42.1704205, 2.9622536],
		description: [
			"<h2>Cementiri Municipal de Palau de Santa Eulàlia</h2>",
			"<small>Divisió administrativa: Palau de Santa Eulàlia; Palau de Santa Eulàlia; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Palau-saverdera",
		type: "cementiri",
		coordinates: [42.3073446, 3.1396036],
		description: [
			"<h2>Cementiri Municipal de Palau-saverdera</h2>",
			"<small>Divisió administrativa: Palau-saverdera; Palau-saverdera; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Palau-sator",
		type: "cementiri",
		coordinates: [41.98118, 3.1209144],
		description: [
			"<h2>Cementiri Municipal de Palau-sator</h2>",
			"<small>Divisió administrativa: Palau-sator; Palau-sator; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Palol de Revardit",
		type: "cementiri",
		coordinates: [42.0674176, 2.8107754],
		description: [
			"<h2>Cementiri Municipal de Palol de Revardit</h2>",
			"<small>Divisió administrativa: Palol de Revardit; Palol de Revardit; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Martí de la Mota",
		type: "cementiri",
		coordinates: [42.0517897, 2.7895527],
		description: [
			"<h2>Cementiri Parroquial de Sant Martí de la Mota</h2>",
			"<small>Divisió administrativa: Sant Martí de la Mota; Palol de Revardit; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Pardines",
		type: "cementiri",
		coordinates: [42.3128687, 2.2207871],
		description: [
			"<h2>Cementiri Municipal de Pardines</h2>",
			"<small>Divisió administrativa: Pardines; Pardines; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Parlavà",
		type: "cementiri",
		coordinates: [42.0253149, 3.0408263],
		description: [
			"<h2>Cementiri Municipal de Parlavà</h2>",
			"<small>Divisió administrativa: Parlavà; Parlavà; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Pau",
		type: "cementiri",
		coordinates: [42.3101295, 3.1130037],
		description: [
			"<h2>Cementiri Municipal de Pau</h2>",
			"<small>Divisió administrativa: Pau; Pau; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Pedret i Marzà",
		type: "cementiri",
		coordinates: [42.3063103, 3.0827301],
		description: [
			"<h2>Cementiri Municipal de Pedret i Marzà</h2>",
			"<small>Divisió administrativa: Pedret; Pedret i Marzà; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de la Pera",
		type: "cementiri",
		coordinates: [42.0163721, 2.9771879],
		description: [
			"<h2>Cementiri Municipal de la Pera</h2>",
			"<small>Divisió administrativa: La Pera; La Pera; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilanova de la Muga",
		type: "cementiri",
		coordinates: [42.2849732, 3.0524911],
		description: [
			"<h2>Cementiri Municipal de Vilanova de la Muga</h2>",
			"<small>Divisió administrativa: Vilanova de la Muga; Peralada; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Peralada",
		type: "cementiri",
		coordinates: [42.312807, 3.0134997],
		description: [
			"<h2>Cementiri Municipal de Peralada</h2>",
			"<small>Divisió administrativa: Peralada; Peralada; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de les Planes d'Hostoles",
		type: "cementiri",
		coordinates: [42.0620945, 2.5347085],
		description: [
			"<h2>Cementiri Municipal de les Planes d'Hostoles</h2>",
			"<small>Divisió administrativa: Les Planes d'Hostoles; Les Planes d'Hostoles; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Santa Maria de les Encies",
		type: "cementiri",
		coordinates: [42.0661114, 2.5761185],
		description: [
			"<h2>Cementiri Parroquial de Santa Maria de les Encies</h2>",
			"<small>Divisió administrativa: Les Encies; Les Planes d'Hostoles; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Cogolls",
		type: "cementiri",
		coordinates: [42.0852816, 2.5419832],
		description: [
			"<h2>Cementiri Parroquial de Cogolls</h2>",
			"<small>Divisió administrativa: Cogolls; Les Planes d'Hostoles; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Planoles",
		type: "cementiri",
		coordinates: [42.3157263, 2.1083824],
		description: [
			"<h2>Cementiri Municipal de Planoles</h2>",
			"<small>Divisió administrativa: Planoles; Planoles; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Planès",
		type: "cementiri",
		coordinates: [42.3197103, 2.0980809],
		description: [
			"<h2>Cementiri Municipal de Planès</h2>",
			"<small>Divisió administrativa: Planès; Planoles; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Pont de Molins",
		type: "cementiri",
		coordinates: [42.3156411, 2.9216393],
		description: [
			"<h2>Cementiri Municipal de Pont de Molins</h2>",
			"<small>Divisió administrativa: Pont de Molins; Pont de Molins; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Martí de Tours",
		type: "cementiri",
		coordinates: [42.1868314, 2.9171596],
		description: [
			"<h2>Cementiri Parroquial de Sant Martí de Tours</h2>",
			"<small>Divisió administrativa: Pontós; Pontós; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Romanyà d'Empordà",
		type: "cementiri",
		coordinates: [42.1766385, 2.8946881],
		description: [
			"<h2>Cementiri Parroquial de Romanyà d'Empordà</h2>",
			"<small>Divisió administrativa: Romanyà d'Empordà; Pontós; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial d'Usall",
		type: "cementiri",
		coordinates: [42.1488808, 2.7573357],
		description: [
			"<h2>Cementiri Parroquial d'Usall</h2>",
			"<small>Divisió administrativa: Usall; Porqueres; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Miànigues",
		type: "cementiri",
		coordinates: [42.1030189, 2.756405],
		description: [
			"<h2>Cementiri Municipal de Miànigues</h2>",
			"<small>Divisió administrativa: Miànigues; Porqueres; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Pujarnol",
		type: "cementiri",
		coordinates: [42.1019497, 2.7081567],
		description: [
			"<h2>Cementiri Parroquial de Pujarnol</h2>",
			"<small>Divisió administrativa: Pujarnol; Porqueres; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Miànigues",
		type: "cementiri",
		coordinates: [42.107095, 2.7531269],
		description: [
			"<h2>Cementiri Parroquial de Miànigues</h2>",
			"<small>Divisió administrativa: Miànigues; Porqueres; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Porqueres",
		type: "cementiri",
		coordinates: [42.1219718, 2.7486919],
		description: [
			"<h2>Cementiri Parroquial de Porqueres</h2>",
			"<small>Divisió administrativa: Porqueres; Porqueres; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Portbou",
		type: "cementiri",
		coordinates: [42.4264466, 3.1635138],
		description: [
			"<h2>Cementiri Municipal de Portbou</h2>",
			"<small>Divisió administrativa: Portbou; Portbou; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de les Preses",
		type: "cementiri",
		coordinates: [42.139997, 2.4621704],
		description: [
			"<h2>Cementiri Municipal de les Preses</h2>",
			"<small>Divisió administrativa: Les Preses; Les Preses; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal del Port de la Selva",
		type: "cementiri",
		coordinates: [42.3284625, 3.2064187],
		description: [
			"<h2>Cementiri Municipal del Port de la Selva</h2>",
			"<small>Divisió administrativa: El Port de la Selva; El Port de la Selva; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de la Vall de la Santa Creu",
		type: "cementiri",
		coordinates: [42.3366985, 3.1655868],
		description: [
			"<h2>Cementiri Parroquial de la Vall de la Santa Creu</h2>",
			"<small>Divisió administrativa: La Vall de la Santa Creu; El Port de la Selva; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilallobent",
		type: "cementiri",
		coordinates: [42.4097916, 1.9525166],
		description: [
			"<h2>Cementiri Municipal de Vilallobent</h2>",
			"<small>Divisió administrativa: Vilallobent; Puigcerdà; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Puigcerdà",
		type: "cementiri",
		coordinates: [42.4348227, 1.9306862],
		description: [
			"<h2>Cementiri Municipal de Puigcerdà</h2>",
			"<small>Divisió administrativa: Puigcerdà; Puigcerdà; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Age",
		type: "cementiri",
		coordinates: [42.4179563, 1.9492613],
		description: [
			"<h2>Cementiri Municipal d'Age</h2>",
			"<small>Divisió administrativa: Age; Puigcerdà; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Palol d'Onyar",
		type: "cementiri",
		coordinates: [41.9564151, 2.8508037],
		description: [
			"<h2>Cementiri Parroquial de Palol d'Onyar</h2>",
			"<small>Divisió administrativa: Palol d'Onyar; Quart; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Castellar de la Selva",
		type: "cementiri",
		coordinates: [41.9490779, 2.8694969],
		description: [
			"<h2>Cementiri Parroquial de Castellar de la Selva</h2>",
			"<small>Divisió administrativa: Castellar de la Selva; Quart; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Quart",
		type: "cementiri",
		coordinates: [41.9407541, 2.8458474],
		description: [
			"<h2>Cementiri Municipal de Quart</h2>",
			"<small>Divisió administrativa: Quart; Quart; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Rabós",
		type: "cementiri",
		coordinates: [42.3762095, 3.0246871],
		description: [
			"<h2>Cementiri Municipal de Rabós</h2>",
			"<small>Divisió administrativa: Rabós; Rabós; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Regencós",
		type: "cementiri",
		coordinates: [41.9539908, 3.1655468],
		description: [
			"<h2>Cementiri Municipal de Regencós</h2>",
			"<small>Divisió administrativa: Regencós; Regencós; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Bruguera",
		type: "cementiri",
		coordinates: [42.2769108, 2.1863689],
		description: [
			"<h2>Cementiri Municipal de Bruguera</h2>",
			"<small>Divisió administrativa: Bruguera; Ribes de Freser; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Ribes de Freser",
		type: "cementiri",
		coordinates: [42.3119137, 2.1718629],
		description: [
			"<h2>Cementiri Municipal de Ribes de Freser</h2>",
			"<small>Divisió administrativa: Ribes de Freser; Ribes de Freser; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Riells",
		type: "cementiri",
		coordinates: [41.7766716, 2.5126982],
		description: [
			"<h2>Cementiri Parroquial de Riells</h2>",
			"<small>Divisió administrativa: Riells; Riells i Viabrea; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Riells i Viabrea",
		type: "cementiri",
		coordinates: [41.7469263, 2.5400285],
		description: [
			"<h2>Cementiri Municipal de Riells i Viabrea</h2>",
			"<small>Divisió administrativa: Viabrea; Riells i Viabrea; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Ripoll",
		type: "cementiri",
		coordinates: [42.2046733, 2.192048],
		description: [
			"<h2>Cementiri Municipal de Ripoll</h2>",
			"<small>Divisió administrativa: Ripoll; Ripoll; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Riudarenes",
		type: "cementiri",
		coordinates: [41.8282289, 2.7146466],
		description: [
			"<h2>Cementiri Municipal de Riudarenes</h2>",
			"<small>Divisió administrativa: Riudarenes; Riudarenes; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de l'Esparra",
		type: "cementiri",
		coordinates: [41.8257225, 2.6629874],
		description: [
			"<h2>Cementiri Municipal de l'Esparra</h2>",
			"<small>Divisió administrativa: L'Esparra; Riudarenes; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Riudaura",
		type: "cementiri",
		coordinates: [42.187419, 2.4081574],
		description: [
			"<h2>Cementiri Parroquial de Riudaura</h2>",
			"<small>Divisió administrativa: Riudaura; Riudaura; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Riudellots de la Selva",
		type: "cementiri",
		coordinates: [41.9005153, 2.8022916],
		description: [
			"<h2>Cementiri Municipal de Riudellots de la Selva</h2>",
			"<small>Divisió administrativa: Riudellots de la Selva; Riudellots de la Selva; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Riumors",
		type: "cementiri",
		coordinates: [42.2243937, 3.0345307],
		description: [
			"<h2>Cementiri Municipal de Riumors</h2>",
			"<small>Divisió administrativa: Riumors; Riumors; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Roses",
		type: "cementiri",
		coordinates: [42.2682584, 3.1818224],
		description: [
			"<h2>Cementiri Municipal de Roses</h2>",
			"<small>Divisió administrativa: Roses; Roses; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Rupià",
		type: "cementiri",
		coordinates: [42.0231884, 3.0113436],
		description: [
			"<h2>Cementiri Municipal de Rupià</h2>",
			"<small>Divisió administrativa: Rupià; Rupià; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sadernes",
		type: "cementiri",
		coordinates: [42.2700424, 2.5958574],
		description: [
			"<h2>Cementiri Municipal de Sadernes</h2>",
			"<small>Divisió administrativa: Sadernes; Sales de Llierca; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sales de Llierca",
		type: "cementiri",
		coordinates: [42.2356434, 2.6496437],
		description: [
			"<h2>Cementiri Municipal de Sales de Llierca</h2>",
			"<small>Divisió administrativa: Sales de Llierca; Sales de Llierca; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Salt",
		type: "cementiri",
		coordinates: [41.9698493, 2.7811931],
		description: [
			"<h2>Cementiri Municipal de Salt</h2>",
			"<small>Divisió administrativa: Salt; Salt; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Andreu Salou",
		type: "cementiri",
		coordinates: [41.8708655, 2.8263474],
		description: [
			"<h2>Cementiri Municipal de Sant Andreu Salou</h2>",
			"<small>Divisió administrativa: Sant Andreu Salou; Sant Andreu Salou; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Climent Sescebes",
		type: "cementiri",
		coordinates: [42.3674663, 2.986367],
		description: [
			"<h2>Cementiri Municipal de Sant Climent Sescebes</h2>",
			"<small>Divisió administrativa: Sant Climent Sescebes; Sant Climent Sescebes; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Feliu de Buixalleu",
		type: "cementiri",
		coordinates: [41.794226, 2.5884154],
		description: [
			"<h2>Cementiri Municipal de Sant Feliu de Buixalleu</h2>",
			"<small>Divisió administrativa: Sant Feliu de Buixalleu; Sant Feliu de Buixalleu; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Grions",
		type: "cementiri",
		coordinates: [41.7611551, 2.6087044],
		description: [
			"<h2>Cementiri Municipal de Grions</h2>",
			"<small>Divisió administrativa: Grions; Sant Feliu de Buixalleu; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Gaserans",
		type: "cementiri",
		coordinates: [41.7495665, 2.5906897],
		description: [
			"<h2>Cementiri Municipal de Gaserans</h2>",
			"<small>Divisió administrativa: Gaserans; Sant Feliu de Buixalleu; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Feliu de Guíxols",
		type: "cementiri",
		coordinates: [41.7798567, 3.0193458],
		description: [
			"<h2>Cementiri Municipal de Sant Feliu de Guíxols</h2>",
			"<small>Divisió administrativa: Sant Feliu de Guíxols; Sant Feliu de Guíxols; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Iscle de Colltort",
		type: "cementiri",
		coordinates: [42.1191356, 2.5253834],
		description: [
			"<h2>Cementiri Municipal de Sant Iscle de Colltort</h2>",
			"<small>Divisió administrativa: Sant Iscle de Colltort; Sant Feliu de Pallerols; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Miquel de Pineda",
		type: "cementiri",
		coordinates: [42.1021016, 2.4940205],
		description: [
			"<h2>Cementiri Parroquial de Sant Miquel de Pineda</h2>",
			"<small>Divisió administrativa: Sant Miquel de Pineda; Sant Feliu de Pallerols; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Feliu de Pallerols",
		type: "cementiri",
		coordinates: [42.079777, 2.5072057],
		description: [
			"<h2>Cementiri Parroquial de Sant Feliu de Pallerols</h2>",
			"<small>Divisió administrativa: Sant Feliu de Pallerols; Sant Feliu de Pallerols; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Fares",
		type: "cementiri",
		coordinates: [42.1865962, 2.7357488],
		description: [
			"<h2>Cementiri Parroquial de Fares</h2>",
			"<small>Divisió administrativa: Fares; Sant Ferriol; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de la Miana",
		type: "cementiri",
		coordinates: [42.1799732, 2.6313242],
		description: [
			"<h2>Cementiri Parroquial de la Miana</h2>",
			"<small>Divisió administrativa: La Miana; Sant Ferriol; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial del Torn",
		type: "cementiri",
		coordinates: [42.16037, 2.645721],
		description: [
			"<h2>Cementiri Parroquial del Torn</h2>",
			"<small>Divisió administrativa: El Torn; Sant Ferriol; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Cartellà",
		type: "cementiri",
		coordinates: [42.023616, 2.7661901],
		description: [
			"<h2>Cementiri Parroquial de Cartellà</h2>",
			"<small>Divisió administrativa: Cartellà; Sant Gregori; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Medir de Cartellà",
		type: "cementiri",
		coordinates: [42.027145, 2.7732007],
		description: [
			"<h2>Cementiri Parroquial de Sant Medir de Cartellà</h2>",
			"<small>Divisió administrativa: Sant Medir de Cartellà; Sant Gregori; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Taialà",
		type: "cementiri",
		coordinates: [41.9985949, 2.790704],
		description: [
			"<h2>Cementiri Parroquial de Taialà</h2>",
			"<small>Divisió administrativa: Taialà; Sant Gregori; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Ginestar",
		type: "cementiri",
		coordinates: [42.0150106, 2.7172737],
		description: [
			"<h2>Cementiri Parroquial de Ginestar</h2>",
			"<small>Divisió administrativa: Ginestar; Sant Gregori; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Gregori",
		type: "cementiri",
		coordinates: [41.9918725, 2.7367091],
		description: [
			"<h2>Cementiri Municipal de Sant Gregori</h2>",
			"<small>Divisió administrativa: Sant Gregori; Sant Gregori; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Constantins",
		type: "cementiri",
		coordinates: [41.9826603, 2.6897136],
		description: [
			"<h2>Cementiri Municipal de Constantins</h2>",
			"<small>Divisió administrativa: Constatins; Sant Gregori; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Taialà",
		type: "cementiri",
		coordinates: [41.9978898, 2.7938975],
		description: [
			"<h2>Cementiri Municipal de Taialà</h2>",
			"<small>Divisió administrativa: Taialà; Sant Gregori; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Hilari Sacalm",
		type: "cementiri",
		coordinates: [41.8704057, 2.5130527],
		description: [
			"<h2>Cementiri Municipal de Sant Hilari Sacalm</h2>",
			"<small>Divisió administrativa: Sant Hilari Sacalm; Sant Hilari Sacalm; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Jaume de Llierca",
		type: "cementiri",
		coordinates: [42.2161167, 2.6037977],
		description: [
			"<h2>Cementiri Municipal de Sant Jaume de Llierca</h2>",
			"<small>Divisió administrativa: Sant Jaume de Llierca; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Jordi Desvalls",
		type: "cementiri",
		coordinates: [42.0742204, 2.9575672],
		description: [
			"<h2>Cementiri Municipal de Sant Jordi Desvalls</h2>",
			"<small>Divisió administrativa: Sant Jordi Desvalls; Sant Jordi Desvalls; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Joan de les Abadesses",
		type: "cementiri",
		coordinates: [42.2379262, 2.290139],
		description: [
			"<h2>Cementiri Municipal de Sant Joan de les Abadesses</h2>",
			"<small>Divisió administrativa: Sant Joan de les Abadesses; Sant Joan de les Abadesses; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Joan de Mollet",
		type: "cementiri",
		coordinates: [42.0454787, 2.9447783],
		description: [
			"<h2>Cementiri Municipal de Sant Joan de Mollet</h2>",
			"<small>Divisió administrativa: Sant Joan de Mollet; Sant Joan de Mollet; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Julià de Ramis",
		type: "cementiri",
		coordinates: [42.028041, 2.8533973],
		description: [
			"<h2>Cementiri Municipal de Sant Julià de Ramis</h2>",
			"<small>Divisió administrativa: Sant Julià de Ramis; Sant Julià de Ramis; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vallfogona de Ripollès",
		type: "cementiri",
		coordinates: [42.1971452, 2.3066912],
		description: [
			"<h2>Cementiri Municipal de Vallfogona de Ripollès</h2>",
			"<small>Divisió administrativa: Vallfogona de Ripollès; Vallfogona de Ripollès; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Llorenç de la Muga",
		type: "cementiri",
		coordinates: [42.3223347, 2.7904724],
		description: [
			"<h2>Cementiri Municipal de Sant Llorenç de la Muga</h2>",
			"<small>Divisió administrativa: Sant Llorenç de la Muga; Sant Llorenç de la Muga; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Llorà",
		type: "cementiri",
		coordinates: [42.0204096, 2.7069235],
		description: [
			"<h2>Cementiri Parroquial de Llorà</h2>",
			"<small>Divisió administrativa: Llorà; Sant Martí de Llémena; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Martí de Llémena",
		type: "cementiri",
		coordinates: [42.0363748, 2.6472802],
		description: [
			"<h2>Cementiri Parroquial de Sant Martí de Llémena</h2>",
			"<small>Divisió administrativa: Sant Martí de Llémena; Sant Martí de Llémena; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de les Serres",
		type: "cementiri",
		coordinates: [41.9996768, 2.6718492],
		description: [
			"<h2>Cementiri Parroquial de les Serres</h2>",
			"<small>Divisió administrativa: Les Serres; Sant Martí de Llémena; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Granollers de Rocacorba",
		type: "cementiri",
		coordinates: [42.0685538, 2.6517123],
		description: [
			"<h2>Cementiri Parroquial de Granollers de Rocacorba</h2>",
			"<small>Divisió administrativa: Granollers de Rocacorba; Sant Martí de Llémena; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Martí Vell",
		type: "cementiri",
		coordinates: [42.0241368, 2.9314882],
		description: [
			"<h2>Cementiri Municipal de Sant Martí Vell</h2>",
			"<small>Divisió administrativa: Sant Martí Vell; Sant Martí Vell; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Miquel de Campmajor",
		type: "cementiri",
		coordinates: [42.1362815, 2.6795658],
		description: [
			"<h2>Cementiri Parroquial de Sant Miquel de Campmajor</h2>",
			"<small>Divisió administrativa: Sant Miquel de Campmajor; Sant Miquel de Campmajor; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Martí de Campmajor",
		type: "cementiri",
		coordinates: [42.1311661, 2.6882892],
		description: [
			"<h2>Cementiri Parroquial de Sant Martí de Campmajor</h2>",
			"<small>Divisió administrativa: Sant Martí de Campmajor; Sant Miquel de Campmajor; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Miquel de Fluvià",
		type: "cementiri",
		coordinates: [42.1693965, 2.9925942],
		description: [
			"<h2>Cementiri Municipal de Sant Miquel de Fluvià</h2>",
			"<small>Divisió administrativa: Sant Miquel de Fluvià; Sant Miquel de Fluvià; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Mori",
		type: "cementiri",
		coordinates: [42.1551852, 2.9852613],
		description: [
			"<h2>Cementiri Municipal de Sant Mori</h2>",
			"<small>Divisió administrativa: Sant Mori; Sant Mori; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Pau de Segúries",
		type: "cementiri",
		coordinates: [42.2615693, 2.3721502],
		description: [
			"<h2>Cementiri Parroquial de Sant Pau de Segúries</h2>",
			"<small>Divisió administrativa: Sant Pau de Segúries; Sant Pau de Segúries; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Pere Pescador",
		type: "cementiri",
		coordinates: [42.1896136, 3.0712767],
		description: [
			"<h2>Cementiri Municipal de Sant Pere Pescador</h2>",
			"<small>Divisió administrativa: Sant Pere Pescador; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Santa Coloma de Farners",
		type: "cementiri",
		coordinates: [41.8657996, 2.6574347],
		description: [
			"<h2>Cementiri Municipal de Santa Coloma de Farners</h2>",
			"<small>Divisió administrativa: Santa Coloma de Farners; Santa Coloma de Farners; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Santa Cristina d'Aro",
		type: "cementiri",
		coordinates: [41.8224908, 2.9869771],
		description: [
			"<h2>Cementiri Municipal de Santa Cristina d'Aro</h2>",
			"<small>Divisió administrativa: Santa Cristina d'Aro; Santa Cristina d'Aro; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Romanyà de la Selva",
		type: "cementiri",
		coordinates: [41.85762, 2.9887933],
		description: [
			"<h2>Cementiri Municipal de Romanyà de la Selva</h2>",
			"<small>Divisió administrativa: Romanyà de la Selva; Santa Cristina d'Aro; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Santa Llogaia d'Àlguema",
		type: "cementiri",
		coordinates: [42.2351637, 2.9454218],
		description: [
			"<h2>Cementiri Municipal de Santa Llogaia d'Àlguema</h2>",
			"<small>Divisió administrativa: Santa Llogaia d'Àlguema; Santa Llogaia d'Àlguema; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de la Barroca",
		type: "cementiri",
		coordinates: [42.0356153, 2.6271979],
		description: [
			"<h2>Cementiri Parroquial de la Barroca</h2>",
			"<small>Divisió administrativa: La Barroca; Sant Aniol de Finestres; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Aniol de Finestres",
		type: "cementiri",
		coordinates: [42.0903664, 2.5870862],
		description: [
			"<h2>Cementiri Municipal de Sant Aniol de Finestres</h2>",
			"<small>Divisió administrativa: Sant Aniol de Finestres; Sant Aniol de Finestres; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Esteve de Llémena",
		type: "cementiri",
		coordinates: [42.0568839, 2.6284309],
		description: [
			"<h2>Cementiri Municipal de Sant Esteve de Llémena</h2>",
			"<small>Divisió administrativa: Sant Esteve de Llémena; Sant Aniol de Finestres; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal del Sallent",
		type: "cementiri",
		coordinates: [42.1543227, 2.6145184],
		description: [
			"<h2>Cementiri Municipal del Sallent</h2>",
			"<small>Divisió administrativa: El Sallent; Santa Pau; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Miquel Sacot",
		type: "cementiri",
		coordinates: [42.1396824, 2.5314252],
		description: [
			"<h2>Cementiri Municipal de Sant Miquel Sacot</h2>",
			"<small>Divisió administrativa: Sant Miquel Sacot; Santa Pau; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Santa Pau",
		type: "cementiri",
		coordinates: [42.1442689, 2.5721368],
		description: [
			"<h2>Cementiri Municipal de Santa Pau</h2>",
			"<small>Divisió administrativa: Santa Pau; Santa Pau; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Martí",
		type: "cementiri",
		coordinates: [42.1545097, 2.5789085],
		description: [
			"<h2>Cementiri Parroquial de Sant Martí</h2>",
			"<small>Divisió administrativa: Sant Martí; Santa Pau; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Begudà",
		type: "cementiri",
		coordinates: [42.1957026, 2.5460847],
		description: [
			"<h2>Cementiri Municipal de Begudà</h2>",
			"<small>Divisió administrativa: Begudà; Sant Joan les Fonts; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Joan les Fonts",
		type: "cementiri",
		coordinates: [42.2168325, 2.5162606],
		description: [
			"<h2>Cementiri Municipal de Sant Joan les Fonts</h2>",
			"<small>Divisió administrativa: Sant Joan les Fonts; Sant Joan les Fonts; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sarrià de Dalt",
		type: "cementiri",
		coordinates: [42.0161974, 2.8087507],
		description: [
			"<h2>Cementiri Municipal de Sarrià de Dalt</h2>",
			"<small>Divisió administrativa: Sarrià de Dalt; Sarrià de Ter; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sarrià de Ter",
		type: "cementiri",
		coordinates: [42.0159874, 2.8233934],
		description: [
			"<h2>Cementiri Municipal de Sarrià de Ter</h2>",
			"<small>Divisió administrativa: Sarrià de Ter; Sarrià de Ter; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Camallera",
		type: "cementiri",
		coordinates: [42.1209361, 2.9588556],
		description: [
			"<h2>Cementiri Municipal de Camallera</h2>",
			"<small>Divisió administrativa: Camallera; Saus, Camallera i Llampaies; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Saus",
		type: "cementiri",
		coordinates: [42.1325, 2.9787721],
		description: [
			"<h2>Cementiri Parroquial de Saus</h2>",
			"<small>Divisió administrativa: Saus; Saus, Camallera i Llampaies; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de la Selva de Mar",
		type: "cementiri",
		coordinates: [42.3227652, 3.1848265],
		description: [
			"<h2>Cementiri Municipal de la Selva de Mar</h2>",
			"<small>Divisió administrativa: La Selva de Mar; La Selva de Mar; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de la Cellera de Ter",
		type: "cementiri",
		coordinates: [41.9644971, 2.6263935],
		description: [
			"<h2>Cementiri Municipal de la Cellera de Ter</h2>",
			"<small>Divisió administrativa: La Cellera de Ter; La Cellera de Ter; Selva; Comarques gironines; Catalunya</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Cementiri_Municipal_de_la_Cellera_de_Ter_%28entrada%29.jpg/320px-Cementiri_Municipal_de_la_Cellera_de_Ter_%28entrada%29.jpg'/><br/>",
			"Cementiri de la vila de la Cellera de Ter, al terme municipal homònim. Inaugurat el 1890. Va ser cementiri parroquial fins a la seva expropiació per part de l'Ajuntament el 29 de febrer de 1932."
		],
		visited: true
	},
	{
		name: "Cementiri Parroquial de Serinyà",
		type: "cementiri",
		coordinates: [42.1707431, 2.7411303],
		description: [
			"<h2>Cementiri Parroquial de Serinyà</h2>",
			"<small>Divisió administrativa: Serinyà; Serinyà; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Serra de Daró",
		type: "cementiri",
		coordinates: [42.0307198, 3.0704086],
		description: [
			"<h2>Cementiri Municipal de Serra de Daró</h2>",
			"<small>Divisió administrativa: Serra de Daró; Serra de Daró; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Setcases",
		type: "cementiri",
		coordinates: [42.3717832, 2.2997585],
		description: [
			"<h2>Cementiri Parroquial de Setcases</h2>",
			"<small>Divisió administrativa: Setcases; Setcases; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sils",
		type: "cementiri",
		coordinates: [41.8078328, 2.7411365],
		description: [
			"<h2>Cementiri Municipal de Sils</h2>",
			"<small>Divisió administrativa: Sils; Sils; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vallcanera",
		type: "cementiri",
		coordinates: [41.8380382, 2.7389531],
		description: [
			"<h2>Cementiri Municipal de Vallcanera</h2>",
			"<small>Divisió administrativa: Vallcanera; Sils; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Martí Sacalm",
		type: "cementiri",
		coordinates: [42.0146108, 2.5447381],
		description: [
			"<h2>Cementiri Parroquial de Sant Martí Sacalm</h2>",
			"<small>Divisió administrativa: Sant Martí Sacalm; Susqueda; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de la Tallada d'Empordà",
		type: "cementiri",
		coordinates: [42.0840703, 3.0600905],
		description: [
			"<h2>Cementiri Municipal de la Tallada d'Empordà</h2>",
			"<small>Divisió administrativa: La Tallada d'Empordà; La Tallada d'Empordà; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Terrades",
		type: "cementiri",
		coordinates: [42.3095649, 2.8424958],
		description: [
			"<h2>Cementiri Municipal de Terrades</h2>",
			"<small>Divisió administrativa: Terrades; Terrades; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Torrent",
		type: "cementiri",
		coordinates: [41.9519283, 3.1270936],
		description: [
			"<h2>Cementiri Municipal de Torrent</h2>",
			"<small>Divisió administrativa: Torrent; Torrent; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Torroella de Fluvià",
		type: "cementiri",
		coordinates: [42.1783431, 3.046381],
		description: [
			"<h2>Cementiri Municipal de Torroella de Fluvià</h2>",
			"<small>Divisió administrativa: Torroella de Fluvià; Torroella de Fluvià; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de l'Estartit",
		type: "cementiri",
		coordinates: [42.0523133, 3.1924763],
		description: [
			"<h2>Cementiri Parroquial de l'Estartit</h2>",
			"<small>Divisió administrativa: L'Estartit; Torroella de Montgrí; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Torroella de Montgrí",
		type: "cementiri",
		coordinates: [42.0448799, 3.1215217],
		description: [
			"<h2>Cementiri Municipal de Torroella de Montgrí</h2>",
			"<small>Divisió administrativa: Torroella de Montgrí; Torroella de Montgrí; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Tortellà",
		type: "cementiri",
		coordinates: [42.2332071, 2.6355812],
		description: [
			"<h2>Cementiri Municipal de Tortellà</h2>",
			"<small>Divisió administrativa: Tortellà; Tortellà; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Nevà",
		type: "cementiri",
		coordinates: [42.3178371, 2.077964],
		description: [
			"<h2>Cementiri Municipal de Nevà</h2>",
			"<small>Divisió administrativa: Nevà; Toses; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Toses",
		type: "cementiri",
		coordinates: [42.3231112, 2.0187849],
		description: [
			"<h2>Cementiri Municipal de Toses</h2>",
			"<small>Divisió administrativa: Toses; Toses; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Fornells de la Muntanya",
		type: "cementiri",
		coordinates: [42.3236172, 2.04627],
		description: [
			"<h2>Cementiri Municipal de Fornells de la Muntanya</h2>",
			"<small>Divisió administrativa: Fornells de la Muntanya; Toses; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Dòrria",
		type: "cementiri",
		coordinates: [42.3329066, 2.0674123],
		description: [
			"<h2>Cementiri Municipal de Dòrria</h2>",
			"<small>Divisió administrativa: Dòrria; Toses; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Tossa de Mar",
		type: "cementiri",
		coordinates: [41.7207923, 2.9277017],
		description: [
			"<h2>Cementiri Municipal de Tossa de Mar</h2>",
			"<small>Divisió administrativa: Tossa de Mar; Tossa de Mar; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Ultramort",
		type: "cementiri",
		coordinates: [42.030702, 3.0334563],
		description: [
			"<h2>Cementiri Municipal d'Ultramort</h2>",
			"<small>Divisió administrativa: Ultramort; Ultramort; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Ullà",
		type: "cementiri",
		coordinates: [42.0487645, 3.1139595],
		description: [
			"<h2>Cementiri Municipal d'Ullà</h2>",
			"<small>Divisió administrativa: Ullà; Ullà; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Ullastret",
		type: "cementiri",
		coordinates: [41.9938396, 3.0701063],
		description: [
			"<h2>Cementiri Municipal d'Ullastret</h2>",
			"<small>Divisió administrativa: Ullastret; Ullastret; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal d'Urús",
		type: "cementiri",
		coordinates: [42.3412149, 1.8454275],
		description: [
			"<h2>Cementiri Municipal d'Urús</h2>",
			"<small>Divisió administrativa: Urús; Urús; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial d'Urús",
		type: "cementiri",
		coordinates: [42.349783, 1.8539184],
		description: [
			"<h2>Cementiri Parroquial d'Urús</h2>",
			"<small>Divisió administrativa: Urús; Urús; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal dels Hostalets d'en Bas",
		type: "cementiri",
		coordinates: [42.1030476, 2.4454631],
		description: [
			"<h2>Cementiri Municipal dels Hostalets d'en Bas</h2>",
			"<small>Divisió administrativa: Els Hostalets d'en Bas; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal del Mallol",
		type: "cementiri",
		coordinates: [42.1496932, 2.4394666],
		description: [
			"<h2>Cementiri Municipal del Mallol</h2>",
			"<small>Divisió administrativa: El Mallol; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Joanetes",
		type: "cementiri",
		coordinates: [42.1216437, 2.4202991],
		description: [
			"<h2>Cementiri Municipal de Joanetes</h2>",
			"<small>Divisió administrativa: Joanetes; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Privat d'en Bas",
		type: "cementiri",
		coordinates: [42.1492858, 2.4079248],
		description: [
			"<h2>Cementiri Municipal de Sant Privat d'en Bas</h2>",
			"<small>Divisió administrativa: Sant Privat d'en Bas; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Esteve d'en Bas",
		type: "cementiri",
		coordinates: [42.1203316, 2.4529976],
		description: [
			"<h2>Cementiri Municipal de Sant Esteve d'en Bas</h2>",
			"<small>Divisió administrativa: Sant Esteve d'en Bas; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Puigpardines",
		type: "cementiri",
		coordinates: [42.1396935, 2.428656],
		description: [
			"<h2>Cementiri Municipal de Puigpardines</h2>",
			"<small>Divisió administrativa: Puigpardines; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Falgars d'en Bas",
		type: "cementiri",
		coordinates: [42.0861388, 2.4377726],
		description: [
			"<h2>Cementiri Parroquial de Falgars d'en Bas</h2>",
			"<small>Divisió administrativa: Falgars d'en Bas; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de La Pinya",
		type: "cementiri",
		coordinates: [42.1743172, 2.4428692],
		description: [
			"<h2>Cementiri Municipal de La Pinya</h2>",
			"<small>Divisió administrativa: La Pinya; La Vall d'en Bas; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Martí del Capsec",
		type: "cementiri",
		coordinates: [42.2331183, 2.4717714],
		description: [
			"<h2>Cementiri Parroquial de Sant Martí del Capsec</h2>",
			"<small>Divisió administrativa: Sant Martí del Capsec; La Vall de Bianya; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Salvador de Bianya",
		type: "cementiri",
		coordinates: [42.2471431, 2.4012533],
		description: [
			"<h2>Cementiri Parroquial de Sant Salvador de Bianya</h2>",
			"<small>Divisió administrativa: Sant Salvador de Bianya; La Vall de Bianya; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Santa Margarida de Bianya",
		type: "cementiri",
		coordinates: [42.2073621, 2.4446682],
		description: [
			"<h2>Cementiri Parroquial de Santa Margarida de Bianya</h2>",
			"<small>Divisió administrativa: Santa Margarida de Bianya; La Vall de Bianya; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de la Vall del Bac",
		type: "cementiri",
		coordinates: [42.2651593, 2.4528184],
		description: [
			"<h2>Cementiri Parroquial de la Vall del Bac</h2>",
			"<small>Divisió administrativa: La Vall del Bac; La Vall de Bianya; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Pere Despuig",
		type: "cementiri",
		coordinates: [42.2132518, 2.4260938],
		description: [
			"<h2>Cementiri Parroquial de Sant Pere Despuig</h2>",
			"<small>Divisió administrativa: Sant Pere Despuig; La Vall de Bianya; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Andreu de Socarrats",
		type: "cementiri",
		coordinates: [42.2082635, 2.4743969],
		description: [
			"<h2>Cementiri Parroquial de Sant Andreu de Socarrats</h2>",
			"<small>Divisió administrativa: Sant Andreu de Socarrats; La Vall de Bianya; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Martí de Solamal",
		type: "cementiri",
		coordinates: [42.2206959, 2.4260761],
		description: [
			"<h2>Cementiri Parroquial de Sant Martí de Solamal</h2>",
			"<small>Divisió administrativa: Sant Martí de Solamal; La Vall de Bianya; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Martí del Clot",
		type: "cementiri",
		coordinates: [42.2398606, 2.4345128],
		description: [
			"<h2>Cementiri Parroquial de Sant Martí del Clot</h2>",
			"<small>Divisió administrativa: Sant Martí del Clot; La Vall de Bianya; Garrotxa; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vall-llobrega",
		type: "cementiri",
		coordinates: [41.8838326, 3.120957],
		description: [
			"<h2>Cementiri Municipal de Vall-llobrega</h2>",
			"<small>Divisió administrativa: Vall-llobrega; Vall-llobrega; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Ventalló",
		type: "cementiri",
		coordinates: [42.1578521, 3.0250858],
		description: [
			"<h2>Cementiri Municipal de Ventalló</h2>",
			"<small>Divisió administrativa: Ventalló; Ventalló; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de l'Om",
		type: "cementiri",
		coordinates: [42.1500698, 3.0639859],
		description: [
			"<h2>Cementiri Municipal de l'Om</h2>",
			"<small>Divisió administrativa: Pelacalç i Montiró; Ventalló; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Verges",
		type: "cementiri",
		coordinates: [42.0655935, 3.0403392],
		description: [
			"<h2>Cementiri Municipal de Verges</h2>",
			"<small>Divisió administrativa: Verges; Verges; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Santa Llúcia de Ciuret",
		type: "cementiri",
		coordinates: [42.1445411, 2.3305805],
		description: [
			"<h2>Cementiri Parroquial de Santa Llúcia de Ciuret</h2>",
			"<small>Divisió administrativa: Ciuret; Vidrà; Osona; Comarques centrals; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Sant Hilari de Vidrà",
		type: "cementiri",
		coordinates: [42.1225093, 2.3092145],
		description: [
			"<h2>Cementiri Parroquial de Sant Hilari de Vidrà</h2>",
			"<small>Divisió administrativa: Vidrà; Vidrà; Osona; Comarques centrals; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vidreres",
		type: "cementiri",
		coordinates: [41.7926162, 2.77744],
		description: [
			"<h2>Cementiri Municipal de Vidreres</h2>",
			"<small>Divisió administrativa: Vidreres; Vidreres; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilabertran",
		type: "cementiri",
		coordinates: [42.286917, 2.9851584],
		description: [
			"<h2>Cementiri Municipal de Vilabertran</h2>",
			"<small>Divisió administrativa: Vilabertran; Vilabertran; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilablareix",
		type: "cementiri",
		coordinates: [41.9544823, 2.7709029],
		description: [
			"<h2>Cementiri Municipal de Vilablareix</h2>",
			"<small>Divisió administrativa: Vilablareix; Vilablareix; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Fellines",
		type: "cementiri",
		coordinates: [42.0947931, 2.9036629],
		description: [
			"<h2>Cementiri Parroquial de Fellines</h2>",
			"<small>Divisió administrativa: Fellines; Viladasens; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Viladasens",
		type: "cementiri",
		coordinates: [42.0923944, 2.9276028],
		description: [
			"<h2>Cementiri Municipal de Viladasens</h2>",
			"<small>Divisió administrativa: Viladasens; Viladasens; Gironès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Viladamat",
		type: "cementiri",
		coordinates: [42.1380947, 3.0740878],
		description: [
			"<h2>Cementiri Municipal de Viladamat</h2>",
			"<small>Divisió administrativa: Viladamat; Viladamat; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Esteve de Guialbes",
		type: "cementiri",
		coordinates: [42.1163695, 2.8713583],
		description: [
			"<h2>Cementiri Municipal de Sant Esteve de Guialbes</h2>",
			"<small>Divisió administrativa: Sant Esteve de Guialbes; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilademuls",
		type: "cementiri",
		coordinates: [42.1318129, 2.8841998],
		description: [
			"<h2>Cementiri Municipal de Vilademuls</h2>",
			"<small>Divisió administrativa: Vilademuls; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Vilafreser",
		type: "cementiri",
		coordinates: [42.0845547, 2.8825886],
		description: [
			"<h2>Cementiri Parroquial de Vilafreser</h2>",
			"<small>Divisió administrativa: Vilafreser; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiris Parroquial de Galliners",
		type: "cementiri",
		coordinates: [42.1498777, 2.8725585],
		description: [
			"<h2>Cementiris Parroquial de Galliners</h2>",
			"<small>Divisió administrativa: Galliners; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial d'Orfes",
		type: "cementiri",
		coordinates: [42.1700817, 2.8674968],
		description: [
			"<h2>Cementiri Parroquial d'Orfes</h2>",
			"<small>Divisió administrativa: Orfes; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Vilamarí",
		type: "cementiri",
		coordinates: [42.1123, 2.8520264],
		description: [
			"<h2>Cementiri Parroquial de Vilamarí</h2>",
			"<small>Divisió administrativa: Vilamarí; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial d'Olives",
		type: "cementiri",
		coordinates: [42.0984867, 2.8715045],
		description: [
			"<h2>Cementiri Parroquial d'Olives</h2>",
			"<small>Divisió administrativa: Olives; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Vilademí",
		type: "cementiri",
		coordinates: [42.1523647, 2.8128668],
		description: [
			"<h2>Cementiri Parroquial de Vilademí</h2>",
			"<small>Divisió administrativa: Vilademí; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Parets d'Empordà",
		type: "cementiri",
		coordinates: [42.1666696, 2.8890851],
		description: [
			"<h2>Cementiri Parroquial de Parets d'Empordà</h2>",
			"<small>Divisió administrativa: Parets d'Empordà; Vilademuls; Pla de l'Estany; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Viladrau",
		type: "cementiri",
		coordinates: [41.8509331, 2.3941198],
		description: [
			"<h2>Cementiri Municipal de Viladrau</h2>",
			"<small>Divisió administrativa: Viladrau; Viladrau; Osona; Comarques centrals; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilafant",
		type: "cementiri",
		coordinates: [42.253458, 2.9391695],
		description: [
			"<h2>Cementiri Municipal de Vilafant</h2>",
			"<small>Divisió administrativa: Vilafant; Vilafant; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilaür",
		type: "cementiri",
		coordinates: [42.1473112, 2.9572017],
		description: [
			"<h2>Cementiri Municipal de Vilaür</h2>",
			"<small>Divisió administrativa: Vilaür; Vilaür; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Vilallonga de Ter",
		type: "cementiri",
		coordinates: [42.3341424, 2.3078278],
		description: [
			"<h2>Cementiri Parroquial de Vilallonga de Ter</h2>",
			"<small>Divisió administrativa: Vilallonga de Ter; Vilallonga de Ter; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Tregurà",
		type: "cementiri",
		coordinates: [42.3442793, 2.2872426],
		description: [
			"<h2>Cementiri Parroquial de Tregurà</h2>",
			"<small>Divisió administrativa: Tregurà; Vilallonga de Ter; Ripollès; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilamacolum",
		type: "cementiri",
		coordinates: [42.1940002, 3.0509245],
		description: [
			"<h2>Cementiri Municipal de Vilamacolum</h2>",
			"<small>Divisió administrativa: Vilamacolum; Vilamacolum; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilamalla",
		type: "cementiri",
		coordinates: [42.2186545, 2.9627608],
		description: [
			"<h2>Cementiri Municipal de Vilamalla</h2>",
			"<small>Divisió administrativa: Vilamalla; Vilamalla; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilamaniscle",
		type: "cementiri",
		coordinates: [42.3738985, 3.0687841],
		description: [
			"<h2>Cementiri Municipal de Vilamaniscle</h2>",
			"<small>Divisió administrativa: Vilamaniscle; Vilamaniscle; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilanant",
		type: "cementiri",
		coordinates: [42.254921, 2.8920706],
		description: [
			"<h2>Cementiri Municipal de Vilanant</h2>",
			"<small>Divisió administrativa: Vilanant; Vilanant; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Taravaus",
		type: "cementiri",
		coordinates: [42.2446717, 2.8896784],
		description: [
			"<h2>Cementiri Parroquial de Taravaus</h2>",
			"<small>Divisió administrativa: Taravaus; Vilanant; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vila-sacra",
		type: "cementiri",
		coordinates: [42.2670961, 3.0139109],
		description: [
			"<h2>Cementiri Municipal de Vila-sacra</h2>",
			"<small>Divisió administrativa: Vila-sacra; Vila-sacra; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Valldevià",
		type: "cementiri",
		coordinates: [42.1218908, 3.0020052],
		description: [
			"<h2>Cementiri Parroquial de Valldevià</h2>",
			"<small>Divisió administrativa: Valldevià; Vilopriu; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilopriu",
		type: "cementiri",
		coordinates: [42.1000895, 2.989164],
		description: [
			"<h2>Cementiri Municipal de Vilopriu</h2>",
			"<small>Divisió administrativa: Vilopriu; Vilopriu; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Gaüses",
		type: "cementiri",
		coordinates: [42.1061016, 2.9688888],
		description: [
			"<h2>Cementiri Municipal de Gaüses</h2>",
			"<small>Divisió administrativa: Gaüses; Vilopriu; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vilobí d'Onyar",
		type: "cementiri",
		coordinates: [41.883098, 2.7444954],
		description: [
			"<h2>Cementiri Municipal de Vilobí d'Onyar</h2>",
			"<small>Divisió administrativa: Vilobí d'Onyar; Vilobí d'Onyar; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Dalmai",
		type: "cementiri",
		coordinates: [41.9148156, 2.735697],
		description: [
			"<h2>Cementiri Municipal de Sant Dalmai</h2>",
			"<small>Divisió administrativa: Sant Dalmai; Vilobí d'Onyar; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Salitja",
		type: "cementiri",
		coordinates: [41.9098162, 2.7534843],
		description: [
			"<h2>Cementiri Municipal de Salitja</h2>",
			"<small>Divisió administrativa: Salitja; Vilobí d'Onyar; Selva; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Biure",
		type: "cementiri",
		coordinates: [42.336682, 2.9050767],
		description: [
			"<h2>Cementiri Municipal de Biure</h2>",
			"<small>Divisió administrativa: Biure; Biure; Alt Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Cruïlles",
		type: "cementiri",
		coordinates: [41.9605905, 3.0061214],
		description: [
			"<h2>Cementiri Municipal de Cruïlles</h2>",
			"<small>Divisió administrativa: Cruïlles; Cruïlles, Monells i Sant Sadurní de l'Heura; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Santa Pellaia",
		type: "cementiri",
		coordinates: [41.9202148, 2.9172341],
		description: [
			"<h2>Cementiri Parroquial de Santa Pellaia</h2>",
			"<small>Divisió administrativa: Santa Pellaia; Cruïlles, Monells i Sant Sadurní de l'Heura; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Monells",
		type: "cementiri",
		coordinates: [41.97545, 2.9968615],
		description: [
			"<h2>Cementiri Municipal de Monells</h2>",
			"<small>Divisió administrativa: Monells; Cruïlles, Monells i Sant Sadurní de l'Heura; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Sadurní de l'Heura",
		type: "cementiri",
		coordinates: [41.9606355, 2.9892123],
		description: [
			"<h2>Cementiri Municipal de Sant Sadurní de l'Heura</h2>",
			"<small>Divisió administrativa: Sant Sadurní de l'Heura; Cruïlles, Monells i Sant Sadurní de l'Heura; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Parroquial de Canapost",
		type: "cementiri",
		coordinates: [41.9753759, 3.0724342],
		description: [
			"<h2>Cementiri Parroquial de Canapost</h2>",
			"<small>Divisió administrativa: Canapost; Vulpellac, Fonteta i Peratallada; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Vulpellac",
		type: "cementiri",
		coordinates: [41.9574445, 3.0531544],
		description: [
			"<h2>Cementiri Municipal de Vulpellac</h2>",
			"<small>Divisió administrativa: Vulpellac; Vulpellac, Fonteta i Peratallada; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Fonteta",
		type: "cementiri",
		coordinates: [41.9469359, 3.0545198],
		description: [
			"<h2>Cementiri Municipal de Fonteta</h2>",
			"<small>Divisió administrativa: Fonteta; Vulpellac, Fonteta i Peratallada; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Peratallada",
		type: "cementiri",
		coordinates: [41.9794893, 3.0905321],
		description: [
			"<h2>Cementiri Municipal de Peratallada</h2>",
			"<small>Divisió administrativa: Peratallada; Vulpellac, Fonteta i Peratallada; Baix Empordà; Comarques gironines; Catalunya</small>"
		]
	},
	{
		name: "Cementiri Municipal de Sant Julià del Llor",
		type: "cementiri",
		coordinates: [41.9691936, 2.6474636],
		description: [
			"<h2>Cementiri Municipal de Sant Julià del Llor</h2>",
			"<small>Divisió administrativa: Sant Julià del Llor; Sant Julià del Llor i Bonmatí; Selva; Comarques gironines; Catalunya</small><br/><br/>",
			"<img style='width: 300px; display: block; margin: auto;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cementiri_Municipal_de_Sant_Juli%C3%A0_del_Llor_%28entrada%29.jpg/640px-Cementiri_Municipal_de_Sant_Juli%C3%A0_del_Llor_%28entrada%29.jpg'/><br/>",
			"Cementiri municipal de la vila de Sant Julià del Llor, al terme municipal de Sant Julià del Llor i Bonmatí. Antic cementiri parroquial, reconstruït el 1875 i municipalitzat el 26 de gener de 1933."
		],
		visited: true
	},
	{
		name: "Cementiri Municipal de Bonmatí",
		type: "cementiri",
		coordinates: [41.9669444, 2.6626577],
		description: [
			"<h2>Cementiri Municipal de Bonmatí</h2>",
			"<small>Divisió administrativa: Bonmatí; Sant Julià del Llor i Bonmatí; Selva; Comarques gironines; Catalunya</small>"
		]
	}
];

loadLocations(locations);