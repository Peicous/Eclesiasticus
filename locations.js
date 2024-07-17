const locations = [
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
		name: "Cementiri Municipal d'Alp",
		type: "cementiri",
		coordinates: [42.3774265, 1.8790002],
		description: [
			"<h2>Cementiri Municipal d'Alp</h2>",
			"<small>Divisió administrativa: Alp; Alp; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
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
		name: "Cementiri Municipal de Ger",
		type: "cementiri",
		coordinates: [42.409698, 1.8528339],
		description: [
			"<h2>Cementiri Municipal de Ger</h2>",
			"<small>Divisió administrativa: Ger; Ger; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
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
		name: "Cementiri Municipal de Llívia",
		type: "cementiri",
		coordinates: [42.4707869, 1.9757921],
		description: [
			"<h2>Cementiri Municipal de Llívia</h2>",
			"<small>Divisió administrativa: Llívia; Llívia; Baixa Cerdanya; Alt Pirineu i Aran; Catalunya</small>"
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
	}
];

loadLocations(locations);